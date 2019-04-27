declare module 'ol/renderer/canvas/Layer' {

  import LayerRenderer from 'ol/renderer/Layer';
  import Layer from 'ol/layer/Layer';
  import { FrameState } from 'ol/PluggableMap';
  import { Extent } from 'ol/extent';
  import { Transform } from 'ol/transform';
  import { State } from 'ol/layer/Layer';
  import { Coordinate } from 'ol/coordinate';

  export default class CanvasLayerRenderer extends LayerRenderer {
    constructor(layer: Layer);
    protected renderedResolution: number;
    protected clip<T>(context: CanvasRenderingContext2D, frameState: FrameState<T>, extent: Extent): void;
    protected dispatchRenderEvent<T>(context: CanvasRenderingContext2D, frameState: FrameState<T>, opt_transform?: Transform): void;
    protected getTransform<T>(frameState: FrameState<T>, offsetX: number): Transform;
    protected postCompose<T>(context: CanvasRenderingContext2D, frameState: FrameState<T>, layerState: State, opt_transform?: Transform): void;
    protected preCompose<T>(context: CanvasRenderingContext2D, frameState: FrameState<T>, opt_transform?: Transform): void;
    composeFrame<T>(frameState: FrameState<T>, layerState: State, context: CanvasRenderingContext2D): void;
    forEachLayerAtCoordinate<S, T, U>(coordinate: Coordinate, frameState: FrameState<T>, hitTolerance: number, callback: ((this: S, param1: Layer, param2: Uint8ClampedArray | Uint8Array) => T), thisArg: S): T;
    prepareFrame<T>(frameState: FrameState<T>, layerState: State): boolean;
  }

}
