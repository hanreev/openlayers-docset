declare module 'ol/layer/Heatmap' {

  import VectorLayer from 'ol/layer/Vector';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';
  import RenderEvent from 'ol/render/Event';
  import { Extent } from 'ol/extent';
  import Feature from 'ol/Feature';
  import VectorRenderType from 'ol/layer/VectorRenderType';
  import VectorSource from 'ol/source/Vector';

  export default class Heatmap extends VectorLayer {
    constructor(opt_options?: Options);
    getBlur(): number;
    getGradient(): string[];
    getRadius(): number;
    setBlur(blur: number): void;
    setGradient(colors: string[]): void;
    setRadius(radius: number): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'change:blur', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:blur', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:blur', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:extent', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:extent', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:extent', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:gradient', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:gradient', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:gradient', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:maxResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:maxResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:maxResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:minResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:minResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:minResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:opacity', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:opacity', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:opacity', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:radius', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:radius', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:radius', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:source', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:source', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:source', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:visible', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:visible', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:visible', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'postcompose', listener: (evt: RenderEvent) => void): EventsKey;
    once(type: 'postcompose', listener: (evt: RenderEvent) => void): EventsKey;
    un(type: 'postcompose', listener: (evt: RenderEvent) => void): EventsKey;
    on(type: 'precompose', listener: (evt: RenderEvent) => void): EventsKey;
    once(type: 'precompose', listener: (evt: RenderEvent) => void): EventsKey;
    un(type: 'precompose', listener: (evt: RenderEvent) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'render', listener: (evt: RenderEvent) => void): EventsKey;
    once(type: 'render', listener: (evt: RenderEvent) => void): EventsKey;
    un(type: 'render', listener: (evt: RenderEvent) => void): EventsKey;
    on(type: 'rendercomplete', listener: (evt: RenderEvent) => void): EventsKey;
    once(type: 'rendercomplete', listener: (evt: RenderEvent) => void): EventsKey;
    un(type: 'rendercomplete', listener: (evt: RenderEvent) => void): EventsKey;
  }

  export interface Options {
    opacity?: number;
    visible?: boolean;
    extent?: Extent;
    zIndex?: number;
    minResolution?: number;
    maxResolution?: number;
    gradient?: string[];
    radius?: number;
    blur?: number;
    shadow?: number;
    weight?: string | ((param0: Feature) => number);
    renderMode?: VectorRenderType | string;
    source?: VectorSource;
  }

}
