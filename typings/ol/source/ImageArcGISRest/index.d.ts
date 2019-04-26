declare module 'ol/source/ImageArcGISRest' {

  import ImageSource from 'ol/source/Image';
  import { LoadFunction } from 'ol/Image';
  import { AttributionLike } from 'ol/source/Source';
  import { ProjectionLike } from 'ol/proj';

  export default class ImageArcGISRest extends ImageSource {
    constructor(opt_options?: Options);
    getImageLoadFunction: () => LoadFunction;
    getParams: () => Object;
    getUrl: () => string | undefined;
    setImageLoadFunction: (imageLoadFunction: LoadFunction) => void;
    setUrl: (url: string | undefined) => void;
    updateParams: (params: Object) => void;
  }

  export type Options = {
    attributions?: AttributionLike;
    crossOrigin?: null | string;
    hidpi?: boolean;
    imageLoadFunction?: LoadFunction;
    params?: { [key: string]: any };
    projection: ProjectionLike;
    ratio?: number;
    resolutions?: number[];
    url?: string;
  }

}
