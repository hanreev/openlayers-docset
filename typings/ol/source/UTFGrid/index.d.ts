declare module 'ol/source/UTFGrid' {

  import Tile from 'ol/Tile';
  import { TileCoord } from 'ol/tilecoord';
  import TileState from 'ol/TileState';
  import { Extent } from 'ol/extent';
  import { Coordinate } from 'ol/coordinate';
  import { Config } from 'ol/source/TileJSON';
  import TileSource from 'ol/source/Tile';

  export class CustomTile extends Tile {
    constructor(tileCoord: TileCoord, state: TileState, src: string, extent: Extent, preemptive: boolean, jsonp: boolean);
    forDataAtCoordinate<T>(coordinate: Coordinate, callback: ((this: T, param1: any) => void), opt_this?: T, opt_request?: boolean): void;
    getData(coordinate: Coordinate): any;
    getImage(): HTMLImageElement;
  }

  export interface Options {
    preemptive?: boolean;
    jsonp?: boolean;
    tileJSON?: Config;
    url?: string;
  }

  export default class UTFGrid<T> extends TileSource<T> {
    constructor(options: Options);
    protected handleTileJSONError(): void;
    protected handleTileJSONResponse(tileJSON: Config): void;
    forDataAtCoordinateAndResolution(coordinate: Coordinate, resolution: number, callback: ((param0: any) => void), opt_request?: boolean): void;
    getTemplate(): string;
  }

  export interface UTFGridJSON {
    grid: string[];
    keys: string[];
    data?: { [key: string]: Object };
  }

}
