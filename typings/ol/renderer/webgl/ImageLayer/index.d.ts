declare module 'ol/renderer/webgl/ImageLayer' {

  import WebGLLayerRenderer from 'ol/renderer/webgl/Layer';
  import WebGLMapRenderer from 'ol/renderer/webgl/Map';
  import ImageLayer from 'ol/layer/Image';
  import MapRenderer from 'ol/renderer/Map';
  import Layer from 'ol/layer/Layer';

  export default class WebGLImageLayerRenderer extends WebGLLayerRenderer {
    constructor(mapRenderer: WebGLMapRenderer, imageLayer: ImageLayer);
    'create']: (mapRenderer: MapRenderer, layer: Layer) => WebGLImageLayerRenderer;
  'handles']: (layer: Layer) => boolean;
}

}
