declare module 'ol/layer/Tile' {

  import { Extent } from 'ol/extent';
  import TileSource from 'ol/source/Tile';
  import PluggableMap from 'ol/PluggableMap';
  import Layer from 'ol/layer/Layer';
  import LayerType from 'ol/LayerType';
  import Source from 'ol/source/Source';

  export interface Options<T> {
    opacity?: number;
    visible?: boolean;
    extent?: Extent;
    zIndex?: number;
    minResolution?: number;
    maxResolution?: number;
    preload?: number;
    source?: TileSource<T>;
    map?: PluggableMap;
    useInterimTilesOnError?: boolean;
  }

  export default class TileLayer<T> extends Layer {
    constructor(opt_options?: Options<T>);
    protected type: LayerType;
    getPreload(): number;
    getSource<T>(): TileSource<T>;
    getSource(): Source;
    getUseInterimTilesOnError(): boolean;
    setPreload(preload: number): void;
    setUseInterimTilesOnError(useInterimTilesOnError: boolean): void;
  }

}
