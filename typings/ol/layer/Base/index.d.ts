declare module 'ol/layer/Base' {

  import BaseObject from 'ol/Object';
  import { Extent } from 'ol/extent';
  import Layer from 'ol/layer/Layer';
  import { State } from 'ol/layer/Layer';
  import State_1 from 'ol/source/State';
  import LayerType from 'ol/LayerType';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';

  export default class BaseLayer extends BaseObject {
    constructor(options: Options);
    getExtent(): Extent;
    getLayersArray(opt_array?: Layer[]): Layer[];
    getLayerState(): State;
    getLayerStatesArray(opt_states?: State[]): State[];
    getMaxResolution(): number;
    getMinResolution(): number;
    getOpacity(): number;
    getSourceState(): State_1;
    getType(): LayerType;
    getVisible(): boolean;
    getZIndex(): number;
    setExtent(extent: Extent): void;
    setMaxResolution(maxResolution: number): void;
    setMinResolution(minResolution: number): void;
    setOpacity(opacity: number): void;
    setVisible(visible: boolean): void;
    setZIndex(zindex: number): void;
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
    on(type: 'change:visible', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:visible', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:visible', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
  }

  export interface Options {
    opacity?: number;
    visible?: boolean;
    extent?: Extent;
    zIndex?: number;
    minResolution?: number;
    maxResolution?: number;
  }

}
