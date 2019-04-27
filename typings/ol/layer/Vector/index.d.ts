declare module 'ol/layer/Vector' {

  import { Extent } from 'ol/extent';
  import { OrderFunction } from 'ol/render';
  import VectorRenderType from 'ol/layer/VectorRenderType';
  import VectorSource from 'ol/source/Vector';
  import PluggableMap from 'ol/PluggableMap';
  import { StyleLike } from 'ol/style/Style';
  import Layer from 'ol/layer/Layer';
  import LayerType from 'ol/LayerType';
  import Feature from 'ol/Feature';
  import Source from 'ol/source/Source';
  import { StyleFunction } from 'ol/style/Style';
  import Style from 'ol/style/Style';

  export interface Options {
    opacity?: number;
    visible?: boolean;
    extent?: Extent;
    zIndex?: number;
    minResolution?: number;
    maxResolution?: number;
    renderOrder?: OrderFunction;
    renderBuffer?: number;
    renderMode?: VectorRenderType | string;
    source?: VectorSource;
    map?: PluggableMap;
    declutter?: boolean;
    style?: StyleLike;
    updateWhileAnimating?: boolean;
    updateWhileInteracting?: boolean;
  }

  export default class VectorLayer extends Layer {
    constructor(opt_options?: Options);
    protected type: LayerType;
    getDeclutter(): boolean;
    getRenderBuffer(): number;
    getRenderMode(): VectorRenderType | string;
    getRenderOrder(): ((param0: Feature, param1: Feature) => number);
    getSource(): VectorSource;
    getSource(): Source;
    getStyle(): StyleLike;
    getStyleFunction(): StyleFunction;
    getUpdateWhileAnimating(): boolean;
    getUpdateWhileInteracting(): boolean;
    setDeclutter(declutter: boolean): void;
    setRenderOrder(renderOrder: OrderFunction): void;
    setStyle(style: Style | Style[] | StyleFunction): void;
  }

}
