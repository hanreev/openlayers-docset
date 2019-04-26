declare module 'ol/interaction/DragAndDrop' {

  import Interaction from 'ol/interaction/Interaction';
  import Event from 'ol/events/Event';
  import Feature from 'ol/Feature';
  import Projection from 'ol/proj/Projection';
  import { FeatureLike } from 'ol/Feature';
  import FeatureFormat from 'ol/format/Feature';
  import VectorSource from 'ol/source/Vector';
  import { ProjectionLike } from 'ol/proj';

  export default class DragAndDrop extends Interaction {
    constructor(opt_options?: Options);
  }

  export interface Options {
    formatConstructors?: FeatureFormat[];
    source?: VectorSource;
    projection?: ProjectionLike;
    target?: HTMLElement;
  }

}
