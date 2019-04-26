declare module 'ol/renderer/canvas/Map' {

  import MapRenderer from 'ol/renderer/Map';
  import PluggableMap from 'ol/PluggableMap';
  import EventType from 'ol/render/EventType';
  import { FrameState } from 'ol/PluggableMap';
  import { Transform } from 'ol/transform';

  export default class CanvasMapRenderer extends MapRenderer {
    constructor(map: PluggableMap);
    dispatchRenderEvent<T>(type: EventType, frameState: FrameState<T>): void;
    dispatchRenderEvent<T>(type: EventType, frameState: FrameState<T>): void;
    getTransform<T>(frameState: FrameState<T>): Transform;
  }

}
