declare module 'ol/source/ImageCanvas' {

  import ImageCanvas from 'ol/ImageCanvas';
  import { Extent } from 'ol/extent';
  import { Size } from 'ol/size';
  import Projection from 'ol/proj/Projection';
  import ImageSource from 'ol/source/Image';
  import { AttributionLike } from 'ol/source/Source';
  import { ProjectionLike } from 'ol/proj';
  import State from 'ol/source/State';

  export type FunctionType = ((this: ImageCanvas, param1: Extent, param2: number, param3: number, param4: Size, param5: Projection) => HTMLCanvasElement);

  export default class ImageCanvasSource extends ImageSource {
    constructor(opt_options?: Options);
  }

  export type Options = {
    attributions?: AttributionLike;
    canvasFunction?: FunctionType;
    projection: ProjectionLike;
    ratio?: number;
    resolutions?: number[];
    state?: State;
  }

}
