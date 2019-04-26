declare module 'ol/format/TextFeature' {

  import FeatureFormat from 'ol/format/Feature';
  import { ReadOptions } from 'ol/format/Feature';
  import Feature from 'ol/Feature';
  import Geometry from 'ol/geom/Geometry';
  import Projection from 'ol/proj/Projection';
  import { WriteOptions } from 'ol/format/Feature';

  export default class TextFeature extends FeatureFormat {
    constructor();
    readFeature: (source: Document | Node | Object | string, opt_options?: ReadOptions) => Feature;
    readFeatureFromText: (text: string, opt_options?: ReadOptions) => Feature;
    readFeatures: (source: Document | Node | Object | string, opt_options?: ReadOptions) => Feature[];
    readFeaturesFromText: (text: string, opt_options?: ReadOptions) => Feature[];
    readGeometry: (source: Document | Node | Object | string, opt_options?: ReadOptions) => Geometry;
    readGeometryFromText: (text: string, opt_options?: ReadOptions) => Geometry;
    readProjection: (source: Document | Node | Object | string) => Projection;
    readProjectionFromText: (text: string) => Projection;
    writeFeature: (feature: Feature, opt_options?: WriteOptions) => string;
    writeFeatures: (features: Feature[], opt_options?: WriteOptions) => string;
    writeFeaturesText: (features: Feature[], opt_options?: WriteOptions) => string;
    writeFeatureText: (feature: Feature, opt_options?: WriteOptions) => string;
    writeGeometry: (geometry: Geometry, opt_options?: WriteOptions) => string;
    writeGeometryText: (geometry: Geometry, opt_options?: WriteOptions) => string;
  }

}
