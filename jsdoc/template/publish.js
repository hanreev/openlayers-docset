/* global env */

const hasOwnProp = Object.prototype.hasOwnProperty;

// Work around an issue with hasOwnProperty in JSDoc's templateHelper.js.
//TODO Fix in JSDoc.
Object.prototype.hasOwnProperty = function (property) {
  return property in this;
};

// @ts-ignore
const template = require('jsdoc/lib/jsdoc/template');
// @ts-ignore
const fs = require('jsdoc/lib/jsdoc/fs');
// @ts-ignore
const path = require('jsdoc/lib/jsdoc/path');
// @ts-ignore
const taffy = require('taffydb').taffy;
// @ts-ignore
const handle = require('jsdoc/lib/jsdoc/util/error').handle;
// @ts-ignore
const helper = require('jsdoc/lib/jsdoc/util/templateHelper');
// @ts-ignore
const logger = require('jsdoc/lib/jsdoc/util/logger');
const _ = require('underscore');
const rimraf = require('rimraf');
const sqlite3 = require('sqlite3');
const htmlsafe = helper.htmlsafe;
const linkto = helper.linkto;
const resolveAuthorLinks = helper.resolveAuthorLinks;
// @ts-ignore
const baseOutdir = env.opts.destination;
// @ts-ignore
const outdir = path.join(baseOutdir, 'Contents', 'Resources', 'Documents');

// Work around an issue with hasOwnProperty in JSDoc's templateHelper.js.
//TODO Fix in JSDoc.
Object.prototype.hasOwnProperty = hasOwnProp;

let view;
let data;

function find(spec) {
  return helper.find(data, spec);
}

function tutoriallink(tutorial) {
  return helper.toTutorial(tutorial, null, {
    tag: 'em',
    classname: 'disabled',
    prefix: 'Tutorial: ',
  });
}

function getAncestorLinks(doclet) {
  return helper.getAncestorLinks(data, doclet);
}

