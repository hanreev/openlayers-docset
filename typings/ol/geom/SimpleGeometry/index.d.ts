declare module 'ol/geom/SimpleGeometry' {

  import GeometryLayout from 'ol/geom/GeometryLayout';
  import { Transform } from 'ol/transform';
  import Geometry from 'ol/geom/Geometry';
  import { Coordinate } from 'ol/coordinate';

  export function getStrideForLayout(layout: GeometryLayout): number;

  export function transformGeom2D(simpleGeometry: SimpleGeometry, transform: Transform, opt_dest?: number[]): number[];

  export default class SimpleGeometry extends Geometry {
    constructor();
    getCoordinates(): any[];
    getFirstCoordinate(): Coordinate;
    getFlatCoordinates(): number[];
    getLastCoordinate(): Coordinate;
    getLayout(): GeometryLayout;
    getSimplifiedGeometryInternal(squaredTolerance: number): SimpleGeometry;
    getStride(): number;
    setCoordinates(coordinates: any[], opt_layout?: GeometryLayout): void;
    setFlatCoordinates(layout: GeometryLayout, flatCoordinates: number[]): void;
    setLayout(layout: GeometryLayout, coordinates: any[], nesting: number): void;
  }

}
