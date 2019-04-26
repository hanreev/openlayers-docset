declare module 'ol/renderer/canvas/ImageLayer' {

  import IntermediateCanvasRenderer from 'ol/renderer/canvas/IntermediateCanvas';
  import ImageLayer from 'ol/layer/Image';
  import VectorLayer from 'ol/layer/Vector';
  import MapRenderer from 'ol/renderer/Map';
  import Layer from 'ol/layer/Layer';

  export default class CanvasImageLayerRenderer extends IntermediateCanvasRenderer {
    constructor(imageLayer: ImageLayer | VectorLayer);
    create(mapRenderer: MapRenderer, layer: Layer): CanvasImageLayerRenderer;
    handles(layer: Layer): boolean;
  }

}
