declare module 'ol/geom/Geometry' {

  import BaseObject from 'ol/Object';
  import { TransformFunction } from 'ol/proj';
  import { Coordinate } from 'ol/coordinate';
  import { Extent } from 'ol/extent';
  import GeometryType from 'ol/geom/GeometryType';
  import { ProjectionLike } from 'ol/proj';

  export default class Geometry extends BaseObject {
    constructor();
    applyTransform(transformFn: TransformFunction): void;
    clone(): Geometry;
    closestPointXY(x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number): number;
    computeExtent(extent: Extent): Extent;
    containsXY(x: number, y: number): boolean;
    getClosestPoint(point: Coordinate, opt_closestPoint?: Coordinate): Coordinate;
    getExtent(opt_extent?: Extent): Extent;
    getSimplifiedGeometry(squaredTolerance: number): Geometry;
    getType(): GeometryType;
    intersectsCoordinate(coordinate: Coordinate): boolean;
    intersectsExtent(extent: Extent): boolean;
    rotate(angle: number, anchor: Coordinate): void;
    scale(sx: number, opt_sy?: number, opt_anchor?: Coordinate): void;
    simplify(tolerance: number): Geometry;
    transform(source: ProjectionLike, destination: ProjectionLike): Geometry;
    translate(deltaX: number, deltaY: number): void;
  }

}
