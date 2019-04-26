declare module 'ol/geom/LinearRing' {

  import GeometryLayout from 'ol/geom/GeometryLayout';
  import SimpleGeometry from 'ol/geom/SimpleGeometry';
  import { Coordinate } from 'ol/coordinate';

  export default class LinearRing extends SimpleGeometry {
    constructor(coordinates: Coordinate[] | number[], opt_layout?: GeometryLayout);
    getArea(): number;
  }

}
