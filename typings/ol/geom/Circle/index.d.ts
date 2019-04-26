declare module 'ol/geom/Circle' {

  import SimpleGeometry from 'ol/geom/SimpleGeometry';
  import { Coordinate } from 'ol/coordinate';
  import GeometryLayout from 'ol/geom/GeometryLayout';
  import { ProjectionLike } from 'ol/proj';

  export default class Circle extends SimpleGeometry {
    constructor(center: Coordinate, opt_radius?: number, opt_layout?: GeometryLayout);
    getCenter: () => Coordinate;
    getRadius: () => number;
    setCenter: (center: Coordinate) => void;
    setCenterAndRadius: (center: Coordinate, radius: number, opt_layout?: GeometryLayout) => void;
    setRadius: (radius: number) => void;
    transform: (source: ProjectionLike, destination: ProjectionLike) => Circle;
  }

}
