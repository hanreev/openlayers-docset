declare module 'ol/format/Feature' {

  import Geometry from 'ol/geom/Geometry';
  import { Extent } from 'ol/extent';
  import FormatType from 'ol/format/FormatType';
  import { FeatureLike } from 'ol/Feature';
  import Projection from 'ol/proj/Projection';
  import Feature from 'ol/Feature';
  import { ProjectionLike } from 'ol/proj';

  export function transformWithOptions(geometry: Geometry | Extent, write: boolean, opt_options?: WriteOptions | ReadOptions): Geometry | Extent;

  export default class FeatureFormat {
    constructor();
    adaptOptions: (options: WriteOptions | ReadOptions | undefined) => WriteOptions | ReadOptions | undefined;
    getLastExtent: () => Extent;
    getReadOptions: (source: Document | Node | Object | string, opt_options?: ReadOptions) => ReadOptions | undefined;
    getType: () => FormatType;
    readFeature: (source: Document | Node | Object | string, opt_options?: ReadOptions) => FeatureLike;
    readFeatures: (source: Document | Node | ArrayBuffer | Object | string, opt_options?: ReadOptions) => FeatureLike[];
    readGeometry: (source: Document | Node | Object | string, opt_options?: ReadOptions) => Geometry;
    readProjection: (source: Document | Node | Object | string) => Projection;
    writeFeature: (feature: Feature, opt_options?: WriteOptions) => string;
    writeFeatures: (features: Feature[], opt_options?: WriteOptions) => string;
    writeGeometry: (geometry: Geometry, opt_options?: WriteOptions) => string;
  }

  export type ReadOptions = {
    dataProjection?: ProjectionLike;
    extent?: Extent;
    featureProjection?: ProjectionLike;
  }

  export type WriteOptions = {
    dataProjection?: ProjectionLike;
    featureProjection?: ProjectionLike;
    rightHanded?: boolean;
    decimals?: number;
  }

}
