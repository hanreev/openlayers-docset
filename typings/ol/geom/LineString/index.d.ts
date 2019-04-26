declare module 'ol/geom/LineString' {

  import SimpleGeometry from 'ol/geom/SimpleGeometry';
  import { Coordinate } from 'ol/coordinate';

  export default class LineString extends SimpleGeometry {
    constructor(coordinates: Coordinate[] | number[], opt_layout?: GeometryLayout);
    appendCoordinate: (coordinate: Coordinate) => void;
    forEachSegment: (callback: ((this: S, param1: Coordinate, param2: Coordinate) => T)) => T | boolean;
    getCoordinateAt: (fraction: number, opt_dest?: Coordinate) => Coordinate;
    getCoordinateAtM: (m: number, opt_extrapolate?: boolean) => Coordinate;
    getFlatMidpoint: () => number[];
    getLength: () => number;
  }

}
