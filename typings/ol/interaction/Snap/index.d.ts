declare module 'ol/interaction/Snap' {

  import { VectorSourceEvent } from 'ol/source/Vector';
  import { CollectionEvent } from 'ol/Collection';
  import Feature from 'ol/Feature';
  import Collection from 'ol/Collection';
  import VectorSource from 'ol/source/Vector';
  import { Coordinate } from 'ol/coordinate';
  import { Pixel } from 'ol/pixel';
  import PointerInteraction from 'ol/interaction/Pointer';
  import PluggableMap from 'ol/PluggableMap';

  export type Options = {
    features?: Collection<Feature>;
    edge?: boolean;
    vertex?: boolean;
    pixelTolerance?: number;
    source?: VectorSource;
  }

  export type Result = {
    snapped: boolean;
    vertex: Coordinate | null;
    vertexPixel: Pixel | null;
  }

  export type SegmentData = {
    feature: Feature;
    segment: Coordinate[];
  }

  export default class Snap extends PointerInteraction {
    constructor(opt_options?: Options);
    addFeature: (feature: Feature, opt_listen?: boolean) => void;
    removeFeature: (feature: Feature, opt_unlisten?: boolean) => void;
    snapTo: (pixel: Pixel, pixelCoordinate: Coordinate, map: PluggableMap) => Result;
  }

}
