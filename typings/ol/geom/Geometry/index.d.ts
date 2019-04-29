declare module 'ol/geom/Geometry' {

  import BaseObject from 'ol/Object';
  import { Extent } from 'ol/extent';
  import { TransformFunction } from 'ol/proj';
  import { Coordinate } from 'ol/coordinate';
  import GeometryType from 'ol/geom/GeometryType';
  import { ProjectionLike } from 'ol/proj';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';

  export default class Geometry extends BaseObject {
    constructor();
    protected simplifiedGeometryCache: { [key: string]: Geometry };
    protected simplifiedGeometryMaxMinSquaredTolerance: number;
    protected simplifiedGeometryRevision: number;
    protected computeExtent(extent: Extent): Extent;
    applyTransform(transformFn: TransformFunction): void;
    clone(): Geometry;
    closestPointXY(x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number): number;
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
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
  }

}
