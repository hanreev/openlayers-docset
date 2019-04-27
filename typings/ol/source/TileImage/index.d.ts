declare module 'ol/source/TileImage' {

  import ImageTile from 'ol/ImageTile';
  import { AttributionLike } from 'ol/source/Source';
  import { ProjectionLike } from 'ol/proj';
  import State from 'ol/source/State';
  import TileGrid from 'ol/tilegrid/TileGrid';
  import { LoadFunction } from 'ol/Tile';
  import { UrlFunction } from 'ol/Tile';
  import UrlTile from 'ol/source/UrlTile';
  import TileCache from 'ol/TileCache';
  import Projection from 'ol/proj/Projection';
  import Tile from 'ol/Tile';

  export interface Options {
    attributions?: AttributionLike;
    attributionsCollapsible?: boolean;
    cacheSize?: number;
    crossOrigin?: string;
    opaque?: boolean;
    projection: ProjectionLike;
    reprojectionErrorThreshold?: number;
    state?: State;
    tileClass?: ImageTile;
    tileGrid?: TileGrid;
    tileLoadFunction?: LoadFunction;
    tilePixelRatio?: number;
    tileUrlFunction?: UrlFunction;
    url?: string;
    urls?: string[];
    wrapX?: boolean;
    transition?: number;
    key?: string;
  }

  export default class TileImage<T> extends UrlTile<T> {
    constructor(options: Options);
    protected crossOrigin: string;
    protected tileCacheForProjection: { [key: string]: TileCache<T> };
    protected tileClass: ImageTile;
    protected tileGridForProjection: { [key: string]: TileGrid };
    protected getTileInternal(z: number, x: number, y: number, pixelRatio: number, projection: Projection): Tile;
    getGutter(): number;
    setRenderReprojectionEdges(render: boolean): void;
    setTileGridForProjection(projection: ProjectionLike, tilegrid: TileGrid): void;
  }

}
