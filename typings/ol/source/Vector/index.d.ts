declare module 'ol/source/Vector' {

  import Event from 'ol/events/Event';
  import Feature from 'ol/Feature';
  import { Extent } from 'ol/extent';
  import { AttributionLike } from 'ol/source/Source';
  import Collection from 'ol/Collection';
  import FeatureFormat from 'ol/format/Feature';
  import { FeatureLoader } from 'ol/featureloader';
  import { FeatureUrlFunction } from 'ol/featureloader';
  import Source from 'ol/source/Source';
  import { Coordinate } from 'ol/coordinate';
  import Projection from 'ol/proj/Projection';

  export class VectorSourceEvent extends Event {
    constructor();
    feature: Feature;
  }

  export type LoadingStrategy = ((param0: Extent, param1: number) => Extent[]);

  export interface Options {
    attributions?: AttributionLike;
    features?: Feature[] | Collection<Feature>;
    format?: FeatureFormat;
    loader?: FeatureLoader;
    overlaps?: boolean;
    strategy?: LoadingStrategy;
    url?: string | FeatureUrlFunction;
    useSpatialIndex?: boolean;
    wrapX?: boolean;
  }

  export default class VectorSource extends Source {
    constructor(opt_options?: Options);
    addFeature(feature: Feature): void;
    addFeatureInternal(feature: Feature): void;
    addFeatures(features: Feature[]): void;
    addFeaturesInternal(features: Feature[]): void;
    clear(opt_fast?: boolean): void;
    forEachFeature<T>(callback: ((param0: Feature) => T)): T;
    forEachFeatureAtCoordinateDirect<T>(coordinate: Coordinate, callback: ((param0: Feature) => T)): T;
    forEachFeatureInExtent<T>(extent: Extent, callback: ((param0: Feature) => T)): T;
    forEachFeatureIntersectingExtent<T>(extent: Extent, callback: ((param0: Feature) => T)): T;
    getClosestFeatureToCoordinate(coordinate: Coordinate, opt_filter?: (() => void)): Feature;
    getExtent(opt_extent?: Extent): Extent;
    getFeatureById(id: string | number): Feature;
    getFeatures(): Feature[];
    getFeaturesAtCoordinate(coordinate: Coordinate): Feature[];
    getFeaturesCollection(): Collection<Feature>;
    getFeaturesInExtent(extent: Extent): Feature[];
    getFormat(): FeatureFormat;
    getOverlaps(): boolean;
    getUrl(): string | FeatureUrlFunction;
    hasFeature(feature: Feature): boolean;
    isEmpty(): boolean;
    loadFeatures(extent: Extent, resolution: number, projection: Projection): void;
    removeFeature(feature: Feature): void;
    removeFeatureInternal(feature: Feature): void;
    removeLoadedExtent(extent: Extent): void;
    setLoader(loader: FeatureLoader): void;
  }

}
