declare module 'ol/geom/Point' {

  import SimpleGeometry from 'ol/geom/SimpleGeometry';
  import { Coordinate } from 'ol/coordinate';
  import GeometryLayout from 'ol/geom/GeometryLayout';

  export default class Point extends SimpleGeometry {
    constructor(coordinates: Coordinate, opt_layout?: GeometryLayout);
  }

}
