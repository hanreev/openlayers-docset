declare module 'ol/source/Raster' {

  import ImageSource from 'ol/source/Image';
  import CanvasLayerRenderer from 'ol/renderer/canvas/Layer';
  import Source from 'ol/source/Source';
  import Layer from 'ol/layer/Layer';
  import TileSource from 'ol/source/Tile';
  import { FrameState } from 'ol/PluggableMap';
  import { State } from 'ol/layer/Layer';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';
  import { Extent } from 'ol/extent';

  export type Operation = ((param0: number[][] | ImageData[], param1: any) => number[] | ImageData);

  export interface Options {
    sources: any[];
    operation?: Operation;
    lib?: any;
    threads?: number;
    operationType?: RasterOperationType;
  }

  export enum RasterOperationType {
    PIXEL = 'pixel',
    IMAGE = 'image',
  }

  export default class RasterSource extends ImageSource {
    constructor(options: Options);
    setOperation(operation: Operation, opt_lib?: any): void;
    on<T>(type: 'afteroperations', listener: (evt: RasterSourceEvent<T>) => void): EventsKey;
    once<T>(type: 'afteroperations', listener: (evt: RasterSourceEvent<T>) => void): EventsKey;
    un<T>(type: 'afteroperations', listener: (evt: RasterSourceEvent<T>) => void): EventsKey;
    on<T>(type: 'beforeoperations', listener: (evt: RasterSourceEvent<T>) => void): EventsKey;
    once<T>(type: 'beforeoperations', listener: (evt: RasterSourceEvent<T>) => void): EventsKey;
    un<T>(type: 'beforeoperations', listener: (evt: RasterSourceEvent<T>) => void): EventsKey;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
  }

  export class RasterSourceEvent<T> extends Event {
    constructor(type: string, frameState: FrameState<T>, data: any);
    data: any;
    extent: Extent;
    resolution: number;
  }

}
