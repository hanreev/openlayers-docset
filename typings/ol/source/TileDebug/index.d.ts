declare module 'ol/source/TileDebug' {

  import Tile from 'ol/Tile';
  import { TileCoord } from 'ol/tilecoord';
  import { Size } from 'ol/size';
  import { ProjectionLike } from 'ol/proj';
  import TileGrid from 'ol/tilegrid/TileGrid';
  import TileSource from 'ol/source/Tile';

  export interface Options {
    projection: ProjectionLike;
    tileGrid?: TileGrid;
    wrapX?: boolean;
  }

  export default class TileDebug<T> extends TileSource<T> {
    constructor(options: Options);
  }

}
