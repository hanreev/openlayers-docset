declare module 'ol/PluggableMap' {

  import { State } from 'ol/View';
  import { Transform } from 'ol/transform';
  import { Extent } from 'ol/extent';
  import { Coordinate } from 'ol/coordinate';
  import { State as State_1 } from 'ol/layer/Layer';
  import { Size } from 'ol/size';
  import TileQueue from 'ol/TileQueue';
  import TileRange from 'ol/TileRange';
  import BaseLayer from 'ol/layer/Base';
  import Collection from 'ol/Collection';
  import Control from 'ol/control/Control';
  import Interaction from 'ol/interaction/Interaction';
  import LayerGroup from 'ol/layer/Group';
  import Overlay from 'ol/Overlay';
  import View from 'ol/View';
  import BaseObject from 'ol/Object';
  import MapRenderer from 'ol/renderer/Map';
  import { Pixel } from 'ol/pixel';
  import { FeatureLike } from 'ol/Feature';
  import Layer from 'ol/layer/Layer';
  import Tile from 'ol/Tile';
  import MapBrowserEvent from 'ol/MapBrowserEvent';
  import Feature from 'ol/Feature';

  export type AtPixelOptions = {
    layerFilter: undefined | (() => void);
    hitTolerance?: number;
  }

  export type FrameState = {
    pixelRatio: number;
    time: number;
    viewState: State;
    animate: boolean;
    coordinateToPixelTransform: Transform;
    extent: null | Extent;
    focus: Coordinate;
    index: number;
    layerStates: { [key: string]: State_1 };
    layerStatesArray: State_1[];
    pixelToCoordinateTransform: Transform;
    postRenderFunctions: PostRenderFunction[];
    size: Size;
    skippedFeatureUids: { [key: string]: boolean };
    tileQueue: TileQueue;
    usedTiles: { [key: string]: { [key: string]: TileRange } };
    viewHints: number[];
    wantedTiles: { [key: string]: { [key: string]: boolean } };
  }

  export type MapOptions = {
    controls?: Collection<Control> | Control[];
    pixelRatio?: number;
    interactions?: Collection<Interaction> | Interaction[];
    keyboardEventTarget?: HTMLElement | Document | string;
    layers?: BaseLayer[] | Collection<BaseLayer> | LayerGroup;
    maxTilesLoading?: number;
    loadTilesWhileAnimating?: boolean;
    loadTilesWhileInteracting?: boolean;
    moveTolerance?: number;
    overlays?: Collection<Overlay> | Overlay[];
    target?: HTMLElement | string;
    view?: View;
  }

  export type MapOptionsInternal = {
    controls?: Collection<Control>;
    interactions?: Collection<Interaction>;
    keyboardEventTarget: HTMLElement | Document;
    overlays: Collection<Overlay>;
    values: { [key: string]: any };
  }

  export default class PluggableMap extends BaseObject {
    constructor(options: MapOptions);
    addControl: (control: Control) => void;
    addInteraction: (interaction: Interaction) => void;
    addLayer: (layer: BaseLayer) => void;
    addOverlay: (overlay: Overlay) => void;
    createRenderer: () => MapRenderer;
    forEachFeatureAtPixel: (pixel: Pixel, callback: ((this: S, param1: FeatureLike, param2: Layer) => T), opt_options?: AtPixelOptions) => T | undefined;
    forEachLayerAtPixel: (pixel: Pixel, callback: ((this: S, param1: Layer, param2: Uint8ClampedArray | Uint8Array) => T), opt_options?: AtPixelOptions) => T | undefined;
    getControls: () => Collection<Control>;
    getCoordinateFromPixel: (pixel: Pixel) => Coordinate;
    getEventCoordinate: (event: Event) => Coordinate;
    getEventPixel: (event: Event | TouchEvent) => Pixel;
    getFeaturesAtPixel: (pixel: Pixel, opt_options?: AtPixelOptions) => FeatureLike[];
    getInteractions: () => Collection<Interaction>;
    getLayerGroup: () => LayerGroup;
    getLayers: () => Collection<BaseLayer>;
    getOverlayById: (id: string | number) => Overlay;
    getOverlayContainer: () => HTMLElement;
    getOverlayContainerStopEvent: () => HTMLElement;
    getOverlays: () => Collection<Overlay>;
    getPixelFromCoordinate: (coordinate: Coordinate) => Pixel;
    getRenderer: () => MapRenderer;
    getSize: () => Size | undefined;
    getTarget: () => HTMLElement | string | undefined;
    getTargetElement: () => HTMLElement;
    getTilePriority: (tile: Tile, tileSourceKey: string, tileCenter: Coordinate, tileResolution: number) => number;
    getView: () => View;
    getViewport: () => HTMLElement;
    handleBrowserEvent: (browserEvent: Event, opt_type?: string) => void;
    handleMapBrowserEvent: (mapBrowserEvent: MapBrowserEvent) => void;
    handlePostRender: () => void;
    hasFeatureAtPixel: (pixel: Pixel, opt_options?: AtPixelOptions) => boolean;
    isRendered: () => boolean;
    removeControl: (control: Control) => Control | undefined;
    removeInteraction: (interaction: Interaction) => Interaction | undefined;
    removeLayer: (layer: BaseLayer) => BaseLayer | undefined;
    removeOverlay: (overlay: Overlay) => Overlay | undefined;
    render: () => void;
    renderSync: () => void;
    setLayerGroup: (layerGroup: LayerGroup) => void;
    setSize: (size: Size | undefined) => void;
    setTarget: (target: HTMLElement | string | undefined) => void;
    setView: (view: View) => void;
    skipFeature: (feature: Feature) => void;
    unskipFeature: (feature: Feature) => void;
    updateSize: () => void;
  }

  export type PostRenderFunction = ((param0: PluggableMap, param1: FrameState) => boolean);

}
