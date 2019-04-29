declare module 'ol/TileCache' {

  import LRUCache from 'ol/structs/LRUCache';
  import TileRange from 'ol/TileRange';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';

  export default class TileCache<T> extends LRUCache<T> {
    constructor(opt_highWaterMark?: number);
    expireCache(usedTiles: { [key: string]: TileRange }): void;
    pruneExceptNewestZ(): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
  }

}
