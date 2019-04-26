declare module 'ol/format/XMLFeature' {

  import FeatureFormat from 'ol/format/Feature';
  import { ReadOptions } from 'ol/format/Feature';
  import Feature from 'ol/Feature';
  import { FeatureLike } from 'ol/Feature';
  import Geometry from 'ol/geom/Geometry';
  import Projection from 'ol/proj/Projection';
  import { WriteOptions } from 'ol/format/Feature';

  export default class XMLFeature extends FeatureFormat {
    constructor();
    readFeature(source: Document | Node | Object | string, opt_options?: ReadOptions): Feature;
    readFeature(source: Document | Node | Object | string, opt_options?: ReadOptions): FeatureLike;
    readFeatureFromDocument(doc: Document, opt_options?: ReadOptions): Feature;
    readFeatureFromNode(node: Node, opt_options?: ReadOptions): Feature;
    readFeatures(source: Document | Node | Object | string, opt_options?: ReadOptions): Feature[];
    readFeatures(source: Document | Node | ArrayBuffer | Object | string, opt_options?: ReadOptions): FeatureLike[];
    readFeaturesFromDocument(doc: Document, opt_options?: ReadOptions): Feature[];
    readFeaturesFromNode(node: Node, opt_options?: ReadOptions): Feature[];
    readGeometryFromDocument(doc: Document, opt_options?: ReadOptions): Geometry;
    readGeometryFromNode(node: Node, opt_options?: ReadOptions): Geometry;
    readProjection(source: Document | Node | Object | string): Projection;
    readProjection(source: Document | Node | Object | string): Projection;
    readProjectionFromDocument(doc: Document): Projection;
    readProjectionFromNode(node: Node): Projection;
    writeFeatureNode(feature: Feature, opt_options?: WriteOptions): Node;
    writeFeatures(features: Feature[], opt_options?: WriteOptions): string;
    writeFeatures(features: Feature[], opt_options?: WriteOptions): string;
    writeFeaturesNode(features: Feature[], opt_options?: WriteOptions): Node;
    writeGeometryNode(geometry: Geometry, opt_options?: WriteOptions): Node;
  }

}
