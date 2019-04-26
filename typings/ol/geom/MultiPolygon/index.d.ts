declare module 'ol/geom/MultiPolygon' {

  import SimpleGeometry from 'ol/geom/SimpleGeometry';
  import Polygon from 'ol/geom/Polygon';
  import MultiPoint from 'ol/geom/MultiPoint';

  export default class MultiPolygon extends SimpleGeometry {
    constructor(coordinates: any[] | number[], opt_layout?: GeometryLayout, opt_endss?: number[][]);
    appendPolygon: (polygon: Polygon) => void;
    getArea: () => number;
    getEndss: () => number[][];
    getFlatInteriorPoints: () => number[];
    getInteriorPoints: () => MultiPoint;
    getOrientedFlatCoordinates: () => number[];
    getPolygon: (index: number) => Polygon;
    getPolygons: () => Polygon[];
  }

}
