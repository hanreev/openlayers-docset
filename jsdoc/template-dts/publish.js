/* global env: true */

const path = require('path');
const catharsis = require('catharsis');
const fs = require('jsdoc/lib/jsdoc/fs');
const helper = require('jsdoc/lib/jsdoc/util/templateHelper');
const rimraf = require('rimraf');
// @ts-ignore
const outDir = path.resolve(env.opts.destination);

let data;
const MODULE_IMPORTS = {};
const MODULE_EXPORTS = {};
const MODULE_CHILDREN = {};

const TYPE_PATCHES = {
  'module:ol/format/GML~GML': 'module:ol/format/GML3~GML3',
  'module:ol/events/condition~always': 'typeof:module:ol/functions.TRUE',
  'module:ol/events/condition~never': 'typeof:module:ol/functions.FALSE',
  'module:ol/style/IconImageCache~shared': 'module:ol/style/IconImageCache~IconImageCache',
  'module:ol/css~getFontFamilies': 'function(string): (Object<string, *>|null)',
};

const MEMBER_PATCHES = {};

function find(spec) {
  return helper.find(data, spec);
}

function registerImport(_module, val) {
  if (!val.startsWith('module:'))
    return val;

  const value = val.replace(/^module:/, '');

  const _imports = MODULE_IMPORTS[_module.name] || {};
  _imports.names = _imports.names || [];
  _imports.imported = _imports.imported || {};
  _imports.expressions = _imports.expressions || [];

  let isDefault;
  let splits;
  let moduleName;
  let importName;
  let temp;

  if (value.indexOf('.') != -1) {
    isDefault = false;
    splits = value.split('.');
  } else {
    isDefault = true;
    splits = value.split('~');
  }

  if (splits.length == 2) {
    moduleName = splits[0];
    importName = splits[1];
  } else {
    moduleName = value;
    importName = value.split('/').pop();
  }

  if (!moduleName.startsWith('ol'))
    isDefault = false;

  if (_module.name == value || _module.name == moduleName || importName == 'EventTarget')
    return importName;

  if (_imports.imported[value])
    return _imports.imported[value];

  let doclet = find({ longname: val })[0];

  if (!doclet) {
    doclet = find({ name: importName, memberof: _module.longname })[0];
    if (doclet)
      return importName;
  }

  if (!doclet && moduleName.startsWith('ol')) {
    splits = val.indexOf('~') != -1 ? val.split('~') : val.split('.');
    if (splits.length == 2) {
      temp = splits[0].split('/');
      temp[temp.length - 1] = splits[1];
      doclet = find({ longname: temp.join('/') })[0];
      if (doclet)
        return registerImport(_module, doclet.longname);
    }
  }

  if (!doclet)
    console.log('WARNING: Invalid import or external --', val, 'in', _module.name);

  let counter = 1;
  let availableImportName = importName;
  while (_imports.names.indexOf(availableImportName) != -1) {
    availableImportName = `${importName}_${counter}`;
    counter++;
  }

  _imports.imported[value] = availableImportName;
  _imports.names.push(availableImportName);
  let expression = availableImportName;
  const _exports = MODULE_EXPORTS[moduleName];
  if ((_exports && _exports.default != importName && _exports.default != `module:${moduleName}`) || !isDefault)
    expression = importName == availableImportName ? `{ ${importName} }` : `{ ${importName} as ${availableImportName} }`;
  _imports.expressions.push(`import ${expression} from '${moduleName}';`);
  MODULE_IMPORTS[_module.name] = _imports;

  return availableImportName;
}

function stringifyType(parsedType, _module) {
  let typeStr = parsedType.expression ? parsedType.expression.name : parsedType.name;

  if (typeStr && typeStr.startsWith('module:')) {
    if (_module)
      typeStr = registerImport(_module, typeStr);
    typeStr = typeStr.split('~')[1] || typeStr.split('/').pop();
  }

  if (parsedType.type == 'TypeApplication') {
    const applications = parsedType.applications.map(app => stringifyType(app, _module));
    switch (typeStr) {
      case 'Array':
        typeStr = applications[0] + '[]';
        break;

      case 'Object':
        // FIXME: Patch enum as object key
        if (_module.name == 'ol/proj/Units' && applications[0] == 'Units')
          typeStr = `{ [key in ${applications[0]}]: ${applications[1]} }`;
        else
          typeStr = `{ [key: ${applications[0]}]: ${applications[1]} }`;
        break;

      case 'Class':
        typeStr = applications.join(', ');
        break;

      default:
        typeStr += `<${applications.join(', ')}>`;
        break;
    }
  }

  if (!typeStr)
    switch (parsedType.type) {
      case 'FunctionType':
        typeStr = 'Function';
        break;

      case 'NullLiteral':
        typeStr = 'null';
        break;

      case 'UndefinedLiteral':
        typeStr = 'undefined';
        break;

      default:
        typeStr = 'any';
        break;
    }

  if (typeStr == 'Array')
    typeStr = 'any[]';

  return typeStr;
}

