declare module 'ol/source/Stamen' {

  import { LoadFunction } from 'ol/Tile';
  import XYZ from 'ol/source/XYZ';

  export type Options = {
    cacheSize?: number;
    layer: string;
    minZoom?: number;
    maxZoom?: number;
    reprojectionErrorThreshold?: number;
    tileLoadFunction?: LoadFunction;
    url?: string;
    wrapX?: boolean;
  }

  export default class Stamen extends XYZ {
    constructor(options: Options);
  }

}
