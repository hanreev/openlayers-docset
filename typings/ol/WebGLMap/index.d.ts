declare module 'ol/WebGLMap' {

  import PluggableMap from 'ol/PluggableMap';
  import { MapOptions } from 'ol/PluggableMap';

  export default class WebGLMap extends PluggableMap {
    constructor(options: MapOptions);
  }

}
