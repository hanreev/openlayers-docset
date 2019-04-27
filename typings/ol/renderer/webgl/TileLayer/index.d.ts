declare module 'ol/renderer/webgl/TileLayer' {

  import WebGLLayerRenderer from 'ol/renderer/webgl/Layer';
  import WebGLMapRenderer from 'ol/renderer/webgl/Map';
  import TileLayer from 'ol/layer/Tile';
  import MapRenderer from 'ol/renderer/Map';
  import Layer from 'ol/layer/Layer';

  export default class WebGLTileLayerRenderer<T> extends WebGLLayerRenderer {
    constructor(mapRenderer: WebGLMapRenderer, tileLayer: TileLayer<T>);
    create<T>(mapRenderer: MapRenderer, layer: Layer): WebGLTileLayerRenderer<T>;
    handles(layer: Layer): boolean;
  }

}
