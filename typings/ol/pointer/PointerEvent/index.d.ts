declare module 'ol/pointer/PointerEvent' {

  import Event from 'ol/events/Event';

  export default class PointerEvent extends Event {
    constructor(type: string, originalEvent: Event, opt_eventDict?: { [key in string]: any });
  }

}
