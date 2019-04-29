declare module 'ol/control/Control' {

  import BaseObject from 'ol/Object';
  import { EventsKey } from 'ol/events';
  import PluggableMap from 'ol/PluggableMap';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';
  import MapEvent from 'ol/MapEvent';

  export default class Control extends BaseObject {
    constructor(options: Options);
    protected element: HTMLElement;
    protected listenerKeys: EventsKey[];
    getMap(): PluggableMap;
    setMap(map: PluggableMap): void;
    setTarget(target: HTMLElement | string): void;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
  }

  export interface Options {
    element?: HTMLElement;
    render?: ((param0: MapEvent) => void);
    target?: HTMLElement | string;
  }

}
