declare module 'ol/source/ImageStatic' {

  import { AttributionLike } from 'ol/source/Source';
  import { Extent } from 'ol/extent';
  import { LoadFunction } from 'ol/Image';
  import { ProjectionLike } from 'ol/proj';
  import { Size } from 'ol/size';
  import ImageSource from 'ol/source/Image';

  export type Options = {
    attributions?: AttributionLike;
    crossOrigin?: null | string;
    imageExtent?: Extent;
    imageLoadFunction?: LoadFunction;
    projection: ProjectionLike;
    imageSize?: Size;
    url: string;
  }

  export default class Static extends ImageSource {
    constructor(options: Options);
    getImageExtent: () => Extent;
    getUrl: () => string;
  }

}
