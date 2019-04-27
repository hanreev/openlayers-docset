declare module 'ol/source/Cluster' {

  import Point from 'ol/geom/Point';
  import VectorSource from 'ol/source/Vector';
  import Feature from 'ol/Feature';
  import { AttributionLike } from 'ol/source/Source';

  export default class Cluster extends VectorSource {
    constructor(options: Options);
    protected distance: number;
    protected features: Feature[];
    protected geometryFunction: ((param0: Feature) => Point);
    protected resolution: number;
    protected source: VectorSource;
    protected cluster(): void;
    protected createCluster(features: Feature[]): Feature;
    getDistance(): number;
    getSource(): VectorSource;
    setDistance(distance: number): void;
  }

  export interface Options {
    attributions?: AttributionLike;
    distance?: number;
    geometryFunction?: ((param0: Feature) => Point);
    source: VectorSource;
    wrapX?: boolean;
  }

}
