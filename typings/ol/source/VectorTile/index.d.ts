declare module 'ol/source/VectorTile' {

  import { AttributionLike } from 'ol/source/Source';
  import { Extent } from 'ol/extent';
  import FeatureFormat from 'ol/format/Feature';
  import { ProjectionLike } from 'ol/proj';
  import State from 'ol/source/State';
  import VectorTile_1 from 'ol/VectorTile';
  import { Size } from 'ol/size';
  import TileGrid from 'ol/tilegrid/TileGrid';
  import { LoadFunction } from 'ol/Tile';
  import { UrlFunction } from 'ol/Tile';
  import UrlTile from 'ol/source/UrlTile';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';
  import { TileSourceEvent } from 'ol/source/Tile';

  export interface Options {
    attributions?: AttributionLike;
    cacheSize?: number;
    extent?: Extent;
    format?: FeatureFormat;
    overlaps?: boolean;
    projection?: ProjectionLike;
    state?: State;
    tileClass?: VectorTile_1;
    maxZoom?: number;
    minZoom?: number;
    tileSize?: number | Size;
    tileGrid?: TileGrid;
    tileLoadFunction?: LoadFunction;
    tileUrlFunction?: UrlFunction;
    url?: string;
    transition?: number;
    urls?: string[];
    wrapX?: boolean;
  }

  export default class VectorTile<T> extends UrlTile<T> {
    constructor(options: Options);
    protected tileClass: VectorTile_1;
    clear(): void;
    getOverlaps(): boolean;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): EventsKey;
    on(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): EventsKey;
    on(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): EventsKey;
  }

}
