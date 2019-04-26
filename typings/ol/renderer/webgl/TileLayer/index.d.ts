declare module 'ol/renderer/webgl/TileLayer' {

  import WebGLLayerRenderer from 'ol/renderer/webgl/Layer';
  import WebGLMapRenderer from 'ol/renderer/webgl/Map';
  import TileLayer from 'ol/layer/Tile';
  import MapRenderer from 'ol/renderer/Map';
  import Layer from 'ol/layer/Layer';

  export default class WebGLTileLayerRenderer extends WebGLLayerRenderer {
    constructor(mapRenderer: WebGLMapRenderer, tileLayer: TileLayer);
    'create']: (mapRenderer: MapRenderer, layer: Layer) => WebGLTileLayerRenderer;
  'handles']: (layer: Layer) => boolean;
}

}
