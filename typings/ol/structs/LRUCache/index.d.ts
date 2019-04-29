declare module 'ol/structs/LRUCache' {

  import Target from 'ol/events/Target';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';

  export interface Entry {
    key_: string;
    newer: any;
    older: any;
    value_: any;
  }

  export default class LRUCache<T> extends Target {
    constructor(opt_highWaterMark?: number);
    canExpireCache(): boolean;
    clear(): void;
    containsKey(key: string): boolean;
    forEach<S>(f: (<T>(param1: T, param2: string, param3: LRUCache<T>) => void), opt_this?: S): void;
    get(key: string): T;
    getCount(): number;
    getKeys(): string[];
    getValues(): T[];
    peekFirstKey(): string;
    peekLast(): T;
    peekLastKey(): string;
    pop(): T;
    prune(): void;
    remove(key: string): T;
    replace(key: string, value: T): void;
    set(key: string, value: T): void;
    setSize(size: number): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
  }

}
