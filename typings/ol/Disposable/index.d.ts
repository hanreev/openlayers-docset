declare module 'ol/Disposable' {

  export default class Disposable {
    constructor();
    dispose: () => void;
    disposeInternal: () => void;
  }

}
