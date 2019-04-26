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
    readFeatureElement: (node: Element, objectStack: any[]) => Feature;
    readFeatureElementInternal: (node: Element, objectStack: any[], asFeature: boolean) => Feature | Object;
    readFeaturesInternal: (node: Element, objectStack: any[]) => Feature[] | undefined;
    readGeometryElement: (node: Element, objectStack: any[]) => Geometry | undefined;
    readLinearRing: (node: Element, objectStack: any[]) => LinearRing | undefined;
    readLineString: (node: Element, objectStack: any[]) => LineString | undefined;
    readMultiLineString: (node: Element, objectStack: any[]) => MultiLineString | undefined;
    readMultiPoint: (node: Element, objectStack: any[]) => MultiPoint | undefined;
    readMultiPolygon: (node: Element, objectStack: any[]) => MultiPolygon | undefined;
    readPoint: (node: Element, objectStack: any[]) => Point | undefined;
    readPolygon: (node: Element, objectStack: any[]) => Polygon | undefined;
  }

  export const GMLNS: string;

  export type Options = {
    featureNS?: { [key: string]: string } | string;
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
