declare module 'ol/format/JSONFeature' {

  import FeatureFormat from 'ol/format/Feature';
  import { ReadOptions } from 'ol/format/Feature';
  import Feature from 'ol/Feature';
  import { FeatureLike } from 'ol/Feature';
  import Geometry from 'ol/geom/Geometry';
  import Projection from 'ol/proj/Projection';
  import { WriteOptions } from 'ol/format/Feature';

  export default class JSONFeature extends FeatureFormat {
    constructor();
    readFeature(source: ArrayBuffer | Document | Node | Object | string, opt_options?: ReadOptions): Feature;
    readFeature(source: Document | Node | Object | string, opt_options?: ReadOptions): FeatureLike;
    readFeatureFromObject(object: Object, opt_options?: ReadOptions): Feature;
    readFeatures(source: ArrayBuffer | Document | Node | Object | string, opt_options?: ReadOptions): Feature[];
    readFeatures(source: Document | Node | ArrayBuffer | Object | string, opt_options?: ReadOptions): FeatureLike[];
    readFeaturesFromObject(object: Object, opt_options?: ReadOptions): Feature[];
    readGeometry(source: ArrayBuffer | Document | Node | Object | string, opt_options?: ReadOptions): Geometry;
    readGeometry(source: Document | Node | Object | string, opt_options?: ReadOptions): Geometry;
    readGeometryFromObject(object: Object, opt_options?: ReadOptions): Geometry;
    readProjection(source: ArrayBuffer | Document | Node | Object | string): Projection;
    readProjection(source: Document | Node | Object | string): Projection;
    readProjectionFromObject(object: Object): Projection;
    writeFeature(feature: Feature, opt_options?: WriteOptions): string;
    writeFeature(feature: Feature, opt_options?: WriteOptions): string;
    writeFeatureObject(feature: Feature, opt_options?: WriteOptions): Object;
    writeFeatures(features: Feature[], opt_options?: WriteOptions): string;
    writeFeatures(features: Feature[], opt_options?: WriteOptions): string;
    writeFeaturesObject(features: Feature[], opt_options?: WriteOptions): Object;
    writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
    writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
    writeGeometryObject(geometry: Geometry, opt_options?: WriteOptions): Object;
  }

}
