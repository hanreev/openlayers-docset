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
  import Event from 'ol/events/Event';

  export type FilterFunction = ((param0: FeatureLike, param1: Layer) => boolean);

  export type Options = {
    addCondition?: Condition;
    condition?: Condition;
    layers?: Layer[] | (() => void);
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
    getFeatures: () => Collection<Feature>;
    getHitTolerance: () => number;
    getLayer: (feature: FeatureLike) => VectorLayer;
    getOverlay: () => VectorLayer;
    setHitTolerance: (hitTolerance: number) => void;
  }

}
