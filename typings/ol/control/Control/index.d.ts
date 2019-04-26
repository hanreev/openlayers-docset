declare module 'ol/control/Control' {

  import BaseObject from 'ol/Object';
  import PluggableMap from 'ol/PluggableMap';
  import MapEvent from 'ol/MapEvent';

  export default class Control extends BaseObject {
    constructor(options: Options);
    getMap(): PluggableMap;
    setMap(map: PluggableMap): void;
    setTarget(target: HTMLElement | string): void;
  }

  export interface Options {
    element?: HTMLElement;
    render?: (<T>(param0: MapEvent<T>) => void);
    target?: HTMLElement | string;
  }

}
