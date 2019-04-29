declare module 'ol/interaction/DragBox' {

  import PointerInteraction from 'ol/interaction/Pointer';
  import MapBrowserEvent from 'ol/MapBrowserEvent';
  import { Pixel } from 'ol/pixel';
  import Polygon from 'ol/geom/Polygon';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';
  import { Coordinate } from 'ol/coordinate';
  import { Condition } from 'ol/events/condition';

  export default class DragBox extends PointerInteraction {
    constructor(opt_options?: Options);
    defaultBoxEndCondition<T>(mapBrowserEvent: MapBrowserEvent<T>, startPixel: Pixel, endPixel: Pixel): boolean;
    getGeometry(): Polygon;
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

  export class DragBoxEvent<T> extends Event {
    constructor(type: string, coordinate: Coordinate, mapBrowserEvent: MapBrowserEvent<T>);
  }

  export enum DragBoxEventType {
    BOXSTART = 'boxstart',
    BOXDRAG = 'boxdrag',
    BOXEND = 'boxend',
  }

  export type EndCondition = (<T>(param1: MapBrowserEvent<T>, param2: Pixel, param3: Pixel) => boolean);

  export interface Options {
    className?: string;
    condition?: Condition;
    minArea?: number;
    boxEndCondition?: EndCondition;
    onBoxEnd: (<T>(param1: MapBrowserEvent<T>) => void);
  }

}
