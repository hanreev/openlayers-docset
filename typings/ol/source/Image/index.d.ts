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
    protected findNearestResolution(resolution: number): number;
    protected getImageInternal(extent: Extent, resolution: number, pixelRatio: number, projection: Projection): ImageBase;
    protected handleImageChange(event: Event): void;
    getImage(extent: Extent, resolution: number, pixelRatio: number, projection: Projection): ImageBase;
  }

  export interface Options {
    attributions?: AttributionLike;
    projection: ProjectionLike;
    resolutions?: number[];
    state?: State;
  }

}
