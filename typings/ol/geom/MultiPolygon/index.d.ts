declare module 'ol/geom/MultiPolygon' {

  import GeometryLayout from 'ol/geom/GeometryLayout';
  import SimpleGeometry from 'ol/geom/SimpleGeometry';
  import Polygon from 'ol/geom/Polygon';
  import MultiPoint from 'ol/geom/MultiPoint';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';

  export default class MultiPolygon extends SimpleGeometry {
    constructor(coordinates: any[] | number[], opt_layout?: GeometryLayout, opt_endss?: number[][]);
    appendPolygon(polygon: Polygon): void;
    getArea(): number;
    getEndss(): number[][];
    getFlatInteriorPoints(): number[];
    getInteriorPoints(): MultiPoint;
    getOrientedFlatCoordinates(): number[];
    getPolygon(index: number): Polygon;
    getPolygons(): Polygon[];
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
  }

}
