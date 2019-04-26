declare module 'ol/MapEvent' {

  import Event from 'ol/events/Event';
  import PluggableMap from 'ol/PluggableMap';
  import { FrameState } from 'ol/PluggableMap';

  export default class MapEvent<T> extends Event {
    constructor(type: string, map: PluggableMap, opt_frameState?: FrameState<T>);
    frameState: FrameState<T>;
    map: PluggableMap;
  }

}
