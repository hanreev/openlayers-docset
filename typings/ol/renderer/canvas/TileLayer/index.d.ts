declare module 'ol/renderer/canvas/TileLayer' {

  import IntermediateCanvasRenderer from 'ol/renderer/canvas/IntermediateCanvas';
  import TileLayer from 'ol/layer/Tile';
  import VectorTileLayer from 'ol/layer/VectorTile';
  import MapRenderer from 'ol/renderer/Map';
  import Layer from 'ol/layer/Layer';
  import Tile from 'ol/Tile';
  import { FrameState } from 'ol/PluggableMap';
  import { State } from 'ol/layer/Layer';
  import Projection from 'ol/proj/Projection';

  export default class CanvasTileLayerRenderer extends IntermediateCanvasRenderer {
    constructor(tileLayer: TileLayer | VectorTileLayer, opt_noContext?: boolean);
    'create']: (mapRenderer: MapRenderer, layer: Layer) => CanvasTileLayerRenderer;
  'handles']: (layer: Layer) => boolean;
  drawTileImage: (tile: Tile, frameState: FrameState, layerState: State, x: number, y: number, w: number, h: number, gutter: number, transition: boolean) => void;
  getLayer: () => TileLayer | VectorTileLayer;
  getTile: (z: number, x: number, y: number, pixelRatio: number, projection: Projection) => Tile;
  getTileImage: (tile: Tile) => HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
}

}
