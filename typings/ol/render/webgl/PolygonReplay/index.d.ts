declare module 'ol/render/webgl/PolygonReplay' {

  import WebGLReplay from 'ol/render/webgl/Replay';
  import { Extent } from 'ol/extent';

  export type PolygonSegment = {
    p0: PolygonVertex;
    p1: PolygonVertex;
  }

  export type PolygonVertex = {
    x: number;
    y: number;
    i: number;
    reflex?: boolean;
  }

  export default class WebGLPolygonReplay extends WebGLReplay {
    constructor(tolerance: number, maxExtent: Extent);
  }

}
