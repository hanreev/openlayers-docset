declare module 'ol/Collection' {

  import Event from 'ol/events/Event';
  import BaseObject from 'ol/Object';

  export class CollectionEvent extends Event {
    constructor();
    element: any;
  }

  export default class Collection<T> extends BaseObject {
    constructor(opt_array?: T[], opt_options?: Options);
    clear: () => void;
    extend: (arr: T[]) => Collection<T>;
    forEach: (f: ((param0: T, param1: number, param2: T[]) => any)) => void;
    getArray: () => T[];
    getLength: () => number;
    insertAt: (index: number, elem: T) => void;
    item: (index: number) => T;
    pop: () => T | undefined;
    push: (elem: T) => number;
    remove: (elem: T) => T | undefined;
    removeAt: (index: number) => T | undefined;
    setAt: (index: number, elem: T) => void;
  }

  export type Options = {
    unique?: boolean;
  }

}
