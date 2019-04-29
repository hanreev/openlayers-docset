declare module 'ol/interaction/Select' {

  import { FeatureLike } from 'ol/Feature';
  import Layer from 'ol/layer/Layer';
  import { StyleFunction } from 'ol/style/Style';
  import MapBrowserEvent from 'ol/MapBrowserEvent';
  import { Condition } from 'ol/events/condition';
  import { StyleLike } from 'ol/style/Style';
  import Collection from 'ol/Collection';
  import Feature from 'ol/Feature';
  import Interaction from 'ol/interaction/Interaction';
  import VectorLayer from 'ol/layer/Vector';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';

  export type FilterFunction = ((param0: FeatureLike, param1: Layer) => boolean);

  export interface Options {
    addCondition?: Condition;
    condition?: Condition;
    layers?: Layer[] | ((param0: Layer) => boolean);
    style?: StyleLike;
    removeCondition?: Condition;
    toggleCondition?: Condition;
    multi?: boolean;
    features?: Collection<Feature>;
    filter?: FilterFunction;
    wrapX?: boolean;
    hitTolerance?: number;
  }

  export default class Select extends Interaction {
    constructor(opt_options?: Options);
    getFeatures(): Collection<Feature>;
    getHitTolerance(): number;
    getLayer(feature: FeatureLike): VectorLayer;
    getOverlay(): VectorLayer;
    setHitTolerance(hitTolerance: number): void;
    on<T>(type: 'select', listener: (evt: SelectEvent<T>) => void): EventsKey;
    once<T>(type: 'select', listener: (evt: SelectEvent<T>) => void): EventsKey;
    un<T>(type: 'select', listener: (evt: SelectEvent<T>) => void): EventsKey;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
  }

  export class SelectEvent<T> extends Event {
    constructor(type: SelectEventType, selected: Feature[], deselected: Feature[], mapBrowserEvent: MapBrowserEvent<T>);
    deselected: Feature[];
    mapBrowserEvent: MapBrowserEvent<T>;
    selected: Feature[];
  }

  export enum SelectEventType {
    SELECT = 'select',
  }

}
