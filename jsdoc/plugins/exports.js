/*global env: true */

const path = require('path');

const MODULE_EXPORTS = {};

function remapExports(doclet) {
  const filename = path.join(doclet.meta.path, doclet.meta.filename);

  if (!MODULE_EXPORTS[filename])
    return;

  doclet.exports = MODULE_EXPORTS[filename];

  if (doclet.exports.default == '{')
    doclet.exports.default = doclet.longname;

  if (doclet.exports.reExports.length)
    doclet.exports.reExports = doclet.exports.reExports.map(reExport => {
      return reExport.replace(/^(export\s{)(.+?)(}\sfrom\s['"])(.+?)(['"];)$/, (_, p1, p2, p3, p4, p5) => {
        p4 = path.normalize(path.join(doclet.meta.path, p4));
        // @ts-ignore
        env.conf.source.include.forEach(include => {
          include = path.resolve(include.replace(/ol$/, ''));
          p4 = path.relative(include, p4);
        });
        p2.split(/,\s?/).forEach(e => {
          if (e.indexOf(' as ') == -1)
            doclet.exports.exports.push(e);
        });
        return p1 + ` ${p2.trim()} ` + p3 + p4 + p5;
      });
    });
}

function extractFunctionDefinition(doclet, comment, isReturn = false) {
  if (!doclet.type)
    return;

  comment = comment || doclet.comment;
  comment = comment.replace(/^ *\*\/?( +)?/gm, '');

  const regex = isReturn ? /@return {(function.+?)}/gs : /{(function.+?)}\s+\[?(\w+)\]?/gs;
  let match;

  doclet.type.names = doclet.type.names.map(type => {
    if (type == 'function')
      do {
        match = regex.exec(comment);
        if (match && (isReturn || match[2] == doclet.name)) {
          type = match[1].replace(/\n/g, ' ');
          break;
        }
      } while (match);
    return type;
  });
}

exports.handlers = {

  newDoclet: e => {
    const doclet = e.doclet;
    if (doclet.kind == 'module')
      remapExports(doclet);

    if (doclet.type)
      extractFunctionDefinition(doclet);

    if (doclet.params)
      doclet.params.filter(param => param.name.indexOf('.') == -1)
        .forEach(param => extractFunctionDefinition(param, doclet.comment));

    if (doclet.properties)
      doclet.properties.forEach(prop => extractFunctionDefinition(prop, doclet.comment));

    if (doclet.yields || doclet.returns)
      (doclet.yields || doclet.returns).forEach(r => extractFunctionDefinition(r, doclet.comment, true));
  },

  beforeParse: e => {
    MODULE_EXPORTS[e.filename] = {
      default: null,
      exports: [],
      reExports: []
    };
    const exportRegex = /export\s([^{]+?)\s(.+?)[(\s;]/g;
    const multipleExportRegex = /export\s{(.+?)};/g;
    const reExportRegex = /export\s{.+?}\sfrom.+;/g;
    let match;

    do {
      match = exportRegex.exec(e.source);
      if (match)
        if (match[1] == 'default')
          MODULE_EXPORTS[e.filename].default = match[2];
        else
          MODULE_EXPORTS[e.filename].exports.push(match[2]);
    } while (match);

    do {
      match = multipleExportRegex.exec(e.source);
      if (match)
        MODULE_EXPORTS[e.filename].exports = MODULE_EXPORTS[e.filename].exports.concat(match[1].split(/,\s?/));
    } while (match);

    do {
      match = reExportRegex.exec(e.source);
      if (match)
        MODULE_EXPORTS[e.filename].reExports.push(match[0].replace('.js', ''));
    } while (match);

    // Enums has undefined properties when exported
    e.source = e.source.replace('export const', 'const');
  }

};
