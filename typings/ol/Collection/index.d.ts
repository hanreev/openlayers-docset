declare module 'ol/Collection' {

  import Event from 'ol/events/Event';
  import BaseObject from 'ol/Object';

  export class CollectionEvent extends Event {
    constructor();
    element: any;
  }

  export default class Collection<T> extends BaseObject {
    constructor(opt_array?: T[], opt_options?: Options);
    clear(): void;
    extend(arr: T[]): Collection<T>;
    forEach(f: ((param0: T, param1: number, param2: T[]) => void)): void;
    getArray(): T[];
    getLength(): number;
    insertAt(index: number, elem: T): void;
    item(index: number): T;
    pop(): T;
    push(elem: T): number;
    remove(elem: T): T;
    removeAt(index: number): T;
    setAt(index: number, elem: T): void;
  }

  export interface Options {
    unique?: boolean;
  }

}
