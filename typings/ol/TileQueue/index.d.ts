declare module 'ol/TileQueue' {

  import Tile from 'ol/Tile';
  import { Coordinate } from 'ol/coordinate';
  import PriorityQueue from 'ol/structs/PriorityQueue';
  import Event from 'ol/events/Event';

  export type PriorityFunction = ((param0: Tile, param1: string, param2: Coordinate, param3: number) => number);

  export default class TileQueue<T> extends PriorityQueue<T> {
    constructor(tilePriorityFunction: PriorityFunction, tileChangeCallback: (() => void));
    getTilesLoading(): number;
    handleTileChange(event: Event): void;
    loadMoreTiles(maxTotalLoading: number, maxNewLoads: number): void;
  }

}