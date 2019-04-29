declare module 'ol/source/Cluster' {

  import Point from 'ol/geom/Point';
  import VectorSource from 'ol/source/Vector';
  import Feature from 'ol/Feature';
  import { EventsKey } from 'ol/events';
  import { VectorSourceEvent } from 'ol/source/Vector';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';
  import { AttributionLike } from 'ol/source/Source';

  export default class Cluster extends VectorSource {
    constructor(options: Options);
    protected distance: number;
    protected features: Feature[];
    protected geometryFunction: ((param0: Feature) => Point);
    protected resolution: number;
    protected source: VectorSource;
    protected cluster(): void;
    protected createCluster(features: Feature[]): Feature;
    getDistance(): number;
    getSource(): VectorSource;
    setDistance(distance: number): void;
    on(type: 'addfeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    once(type: 'addfeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    un(type: 'addfeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'changefeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    once(type: 'changefeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    un(type: 'changefeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    on(type: 'clear', listener: (evt: VectorSourceEvent) => void): EventsKey;
    once(type: 'clear', listener: (evt: VectorSourceEvent) => void): EventsKey;
    un(type: 'clear', listener: (evt: VectorSourceEvent) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'removefeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    once(type: 'removefeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    un(type: 'removefeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
  }

  export interface Options {
    attributions?: AttributionLike;
    distance?: number;
    geometryFunction?: ((param0: Feature) => Point);
    source: VectorSource;
    wrapX?: boolean;
  }

}
