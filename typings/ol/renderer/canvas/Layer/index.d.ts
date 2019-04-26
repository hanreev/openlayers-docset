declare module 'ol/renderer/canvas/Layer' {

  import LayerRenderer from 'ol/renderer/Layer';
  import Layer from 'ol/layer/Layer';
  import { FrameState } from 'ol/PluggableMap';
  import { Extent } from 'ol/extent';
  import { State } from 'ol/layer/Layer';
  import { Transform } from 'ol/transform';
  import { Coordinate } from 'ol/coordinate';

  export default class CanvasLayerRenderer extends LayerRenderer {
    constructor(layer: Layer);
    clip: (context: CanvasRenderingContext2D, frameState: FrameState, extent: Extent) => void;
    composeFrame: (frameState: FrameState, layerState: State, context: CanvasRenderingContext2D) => void;
    dispatchRenderEvent: (context: CanvasRenderingContext2D, frameState: FrameState, opt_transform?: Transform) => void;
    forEachLayerAtCoordinate: (coordinate: Coordinate, frameState: FrameState, hitTolerance: number, callback: ((this: S, param1: Layer, param2: Uint8ClampedArray | Uint8Array) => T), thisArg: S) => T | undefined;
    getTransform: (frameState: FrameState, offsetX: number) => Transform;
    postCompose: (context: CanvasRenderingContext2D, frameState: FrameState, layerState: State, opt_transform?: Transform) => void;
    preCompose: (context: CanvasRenderingContext2D, frameState: FrameState, opt_transform?: Transform) => void;
    prepareFrame: (frameState: FrameState, layerState: State) => boolean;
  }

}
