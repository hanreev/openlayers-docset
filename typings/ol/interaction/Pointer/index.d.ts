declare module 'ol/interaction/Pointer' {

  import PointerEvent from 'ol/pointer/PointerEvent';
  import { Pixel } from 'ol/pixel';
  import MapBrowserPointerEvent from 'ol/MapBrowserPointerEvent';
  import MapBrowserEvent from 'ol/MapBrowserEvent';
  import Interaction from 'ol/interaction/Interaction';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';

  export function centroid(pointerEvents: PointerEvent[]): Pixel;

  export interface Options {
    handleDownEvent?: (<T>(param0: MapBrowserPointerEvent<T>) => boolean);
    handleDragEvent?: (<T>(param0: MapBrowserPointerEvent<T>) => void);
    handleEvent?: (<T>(param0: MapBrowserEvent<T>) => boolean);
    handleMoveEvent?: (<T>(param0: MapBrowserPointerEvent<T>) => void);
    handleUpEvent?: (<T>(param0: MapBrowserPointerEvent<T>) => boolean);
    stopDown?: ((param0: boolean) => boolean);
  }

  export default class PointerInteraction extends Interaction {
    constructor(opt_options?: Options);
    protected handlingDownUpSequence: boolean;
    protected targetPointers: PointerEvent[];
    protected handleDownEvent<T>(mapBrowserEvent: MapBrowserPointerEvent<T>): boolean;
    protected handleDragEvent<T>(mapBrowserEvent: MapBrowserPointerEvent<T>): void;
    protected handleMoveEvent<T>(mapBrowserEvent: MapBrowserPointerEvent<T>): void;
    protected handleUpEvent<T>(mapBrowserEvent: MapBrowserPointerEvent<T>): boolean;
    stopDown(handled: boolean): boolean;
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

}
