declare module 'ol/layer/Group' {

  import BaseLayer from 'ol/layer/Base';
  import Collection from 'ol/Collection';
  import { Extent } from 'ol/extent';

  export default class LayerGroup extends BaseLayer {
    constructor(opt_options?: Options);
    getLayers(): Collection<BaseLayer>;
    setLayers(layers: Collection<BaseLayer>): void;
  }

  export interface Options {
    opacity?: number;
    visible?: boolean;
    extent?: Extent;
    zIndex?: number;
    minResolution?: number;
    maxResolution?: number;
    layers?: BaseLayer[] | Collection<BaseLayer>;
  }

}
