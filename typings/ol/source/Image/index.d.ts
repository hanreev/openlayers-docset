declare module 'ol/source/Image' {

  import ImageWrapper from 'ol/Image';
  import Source from 'ol/source/Source';
  import { Extent } from 'ol/extent';
  import Projection from 'ol/proj/Projection';
  import ImageBase from 'ol/ImageBase';
  import Event from 'ol/events/Event';
  import { AttributionLike } from 'ol/source/Source';
  import { ProjectionLike } from 'ol/proj';
  import State from 'ol/source/State';

  export function defaultImageLoadFunction(image: ImageWrapper, src: string): void;

  export default class ImageSource extends Source {
    constructor(options: Options);
    findNearestResolution: (resolution: number) => number;
    getImage: (extent: Extent, resolution: number, pixelRatio: number, projection: Projection) => ImageBase;
    getImageInternal: (extent: Extent, resolution: number, pixelRatio: number, projection: Projection) => ImageBase;
    handleImageChange: (event: Event) => void;
  }

  export type Options = {
    attributions?: AttributionLike;
    projection: ProjectionLike;
    resolutions?: number[];
    state?: State;
  }

}
