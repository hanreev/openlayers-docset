declare module 'ol/source/ImageStatic' {

  import { AttributionLike } from 'ol/source/Source';
  import { Extent } from 'ol/extent';
  import { LoadFunction } from 'ol/Image';
  import { ProjectionLike } from 'ol/proj';
  import { Size } from 'ol/size';
  import ImageSource from 'ol/source/Image';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';

  export interface Options {
    attributions?: AttributionLike;
    crossOrigin?: string;
    imageExtent?: Extent;
    imageLoadFunction?: LoadFunction;
    projection?: ProjectionLike;
    imageSize?: Size;
    url: string;
  }

  export default class Static extends ImageSource {
    constructor(options: Options);
    getImageExtent(): Extent;
    getUrl(): string;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
  }

}
