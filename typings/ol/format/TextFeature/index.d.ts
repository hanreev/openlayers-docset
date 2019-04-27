declare module 'ol/format/TextFeature' {

  import FeatureFormat from 'ol/format/Feature';
  import { ReadOptions } from 'ol/format/Feature';
  import Feature from 'ol/Feature';
  import Geometry from 'ol/geom/Geometry';
  import Projection from 'ol/proj/Projection';
  import { WriteOptions } from 'ol/format/Feature';
  import { FeatureLike } from 'ol/Feature';

  export default class TextFeature extends FeatureFormat {
    constructor();
    protected readFeatureFromText(text: string, opt_options?: ReadOptions): Feature;
    protected readFeaturesFromText(text: string, opt_options?: ReadOptions): Feature[];
    protected readGeometryFromText(text: string, opt_options?: ReadOptions): Geometry;
    protected readProjectionFromText(text: string): Projection;
    protected writeFeaturesText(features: Feature[], opt_options?: WriteOptions): string;
    protected writeFeatureText(feature: Feature, opt_options?: WriteOptions): string;
    protected writeGeometryText(geometry: Geometry, opt_options?: WriteOptions): string;
    readFeature(source: Document | Node | Object | string, opt_options?: ReadOptions): Feature;
    readFeature(source: Document | Node | Object | string, opt_options?: ReadOptions): FeatureLike;
    readFeatures(source: Document | Node | Object | string, opt_options?: ReadOptions): Feature[];
    readFeatures(source: Document | Node | ArrayBuffer | Object | string, opt_options?: ReadOptions): FeatureLike[];
    readGeometry(source: Document | Node | Object | string, opt_options?: ReadOptions): Geometry;
    readGeometry(source: Document | Node | Object | string, opt_options?: ReadOptions): Geometry;
    readProjection(source: Document | Node | Object | string): Projection;
    readProjection(source: Document | Node | Object | string): Projection;
    writeFeature(feature: Feature, opt_options?: WriteOptions): string;
    writeFeature(feature: Feature, opt_options?: WriteOptions): string;
    writeFeatures(features: Feature[], opt_options?: WriteOptions): string;
    writeFeatures(features: Feature[], opt_options?: WriteOptions): string;
    writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
    writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
  }

}
