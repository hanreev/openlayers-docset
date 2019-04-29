declare module 'ol/Geolocation' {

  import BaseObject from 'ol/Object';
  import Polygon from 'ol/geom/Polygon';
  import { Coordinate } from 'ol/coordinate';
  import Projection from 'ol/proj/Projection';
  import { ProjectionLike } from 'ol/proj';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';

  export default class Geolocation extends BaseObject {
    constructor(opt_options?: Options);
    getAccuracy(): number;
    getAccuracyGeometry(): Polygon;
    getAltitude(): number;
    getAltitudeAccuracy(): number;
    getHeading(): number;
    getPosition(): Coordinate;
    getProjection(): Projection;
    getSpeed(): number;
    getTracking(): boolean;
    getTrackingOptions(): PositionOptions;
    setProjection(projection: ProjectionLike): void;
    setTracking(tracking: boolean): void;
    setTrackingOptions(options: PositionOptions): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'change:accuracy', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:accuracy', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:accuracy', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:accuracyGeometry', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:accuracyGeometry', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:accuracyGeometry', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:altitude', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:altitude', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:altitude', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:altitudeAccuracy', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:altitudeAccuracy', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:altitudeAccuracy', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:heading', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:heading', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:heading', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:position', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:position', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:position', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:projection', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:projection', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:projection', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:speed', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:speed', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:speed', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:tracking', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:tracking', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:tracking', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:trackingOptions', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:trackingOptions', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:trackingOptions', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'error', listener: (evt: any) => void): EventsKey;
    once(type: 'error', listener: (evt: any) => void): EventsKey;
    un(type: 'error', listener: (evt: any) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
  }

  export interface Options {
    tracking?: boolean;
    trackingOptions?: PositionOptions;
    projection?: ProjectionLike;
  }

}
