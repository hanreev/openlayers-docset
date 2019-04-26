declare module 'ol/source/Raster' {

  import ImageSource from 'ol/source/Image';
  import CanvasLayerRenderer from 'ol/renderer/canvas/Layer';
  import Source from 'ol/source/Source';
  import Layer from 'ol/layer/Layer';
  import TileSource from 'ol/source/Tile';
  import { FrameState } from 'ol/PluggableMap';
  import { State } from 'ol/layer/Layer';
  import Event from 'ol/events/Event';
  import { Extent } from 'ol/extent';

  export type Operation = ((param0: number[][] | ImageData[], param1: Object) => number[] | ImageData);

  export interface Options {
    sources: any[];
    operation?: Operation;
    lib?: Object;
    threads?: number;
    operationType?: RasterOperationType;
  }

  export enum RasterOperationType {
    PIXEL = 'pixel',
    IMAGE = 'image',
  }

  export default class RasterSource extends ImageSource {
    constructor(options: Options);
    setOperation(operation: Operation, opt_lib?: Object): void;
  }

}
