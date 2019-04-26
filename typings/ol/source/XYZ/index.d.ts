declare module 'ol/source/XYZ' {

  import { AttributionLike } from 'ol/source/Source';
  import { ProjectionLike } from 'ol/proj';
  import TileGrid from 'ol/tilegrid/TileGrid';
  import { LoadFunction } from 'ol/Tile';
  import { Size } from 'ol/size';
  import { UrlFunction } from 'ol/Tile';
  import TileImage from 'ol/source/TileImage';

  export interface Options {
    attributions?: AttributionLike;
    attributionsCollapsible?: boolean;
    cacheSize?: number;
    crossOrigin?: string;
    opaque?: boolean;
    projection?: ProjectionLike;
    reprojectionErrorThreshold?: number;
    maxZoom?: number;
    minZoom?: number;
    tileGrid?: TileGrid;
    tileLoadFunction?: LoadFunction;
    tilePixelRatio?: number;
    tileSize?: number | Size;
    tileUrlFunction?: UrlFunction;
    url?: string;
    urls?: string[];
    wrapX?: boolean;
    transition?: number;
  }

  export default class XYZ extends TileImage {
    constructor(opt_options?: Options);
  }

}
