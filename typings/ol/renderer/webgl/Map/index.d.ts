declare module 'ol/renderer/webgl/Map' {

  import MapRenderer from 'ol/renderer/Map';
  import PluggableMap from 'ol/PluggableMap';
  import Tile from 'ol/Tile';
  import { Size } from 'ol/size';
  import EventType from 'ol/render/EventType';
  import { FrameState } from 'ol/PluggableMap';
  import WebGLContext from 'ol/webgl/Context';
  import PriorityQueue from 'ol/structs/PriorityQueue';
  import Event from 'ol/events/Event';

  export type TextureCacheEntry = {
    magFilter: number;
    minFilter: number;
    texture: WebGLTexture;
  }

  export default class WebGLMapRenderer extends MapRenderer {
    constructor(map: PluggableMap);
    bindTileTexture: (tile: Tile, tileSize: Size, tileGutter: number, magFilter: number, minFilter: number) => void;
    dispatchRenderEvent: (type: EventType, frameState: FrameState) => void;
    getContext: () => WebGLContext;
    getGL: () => WebGLRenderingContext;
    getTileTextureQueue: () => PriorityQueue<any[]>;
    handleWebGLContextLost: (event: Event) => void;
    handleWebGLContextRestored: () => void;
    isTileTextureLoaded: (tile: Tile) => boolean;
  }

}
