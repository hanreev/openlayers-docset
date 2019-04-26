declare module 'ol/Geolocation' {

  import BaseObject from 'ol/Object';
  import Polygon from 'ol/geom/Polygon';
  import { Coordinate } from 'ol/coordinate';
  import Projection from 'ol/proj/Projection';
  import { ProjectionLike } from 'ol/proj';
  import Event from 'ol/events/Event';

  export default class Geolocation extends BaseObject {
    constructor(opt_options?: Options);
    disposeInternal: () => void;
    getAccuracy: () => number | undefined;
    getAccuracyGeometry: () => Polygon;
    getAltitude: () => number | undefined;
    getAltitudeAccuracy: () => number | undefined;
    getHeading: () => number | undefined;
    getPosition: () => Coordinate | undefined;
    getProjection: () => Projection | undefined;
    getSpeed: () => number | undefined;
    getTracking: () => boolean;
    getTrackingOptions: () => PositionOptions | undefined;
    setProjection: (projection: ProjectionLike) => void;
    setTracking: (tracking: boolean) => void;
    setTrackingOptions: (options: PositionOptions) => void;
  }

  export type Options = {
    tracking?: boolean;
    trackingOptions?: PositionOptions;
    projection?: ProjectionLike;
  }

}
