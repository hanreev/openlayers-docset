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
    calculateMatrices2D: (frameState: FrameState) => void;
    dispatchRenderEvent: (type: EventType, frameState: FrameState) => void;
    forEachFeatureAtCoordinate: (coordinate: Coordinate, frameState: FrameState, hitTolerance: number, callback: ((this: S, param1: FeatureLike, param2: Layer) => T), thisArg: S, layerFilter: ((this: U, param1: Layer) => boolean), thisArg2: U) => T | undefined;
    forEachLayerAtPixel: (pixel: Pixel, frameState: FrameState, hitTolerance: number, callback: ((this: S, param1: Layer, param2: Uint8ClampedArray | Uint8Array) => T), thisArg: S, layerFilter: ((this: U, param1: Layer) => boolean), thisArg2: U) => T | undefined;
    getLayerRenderer: (layer: BaseLayer) => LayerRenderer;
    getLayerRendererByKey: (layerKey: string) => LayerRenderer;
    getLayerRenderers: () => { [key: string]: LayerRenderer };
    getMap: () => PluggableMap;
    hasFeatureAtCoordinate: (coordinate: Coordinate, frameState: FrameState, hitTolerance: number, layerFilter: ((this: U, param1: Layer) => boolean), thisArg: U) => boolean;
    registerLayerRenderers: (constructors: LayerRenderer[]) => void;
    removeLayerRenderers: () => void;
    renderFrame: (frameState: FrameState) => void;
    scheduleExpireIconCache: (frameState: FrameState) => void;
    scheduleRemoveUnusedLayerRenderers: (frameState: FrameState) => void;
  }

}
