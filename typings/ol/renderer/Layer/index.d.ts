declare module 'ol/renderer/Layer' {

  import Observable from 'ol/Observable';
  import Layer from 'ol/layer/Layer';
  import TileSource from 'ol/source/Tile';
  import Projection from 'ol/proj/Projection';
  import Tile from 'ol/Tile';
  import TileRange from 'ol/TileRange';
  import { Coordinate } from 'ol/coordinate';
  import { FrameState } from 'ol/PluggableMap';
  import { FeatureLike } from 'ol/Feature';
  import ImageBase from 'ol/ImageBase';
  import TileGrid from 'ol/tilegrid/TileGrid';
  import { Extent } from 'ol/extent';

  export default class LayerRenderer extends Observable {
    constructor(layer: Layer);
    createLoadedTileFinder(source: TileSource, projection: Projection, tiles: { [key in number]: { [key in string]: Tile } }): ((param0: number, param1: TileRange) => boolean);
    forEachFeatureAtCoordinate<T>(coordinate: Coordinate, frameState: FrameState<T>, hitTolerance: number, callback: ((param0: FeatureLike, param1: Layer) => T)): T | void;
    getLayer(): Layer;
    hasFeatureAtCoordinate<T>(coordinate: Coordinate, frameState: FrameState<T>): boolean;
    loadImage(image: ImageBase): boolean;
    manageTilePyramid<T>(frameState: FrameState<T>, tileSource: TileSource, tileGrid: TileGrid, pixelRatio: number, projection: Projection, extent: Extent, currentZ: number, preload: number, opt_tileCallback?: (() => void), opt_this?: T): void;
    renderIfReadyAndVisible(): void;
    scheduleExpireCache<T>(frameState: FrameState<T>, tileSource: TileSource): void;
    updateUsedTiles(usedTiles: { [key in string]: { [key in string]: TileRange } }, tileSource: TileSource, z: number, tileRange: TileRange): void;
  }

}
