declare module 'ol/source/TileJSON' {

  import { AttributionLike } from 'ol/source/Source';
  import { LoadFunction } from 'ol/Tile';
  import TileImage from 'ol/source/TileImage';

  export interface Config {
    name?: string;
    description?: string;
    version?: string;
    attribution?: string;
    template?: string;
    legend?: string;
    scheme?: string;
    tiles: string[];
    grids?: string[];
    minzoom?: number;
    maxzoom?: number;
    bounds?: number[];
    center?: number[];
  }

  export interface Options {
    attributions?: AttributionLike;
    cacheSize?: number;
    crossOrigin?: string;
    jsonp?: boolean;
    reprojectionErrorThreshold?: number;
    tileJSON?: Config;
    tileLoadFunction?: LoadFunction;
    url?: string;
    wrapX?: boolean;
    transition?: number;
  }

  export default class TileJSON<T> extends TileImage<T> {
    constructor(options: Options);
    protected handleTileJSONError(): void;
    protected handleTileJSONResponse(tileJSON: Config): void;
    getTileJSON(): Config;
  }

}
