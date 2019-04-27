declare module 'ol/source/UrlTile' {

  import { AttributionLike } from 'ol/source/Source';
  import { ProjectionLike } from 'ol/proj';
  import State from 'ol/source/State';
  import TileGrid from 'ol/tilegrid/TileGrid';
  import { LoadFunction } from 'ol/Tile';
  import { UrlFunction } from 'ol/Tile';
  import TileSource from 'ol/source/Tile';
  import Event from 'ol/events/Event';

  export interface Options {
    attributions?: AttributionLike;
    attributionsCollapsible?: boolean;
    cacheSize?: number;
    opaque?: boolean;
    projection?: ProjectionLike;
    state?: State;
    tileGrid?: TileGrid;
    tileLoadFunction: LoadFunction;
    tilePixelRatio?: number;
    tileUrlFunction?: UrlFunction;
    url?: string;
    urls?: string[];
    wrapX?: boolean;
    transition?: number;
    key?: string;
  }

  export default class UrlTile<T> extends TileSource<T> {
    constructor(options: Options);
    protected tileLoadFunction: LoadFunction;
    protected tileUrlFunction: UrlFunction;
    protected urls: string[];
    protected handleTileChange(event: Event): void;
    getTileLoadFunction(): LoadFunction;
    getTileUrlFunction(): UrlFunction;
    getUrls(): string[];
    setTileLoadFunction(tileLoadFunction: LoadFunction): void;
    setTileUrlFunction(tileUrlFunction: UrlFunction, key?: string): void;
    setUrl(url: string): void;
    setUrls(urls: string[]): void;
  }

}
