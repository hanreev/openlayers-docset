declare module 'ol/source/OSM' {

  import { AttributionLike } from 'ol/source/Source';
  import { LoadFunction } from 'ol/Tile';
  import XYZ from 'ol/source/XYZ';

  export const ATTRIBUTION: string;

  export interface Options {
    attributions?: AttributionLike;
    cacheSize?: number;
    crossOrigin?: string;
    maxZoom?: number;
    opaque?: boolean;
    reprojectionErrorThreshold?: number;
    tileLoadFunction?: LoadFunction;
    url?: string;
    wrapX?: boolean;
  }

  export default class OSM<T> extends XYZ<T> {
    constructor(opt_options?: Options);
  }

}
