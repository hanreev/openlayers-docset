declare module 'ol/featureloader' {

  import FeatureFormat from 'ol/format/Feature';
  import VectorTile from 'ol/VectorTile';
  import Feature from 'ol/Feature';
  import Projection from 'ol/proj/Projection';
  import { Extent } from 'ol/extent';
  import VectorSource from 'ol/source/Vector';

  export function loadFeaturesXhr(url: string | FeatureUrlFunction, format: FeatureFormat, success: ((this: VectorTile, param1: Feature[], param2: Projection, param3: Extent | (() => void), param4: Feature[]) => void) | (() => void), failure: ((this: VectorTile | (() => void)) => void) | (() => void)): FeatureLoader;

  export function xhr(url: string | FeatureUrlFunction, format: FeatureFormat): FeatureLoader;

  export type FeatureLoader = ((this: VectorSource | VectorTile, param1: Extent, param2: number, param3: Projection) => void);

  export type FeatureUrlFunction = ((param0: Extent, param1: number, param2: Projection) => string);

}
