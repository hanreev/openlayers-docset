declare module 'ol/Map' {

  import PluggableMap from 'ol/PluggableMap';
  import { MapOptions } from 'ol/PluggableMap';

  export default class Map extends PluggableMap {
    constructor(options: MapOptions);
  }

}
