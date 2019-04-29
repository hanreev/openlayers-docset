declare module 'ol/featureloader' {

  import FeatureFormat from 'ol/format/Feature';
  import { Extent } from 'ol/extent';
  import Projection from 'ol/proj/Projection';

  export function loadFeaturesXhr(url: string | FeatureUrlFunction, format: FeatureFormat, success: (() => void) | (() => void), failure: (() => void) | (() => void)): FeatureLoader;

  export function xhr(url: string | FeatureUrlFunction, format: FeatureFormat): FeatureLoader;

  export type FeatureLoader = ((param1: Extent, param2: number, param3: Projection) => void);

  export type FeatureUrlFunction = ((param0: Extent, param1: number, param2: Projection) => string);

}
