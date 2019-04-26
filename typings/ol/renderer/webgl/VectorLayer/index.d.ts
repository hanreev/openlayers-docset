declare module 'ol/renderer/webgl/VectorLayer' {

  import WebGLLayerRenderer from 'ol/renderer/webgl/Layer';
  import WebGLMapRenderer from 'ol/renderer/webgl/Map';
  import VectorLayer from 'ol/layer/Vector';
  import MapRenderer from 'ol/renderer/Map';
  import Layer from 'ol/layer/Layer';
  import Feature from 'ol/Feature';
  import Style from 'ol/style/Style';
  import WebGLReplayGroup from 'ol/render/webgl/ReplayGroup';

  export default class WebGLVectorLayerRenderer extends WebGLLayerRenderer {
    constructor(mapRenderer: WebGLMapRenderer, vectorLayer: VectorLayer);
    create(mapRenderer: MapRenderer, layer: Layer): WebGLVectorLayerRenderer;
    handles(layer: Layer): boolean;
    renderFeature(feature: Feature, resolution: number, pixelRatio: number, styles: Style | Style[], replayGroup: WebGLReplayGroup): boolean;
  }

}
