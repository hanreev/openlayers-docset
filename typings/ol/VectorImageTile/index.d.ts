declare module 'ol/VectorImageTile' {

  import VectorTile from 'ol/VectorTile';
  import { OrderFunction } from 'ol/render';
  import Tile from 'ol/Tile';
  import { TileCoord } from 'ol/tilecoord';
  import TileState from 'ol/TileState';
  import FeatureFormat from 'ol/format/Feature';
  import { LoadFunction } from 'ol/Tile';
  import { UrlFunction } from 'ol/Tile';
  import TileGrid from 'ol/tilegrid/TileGrid';
  import Projection from 'ol/proj/Projection';
  import VectorTile_1 from 'ol/source/VectorTile';
  import Event from 'ol/events/Event';
  import Layer from 'ol/layer/Layer';

  export function defaultLoadFunction(tile: VectorTile, url: string): void;

  export interface ReplayState {
    dirty: boolean;
    renderedRenderOrder: OrderFunction;
    renderedTileRevision: number;
    renderedRevision: number;
  }

  export default class VectorImageTile extends Tile {
    constructor(tileCoord: TileCoord, state: TileState, sourceRevision: number, format: FeatureFormat, tileLoadFunction: LoadFunction, urlTileCoord: TileCoord, tileUrlFunction: UrlFunction, sourceTileGrid: TileGrid, tileGrid: TileGrid, sourceTiles: { [key: string]: VectorTile }, pixelRatio: number, projection: Projection, tileClass: VectorTile, handleTileChange: ((this: VectorTile_1, param1: Event) => void), zoom: number);
    getContext(layer: Layer): CanvasRenderingContext2D;
    getImage(layer: Layer): HTMLCanvasElement;
    getReplayState(layer: Layer): ReplayState;
    getTile(tileKey: string): VectorTile;
  }

}
