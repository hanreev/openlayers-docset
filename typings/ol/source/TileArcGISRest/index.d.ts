declare module 'ol/source/TileArcGISRest' {

  import { AttributionLike } from 'ol/source/Source';
  import TileGrid from 'ol/tilegrid/TileGrid';
  import { ProjectionLike } from 'ol/proj';
  import { LoadFunction } from 'ol/Tile';
  import TileImage from 'ol/source/TileImage';
  import { TileCoord } from 'ol/tilecoord';
  import Projection from 'ol/proj/Projection';

  export interface Options {
    attributions?: AttributionLike;
    cacheSize?: number;
    crossOrigin?: string;
    params?: { [key in string]: any };
    tileGrid?: TileGrid;
    projection: ProjectionLike;
    reprojectionErrorThreshold?: number;
    tileLoadFunction?: LoadFunction;
    url?: string;
    wrapX?: boolean;
    transition?: number;
    urls: string[];
  }

  export default class TileArcGISRest extends TileImage {
    constructor(opt_options?: Options);
    getParams(): Object;
    updateParams(params: Object): void;
  }

}
