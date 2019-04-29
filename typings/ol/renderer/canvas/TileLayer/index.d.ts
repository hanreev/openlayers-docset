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
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';

  export default class CanvasTileLayerRenderer extends IntermediateCanvasRenderer {
    constructor(tileLayer: TileLayer | VectorTileLayer, opt_noContext?: boolean);
    protected context: CanvasRenderingContext2D;
    protected renderedRevision: number;
    protected renderedTiles: Tile[];
    protected tmpExtent: Extent;
    protected zDirection: number;
    protected getTileImage(tile: Tile): HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
    create(mapRenderer: MapRenderer, layer: Layer): CanvasTileLayerRenderer;
    handles(layer: Layer): boolean;
    drawTileImage(tile: Tile, frameState: FrameState, layerState: State, x: number, y: number, w: number, h: number, gutter: number, transition: boolean): void;
    getLayer(): TileLayer | VectorTileLayer;
    getLayer(): Layer;
    getTile(z: number, x: number, y: number, pixelRatio: number, projection: Projection): Tile;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
  }

}
