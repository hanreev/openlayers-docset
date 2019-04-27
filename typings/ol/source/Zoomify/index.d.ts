declare module 'ol/source/Zoomify' {

  import ImageTile from 'ol/ImageTile';
  import TileGrid from 'ol/tilegrid/TileGrid';
  import { TileCoord } from 'ol/tilecoord';
  import TileState from 'ol/TileState';
  import { LoadFunction } from 'ol/Tile';
  import { Options as Options_1 } from 'ol/Tile';
  import { AttributionLike } from 'ol/source/Source';
  import { ProjectionLike } from 'ol/proj';
  import { Size } from 'ol/size';
  import { Extent } from 'ol/extent';
  import TileImage from 'ol/source/TileImage';

  export class CustomTile extends ImageTile {
    constructor(tileGrid: TileGrid, tileCoord: TileCoord, state: TileState, src: string, crossOrigin: string, tileLoadFunction: LoadFunction, opt_options?: Options_1);
  }

  export interface Options {
    attributions?: AttributionLike;
    cacheSize?: number;
    crossOrigin?: string;
    projection?: ProjectionLike;
    reprojectionErrorThreshold?: number;
    url?: string;
    tierSizeCalculation?: string;
    size?: Size;
    extent?: Extent;
    transition?: number;
    tileSize?: number;
  }

  export default class Zoomify<T> extends TileImage<T> {
    constructor(opt_options?: Options);
  }

}