function hashToLink(doclet, hash) {
  if (!/^(#.+)/.test(hash)) return hash;

  let url = helper.createLink(doclet);

  url = url.replace(/(#.+|$)/, hash);
  return '<a href="' + url + '">' + hash + '</a>';
}

function needsSignature(doclet) {
  let needsSig = false;

  // function and class definitions always get a signature
  if (doclet.kind === 'function' || doclet.kind === 'class') needsSig = true;
  else if (doclet.kind === 'typedef' && doclet.type && doclet.type.names && doclet.type.names.length)
    // typedefs that contain functions get a signature, too
    for (let i = 0, l = doclet.type.names.length; i < l; i++)
      if (doclet.type.names[i].toLowerCase() === 'function') {
        needsSig = true;
        break;
      }

  return needsSig;
}

function addSignatureParams(f) {
  const params = helper.getSignatureParams(f, 'optional');

  f.signature = (f.signature || '') + '(' + params.join(', ') + ')';
}

function addSignatureReturns(f) {
  const returnTypes = helper.getSignatureReturns(f);

  f.signature = '<span class="signature">' + (f.signature || '') + '</span>';

  if (returnTypes.length)
    f.signature +=
      '<span class="fa fa-arrow-circle-right"></span><span class="type-signature returnType">' +
      (returnTypes.length ? '{' + returnTypes.join('|') + '}' : '') +
      '</span>';
}

function addSignatureTypes(f) {
  const types = helper.getSignatureTypes(f);

  f.signature =
    (f.signature || '') + '<span class="type-signature">' + (types.length ? ' :' + types.join('|') : '') + ' </span>';
}

function shortenPaths(files, commonPrefix) {
  // always use forward slashes
  const regexp = new RegExp('\\\\', 'g');

  Object.keys(files).forEach(file => {
    files[file].shortened = files[file].resolved.replace(commonPrefix, '').replace(regexp, '/');
  });

  return files;
}

function resolveSourcePath(filepath) {
  // @ts-ignore
  return path.resolve(process.cwd(), filepath);
}

function getPathFromDoclet(doclet) {
  if (!doclet.meta) return;

  const filepath =
    doclet.meta.path && doclet.meta.path !== 'null'
      ? doclet.meta.path + '/' + doclet.meta.filename.split(/[/\\]/).pop()
      : doclet.meta.filename;

  return filepath;
}

function generate(title, docs, filename, resolveLinks) {
  resolveLinks = resolveLinks === false ? false : true;

  const docData = {
    filename: filename,
    title: title,
    docs: docs,
    packageInfo: (find({
      kind: 'package',
    }) || [])[0],
  };

  // @ts-ignore
  const outpath = path.join(outdir, filename);
  let html = view.render('container.tmpl', docData);

  if (resolveLinks) html = helper.resolveLinks(html); // turn {@link foo} into <a href="foodoc.html">foo</a>

  // @ts-ignore
  fs.writeFileSync(outpath, html, 'utf8');
}

function generateSourceFiles(sourceFiles) {
  Object.keys(sourceFiles).forEach(function (file) {
    let source;
    // links are keyed to the shortened path in each doclet's `meta.filename` property
    const sourceOutfile = helper.getUniqueFilename(sourceFiles[file].shortened);
    helper.registerLink(sourceFiles[file].shortened, sourceOutfile);

    try {
      source = {
        kind: 'source',
        // @ts-ignore
        code: helper.htmlsafe(fs.readFileSync(sourceFiles[file].resolved, 'utf8')),
      };
    } catch (e) {
      handle(e);
    }

    generate('Source: ' + sourceFiles[file].shortened, [source], sourceOutfile, false);
  });
}

function attachModuleSymbols(doclets, modules) {
  const symbols = {};

  // build a lookup table
  doclets.forEach(symbol => {
    symbols[symbol.longname] = symbol;
  });

  modules.forEach(module => {
    if (symbols[module.longname]) {
      module.module = symbols[module.longname];
      module.module.name = module.module.name.replace('module:', 'require("') + '")';
    }
  });
}

/**
 * Create the navigation sidebar.
 * @param {object} members The members that will be used to create the sidebar.
 * @param {Array<Object>} members.classes Classes.
 * @param {Array<Object>} members.externals Externals.
 * @param {Array<Object>} members.globals Globals.
 * @param {Array<Object>} members.mixins Mixins.
 * @param {Array<Object>} members.modules Modules.
 * @param {Array<Object>} members.namespaces Namespaces.
 * @param {Array<Object>} members.tutorials Tutorials.
 * @param {Array<Object>} members.events Events.
 * @return {string} The HTML for the navigation sidebar.
 */
function buildNav(members) {
  const nav = [];
  // merge namespaces and classes, then sort
  const merged = members.modules.concat(members.classes);
  merged.sort((a, b) => (a.longname > b.longname ? 1 : a.longname < b.longname ? -1 : 0));

  _.each(merged, function (v) {
    // exclude interfaces from sidebar
    if (v.interface !== true) {
      if (v.kind == 'module')
        nav.push({
          type: 'module',
          longname: v.longname,
          name: v.name,
          members: find({
            kind: 'member',
            memberof: v.longname,
          }),
          methods: find({
            kind: 'function',
            memberof: v.longname,
          }),
          typedefs: find({
            kind: 'typedef',
            memberof: v.longname,
          }),
          events: find({
            kind: 'event',
            memberof: v.longname,
          }),
        });

      if (v.kind == 'class')
        nav.push({
          type: 'class',
          longname: v.longname,
          name: v.name,
          members: find({
            kind: 'member',
            memberof: v.longname,
          }),
          methods: find({
            kind: 'function',
            memberof: v.longname,
          }),
          typedefs: find({
            kind: 'typedef',
            memberof: v.longname,
          }),
          fires: v.fires,
          events: find({
            kind: 'event',
            memberof: v.longname,
          }),
        });
    }
  });

  // @ts-ignore
  return nav;
}

/**
 * Add dash docset requirements
 * @param {object} members The members that will be used to create the sidebar.
 * @param {Array<Object>} members.classes Classes.
 * @param {Array<Object>} members.externals Externals.
 * @param {Array<Object>} members.globals Globals.
 * @param {Array<Object>} members.mixins Mixins.
 * @param {Array<Object>} members.modules Modules.
 * @param {Array<Object>} members.namespaces Namespaces.
 * @param {Array<Object>} members.tutorials Tutorials.
 * @param {Array<Object>} members.events Events.
 * @param {string} templatePath
 */
function buildDocsetFiles(members, templatePath) {
  // Copy Info.plist and icons
  // @ts-ignore
  fs.copyFileSync(path.resolve(templatePath, 'Info.plist'), path.resolve(baseOutdir, 'Contents'));
  // @ts-ignore
  fs.copyFileSync(path.resolve(templatePath, 'icons', 'icon.png'), path.resolve(baseOutdir));
  // @ts-ignore
  fs.copyFileSync(path.resolve(templatePath, 'icons', 'icon@2x.png'), path.resolve(baseOutdir));

  // Create index database
  // @ts-ignore
  const dbPath = path.resolve(baseOutdir, 'Contents', 'Resources', 'docSet.dsidx');
  // @ts-ignore
  if (fs.existsSync(dbPath))
    // @ts-ignore
    fs.unlinkSync(dbPath);

  const sqlite3v = sqlite3.verbose();
  const db = new sqlite3v.Database(dbPath);
  db.serialize();
  db.run('CREATE TABLE searchIndex(id INTEGER PRIMARY KEY, name TEXT, type TEXT, path TEXT)');
  db.run('CREATE UNIQUE INDEX anchor ON searchIndex (name, type, path)');

  // Indexing
  const merged = members.modules.concat(members.classes);
  merged.sort((a, b) => (a.longname > b.longname ? 1 : a.longname < b.longname ? -1 : 0));

  const addIndex = (item, parent) => {
    const name = parent ? [parent.name, item.name].join('.') : item.name;
    let type;
    const url = helper.longnameToUrl[item.longname];

    switch (item.kind) {
      case 'member':
        type = 'Property';
        break;

      case 'function':
        type = parent && parent.kind === 'module' ? 'Function' : 'Method';
        break;

      case 'typedef':
        type = 'Type';
        break;

      default:
        type = item.kind.replace(/\b(.)/g, m => m.toUpperCase());
        break;
    }

    if (item.isEnum) type = 'Enum';

    db.run('INSERT OR IGNORE INTO searchIndex(name, type, path) VALUES (?, ?, ?)', [name, type, url], (_, err) => {
      if (err) logger.error(err);
    });
  };

  merged.forEach(item => {
    if (item.interface !== true) {
      addIndex(item);
      find({
        kind: ['member', 'function', 'typedef', 'event', 'enum'],
        memberof: item.longname,
      }).forEach(child => {
        addIndex(child, item);
      });
    }
  });

  // Close index database
  db.close();
}

/**
 * @param {Object} taffyData See <http://taffydb.com/>.
 * @param {Object} opts Options.
 * @param {Object} tutorials Tutorials.
 */
exports.publish = (taffyData, opts, tutorials) => {
  data = taffyData;

  // @ts-ignore
  const conf = env.conf.templates || {};
  conf['default'] = conf['default'] || {};

  const templatePath = opts.template;
  view = new template.Template(templatePath + '/tmpl');

  // claim some special filenames in advance, so the All-Powerful Overseer of Filename Uniqueness
  // doesn't try to hand them out later
  const indexUrl = helper.getUniqueFilename('index');
  // don't call registerLink() on this one! 'index' is also a valid longname

  const globalUrl = helper.getUniqueFilename('global');
  helper.registerLink('global', globalUrl);

  // set up templating
  view.layout = 'layout.tmpl';

  // set up tutorials for helper
  helper.setTutorials(tutorials);

  data = helper.prune(data);
  data.sort('longname, version, since');
  helper.addEventListeners(data);

  let sourceFiles = {};
  const sourceFilePaths = [];
  data().each(doclet => {
    doclet.attribs = '';

    if (doclet.examples)
      doclet.examples = doclet.examples.map(example => {
        let caption, code;

        if (example.match(/^\s*<caption>([\s\S]+?)<\/caption>(\s*[\n\r])([\s\S]+)$/i)) {
          caption = RegExp.$1;
          code = RegExp.$3;
        }

        return {
          caption: caption || '',
          code: code || example,
        };
      });

    if (doclet.see)
      doclet.see.forEach((seeItem, i) => {
        doclet.see[i] = hashToLink(doclet, seeItem);
      });

    // build a list of source files
    let sourcePath;
    let resolvedSourcePath;
    if (doclet.meta) {
      sourcePath = getPathFromDoclet(doclet);
      resolvedSourcePath = resolveSourcePath(sourcePath);
      sourceFiles[sourcePath] = {
        resolved: resolvedSourcePath,
        shortened: null,
      };
      sourceFilePaths.push(resolvedSourcePath);
    }
  });

  rimraf.sync(outdir);
  fs.mkPath(outdir);

  // copy the template's static files to outdir
  // @ts-ignore
  const fromDir = path.join(templatePath, 'static');
  const staticFiles = fs.ls(fromDir, 3);

  staticFiles.forEach(fileName => {
    const toDir = fs.toDir(fileName.replace(fromDir, outdir));
    fs.mkPath(toDir);
    fs.copyFileSync(fileName, toDir);
  });

  // copy user-specified static files to outdir
  let staticFilePaths;
  let staticFileFilter;
  let staticFileScanner;
  if (conf['default'].staticFiles) {
    staticFilePaths = conf['default'].staticFiles.paths || [];
    // @ts-ignore
    staticFileFilter = new (require('jsdoc/lib/jsdoc/src/filter').Filter)(conf['default'].staticFiles);
    // @ts-ignore
    staticFileScanner = new (require('jsdoc/lib/jsdoc/src/scanner').Scanner)();

    staticFilePaths.forEach(filePath => {
      const extraStaticFiles = staticFileScanner.scan([filePath], 10, staticFileFilter);

      extraStaticFiles.forEach(fileName => {
        // @ts-ignore
        const sourcePath = fs.statSync(filePath).isDirectory() ? filePath : path.dirname(filePath);
        const toDir = fs.toDir(fileName.replace(sourcePath, outdir));
        fs.mkPath(toDir);
        fs.copyFileSync(fileName, toDir);
      });
    });
  }

  if (sourceFilePaths.length) sourceFiles = shortenPaths(sourceFiles, path.commonPrefix(sourceFilePaths));

  data().each(doclet => {
    const url = helper.createLink(doclet);
    helper.registerLink(doclet.longname, url);

    // replace the filename with a shortened version of the full path
    let docletPath;
    if (doclet.meta) {
      docletPath = getPathFromDoclet(doclet);
      docletPath = sourceFiles[docletPath].shortened;
      if (docletPath) doclet.meta.filename = docletPath;
    }
  });

  data().each(doclet => {
    const url = helper.longnameToUrl[doclet.longname];

    if (url.indexOf('#') > -1) doclet.id = helper.longnameToUrl[doclet.longname].split(/#/).pop();
    else doclet.id = doclet.name;

    if (needsSignature(doclet)) {
      addSignatureParams(doclet);
      addSignatureReturns(doclet);
    }
  });

  // do this after the urls have all been generated
  data().each(doclet => {
    doclet.ancestors = getAncestorLinks(doclet);

    if (doclet.kind === 'member') addSignatureTypes(doclet);

    if (doclet.kind === 'constant') {
      addSignatureTypes(doclet);
      doclet.kind = 'member';
    }
  });

  const members = helper.getMembers(data);
  members.tutorials = tutorials.children;

  // add template helpers
  // @ts-ignore
  view.find = find;
  // @ts-ignore
  view.linkto = linkto;
  // @ts-ignore
  view.resolveAuthorLinks = resolveAuthorLinks;
  // @ts-ignore
  view.tutoriallink = tutoriallink;
  // @ts-ignore
  view.htmlsafe = htmlsafe;
  // @ts-ignore
  view.members = members; //@davidshimjs: To make navigation for customizing
  // @ts-ignore
  view.encodeUriComponent = encodeURIComponent;

  // once for all
  // @ts-ignore
  view.nav = buildNav(members);
  buildDocsetFiles(members, templatePath);
  attachModuleSymbols(
    find({
      kind: ['class', 'function'],
      longname: {
        left: 'module:',
      },
    }),
    members.modules
  );

  // only output pretty-printed source files if requested; do this before generating any other
  // pages, so the other pages can link to the source files
  if (conf['default'].outputSourceFiles) generateSourceFiles(sourceFiles);

  if (members.globals.length)
    generate(
      'Global',
      [
        {
          kind: 'globalobj',
        },
      ],
      globalUrl
    );

  // index page displays information from package.json and lists files
  const files = find({
    kind: 'file',
  });

  generate(
    'Index',
    [
      {
        kind: 'mainpage',
        readme: opts.readme,
        longname: opts.mainpagetitle ? opts.mainpagetitle : 'Main Page',
      },
    ].concat(files),
    indexUrl
  );

  // set up the lists that we'll use to generate pages
  const classes = taffy(members.classes);
  const modules = taffy(members.modules);
  const namespaces = taffy(members.namespaces);
  const mixins = taffy(members.mixins);
  const externals = taffy(members.externals);

  for (const longname in helper.longnameToUrl)
    if (hasOwnProp.call(helper.longnameToUrl, longname)) {
      const myClasses = helper.find(classes, {
        longname: longname,
      });
      if (myClasses.length) generate('Class: ' + myClasses[0].name, myClasses, helper.longnameToUrl[longname]);

      const myModules = helper.find(modules, {
        longname: longname,
      });
      if (myModules.length) generate('Module: ' + myModules[0].name, myModules, helper.longnameToUrl[longname]);

      const myNamespaces = helper.find(namespaces, {
        longname: longname,
      });
      if (myNamespaces.length)
        generate('Namespace: ' + myNamespaces[0].name, myNamespaces, helper.longnameToUrl[longname]);

      const myMixins = helper.find(mixins, {
        longname: longname,
      });
      if (myMixins.length) generate('Mixin: ' + myMixins[0].name, myMixins, helper.longnameToUrl[longname]);

      const myExternals = helper.find(externals, {
        longname: longname,
      });
      if (myExternals.length) generate('External: ' + myExternals[0].name, myExternals, helper.longnameToUrl[longname]);
    }

  // TODO: move the tutorial functions to templateHelper.js
  function generateTutorial(title, tutorial, filename) {
    const tutorialData = {
      title: title,
      header: tutorial.title,
      content: tutorial.parse(),
      children: tutorial.children,
    };

    let html = view.render('tutorial.tmpl', tutorialData);
    // yes, you can use {@link} in tutorials too!
    html = helper.resolveLinks(html); // turn {@link foo} into <a href="foodoc.html">foo</a>

    // @ts-ignore
    const tutorialPath = path.join(outdir, filename);
    // @ts-ignore
    fs.writeFileSync(tutorialPath, html, 'utf8');
  }

  // tutorials can have only one parent so there is no risk for loops
  function saveChildren(node) {
    node.children.forEach(child => {
      generateTutorial('Tutorial: ' + child.title, child, helper.tutorialToUrl(child.name));
      saveChildren(child);
    });
  }
  saveChildren(tutorials);
};
