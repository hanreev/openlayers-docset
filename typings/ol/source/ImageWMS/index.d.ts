declare module 'ol/source/ImageWMS' {

  import ImageSource from 'ol/source/Image';
  import { Coordinate } from 'ol/coordinate';
  import { ProjectionLike } from 'ol/proj';
  import { LoadFunction } from 'ol/Image';
  import { AttributionLike } from 'ol/source/Source';
  import WMSServerType from 'ol/source/WMSServerType';

  export default class ImageWMS extends ImageSource {
    constructor(opt_options?: Options);
    getGetFeatureInfoUrl(coordinate: Coordinate, resolution: number, projection: ProjectionLike, params: Object): string;
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
    serverType?: WMSServerType | string;
    imageLoadFunction?: LoadFunction;
    params: { [key in string]: any };
    projection: ProjectionLike;
    ratio?: number;
    resolutions?: number[];
    url: string;
  }

}
