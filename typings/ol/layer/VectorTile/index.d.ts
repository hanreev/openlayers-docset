declare module 'ol/layer/VectorTile' {

  import { Extent } from 'ol/extent';
  import { OrderFunction } from 'ol/render';
  import VectorTileRenderType from 'ol/layer/VectorTileRenderType';
  import VectorTile from 'ol/source/VectorTile';
  import PluggableMap from 'ol/PluggableMap';
  import { StyleLike } from 'ol/style/Style';
  import VectorLayer from 'ol/layer/Vector';
  import VectorSource from 'ol/source/Vector';

  export interface Options {
    opacity?: number;
    visible?: boolean;
    extent?: Extent;
    zIndex?: number;
    minResolution?: number;
    maxResolution?: number;
    renderOrder?: OrderFunction;
    renderBuffer?: number;
    renderMode?: VectorTileRenderType | string;
    source?: VectorTile;
    map?: PluggableMap;
    declutter?: boolean;
    style?: StyleLike;
    updateWhileAnimating?: boolean;
    updateWhileInteracting?: boolean;
    preload?: number;
    useInterimTilesOnError?: boolean;
  }

  export default class VectorTileLayer extends VectorLayer {
    constructor(opt_options?: Options);
    getPreload(): number;
    getSource(): VectorTile;
    getSource(): VectorSource;
    getUseInterimTilesOnError(): boolean;
    setPreload(preload: number): void;
    setUseInterimTilesOnError(useInterimTilesOnError: boolean): void;
  }

}
