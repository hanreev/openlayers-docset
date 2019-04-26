declare module 'ol/source/UTFGrid' {

  import Tile from 'ol/Tile';
  import { Coordinate } from 'ol/coordinate';
  import { TileCoord } from 'ol/tilecoord';
  import TileState from 'ol/TileState';
  import { Extent } from 'ol/extent';
  import { Config } from 'ol/source/TileJSON';
  import TileSource from 'ol/source/Tile';

  export class CustomTile extends Tile {
    constructor();
    forDataAtCoordinate: (coordinate: Coordinate, callback: ((this: T, param1: any) => void), opt_this?: T, opt_request?: boolean) => void;
    getData: (coordinate: Coordinate) => any;
    getImage: () => HTMLImageElement;
  }

  export class CustomTile {
    constructor(tileCoord: TileCoord, state: TileState, src: string, extent: Extent, preemptive: boolean, jsonp: boolean);
    forDataAtCoordinate: (coordinate: Coordinate, callback: ((this: T, param1: any) => void), opt_this?: T, opt_request?: boolean) => void;
    getData: (coordinate: Coordinate) => any;
    getImage: () => HTMLImageElement;
  }

  export type Options = {
    preemptive?: boolean;
    jsonp?: boolean;
    tileJSON?: Config;
    url?: string;
  }

  export default class UTFGrid extends TileSource {
    constructor(options: Options);
    forDataAtCoordinateAndResolution: (coordinate: Coordinate, resolution: number, callback: ((param0: any) => void), opt_request?: boolean) => void;
    getTemplate: () => string | undefined;
    handleTileJSONError: () => void;
    handleTileJSONResponse: (tileJSON: Config) => void;
  }

  export type UTFGridJSON = {
    grid: string[];
    keys: string[];
    data?: { [key: string]: Object };
  }

}
