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
    bindFramebuffer<T>(frameState: FrameState<T>, framebufferDimension: number): void;
    composeFrame<T>(frameState: FrameState<T>, layerState: State, context: WebGLContext): void;
    forEachLayerAtPixel<S, T, U>(pixel: Pixel, frameState: FrameState<T>, callback: ((this: S, param1: Layer, param2: Uint8ClampedArray | Uint8Array) => T), thisArg: S): T;
    getProjectionMatrix(): Transform;
    getTexCoordMatrix(): Transform;
    getTexture(): WebGLTexture;
    handleWebGLContextLost(): void;
    prepareFrame<T>(frameState: FrameState<T>, layerState: State, context: WebGLContext): boolean;
  }

}
