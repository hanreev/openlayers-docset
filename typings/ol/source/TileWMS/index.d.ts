declare module 'ol/source/TileWMS' {

  import { AttributionLike } from 'ol/source/Source';
  import { ProjectionLike } from 'ol/proj';
  import ImageTile from 'ol/ImageTile';
  import TileGrid from 'ol/tilegrid/TileGrid';
  import WMSServerType from 'ol/source/WMSServerType';
  import { LoadFunction } from 'ol/Tile';
  import { TileCoord } from 'ol/tilecoord';
  import Projection from 'ol/proj/Projection';
  import TileImage from 'ol/source/TileImage';
  import { Coordinate } from 'ol/coordinate';

  export interface Options {
    attributions?: AttributionLike;
    cacheSize?: number;
    crossOrigin?: string;
    params: { [key: string]: any };
    gutter?: number;
    hidpi?: boolean;
    projection: ProjectionLike;
    reprojectionErrorThreshold?: number;
    tileClass?: ImageTile;
    tileGrid?: TileGrid;
    serverType?: WMSServerType | string;
    tileLoadFunction?: LoadFunction;
    url?: string;
    urls?: string[];
    wrapX?: boolean;
    transition?: number;
  }

  export default class TileWMS extends TileImage {
    constructor(opt_options?: Options);
    getGetFeatureInfoUrl(coordinate: Coordinate, resolution: number, projection: ProjectionLike, params: Object): string;
    getParams(): Object;
    updateParams(params: Object): void;
  }

}
