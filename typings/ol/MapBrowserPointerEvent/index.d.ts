declare module 'ol/MapBrowserPointerEvent' {

  import MapBrowserEvent from 'ol/MapBrowserEvent';
  import PluggableMap from 'ol/PluggableMap';
  import PointerEvent from 'ol/pointer/PointerEvent';
  import { FrameState } from 'ol/PluggableMap';

  export default class MapBrowserPointerEvent<T> extends MapBrowserEvent<T> {
    constructor(type: string, map: PluggableMap, pointerEvent: PointerEvent, opt_dragging?: boolean, opt_frameState?: FrameState<T>);
  }

}
