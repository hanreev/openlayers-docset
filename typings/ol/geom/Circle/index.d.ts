declare module 'ol/geom/Circle' {

  import SimpleGeometry from 'ol/geom/SimpleGeometry';
  import { Coordinate } from 'ol/coordinate';
  import GeometryLayout from 'ol/geom/GeometryLayout';
  import { ProjectionLike } from 'ol/proj';
  import Geometry from 'ol/geom/Geometry';

  export default class Circle extends SimpleGeometry {
    constructor(center: Coordinate, opt_radius?: number, opt_layout?: GeometryLayout);
    getCenter(): Coordinate;
    getRadius(): number;
    setCenter(center: Coordinate): void;
    setCenterAndRadius(center: Coordinate, radius: number, opt_layout?: GeometryLayout): void;
    setRadius(radius: number): void;
    transform(source: ProjectionLike, destination: ProjectionLike): Circle;
    transform(source: ProjectionLike, destination: ProjectionLike): Geometry;
  }

}
