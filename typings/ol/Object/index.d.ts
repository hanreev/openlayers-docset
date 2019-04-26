declare module 'ol/Object' {

  import Event from 'ol/events/Event';
  import Observable from 'ol/Observable';

  export function getChangeEventType(key: string): string;

  export class ObjectEvent extends Event {
    constructor();
    key: string;
    oldValue: any;
  }

  export default class BaseObject extends Observable {
    constructor(opt_values?: { [key: string]: any });
    get: (key: string) => any;
    getKeys: () => string[];
    getProperties: () => { [key: string]: any };
    notify: (key: string, oldValue: any) => void;
    set: (key: string, value: any, opt_silent?: boolean) => void;
    setProperties: (values: { [key: string]: any }, opt_silent?: boolean) => void;
    unset: (key: string, opt_silent?: boolean) => void;
  }

}