function parseFunctionType(type, _module) {
  if (!type.startsWith('function'))
    return;

  let params = '';
  let returnType = 'void';

  const parse = t => {
    t = t.replace(/[()]/g, '');

    if (t.startsWith('function'))
      return parseFunctionType(t, _module);

    try {
      const parsedType = catharsis.parse(t, { jsdoc: true });
      t = stringifyType(parsedType, _module);
    } catch (error) {
      console.error('ERROR: parseFunctionType --', t);
    }

    return t;
  };

  const match = type.match(/^function\((.+?)\)(: ?(.+?))?$/);
  if (match) {
    params = match[1].split(/,\s?/).map((p, i) => {
      let name = `param${i}: `;
      if (p.startsWith('this:')) {
        name = 'this: ';
        p = p.replace(/^this:\s?/, '');
      }
      return name + p.split(/\s?\|\s?/).map(parse).join(' | ');
    }).join(', ');

    if (match[3])
      returnType = match[3].split(/\s?\|\s?/).map(parse).join(' | ');
  }

  // Wrap arrow function in braces
  return `((${params}) => ${returnType})`;
}

function parseConstFunctionType(doclet, _module) {
  const params = getParams(doclet, _module);
  const returnType = getReturnType(doclet, _module);

  // Wrap arrow function in braces
  return `((${params}) => ${returnType})`;
}

function getType(doclet, _module) {
  if (doclet.longname in TYPE_PATCHES)
    doclet.type = { names: [TYPE_PATCHES[doclet.longname]] };
  else if (!doclet.type)
    if (doclet.params || doclet.yields || doclet.returns) {
      return parseConstFunctionType(doclet, _module);
    } else {
      console.log('WARNING: Undefined type --', doclet.longname, 'in', _module.name);
      return 'any';
    }

  return doclet.type.names.map(type => {
    let parsedType;
    let prefix = '';

    if (type.startsWith('typeof:')) {
      prefix = 'typeof ';
      type = type.replace(/^typeof:/, '');
    }

    if (type.startsWith('function'))
      type = parseFunctionType(type, _module);
    else
      try {
        parsedType = catharsis.parse(type, { jsdoc: true });
        type = stringifyType(parsedType, _module);
      } catch (error) {
        console.error('ERROR: getType --', doclet.longname, type);
      }

    return prefix + type;
  }).join(' | ');
}

function getReturnType(doclet, _module) {
  const returnTypes = [];

  if (doclet.yields || doclet.returns)
    (doclet.yields || doclet.returns).forEach(r => {
      returnTypes.push(getType(r, _module));
    });

  return returnTypes.join(' | ') || 'void';
}

function getParams(doclet, _module) {
  if (!doclet.params)
    return '';

  return doclet.params.filter(param => param.name.indexOf('.') == -1)
    .map(param => {
      let name = param.name;
      if (param.optional && !param.defaultValue)
        name += '?';
      const paramStr = `${name}: ${getType(param, _module)}`;
      return param.defaultValue ? `${paramStr} = ${param.defaultValue}` : paramStr;
    }).join(', ');
}

function declaration(doclet, decl, _module) {
  let prefix = '';
  let suffix = '';

  if (_module && _module.exports)
    if (doclet.name == _module.exports.default)
      if (doclet.isEnum || doclet.kind == 'constant')
        suffix = `\n\nexport default ${registerImport(_module, doclet.name)};`;
      else
        prefix = 'export default ';
    else if (_module.exports.exports.indexOf(doclet.name) != -1)
      prefix = 'export ';

  return prefix + decl + suffix;
}

