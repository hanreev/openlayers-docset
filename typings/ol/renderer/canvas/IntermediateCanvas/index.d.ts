declare module 'ol/renderer/canvas/IntermediateCanvas' {

  import CanvasLayerRenderer from 'ol/renderer/canvas/Layer';
  import Layer from 'ol/layer/Layer';
  import { Transform } from 'ol/transform';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';

  export default class IntermediateCanvasRenderer extends CanvasLayerRenderer {
    constructor(layer: Layer);
    protected coordinateToCanvasPixelTransform: Transform;
    getImage(): HTMLCanvasElement | HTMLVideoElement | HTMLImageElement;
    getImageTransform(): Transform;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
  }

}
