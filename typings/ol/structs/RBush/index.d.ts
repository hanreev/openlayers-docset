declare module 'ol/structs/RBush' {

  import { Extent } from 'ol/extent';

  export type Entry = {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    value?: Object;
  }

  export default class RBush<T> {
    constructor(opt_maxEntries?: number);
    clear: () => void;
    concat: (rbush: RBush) => void;
    forEach: (callback: ((this: S, param1: T) => any), opt_this?: S) => any;
    forEachInExtent: (extent: Extent, callback: ((this: S, param1: T) => any), opt_this?: S) => any;
    getAll: () => T[];
    getExtent: (opt_extent?: Extent) => Extent;
    getInExtent: (extent: Extent) => T[];
    insert: (extent: Extent, value: T) => void;
    isEmpty: () => boolean;
    load: (extents: Extent[], values: T[]) => void;
    remove: (value: T) => boolean;
    update: (extent: Extent, value: T) => void;
  }

}
