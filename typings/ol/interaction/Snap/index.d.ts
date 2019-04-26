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

  export interface Options {
    features?: Collection<Feature>;
    edge?: boolean;
    vertex?: boolean;
    pixelTolerance?: number;
    source?: VectorSource;
  }

  export interface Result {
    snapped: boolean;
    vertex: Coordinate;
    vertexPixel: Pixel;
  }

  export interface SegmentData {
    feature: Feature;
    segment: Coordinate[];
  }

  export default class Snap extends PointerInteraction {
    constructor(opt_options?: Options);
    addFeature(feature: Feature, opt_listen?: boolean): void;
    removeFeature(feature: Feature, opt_unlisten?: boolean): void;
    snapTo(pixel: Pixel, pixelCoordinate: Coordinate, map: PluggableMap): Result;
  }

}
