declare module 'ol/PluggableMap' {

  import Layer from 'ol/layer/Layer';
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
  import Tile from 'ol/Tile';
  import MapBrowserEvent from 'ol/MapBrowserEvent';
  import Feature from 'ol/Feature';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';
  import MapEvent from 'ol/MapEvent';
  import RenderEvent from 'ol/render/Event';

  export interface AtPixelOptions {
    layerFilter: ((param0: Layer) => boolean);
    hitTolerance?: number;
  }

  export interface FrameState<T> {
    pixelRatio: number;
    time: number;
    viewState: State;
    animate: boolean;
    coordinateToPixelTransform: Transform;
    extent: Extent;
    focus: Coordinate;
    index: number;
    layerStates: { [key: string]: State_1 };
    layerStatesArray: State_1[];
    pixelToCoordinateTransform: Transform;
    postRenderFunctions: PostRenderFunction[];
    size: Size;
    skippedFeatureUids: { [key: string]: boolean };
    tileQueue: TileQueue<T>;
    usedTiles: { [key: string]: { [key: string]: TileRange } };
    viewHints: number[];
    wantedTiles: { [key: string]: { [key: string]: boolean } };
  }

  export interface MapOptions {
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

  export interface MapOptionsInternal {
    controls?: Collection<Control>;
    interactions?: Collection<Interaction>;
    keyboardEventTarget: HTMLElement | Document;
    overlays: Collection<Overlay>;
    values: { [key: string]: any };
  }

  export default class PluggableMap extends BaseObject {
    constructor(options: MapOptions);
    protected controls: Collection<Control>;
    protected interactions: Collection<Interaction>;
    protected handlePostRender(): void;
    addControl(control: Control): void;
    addInteraction(interaction: Interaction): void;
    addLayer(layer: BaseLayer): void;
    addOverlay(overlay: Overlay): void;
    createRenderer(): MapRenderer;
    forEachFeatureAtPixel<S, T>(pixel: Pixel, callback: ((param1: FeatureLike, param2: Layer) => T), opt_options?: AtPixelOptions): T;
    forEachLayerAtPixel<S, T>(pixel: Pixel, callback: ((param1: Layer, param2: Uint8ClampedArray | Uint8Array) => T), opt_options?: AtPixelOptions): T;
    getControls(): Collection<Control>;
    getCoordinateFromPixel(pixel: Pixel): Coordinate;
    getEventCoordinate(event: Event): Coordinate;
    getEventPixel(event: Event | TouchEvent): Pixel;
    getFeaturesAtPixel(pixel: Pixel, opt_options?: AtPixelOptions): FeatureLike[];
    getInteractions(): Collection<Interaction>;
    getLayerGroup(): LayerGroup;
    getLayers(): Collection<BaseLayer>;
    getOverlayById(id: string | number): Overlay;
    getOverlayContainer(): HTMLElement;
    getOverlayContainerStopEvent(): HTMLElement;
    getOverlays(): Collection<Overlay>;
    getPixelFromCoordinate(coordinate: Coordinate): Pixel;
    getRenderer(): MapRenderer;
    getSize(): Size;
    getTarget(): HTMLElement | string;
    getTargetElement(): HTMLElement;
    getTilePriority(tile: Tile, tileSourceKey: string, tileCenter: Coordinate, tileResolution: number): number;
    getView(): View;
    getViewport(): HTMLElement;
    handleBrowserEvent(browserEvent: Event, opt_type?: string): void;
    handleMapBrowserEvent<T>(mapBrowserEvent: MapBrowserEvent<T>): void;
    hasFeatureAtPixel<U>(pixel: Pixel, opt_options?: AtPixelOptions): boolean;
    isRendered(): boolean;
    removeControl(control: Control): Control;
    removeInteraction(interaction: Interaction): Interaction;
    removeLayer(layer: BaseLayer): BaseLayer;
    removeOverlay(overlay: Overlay): Overlay;
    render(): void;
    renderSync(): void;
    setLayerGroup(layerGroup: LayerGroup): void;
    setSize(size: Size): void;
    setTarget(target: HTMLElement | string): void;
    setView(view: View): void;
    skipFeature(feature: Feature): void;
    unskipFeature(feature: Feature): void;
    updateSize(): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'change:layerGroup', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:layerGroup', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:layerGroup', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:size', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:size', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:size', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:target', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:target', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:target', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:view', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:view', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:view', listener: (evt: ObjectEvent) => void): EventsKey;
    on<T>(type: 'click', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    once<T>(type: 'click', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    un<T>(type: 'click', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    on<T>(type: 'dblclick', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    once<T>(type: 'dblclick', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    un<T>(type: 'dblclick', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    on<T>(type: 'moveend', listener: (evt: MapEvent<T>) => void): EventsKey;
    once<T>(type: 'moveend', listener: (evt: MapEvent<T>) => void): EventsKey;
    un<T>(type: 'moveend', listener: (evt: MapEvent<T>) => void): EventsKey;
    on<T>(type: 'movestart', listener: (evt: MapEvent<T>) => void): EventsKey;
    once<T>(type: 'movestart', listener: (evt: MapEvent<T>) => void): EventsKey;
    un<T>(type: 'movestart', listener: (evt: MapEvent<T>) => void): EventsKey;
    on<T>(type: 'pointerdrag', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    once<T>(type: 'pointerdrag', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    un<T>(type: 'pointerdrag', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    on<T>(type: 'pointermove', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    once<T>(type: 'pointermove', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    un<T>(type: 'pointermove', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    on<T>(type: 'postcompose', listener: (evt: RenderEvent<T>) => void): EventsKey;
    once<T>(type: 'postcompose', listener: (evt: RenderEvent<T>) => void): EventsKey;
    un<T>(type: 'postcompose', listener: (evt: RenderEvent<T>) => void): EventsKey;
    on<T>(type: 'postrender', listener: (evt: MapEvent<T>) => void): EventsKey;
    once<T>(type: 'postrender', listener: (evt: MapEvent<T>) => void): EventsKey;
    un<T>(type: 'postrender', listener: (evt: MapEvent<T>) => void): EventsKey;
    on<T>(type: 'precompose', listener: (evt: RenderEvent<T>) => void): EventsKey;
    once<T>(type: 'precompose', listener: (evt: RenderEvent<T>) => void): EventsKey;
    un<T>(type: 'precompose', listener: (evt: RenderEvent<T>) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    on<T>(type: 'rendercomplete', listener: (evt: RenderEvent<T>) => void): EventsKey;
    once<T>(type: 'rendercomplete', listener: (evt: RenderEvent<T>) => void): EventsKey;
    un<T>(type: 'rendercomplete', listener: (evt: RenderEvent<T>) => void): EventsKey;
    on<T>(type: 'singleclick', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    once<T>(type: 'singleclick', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    un<T>(type: 'singleclick', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
  }

  export type PostRenderFunction = (<T>(param0: PluggableMap, param1?: FrameState<T>) => boolean);

}
