declare module 'ol/source/Stamen' {

  import { LoadFunction } from 'ol/Tile';
  import XYZ from 'ol/source/XYZ';

  export interface Options {
    cacheSize?: number;
    layer: string;
    minZoom?: number;
    maxZoom?: number;
    reprojectionErrorThreshold?: number;
    tileLoadFunction?: LoadFunction;
    url?: string;
    wrapX?: boolean;
  }

  export default class Stamen<T> extends XYZ<T> {
    constructor(options: Options);
  }

}
