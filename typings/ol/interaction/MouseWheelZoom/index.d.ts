declare module 'ol/interaction/MouseWheelZoom' {

  import Interaction from 'ol/interaction/Interaction';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';
  import { Condition } from 'ol/events/condition';

  export enum Mode {
    TRACKPAD = 'trackpad',
    WHEEL = 'wheel',
  }

  export default class MouseWheelZoom extends Interaction {
    constructor(opt_options?: Options);
    setMouseAnchor(useAnchor: boolean): void;
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
    timeout?: number;
    constrainResolution?: boolean;
    useAnchor?: boolean;
  }

}
