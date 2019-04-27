declare module 'ol/renderer/canvas/IntermediateCanvas' {

  import CanvasLayerRenderer from 'ol/renderer/canvas/Layer';
  import Layer from 'ol/layer/Layer';
  import { Transform } from 'ol/transform';

  export default class IntermediateCanvasRenderer extends CanvasLayerRenderer {
    constructor(layer: Layer);
    protected coordinateToCanvasPixelTransform: Transform;
    getImage(): HTMLCanvasElement | HTMLVideoElement | HTMLImageElement;
    getImageTransform(): Transform;
  }

}
