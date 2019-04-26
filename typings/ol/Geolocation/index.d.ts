declare module 'ol/Geolocation' {

  import BaseObject from 'ol/Object';
  import Polygon from 'ol/geom/Polygon';
  import { Coordinate } from 'ol/coordinate';
  import Projection from 'ol/proj/Projection';
  import { ProjectionLike } from 'ol/proj';
  import Event from 'ol/events/Event';

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
  }

  export interface Options {
    tracking?: boolean;
    trackingOptions?: PositionOptions;
    projection?: ProjectionLike;
  }

}
