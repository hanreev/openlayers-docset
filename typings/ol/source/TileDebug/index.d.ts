declare module 'ol/source/TileDebug' {

  import Tile from 'ol/Tile';
  import { TileCoord } from 'ol/tilecoord';
  import { Size } from 'ol/size';
  import { ProjectionLike } from 'ol/proj';
  import TileGrid from 'ol/tilegrid/TileGrid';
  import TileSource from 'ol/source/Tile';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';

  export interface Options {
    projection?: ProjectionLike;
    tileGrid?: TileGrid;
    wrapX?: boolean;
  }

  export default class TileDebug<T> extends TileSource<T> {
    constructor(options: Options);
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
  }

}
