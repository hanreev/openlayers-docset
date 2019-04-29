declare module 'ol/interaction/DragZoom' {

  import DragBox from 'ol/interaction/DragBox';
  import { EventsKey } from 'ol/events';
  import { DragBoxEvent } from 'ol/interaction/DragBox';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';
  import { Condition } from 'ol/events/condition';

  export default class DragZoom extends DragBox {
    constructor(opt_options?: Options);
    on<T>(type: 'boxstart', listener: (evt: DragBoxEvent<T>) => void): EventsKey;
    once<T>(type: 'boxstart', listener: (evt: DragBoxEvent<T>) => void): EventsKey;
    un<T>(type: 'boxstart', listener: (evt: DragBoxEvent<T>) => void): EventsKey;
    on<T>(type: 'boxdrag', listener: (evt: DragBoxEvent<T>) => void): EventsKey;
    once<T>(type: 'boxdrag', listener: (evt: DragBoxEvent<T>) => void): EventsKey;
    un<T>(type: 'boxdrag', listener: (evt: DragBoxEvent<T>) => void): EventsKey;
    on<T>(type: 'boxend', listener: (evt: DragBoxEvent<T>) => void): EventsKey;
    once<T>(type: 'boxend', listener: (evt: DragBoxEvent<T>) => void): EventsKey;
    un<T>(type: 'boxend', listener: (evt: DragBoxEvent<T>) => void): EventsKey;
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
    className?: string;
    condition?: Condition;
    duration?: number;
    out?: boolean;
  }

}
