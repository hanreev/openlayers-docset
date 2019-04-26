declare module 'ol/structs/LRUCache' {

  import Target from 'ol/events/Target';

  export interface Entry {
    key_: string;
    newer: Object;
    older: Object;
    value_: any;
  }

  export default class LRUCache<T> extends Target {
    constructor(opt_highWaterMark?: number);
    canExpireCache(): boolean;
    clear(): void;
    containsKey(key: string): boolean;
    forEach<S>(f: (<T>(this: S, param1: T, param2: string, param3: LRUCache<T>) => void), opt_this?: S): void;
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
  }

}