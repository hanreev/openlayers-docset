declare module 'ol/render/webgl/Replay' {

  import VectorContext from 'ol/render/VectorContext';
  import { Extent } from 'ol/extent';
  import WebGLContext from 'ol/webgl/Context';
  import Feature from 'ol/Feature';
  import RenderFeature from 'ol/render/Feature';
  import { Coordinate } from 'ol/coordinate';
  import { Size } from 'ol/size';
  import Locations from 'ol/render/webgl/circlereplay/defaultshader/Locations';
  import Locations_1 from 'ol/render/webgl/linestringreplay/defaultshader/Locations';
  import Locations_2 from 'ol/render/webgl/polygonreplay/defaultshader/Locations';
  import Locations_3 from 'ol/render/webgl/texturereplay/defaultshader/Locations';

  export default class WebGLReplay extends VectorContext {
    constructor(tolerance: number, maxExtent: Extent);
    drawElements(gl: WebGLRenderingContext, context: WebGLContext, start: number, end: number): void;
    drawHitDetectionReplay<T>(gl: WebGLRenderingContext, context: WebGLContext, skippedFeaturesHash: { [key: string]: boolean }, featureCallback: ((param0: Feature | RenderFeature) => T), oneByOne: boolean, opt_hitExtent?: Extent): T;
    drawHitDetectionReplayAll<T>(gl: WebGLRenderingContext, context: WebGLContext, skippedFeaturesHash: { [key: string]: boolean }, featureCallback: ((param0: Feature | RenderFeature) => T)): T;
    drawHitDetectionReplayOneByOne<T>(gl: WebGLRenderingContext, context: WebGLContext, skippedFeaturesHash: { [key: string]: boolean }, featureCallback: ((param0: Feature | RenderFeature) => T), opt_hitExtent?: Extent): T;
    drawReplay(gl: WebGLRenderingContext, context: WebGLContext, skippedFeaturesHash: { [key: string]: boolean }, hitDetection: boolean): void;
    finish(context: WebGLContext): void;
    getDeleteResourcesFunction(context: WebGLContext): (() => void);
    replay<T>(context: WebGLContext, center: Coordinate, resolution: number, rotation: number, size: Size, pixelRatio: number, opacity: number, skippedFeaturesHash: { [key: string]: boolean }, featureCallback: ((param0: Feature | RenderFeature) => T), oneByOne: boolean, opt_hitExtent?: Extent): T;
    setUpProgram(gl: WebGLRenderingContext, context: WebGLContext, size: Size, pixelRatio: number): Locations | Locations_1 | Locations_2 | Locations_3;
    shutDownProgram(gl: WebGLRenderingContext, locations: Locations | Locations_1 | Locations_2 | Locations_3): void;
  }

}
