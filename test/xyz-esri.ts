import TileLayer from 'ol/layer/Tile';
import Map from 'ol/Map';
import { fromLonLat } from 'ol/proj';
import XYZ from 'ol/source/XYZ';
import View from 'ol/View';


const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        attributions: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
          'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
          'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
      })
    })
  ],
  view: new View({
    center: fromLonLat([-121.1, 47.5]),
    zoom: 7
  })
});
