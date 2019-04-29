declare module 'ol/geom/MultiLineString' {

  import GeometryLayout from 'ol/geom/GeometryLayout';
  import SimpleGeometry from 'ol/geom/SimpleGeometry';
  import LineString from 'ol/geom/LineString';
  import { Coordinate } from 'ol/coordinate';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';

  export default class MultiLineString extends SimpleGeometry {
    constructor(coordinates: any[] | number[], opt_layout?: GeometryLayout, opt_ends?: number[]);
    appendLineString(lineString: LineString): void;
    getCoordinateAtM(m: number, opt_extrapolate?: boolean, opt_interpolate?: boolean): Coordinate;
    getEnds(): number[];
    getFlatMidpoints(): number[];
    getLineString(index: number): LineString;
    getLineStrings(): LineString[];
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
  }

}
