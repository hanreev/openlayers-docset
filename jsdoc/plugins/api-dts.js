/**
 * Define an @api tag
 * @param {Object} dictionary The tag dictionary.
 */
exports.defineTags = dictionary => {
  dictionary.defineTag('api', {
    mustHaveValue: false,
    canHaveType: false,
    canHaveName: false,
    onTagged: doclet => {
      includeTypes(doclet);
      doclet.stability = 'stable';
    }
  });
};


/*
 * Based on @api annotations, and assuming that items with no @api annotation
 * should not be documented, this plugin removes undocumented symbols
 * from the documentation.
 */

const api = [];
const classes = {};
const types = {};
const modules = {};

function includeAugments(doclet) {
  const augments = doclet.augments;
  if (augments) {
    let cls;
    for (let i = augments.length - 1; i >= 0; --i) {
      cls = classes[augments[i]];
      if (cls) {
        includeAugments(cls);
        if (cls.fires) {
          if (!doclet.fires)
            doclet.fires = [];

          cls.fires.forEach(f => {
            if (doclet.fires.indexOf(f) == -1)
              doclet.fires.push(f);
          });
        }
        if (cls.observables) {
          if (!doclet.observables)
            doclet.observables = [];

          cls.observables.forEach(f => {
            if (doclet.observables.indexOf(f) == -1)
              doclet.observables.push(f);
          });
        }
      }
    }
  }
}

function extractTypes(item) {
  item.type.names.forEach(type => {
    const match = type.match(/^(.*<)?([^>]*)>?$/);
    if (match) {
      modules[match[2]] = true;
      types[match[2]] = true;
    }
  });
}

function includeTypes(doclet) {
  if (doclet.params)
    doclet.params.forEach(extractTypes);

  if (doclet.returns)
    doclet.returns.forEach(extractTypes);

  if (doclet.properties)
    doclet.properties.forEach(extractTypes);

  if (doclet.type && doclet.meta.code.type == 'MemberExpression')
    extractTypes(doclet);
}

exports.handlers = {

  newDoclet: e => {
    const doclet = e.doclet;
    if (doclet.stability) {
      modules[doclet.longname.split(/[~.]/).shift()] = true;
      api.push(doclet);
    }

    if (doclet.kind == 'class') {
      modules[doclet.longname.split(/[~.]/).shift()] = true;
      if (!(doclet.longname in classes))
        classes[doclet.longname] = doclet;
      else if ('augments' in doclet)
        classes[doclet.longname].augments = doclet.augments;
    }

    if (doclet.name === doclet.longname && !doclet.memberof)
      doclet.setMemberof(doclet.longname);
  },

  parseComplete: e => {
    const doclets = e.doclets;
    for (let i = doclets.length - 1; i >= 0; --i) {
      const doclet = doclets[i];

      if (doclet.stability) {
        if (doclet.kind == 'class')
          includeAugments(doclet);

        if (doclet.fires)
          doclet.fires.sort((a, b) => a.split(/#?event:/)[1] < b.split(/#?event:/)[1] ? -1 : 1);

        if (doclet.observables)
          doclet.observables.sort((a, b) => a.name < b.name ? -1 : 1);
        // Always document namespaces and items with stability annotation
        continue;
      }

      if (doclet.kind == 'module')
        // Document all modules that are referenced by the API
        continue;

      if (doclet.isEnum || doclet.kind == 'typedef' || doclet.kind == 'function')
        continue;

      if (doclet.kind == 'class')
        includeAugments(doclet);
      else if (doclet.undocumented !== false && !doclet._hideConstructor && !(doclet.kind == 'typedef' && doclet.longname in types))
        doclet.undocumented = true;
    }
  }

};
