declare module 'ol/source/ImageArcGISRest' {

  import ImageSource from 'ol/source/Image';
  import { LoadFunction } from 'ol/Image';
  import { AttributionLike } from 'ol/source/Source';
  import { ProjectionLike } from 'ol/proj';

  export default class ImageArcGISRest extends ImageSource {
    constructor(opt_options?: Options);
    getImageLoadFunction(): LoadFunction;
    getParams(): Object;
    getUrl(): string;
    setImageLoadFunction(imageLoadFunction: LoadFunction): void;
    setUrl(url: string): void;
    updateParams(params: Object): void;
  }

  export interface Options {
    attributions?: AttributionLike;
    crossOrigin?: string;
    hidpi?: boolean;
    imageLoadFunction?: LoadFunction;
    params?: { [key in string]: any };
    projection: ProjectionLike;
    ratio?: number;
    resolutions?: number[];
    url?: string;
  }

}
