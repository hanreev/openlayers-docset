declare module 'ol/renderer/Layer' {

  import Observable from 'ol/Observable';
  import Layer from 'ol/layer/Layer';
  import TileSource from 'ol/source/Tile';
  import Projection from 'ol/proj/Projection';
  import Tile from 'ol/Tile';
  import TileRange from 'ol/TileRange';
  import ImageBase from 'ol/ImageBase';
  import { FrameState } from 'ol/PluggableMap';
  import TileGrid from 'ol/tilegrid/TileGrid';
  import { Extent } from 'ol/extent';
  import { Coordinate } from 'ol/coordinate';
  import { FeatureLike } from 'ol/Feature';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';

  export default class LayerRenderer extends Observable {
    constructor(layer: Layer);
    protected createLoadedTileFinder(source: TileSource, projection: Projection, tiles: { [key: number]: { [key: string]: Tile } }): ((param0: number, param1: TileRange) => boolean);
    protected loadImage(image: ImageBase): boolean;
    protected manageTilePyramid<T>(frameState: FrameState, tileSource: TileSource, tileGrid: TileGrid, pixelRatio: number, projection: Projection, extent: Extent, currentZ: number, preload: number, opt_tileCallback?: (() => void), opt_this?: T): void;
    protected renderIfReadyAndVisible(): void;
    protected scheduleExpireCache(frameState: FrameState, tileSource: TileSource): void;
    protected updateUsedTiles(usedTiles: { [key: string]: { [key: string]: TileRange } }, tileSource: TileSource, z: number, tileRange: TileRange): void;
    forEachFeatureAtCoordinate<T>(coordinate: Coordinate, frameState: FrameState, hitTolerance: number, callback: ((param0: FeatureLike, param1: Layer) => T)): T | void;
    getLayer(): Layer;
    hasFeatureAtCoordinate(coordinate: Coordinate, frameState: FrameState): boolean;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
  }

}
