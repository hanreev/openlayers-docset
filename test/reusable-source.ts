import TileLayer from 'ol/layer/Tile';
import Map from 'ol/Map';
import XYZ from 'ol/source/XYZ';
import View from 'ol/View';

const urls = [
  'https://{a-c}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-jan/{z}/{x}/{y}.png',
  'https://{a-c}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-bathy-jan/{z}/{x}/{y}.png',
  'https://{a-c}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-jul/{z}/{x}/{y}.png',
  'https://{a-c}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-bathy-jul/{z}/{x}/{y}.png'
];

const source = new XYZ();

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: source
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});


function updateUrl(index: number) {
  source.setUrl(urls[index]);
}

const buttons = document.getElementsByClassName('switcher');
for (let i = 0, ii = buttons.length; i < ii; ++i) {
  const button = buttons[i] as HTMLButtonElement;
  button.addEventListener('click', updateUrl.bind(null, Number(button.value)));
}

updateUrl(0);
