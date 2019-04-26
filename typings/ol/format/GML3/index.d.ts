declare module 'ol/format/GML3' {

  import GMLBase from 'ol/format/GMLBase';
  import { Options } from 'ol/format/GMLBase';
  import { Extent } from 'ol/extent';
  import Feature from 'ol/Feature';
  import { WriteOptions } from 'ol/format/Feature';
  import Geometry from 'ol/geom/Geometry';

  export default class GML3 extends GMLBase {
    constructor(opt_options?: Options);
    writeEnvelope: (node: Element, extent: Extent, objectStack: any[]) => void;
    writeFeatureElement: (node: Element, feature: Feature, objectStack: any[]) => void;
    writeFeatures: (features: Feature[], opt_options?: WriteOptions) => string;
    writeGeometryElement: (node: Node, geometry: Geometry | Extent, objectStack: any[]) => void;
  }

}
