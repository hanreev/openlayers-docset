declare module 'ol/Tile' {

  import Target from 'ol/events/Target';
  import { TileCoord } from 'ol/tilecoord';
  import TileState from 'ol/TileState';
  import Projection from 'ol/proj/Projection';

  export type LoadFunction = ((param0: Tile, param1: string) => void);

  export interface Options {
    transition?: number;
  }

  export default class Tile extends Target {
    constructor(tileCoord: TileCoord, state: TileState, opt_options?: Options);
    changed(): void;
    endTransition(id: string): void;
    getAlpha(id: string, time: number): number;
    getInterimTile(): Tile;
    getKey(): string;
    getState(): TileState;
    getTileCoord(): TileCoord;
    inTransition(id: string): boolean;
    load(): void;
    refreshInterimChain(): void;
    setState(state: TileState): void;
  }

  export type UrlFunction = ((param0: TileCoord, param1: number, param2: Projection) => string);

}
