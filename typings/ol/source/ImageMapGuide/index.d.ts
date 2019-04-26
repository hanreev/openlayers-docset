declare module 'ol/source/ImageMapGuide' {

  import { Extent } from 'ol/extent';
  import { Size } from 'ol/size';
  import ImageSource from 'ol/source/Image';
  import { LoadFunction } from 'ol/Image';
  import Projection from 'ol/proj/Projection';
  import { ProjectionLike } from 'ol/proj';

  export default class ImageMapGuide extends ImageSource {
    constructor(options: Options);
    getImageLoadFunction(): LoadFunction;
    getParams(): Object;
    getUrl(baseUrl: string, params: { [key in string]: any }, extent: Extent, size: Size, projection: Projection): string;
    setImageLoadFunction(imageLoadFunction: LoadFunction): void;
    updateParams(params: Object): void;
  }

  export interface Options {
    url?: string;
    crossOrigin?: string;
    displayDpi?: number;
    metersPerUnit?: number;
    hidpi?: boolean;
    useOverlay?: boolean;
    projection: ProjectionLike;
    ratio?: number;
    resolutions?: number[];
    imageLoadFunction?: LoadFunction;
    params?: Object;
  }

}
