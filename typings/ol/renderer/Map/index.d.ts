declare module 'ol/renderer/Map' {

  import { State } from 'ol/layer/Layer';
  import PluggableMap from 'ol/PluggableMap';
  import { FrameState } from 'ol/PluggableMap';
  import Disposable from 'ol/Disposable';
  import EventType from 'ol/render/EventType';
  import { Coordinate } from 'ol/coordinate';
  import { FeatureLike } from 'ol/Feature';
  import Layer from 'ol/layer/Layer';
  import { Pixel } from 'ol/pixel';
  import BaseLayer from 'ol/layer/Base';
  import LayerRenderer from 'ol/renderer/Layer';

  export function sortByZIndex(state1: State, state2: State): number;

  export default class MapRenderer extends Disposable {
    constructor(map: PluggableMap);
    calculateMatrices2D<T>(frameState: FrameState<T>): void;
    dispatchRenderEvent<T>(type: EventType, frameState: FrameState<T>): void;
    forEachFeatureAtCoordinate<S, T, U>(coordinate: Coordinate, frameState: FrameState<T>, hitTolerance: number, callback: ((this: S, param1: FeatureLike, param2: Layer) => T), thisArg: S, layerFilter: ((this: U, param1: Layer) => boolean), thisArg2: U): T;
    forEachLayerAtPixel<S, T, U>(pixel: Pixel, frameState: FrameState<T>, hitTolerance: number, callback: ((this: S, param1: Layer, param2: Uint8ClampedArray | Uint8Array) => T), thisArg: S, layerFilter: ((this: U, param1: Layer) => boolean), thisArg2: U): T;
    getLayerRenderer(layer: BaseLayer): LayerRenderer;
    getLayerRendererByKey(layerKey: string): LayerRenderer;
    getLayerRenderers(): { [key in string]: LayerRenderer };
    getMap(): PluggableMap;
    hasFeatureAtCoordinate<U, T>(coordinate: Coordinate, frameState: FrameState<T>, hitTolerance: number, layerFilter: ((this: U, param1: Layer) => boolean), thisArg: U): boolean;
    registerLayerRenderers(constructors: LayerRenderer[]): void;
    removeLayerRenderers(): void;
    renderFrame<T>(frameState: FrameState<T>): void;
    scheduleExpireIconCache<T>(frameState: FrameState<T>): void;
    scheduleRemoveUnusedLayerRenderers<T>(frameState: FrameState<T>): void;
  }

}
