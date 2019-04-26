declare module 'ol/renderer/canvas/VectorLayer' {

  import CanvasLayerRenderer from 'ol/renderer/canvas/Layer';
  import VectorLayer from 'ol/layer/Vector';
  import MapRenderer from 'ol/renderer/Map';
  import Layer from 'ol/layer/Layer';
  import { FrameState } from 'ol/PluggableMap';
  import { State } from 'ol/layer/Layer';
  import Event from 'ol/events/Event';
  import Feature from 'ol/Feature';
  import Style from 'ol/style/Style';
  import CanvasReplayGroup from 'ol/render/canvas/ReplayGroup';

  export default class CanvasVectorLayerRenderer extends CanvasLayerRenderer {
    constructor(vectorLayer: VectorLayer);
    'create']: (mapRenderer: MapRenderer, layer: Layer) => CanvasVectorLayerRenderer;
  'handles']: (layer: Layer) => boolean;
  compose: (context: CanvasRenderingContext2D, frameState: FrameState, layerState: State) => void;
  handleFontsChanged_: (event: Event) => void;
  renderFeature: (feature: Feature, resolution: number, pixelRatio: number, styles: Style | Style[], replayGroup: CanvasReplayGroup) => boolean;
}

}
