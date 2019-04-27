declare module 'ol/renderer/canvas/TileLayer' {

  import IntermediateCanvasRenderer from 'ol/renderer/canvas/IntermediateCanvas';
  import TileLayer from 'ol/layer/Tile';
  import VectorTileLayer from 'ol/layer/VectorTile';
  import Tile from 'ol/Tile';
  import { Extent } from 'ol/extent';
  import MapRenderer from 'ol/renderer/Map';
  import Layer from 'ol/layer/Layer';
  import { FrameState } from 'ol/PluggableMap';
  import { State } from 'ol/layer/Layer';
  import Projection from 'ol/proj/Projection';

  export default class CanvasTileLayerRenderer<T> extends IntermediateCanvasRenderer {
    constructor(tileLayer: TileLayer<T> | VectorTileLayer<T>, opt_noContext?: boolean);
    protected context: CanvasRenderingContext2D;
    protected renderedRevision: number;
    protected renderedTiles: Tile[];
    protected tmpExtent: Extent;
    protected zDirection: number;
    protected getTileImage(tile: Tile): HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
    create<T>(mapRenderer: MapRenderer, layer: Layer): CanvasTileLayerRenderer<T>;
    handles(layer: Layer): boolean;
    drawTileImage<T>(tile: Tile, frameState: FrameState<T>, layerState: State, x: number, y: number, w: number, h: number, gutter: number, transition: boolean): void;
    getLayer<T>(): TileLayer<T> | VectorTileLayer<T>;
    getLayer(): Layer;
    getTile(z: number, x: number, y: number, pixelRatio: number, projection: Projection): Tile;
  }

}
