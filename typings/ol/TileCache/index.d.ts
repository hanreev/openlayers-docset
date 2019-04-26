declare module 'ol/TileCache' {

  import LRUCache from 'ol/structs/LRUCache';
  import TileRange from 'ol/TileRange';

  export default class TileCache extends LRUCache {
    constructor(opt_highWaterMark?: number);
    expireCache: (usedTiles: { [key: string]: TileRange }) => void;
    pruneExceptNewestZ: () => void;
  }

}
