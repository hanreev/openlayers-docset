declare module 'ol/layer/Tile' {

  import { Extent } from 'ol/extent';
  import TileSource from 'ol/source/Tile';
  import PluggableMap from 'ol/PluggableMap';
  import Layer from 'ol/layer/Layer';

  export type Options = {
    opacity?: number;
    visible?: boolean;
    extent?: Extent;
    zIndex?: number;
    minResolution?: number;
    maxResolution?: number;
    preload?: number;
    source?: TileSource;
    map?: PluggableMap;
    useInterimTilesOnError?: boolean;
  }

  export default class TileLayer extends Layer {
    constructor(opt_options?: Options);
    getPreload: () => number;
    getSource: () => TileSource;
    getUseInterimTilesOnError: () => boolean;
    setPreload: (preload: number) => void;
    setUseInterimTilesOnError: (useInterimTilesOnError: boolean) => void;
  }

}
