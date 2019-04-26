declare module 'ol/geom/MultiLineString' {

  import SimpleGeometry from 'ol/geom/SimpleGeometry';
  import LineString from 'ol/geom/LineString';
  import { Coordinate } from 'ol/coordinate';

  export default class MultiLineString extends SimpleGeometry {
    constructor(coordinates: any[] | number[], opt_layout?: GeometryLayout, opt_ends?: number[]);
    appendLineString: (lineString: LineString) => void;
    getCoordinateAtM: (m: number, opt_extrapolate?: boolean, opt_interpolate?: boolean) => Coordinate;
    getEnds: () => number[];
    getFlatMidpoints: () => number[];
    getLineString: (index: number) => LineString;
    getLineStrings: () => LineString[];
  }

}
