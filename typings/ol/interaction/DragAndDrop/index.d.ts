declare module 'ol/interaction/DragAndDrop' {

  import Interaction from 'ol/interaction/Interaction';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';
  import Feature from 'ol/Feature';
  import Projection from 'ol/proj/Projection';
  import { FeatureLike } from 'ol/Feature';
  import FeatureFormat from 'ol/format/Feature';
  import VectorSource from 'ol/source/Vector';
  import { ProjectionLike } from 'ol/proj';

  export default class DragAndDrop extends Interaction {
    constructor(opt_options?: Options);
    on(type: 'addfeatures', listener: (evt: DragAndDropEvent) => void): EventsKey;
    once(type: 'addfeatures', listener: (evt: DragAndDropEvent) => void): EventsKey;
    un(type: 'addfeatures', listener: (evt: DragAndDropEvent) => void): EventsKey;
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

  export class DragAndDropEvent extends Event {
    constructor(type: DragAndDropEventType, file: File, opt_features?: Feature[], opt_projection?: Projection);
    features: FeatureLike[];
    file: File;
    projection: Projection;
  }

  export enum DragAndDropEventType {
    ADD_FEATURES = 'addfeatures',
  }

  export interface Options {
    formatConstructors?: FeatureFormat[];
    source?: VectorSource;
    projection?: ProjectionLike;
    target?: HTMLElement;
  }

}
