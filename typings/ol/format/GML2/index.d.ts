declare module 'ol/format/GML2' {

  import GMLBase from 'ol/format/GMLBase';
  import { Options } from 'ol/format/GMLBase';
  import Feature from 'ol/Feature';
  import Geometry from 'ol/geom/Geometry';
  import { Extent } from 'ol/extent';

  export default class GML2 extends GMLBase {
    constructor(opt_options?: Options);
    writeFeatureElement: (node: Element, feature: Feature, objectStack: any[]) => void;
    writeGeometryElement: (node: Node, geometry: Geometry | Extent, objectStack: any[]) => void;
  }

}
