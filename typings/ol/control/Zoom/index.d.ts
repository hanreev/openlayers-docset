declare module 'ol/control/Zoom' {

  import Control from 'ol/control/Control';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';

  export interface Options {
    duration?: number;
    className?: string;
    zoomInLabel?: string | HTMLElement;
    zoomOutLabel?: string | HTMLElement;
    zoomInTipLabel?: string;
    zoomOutTipLabel?: string;
    delta?: number;
    target?: HTMLElement | string;
  }

  export default class Zoom extends Control {
    constructor(opt_options?: Options);
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
  }

}
