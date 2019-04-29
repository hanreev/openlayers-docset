declare module 'ol/TileCache' {

  import LRUCache from 'ol/structs/LRUCache';
  import TileRange from 'ol/TileRange';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';

  export default class TileCache extends LRUCache<any> {
    constructor(opt_highWaterMark?: number);
    expireCache(usedTiles: { [key: string]: TileRange }): void;
    pruneExceptNewestZ(): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
  }

}
