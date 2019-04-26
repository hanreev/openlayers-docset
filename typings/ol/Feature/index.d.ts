declare module 'ol/Feature' {

  import { StyleFunction } from 'ol/style/Style';
  import Style from 'ol/style/Style';
  import BaseObject from 'ol/Object';
  import Geometry from 'ol/geom/Geometry';
  import { StyleLike } from 'ol/style/Style';
  import RenderFeature from 'ol/render/Feature';

  export function createStyleFunction(obj: StyleFunction | Style[] | Style): StyleFunction;

  export default class Feature extends BaseObject {
    constructor(opt_geometryOrProperties?: Geometry | { [key: string]: any });
    clone: () => Feature;
    getGeometry: () => Geometry | undefined;
    getGeometryName: () => string;
    getId: () => number | string | undefined;
    getStyle: () => StyleLike;
    getStyleFunction: () => StyleFunction | undefined;
    setGeometry: (geometry: Geometry | undefined) => void;
    setGeometryName: (name: string) => void;
    setId: (id: number | string | undefined) => void;
    setStyle: (style: StyleLike) => void;
  }

  export type FeatureClass = Feature | RenderFeature;

  export type FeatureLike = Feature | RenderFeature;

}
