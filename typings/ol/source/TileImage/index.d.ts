declare module 'ol/source/TileImage' {

  import ImageTile from 'ol/ImageTile';
  import { AttributionLike } from 'ol/source/Source';
  import { ProjectionLike } from 'ol/proj';
  import State from 'ol/source/State';
  import TileGrid from 'ol/tilegrid/TileGrid';
  import { LoadFunction } from 'ol/Tile';
  import { UrlFunction } from 'ol/Tile';
  import UrlTile from 'ol/source/UrlTile';
  import Projection from 'ol/proj/Projection';
  import Tile from 'ol/Tile';

  export type Options = {
    attributions?: AttributionLike;
    attributionsCollapsible?: boolean;
    cacheSize?: number;
    crossOrigin?: null | string;
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

  export default class TileImage extends UrlTile {
    constructor(options: Options);
    getGutter: () => number;
    getTileInternal: (z: number, x: number, y: number, pixelRatio: number, projection: Projection) => Tile;
    setRenderReprojectionEdges: (render: boolean) => void;
    setTileGridForProjection: (projection: ProjectionLike, tilegrid: TileGrid) => void;
  }

}
