declare module 'ol/format/KML' {

  import Fill from 'ol/style/Fill';
  import ImageStyle from 'ol/style/Image';
  import Stroke from 'ol/style/Stroke';
  import Style from 'ol/style/Style';
  import Text from 'ol/style/Text';
  import { StyleFunction } from 'ol/style/Style';
  import XMLFeature from 'ol/format/XMLFeature';
  import { Color } from 'ol/color';
  import MultiLineString from 'ol/geom/MultiLineString';
  import LineString from 'ol/geom/LineString';
  import Polygon from 'ol/geom/Polygon';
  import Geometry from 'ol/geom/Geometry';
  import Point from 'ol/geom/Point';
  import MultiPoint from 'ol/geom/MultiPoint';
  import MultiPolygon from 'ol/geom/MultiPolygon';
  import IconAnchorUnits from 'ol/style/IconAnchorUnits';
  import IconOrigin from 'ol/style/IconOrigin';
  import LinearRing from 'ol/geom/LinearRing';
  import Feature from 'ol/Feature';
  import Icon from 'ol/style/Icon';
  import SimpleGeometry from 'ol/geom/SimpleGeometry';

  export function getDefaultFillStyle(): Fill;

  export function getDefaultImageStyle(): ImageStyle;

  export function getDefaultStrokeStyle(): Stroke;

  export function getDefaultStyle(): Style;

  export function getDefaultStyleArray(): Style[];

  export function getDefaultTextStyle(): Text;

  export function readFlatCoordinates(node: Node): number[];

  export interface GxTrackObject {
    flatCoordinates: number[];
    whens: number[];
  }

  export default class KML extends XMLFeature {
    constructor(opt_options?: Options);
    readName(source: Document | Element | string): string;
    readNameFromDocument(doc: Document): string;
    readNameFromNode(node: Element): string;
    readNetworkLinks(source: Document | Element | string): any[];
    readNetworkLinksFromDocument(doc: Document): any[];
    readNetworkLinksFromNode(node: Element): any[];
    readRegion(source: Document | Element | string): any[];
    readRegionFromDocument(doc: Document): any[];
    readRegionFromNode(node: Element): any[];
  }

  export interface Options {
    extractStyles?: boolean;
    showPointNames?: boolean;
    defaultStyle?: Style[];
    writeStyles?: boolean;
  }

  export interface Vec2 {
    x: number;
    xunits: IconAnchorUnits;
    y: number;
    yunits: IconAnchorUnits;
    origin: IconOrigin;
  }

}
