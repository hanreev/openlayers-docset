declare module 'ol/format/XML' {

  export default class XML {
    constructor();
    read(source: Document | Element | string): Object;
    readFromDocument(doc: Document): Object;
    readFromNode(node: Element): Object;
  }

}
