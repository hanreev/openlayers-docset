declare module 'ol/format/GMLBase' {

  import XMLFeature from 'ol/format/XMLFeature';
  import Feature from 'ol/Feature';
  import Geometry from 'ol/geom/Geometry';
  import LinearRing from 'ol/geom/LinearRing';
  import LineString from 'ol/geom/LineString';
  import MultiLineString from 'ol/geom/MultiLineString';
  import MultiPoint from 'ol/geom/MultiPoint';
  import MultiPolygon from 'ol/geom/MultiPolygon';
  import Point from 'ol/geom/Point';
  import Polygon from 'ol/geom/Polygon';

  export default class GMLBase extends XMLFeature {
    constructor(opt_options?: Options);
    readFeatureElement(node: Element, objectStack: any[]): Feature;
    readFeatureElementInternal(node: Element, objectStack: any[], asFeature: boolean): Feature | Object;
    readFeaturesInternal(node: Element, objectStack: any[]): Feature[];
    readGeometryElement(node: Element, objectStack: any[]): Geometry;
    readLinearRing(node: Element, objectStack: any[]): LinearRing;
    readLineString(node: Element, objectStack: any[]): LineString;
    readMultiLineString(node: Element, objectStack: any[]): MultiLineString;
    readMultiPoint(node: Element, objectStack: any[]): MultiPoint;
    readMultiPolygon(node: Element, objectStack: any[]): MultiPolygon;
    readPoint(node: Element, objectStack: any[]): Point;
    readPolygon(node: Element, objectStack: any[]): Polygon;
  }

  export const GMLNS: string;

  export interface Options {
    featureNS?: { [key in string]: string } | string;
    featureType?: string[] | string;
    srsName: string;
    surface?: boolean;
    curve?: boolean;
    multiCurve?: boolean;
    multiSurface?: boolean;
    schemaLocation?: string;
    hasZ?: boolean;
  }

}
