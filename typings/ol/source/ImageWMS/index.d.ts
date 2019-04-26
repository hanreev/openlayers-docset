declare module 'ol/source/ImageWMS' {

  import ImageSource from 'ol/source/Image';
  import { Coordinate } from 'ol/coordinate';
  import { ProjectionLike } from 'ol/proj';
  import { LoadFunction } from 'ol/Image';
  import { AttributionLike } from 'ol/source/Source';
  import WMSServerType from 'ol/source/WMSServerType';

  export default class ImageWMS extends ImageSource {
    constructor(opt_options?: Options);
    getGetFeatureInfoUrl: (coordinate: Coordinate, resolution: number, projection: ProjectionLike, params: Object) => string | undefined;
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
    serverType?: WMSServerType | string;
    imageLoadFunction?: LoadFunction;
    params: { [key: string]: any };
    projection: ProjectionLike;
    ratio?: number;
    resolutions?: number[];
    url: string;
  }

}
