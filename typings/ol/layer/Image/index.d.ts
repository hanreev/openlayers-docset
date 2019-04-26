declare module 'ol/layer/Image' {

  import Layer from 'ol/layer/Layer';
  import ImageSource from 'ol/source/Image';
  import { Extent } from 'ol/extent';
  import PluggableMap from 'ol/PluggableMap';

  export default class ImageLayer extends Layer {
    constructor(opt_options?: Options);
    getSource: () => ImageSource;
  }

  export type Options = {
    opacity?: number;
    visible?: boolean;
    extent?: Extent;
    zIndex?: number;
    minResolution?: number;
    maxResolution?: number;
    map?: PluggableMap;
    source?: ImageSource;
  }

}
