declare module 'ol/interaction/Translate' {

  import Event from 'ol/events/Event';
  import Collection from 'ol/Collection';
  import Feature from 'ol/Feature';
  import Layer from 'ol/layer/Layer';
  import PointerInteraction from 'ol/interaction/Pointer';

  export class TranslateEvent extends Event {
    constructor();
    features: Collection<Feature>;
  }

  export type Options = {
    features?: Collection<Feature>;
    layers?: Layer[] | (() => void);
    hitTolerance?: number;
  }

  export default class Translate extends PointerInteraction {
    constructor(opt_options?: Options);
    getHitTolerance: () => number;
    setHitTolerance: (hitTolerance: number) => void;
  }

}