const PROCESSORS = {
  class: (doclet, _module) => {
    const children = [];
    const inherits = [];
    let name = doclet.name;

    if (doclet.tags) {
      const template = doclet.tags.find(tag => tag.title == 'template');
      if (template)
        name += `<${template.value}>`;
    }

    if (doclet.augments)
      doclet.augments.forEach(augment => {
        let augmentName = registerImport(_module, augment);
        augmentName = augment.split('~')[1] || augment.split('/').pop();
        inherits.push(augmentName);
      });

    if (inherits.length)
      name += ` extends ${inherits.join(', ')}`;

    if (!doclet._hideConstructor)
      children.push(`  constructor(${getParams(doclet, _module)});`);

    find({
      kind: ['member', 'function'],
      inherited: { '!is': true },
      memberof: doclet.longname
    }).forEach(child => {
      const kind = child.kind == 'function' ? 'method' : child.kind;
      children.push('  ' + PROCESSORS[kind].call(null, child, _module, false));
    });

    const decl = `class ${name} {\n${children.join('\n')}\n}`;
    return declaration(doclet, decl, _module);
  },

  member: (doclet, _module) => {
    return `${doclet.name}: ${getType(doclet, _module)};`;
  },

  constant: (doclet, _module) => {
    const decl = `const ${doclet.name}: ${getType(doclet, _module)};`;
    return declaration(doclet, decl, _module);
  },

  method: (doclet, _module) => {
    const params = getParams(doclet, _module);
    const returnType = getReturnType(doclet, _module);
    return `${doclet.name}: (${params}) => ${returnType};`;
  },

  function: (doclet, _module) => {
    let name = doclet.name;
    if (doclet.tags) {
      const template = doclet.tags.find(tag => tag.title == 'template');
      if (template)
        name += `<${template.value}>`;
    }
    const params = getParams(doclet, _module);
    const returnType = getReturnType(doclet, _module);
    const decl = `function ${name}(${params}): ${returnType};`;
    return declaration(doclet, decl, _module);
  },

  typedef: (doclet, _module) => {
    let decl;

    if (doclet.properties) {
      const children = doclet.properties.map(prop => {
        let name = prop.name;
        if (prop.optional)
          name += '?';
        return `  ${name}: ${getType(prop, _module)};`;
      });

      decl = `type ${doclet.name} = {\n${children.join('\n')}\n}`;
    } else {
      decl = `type ${doclet.name} = ${getType(doclet, _module)};`;
    }

    return 'export ' + decl;
  },

  enum: (doclet, _module) => {
    const name = registerImport(_module, doclet.name) + ' ';
    const type = getType(doclet, _module);
    let children = [];
    if (doclet.properties)
      children = doclet.properties.map(prop => {
        let value = prop.defaultvalue;
        if (type == 'string')
          value = `'${value}'`;
        return `  ${prop.name} = ${value},`;
      });
    else
      console.log('WARNING: Empty enum --', doclet.longname);
    const decl = `enum ${name}{\n${children.join('\n')}\n}`;
    return declaration(doclet, decl, _module);
  },
};

function processModule(doclet) {
  let children = [];

  if (doclet.name == 'ol/control')
    registerImport(doclet, 'module:ol/control/util~DefaultsOptions');

  find({
    kind: ['class', 'member', 'function', 'typedef', 'enum', 'constant'],
    memberof: doclet.longname
  }).forEach(item => {
    const processorName = item.isEnum ? 'enum' : item.kind;
    let child = PROCESSORS[processorName](item, doclet);
    if (child.indexOf('export') == -1)
      return;
    if (processorName == 'member')
      child = declaration(item, `const ${child}`, doclet);
    children.push(child);
  });

  if (MEMBER_PATCHES[doclet.longname])
    children = children.concat(MEMBER_PATCHES[doclet.longname]);

  MODULE_CHILDREN[doclet.name] = children;
}

function generateDeclaration(doclet) {
  const children = MODULE_CHILDREN[doclet.name];
  const _imports = MODULE_IMPORTS[doclet.name];
  const _exports = MODULE_EXPORTS[doclet.name];
  const moduleOutDir = path.resolve(outDir, doclet.name);

  let content = '';

  if (_imports && _imports.expressions.length)
    content += _imports.expressions.join('\n') + '\n\n';

  let reExports = [];
  if (_exports && _exports.reExports.length) {
    _exports.reExports.forEach(x => {
      const match = x.match(/^(export\s{)(.+?)(}\sfrom\s['"])(.+?)(['"];)$/);
      if (match && match[2].indexOf(' as ') == -1) {
        const names = match[2].split(/,\s?/).map(name => {
          name = name.trim();
          const isDuplicate = find({ name: name, memberof: doclet.longname }).length > 0;
          const isInvalid = !find({ name: name, memberof: `module:${match[4]}` }).length;

          if (!isDuplicate && isInvalid)
            console.log('WARNING: Removed export --', name, 'in', doclet.longname, '--', x);

          if (isDuplicate || isInvalid)
            return undefined;

          return name;
        }).filter(x => x != undefined).join(', ');

        if (names)
          reExports.push(match[1] + ` ${names.trim()} ` + match[3] + match[4] + match[5]);
      } else {
        reExports.push(x);
      }
    });
    content += reExports.join('\n') + '\n\n';
  }

  if (!content && !children.length) {
    console.log('WARNING: Empty module --', doclet.name);
    return;
  }

  if (children.length)
    content += children.join('\n\n') + '\n\n';

  content = `declare module '${doclet.name}' {\n\n${content}}`;

  fs.mkPath(moduleOutDir);
  // @ts-ignore
  fs.writeFileSync(path.resolve(moduleOutDir, 'index.d.ts'), content);
}

exports.publish = (taffyData) => {
  data = taffyData;

  data = helper.prune(data);
  data.sort('longname, version, since');

  rimraf.sync(outDir);

  const members = helper.getMembers(data);
  members.modules.forEach(doclet => {
    if (doclet.force_include_members)
      doclet.exports.exports = doclet.exports.exports.concat(doclet.force_include_members);
    MODULE_EXPORTS[doclet.name] = doclet.exports;
  });
  members.modules.forEach(processModule);
  members.modules.forEach(generateDeclaration);
};