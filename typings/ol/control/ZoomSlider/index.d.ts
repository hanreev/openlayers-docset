declare module 'ol/control/ZoomSlider' {

  import MapEvent from 'ol/MapEvent';
  import Control from 'ol/control/Control';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';

  export function render(mapEvent: MapEvent): void;

  export interface Options {
    className?: string;
    duration?: number;
    render?: ((param0: MapEvent) => void);
  }

  export default class ZoomSlider extends Control {
    constructor(opt_options?: Options);
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
  }

}
