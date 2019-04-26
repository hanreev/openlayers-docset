declare module 'ol/interaction/Draw' {

  import PointerInteraction from 'ol/interaction/Pointer';
  import Feature from 'ol/Feature';
  import VectorLayer from 'ol/layer/Vector';
  import Event from 'ol/events/Event';
  import SimpleGeometry from 'ol/geom/SimpleGeometry';
  import { StyleFunction } from 'ol/style/Style';
  import GeometryType from 'ol/geom/GeometryType';
  import { Coordinate } from 'ol/coordinate';
  import Collection from 'ol/Collection';
  import VectorSource from 'ol/source/Vector';
  import { Condition } from 'ol/events/condition';
  import { StyleLike } from 'ol/style/Style';

  export function createBox(): GeometryFunction;

  export function createRegularPolygon(opt_sides?: number, opt_angle?: number): GeometryFunction;

  export default class Draw extends PointerInteraction {
    constructor(options: Options);
    extend(feature: Feature): void;
    finishDrawing(): void;
    getOverlay(): VectorLayer;
    removeLastPoint(): void;
  }

  export type GeometryFunction = ((param0: SketchCoordType, param1: SimpleGeometry) => SimpleGeometry);

  export type LineCoordType = Coordinate[];

  export interface Options {
    type: GeometryType;
    clickTolerance?: number;
    features?: Collection<Feature>;
    source?: VectorSource;
    dragVertexDelay?: number;
    snapTolerance?: number;
    stopClick?: boolean;
    maxPoints?: number;
    minPoints?: number;
    finishCondition?: Condition;
    style?: StyleLike;
    geometryFunction?: GeometryFunction;
    geometryName?: string;
    condition?: Condition;
    freehand?: boolean;
    freehandCondition?: Condition;
    wrapX?: boolean;
  }

  export type PointCoordType = Coordinate;

  export type PolyCoordType = Coordinate[][];

  export type SketchCoordType = PointCoordType | LineCoordType | PolyCoordType;

}
