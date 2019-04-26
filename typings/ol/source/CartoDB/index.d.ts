declare module 'ol/source/CartoDB' {

  import XYZ from 'ol/source/XYZ';
  import { AttributionLike } from 'ol/source/Source';
  import { ProjectionLike } from 'ol/proj';

  export default class CartoDB extends XYZ {
    constructor(options: Options);
    getConfig: () => Object;
    setConfig: (config: Object) => void;
    updateConfig: (config: Object) => void;
  }

  export type CartoDBLayerInfo = {
    layergroupid: string;
    cdn_url: Object;
  }

  export type Options = {
    attributions?: AttributionLike;
    cacheSize?: number;
    crossOrigin?: null | string;
    projection?: ProjectionLike;
    maxZoom?: number;
    minZoom?: number;
    wrapX?: boolean;
    config?: Object;
    map?: string;
    account: string;
  }

}
