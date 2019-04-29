declare module 'ol/layer/VectorTile' {

  import { Extent } from 'ol/extent';
  import { OrderFunction } from 'ol/render';
  import VectorTileRenderType from 'ol/layer/VectorTileRenderType';
  import VectorTile from 'ol/source/VectorTile';
  import PluggableMap from 'ol/PluggableMap';
  import { StyleLike } from 'ol/style/Style';
  import VectorLayer from 'ol/layer/Vector';
  import LayerType from 'ol/LayerType';
  import VectorSource from 'ol/source/Vector';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';
  import RenderEvent from 'ol/render/Event';

  export interface Options<T> {
    opacity?: number;
    visible?: boolean;
    extent?: Extent;
    zIndex?: number;
    minResolution?: number;
    maxResolution?: number;
    renderOrder?: OrderFunction;
    renderBuffer?: number;
    renderMode?: VectorTileRenderType | string;
    source?: VectorTile<T>;
    map?: PluggableMap;
    declutter?: boolean;
    style?: StyleLike;
    updateWhileAnimating?: boolean;
    updateWhileInteracting?: boolean;
    preload?: number;
    useInterimTilesOnError?: boolean;
  }

  export default class VectorTileLayer<T> extends VectorLayer {
    constructor(opt_options?: Options<T>);
    protected type: LayerType;
    getPreload(): number;
    getSource<T>(): VectorTile<T>;
    getSource(): VectorSource;
    getUseInterimTilesOnError(): boolean;
    setPreload(preload: number): void;
    setUseInterimTilesOnError(useInterimTilesOnError: boolean): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'change:extent', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:extent', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:extent', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:maxResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:maxResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:maxResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:minResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:minResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:minResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:opacity', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:opacity', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:opacity', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:preload', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:preload', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:preload', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:source', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:source', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:source', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:useInterimTilesOnError', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:useInterimTilesOnError', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:useInterimTilesOnError', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:visible', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:visible', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:visible', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): EventsKey;
    on<T>(type: 'postcompose', listener: (evt: RenderEvent<T>) => void): EventsKey;
    once<T>(type: 'postcompose', listener: (evt: RenderEvent<T>) => void): EventsKey;
    un<T>(type: 'postcompose', listener: (evt: RenderEvent<T>) => void): EventsKey;
    on<T>(type: 'precompose', listener: (evt: RenderEvent<T>) => void): EventsKey;
    once<T>(type: 'precompose', listener: (evt: RenderEvent<T>) => void): EventsKey;
    un<T>(type: 'precompose', listener: (evt: RenderEvent<T>) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    on<T>(type: 'render', listener: (evt: RenderEvent<T>) => void): EventsKey;
    once<T>(type: 'render', listener: (evt: RenderEvent<T>) => void): EventsKey;
    un<T>(type: 'render', listener: (evt: RenderEvent<T>) => void): EventsKey;
    on<T>(type: 'rendercomplete', listener: (evt: RenderEvent<T>) => void): EventsKey;
    once<T>(type: 'rendercomplete', listener: (evt: RenderEvent<T>) => void): EventsKey;
    un<T>(type: 'rendercomplete', listener: (evt: RenderEvent<T>) => void): EventsKey;
  }

}
