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
    createLoadedTileFinder: (source: TileSource, projection: Projection, tiles: { [key: number]: { [key: string]: Tile } }) => ((param0: number, param1: TileRange) => boolean);
    forEachFeatureAtCoordinate: (coordinate: Coordinate, frameState: FrameState, hitTolerance: number, callback: ((param0: FeatureLike, param1: Layer) => T)) => T | void;
    getLayer: () => Layer;
    hasFeatureAtCoordinate: (coordinate: Coordinate, frameState: FrameState) => boolean;
    loadImage: (image: ImageBase) => boolean;
    manageTilePyramid: (frameState: FrameState, tileSource: TileSource, tileGrid: TileGrid, pixelRatio: number, projection: Projection, extent: Extent, currentZ: number, preload: number, opt_tileCallback?: (() => void), opt_this?: T) => void;
    renderIfReadyAndVisible: () => void;
    scheduleExpireCache: (frameState: FrameState, tileSource: TileSource) => void;
    updateUsedTiles: (usedTiles: { [key: string]: { [key: string]: TileRange } }, tileSource: TileSource, z: number, tileRange: TileRange) => void;
  }

}
