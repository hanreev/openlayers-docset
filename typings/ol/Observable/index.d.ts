declare module 'ol/Observable' {

  import { EventsKey } from 'ol/events';
  import Target from 'ol/events/Target';

  export function unByKey(key: EventsKey | EventsKey[]): void;

  export default class Observable extends Target {
    constructor();
    changed: () => void;
    getRevision: () => number;
    on: (type: string | string[], listener: ((param0: any) => any)) => EventsKey | EventsKey[];
    once: (type: string | string[], listener: ((param0: any) => any)) => EventsKey | EventsKey[];
    un: (type: string | string[], listener: ((param0: any) => any)) => void;
  }

}
