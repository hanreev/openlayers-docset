declare module 'ol/source/Cluster' {

  import Point from 'ol/geom/Point';
  import VectorSource from 'ol/source/Vector';
  import Feature from 'ol/Feature';
  import { AttributionLike } from 'ol/source/Source';

  export default class Cluster extends VectorSource {
    constructor(options: Options);
    cluster(): void;
    createCluster(features: Feature[]): Feature;
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
