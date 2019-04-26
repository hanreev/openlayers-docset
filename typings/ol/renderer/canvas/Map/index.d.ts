declare module 'ol/renderer/canvas/Map' {

  import MapRenderer from 'ol/renderer/Map';
  import PluggableMap from 'ol/PluggableMap';
  import EventType from 'ol/render/EventType';
  import { FrameState } from 'ol/PluggableMap';
  import { Transform } from 'ol/transform';

  export default class CanvasMapRenderer extends MapRenderer {
    constructor(map: PluggableMap);
    dispatchRenderEvent: (type: EventType, frameState: FrameState) => void;
    getTransform: (frameState: FrameState) => Transform;
  }

}
