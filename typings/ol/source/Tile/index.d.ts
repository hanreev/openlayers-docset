declare module 'ol/source/Tile' {

  import Event from 'ol/events/Event';
  import Tile from 'ol/Tile';
  import { AttributionLike } from 'ol/source/Source';
  import { ProjectionLike } from 'ol/proj';
  import State from 'ol/source/State';
  import TileGrid from 'ol/tilegrid/TileGrid';
  import Source from 'ol/source/Source';
  import Projection from 'ol/proj/Projection';
  import TileRange from 'ol/TileRange';
  import TileCache from 'ol/TileCache';
  import { TileCoord } from 'ol/tilecoord';
  import { Size } from 'ol/size';

  export class TileSourceEvent extends Event {
    constructor();
    tile: Tile;
  }

  export interface Options {
    attributions?: AttributionLike;
    attributionsCollapsible?: boolean;
    cacheSize?: number;
    opaque?: boolean;
    tilePixelRatio?: number;
    projection?: ProjectionLike;
    state?: State;
    tileGrid?: TileGrid;
    wrapX?: boolean;
    transition?: number;
    key?: string;
  }

  export default class TileSource extends Source {
    constructor(options: Options);
    canExpireCache(): boolean;
    expireCache(projection: Projection, usedTiles: { [key: string]: TileRange }): void;
    forEachLoadedTile(projection: Projection, z: number, tileRange: TileRange, callback: ((param0: Tile) => boolean | void)): boolean;
    getGutterForProjection(projection: Projection): number;
    getKey(): string;
    getOpaque(projection: Projection): boolean;
    getTile(z: number, x: number, y: number, pixelRatio: number, projection: Projection): Tile;
    getTileCacheForProjection<T>(projection: Projection): TileCache<T>;
    getTileCoordForTileUrlFunction(tileCoord: TileCoord, opt_projection?: Projection): TileCoord;
    getTileGrid(): TileGrid;
    getTileGridForProjection(projection: Projection): TileGrid;
    getTilePixelRatio(pixelRatio: number): number;
    getTilePixelSize(z: number, pixelRatio: number, projection: Projection): Size;
    setKey(key: string): void;
    useTile(z: number, x: number, y: number, projection: Projection): void;
  }

}
