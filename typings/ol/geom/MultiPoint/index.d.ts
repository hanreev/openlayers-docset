declare module 'ol/geom/MultiPoint' {

  import SimpleGeometry from 'ol/geom/SimpleGeometry';
  import { Coordinate } from 'ol/coordinate';
  import GeometryLayout from 'ol/geom/GeometryLayout';
  import Point from 'ol/geom/Point';

  export default class MultiPoint extends SimpleGeometry {
    constructor(coordinates: Coordinate[] | number[], opt_layout?: GeometryLayout);
    appendPoint: (point: Point) => void;
    getPoint: (index: number) => Point;
    getPoints: () => Point[];
  }

}
