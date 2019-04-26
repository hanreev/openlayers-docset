declare module 'ol/interaction/Modify' {

  import Event from 'ol/events/Event';
  import Collection from 'ol/Collection';
  import Feature from 'ol/Feature';
  import MapBrowserEvent from 'ol/MapBrowserEvent';
  import { Coordinate } from 'ol/coordinate';
  import { StyleFunction } from 'ol/style/Style';
  import PointerInteraction from 'ol/interaction/Pointer';
  import VectorLayer from 'ol/layer/Vector';
  import { Condition } from 'ol/events/condition';
  import { StyleLike } from 'ol/style/Style';
  import VectorSource from 'ol/source/Vector';
  import SimpleGeometry from 'ol/geom/SimpleGeometry';
  import { Extent } from 'ol/extent';

  export class ModifyEvent<T> extends Event {
    constructor();
    features: Collection<Feature>;
    mapBrowserEvent: MapBrowserEvent<T>;
  }

  export default class Modify extends PointerInteraction {
    constructor(options: Options);
    getOverlay(): VectorLayer;
    removePoint(): boolean;
  }

  export interface Options {
    condition?: Condition;
    deleteCondition?: Condition;
    insertVertexCondition?: Condition;
    pixelTolerance?: number;
    style?: StyleLike;
    source?: VectorSource;
    features?: Collection<Feature>;
    wrapX?: boolean;
  }

  export interface SegmentData {
    depth?: number[];
    feature: Feature;
    geometry: SimpleGeometry;
    index?: number;
    segment: Extent[];
    featureSegments?: SegmentData[];
  }

}
