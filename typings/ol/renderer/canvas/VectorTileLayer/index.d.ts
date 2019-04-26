declare module 'ol/renderer/canvas/VectorTileLayer' {

  import CanvasTileLayerRenderer from 'ol/renderer/canvas/TileLayer';
  import VectorTileLayer from 'ol/layer/VectorTile';
  import MapRenderer from 'ol/renderer/Map';
  import Layer from 'ol/layer/Layer';
  import Event from 'ol/events/Event';
  import { FeatureLike } from 'ol/Feature';
  import Style from 'ol/style/Style';
  import CanvasReplayGroup from 'ol/render/canvas/ReplayGroup';

  export default class CanvasVectorTileLayerRenderer extends CanvasTileLayerRenderer {
    constructor(layer: VectorTileLayer);
    create(mapRenderer: MapRenderer, layer: Layer): CanvasVectorTileLayerRenderer;
    handles(layer: Layer): boolean;
    handleFontsChanged_(event: Event): void;
    renderFeature(feature: FeatureLike, squaredTolerance: number, styles: Style | Style[], replayGroup: CanvasReplayGroup): boolean;
  }

}
