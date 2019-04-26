declare module 'ol/geom/Polygon' {

  import { Coordinate } from 'ol/coordinate';
  import Circle from 'ol/geom/Circle';
  import { Extent } from 'ol/extent';
  import SimpleGeometry from 'ol/geom/SimpleGeometry';
  import LinearRing from 'ol/geom/LinearRing';
  import Point from 'ol/geom/Point';

  export function circular(center: Coordinate, radius: number, opt_n?: number, opt_sphereRadius?: number): Polygon;

  export function fromCircle(circle: Circle, opt_sides?: number, opt_angle?: number): Polygon;

  export function fromExtent(extent: Extent): Polygon;

  export function makeRegular(polygon: Polygon, center: Coordinate, radius: number, opt_angle?: number): void;

  export default class Polygon extends SimpleGeometry {
    constructor(coordinates: Coordinate[][] | number[], opt_layout?: GeometryLayout, opt_ends?: number[]);
    appendLinearRing: (linearRing: LinearRing) => void;
    getArea: () => number;
    getEnds: () => number[];
    getFlatInteriorPoint: () => number[];
    getInteriorPoint: () => Point;
    getLinearRing: (index: number) => LinearRing;
    getLinearRingCount: () => number;
    getLinearRings: () => LinearRing[];
    getOrientedFlatCoordinates: () => number[];
  }

}
