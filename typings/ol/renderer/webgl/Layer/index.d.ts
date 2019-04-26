declare module 'ol/renderer/webgl/Layer' {

  import LayerRenderer from 'ol/renderer/Layer';
  import WebGLMapRenderer from 'ol/renderer/webgl/Map';
  import Layer from 'ol/layer/Layer';
  import { FrameState } from 'ol/PluggableMap';
  import { State } from 'ol/layer/Layer';
  import WebGLContext from 'ol/webgl/Context';
  import { Pixel } from 'ol/pixel';
  import { Transform } from 'ol/transform';

  export default class WebGLLayerRenderer extends LayerRenderer {
    constructor(mapRenderer: WebGLMapRenderer, layer: Layer);
    bindFramebuffer: (frameState: FrameState, framebufferDimension: number) => void;
    composeFrame: (frameState: FrameState, layerState: State, context: WebGLContext) => void;
    forEachLayerAtPixel: (pixel: Pixel, frameState: FrameState, callback: ((this: S, param1: Layer, param2: Uint8ClampedArray | Uint8Array) => T), thisArg: S) => T | undefined;
    getProjectionMatrix: () => Transform;
    getTexCoordMatrix: () => Transform;
    getTexture: () => WebGLTexture;
    handleWebGLContextLost: () => void;
    prepareFrame: (frameState: FrameState, layerState: State, context: WebGLContext) => boolean;
  }

}
