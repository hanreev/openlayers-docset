import { Image as ImageLayer, Tile as TileLayer } from 'ol/layer';
import Map from 'ol/Map';
import { fromLonLat } from 'ol/proj';
import RasterSource, { Operation } from 'ol/source/Raster';
import XYZ from 'ol/source/XYZ';
import View from 'ol/View';

const flood: Operation = (pixels: number[][], data) => {
  const pixel = pixels[0];
  if (pixel[3]) {
    const height = -10000 + ((pixel[0] * 256 * 256 + pixel[1] * 256 + pixel[2]) * 0.1);
    if (height <= data.level) {
      pixel[0] = 145;
      pixel[1] = 175;
      pixel[2] = 186;
      pixel[3] = 255;
    } else {
      pixel[3] = 0;
    }
  }
  return pixel;
}

const key = 'pk.eyJ1IjoidHNjaGF1YiIsImEiOiJjaW5zYW5lNHkxMTNmdWttM3JyOHZtMmNtIn0.CDIBD8H-G2Gf-cPkIuWtRg';
const elevation = new XYZ({
  url: 'https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=' + key,
  crossOrigin: 'anonymous',
  transition: 0
});

const raster = new RasterSource({
  sources: [elevation],
  operation: flood
});

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://api.mapbox.com/styles/v1/tschaub/ciutc102t00c62js5fqd47kqw/tiles/256/{z}/{x}/{y}?access_token=' +
          key
      })
    }),
    new ImageLayer({
      opacity: 0.6,
      source: raster
    })
  ],
  view: new View({
    center: fromLonLat([-122.3267, 37.8377]),
    zoom: 11
  })
});

const control = document.getElementById('level') as HTMLInputElement;
const output = document.getElementById('output');
control.addEventListener('input', function() {
  output.innerText = control.value;
  raster.changed();
});
output.innerText = control.value;

raster.on('beforeoperations', function(event) {
  event.data.level = control.value;
});

const locations = document.getElementsByClassName('location');
for (let i = 0, ii = locations.length; i < ii; ++i) {
  locations[i].addEventListener('click', relocate);
}

function relocate(event: Event) {
  const data = (event.target as HTMLAnchorElement).dataset;
  const view = map.getView();
  view.setCenter(fromLonLat(data.center.split(',').map(Number)));
  view.setZoom(Number(data.zoom));
}
