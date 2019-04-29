declare module 'ol/layer/Image' {

  import Layer from 'ol/layer/Layer';
  import LayerType from 'ol/LayerType';
  import ImageSource from 'ol/source/Image';
  import Source from 'ol/source/Source';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';
  import RenderEvent from 'ol/render/Event';
  import { Extent } from 'ol/extent';
  import PluggableMap from 'ol/PluggableMap';

  export default class ImageLayer extends Layer {
    constructor(opt_options?: Options);
    protected type: LayerType;
    getSource(): ImageSource;
    getSource(): Source;
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
    on(type: 'change:source', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:source', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:source', listener: (evt: ObjectEvent) => void): EventsKey;
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

  export interface Options {
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
