declare module 'ol/control/ScaleLine' {

  import MapEvent from 'ol/MapEvent';
  import Control from 'ol/control/Control';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';

  export function render(mapEvent: MapEvent): void;

  export interface Options {
    className?: string;
    minWidth?: number;
    render?: ((param0: MapEvent) => void);
    target?: HTMLElement | string;
    units?: Units | string;
  }

  export default class ScaleLine extends Control {
    constructor(opt_options?: Options);
    getUnits(): Units;
    setUnits(units: Units): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'change:units', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:units', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:units', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
  }

  export enum Units {
    DEGREES = 'degrees',
    IMPERIAL = 'imperial',
    NAUTICAL = 'nautical',
    METRIC = 'metric',
    US = 'us',
  }

}
