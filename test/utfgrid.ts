import { Coordinate } from 'ol/coordinate';
import TileLayer from 'ol/layer/Tile';
import Map from 'ol/Map';
import Overlay from 'ol/Overlay';
import TileJSON from 'ol/source/TileJSON';
import UTFGrid from 'ol/source/UTFGrid';
import View from 'ol/View';

const key = 'pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiRk1kMWZaSSJ9.E5BkluenyWQMsBLsuByrmg';

const mapLayer = new TileLayer({
  source: new TileJSON({
    url: 'https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token=' + key
  })
});


const gridSource = new UTFGrid({
  url: 'https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token=' + key
});

const gridLayer = new TileLayer({ source: gridSource });

const view = new View({
  center: [0, 0],
  zoom: 1
});

const mapElement = document.getElementById('map');
const map = new Map({
  layers: [mapLayer, gridLayer],
  target: mapElement,
  view: view
});

const infoElement = document.getElementById('country-info');
const flagElement = document.getElementById('country-flag') as HTMLImageElement;
const nameElement = document.getElementById('country-name');

const infoOverlay = new Overlay({
  element: infoElement,
  offset: [15, 15],
  stopEvent: false
});
map.addOverlay(infoOverlay);

const displayCountryInfo = function(coordinate: Coordinate) {
  const viewResolution = /** @type {number} */ (view.getResolution());
  gridSource.forDataAtCoordinateAndResolution(coordinate, viewResolution,
    function(data) {
      // If you want to use the template from the TileJSON,
      //  load the mustache.js library separately and call
      //  info.innerHTML = Mustache.render(gridSource.getTemplate(), data);
      mapElement.style.cursor = data ? 'pointer' : '';
      if (data) {
        flagElement.src = 'data:image/png;base64,' + data['flag_png'];
        nameElement.innerHTML = data['admin'];
      }
      infoOverlay.setPosition(data ? coordinate : undefined);
    });
};

map.on('pointermove', function(evt) {
  if (evt.dragging) {
    return;
  }
  const coordinate = map.getEventCoordinate(evt.originalEvent);
  displayCountryInfo(coordinate);
});

map.on('click', function(evt) {
  displayCountryInfo(evt.coordinate);
});
