declare module 'ol/interaction/KeyboardPan' {

  import MapBrowserEvent from 'ol/MapBrowserEvent';
  import Interaction from 'ol/interaction/Interaction';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';
  import { Condition } from 'ol/events/condition';

  export default class KeyboardPan extends Interaction {
    constructor(opt_options?: Options);
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
  }

  export interface Options {
    condition?: Condition;
    duration?: number;
    pixelDelta?: number;
  }

}
