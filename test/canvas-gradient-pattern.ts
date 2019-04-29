import { Feature } from 'ol';
import GeoJSON from 'ol/format/GeoJSON';
import { DEVICE_PIXEL_RATIO } from 'ol/has';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import { fromLonLat } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import { Fill, Stroke, Style } from 'ol/style';
import View from 'ol/View';

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

// Gradient and pattern are in canvas pixel space, so we adjust for the
// renderer's pixel ratio
const pixelRatio = DEVICE_PIXEL_RATIO;

// Generate a rainbow gradient
const gradient = (function() {
  const grad = context.createLinearGradient(0, 0, 512 * pixelRatio, 0);
  grad.addColorStop(0, 'red');
  grad.addColorStop(1 / 6, 'orange');
  grad.addColorStop(2 / 6, 'yellow');
  grad.addColorStop(3 / 6, 'green');
  grad.addColorStop(4 / 6, 'aqua');
  grad.addColorStop(5 / 6, 'blue');
  grad.addColorStop(1, 'purple');
  return grad;
})();

// Generate a canvasPattern with two circles on white background
const pattern = (function() {
  canvas.width = 8 * pixelRatio;
  canvas.height = 8 * pixelRatio;
  // white background
  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);
  // outer circle
  context.fillStyle = 'rgba(102, 0, 102, 0.5)';
  context.beginPath();
  context.arc(4 * pixelRatio, 4 * pixelRatio, 3 * pixelRatio, 0, 2 * Math.PI);
  context.fill();
  // inner circle
  context.fillStyle = 'rgb(55, 0, 170)';
  context.beginPath();
  context.arc(4 * pixelRatio, 4 * pixelRatio, 1.5 * pixelRatio, 0, 2 * Math.PI);
  context.fill();
  return context.createPattern(canvas, 'repeat');
}());

// Generate style for gradient or pattern fill
const fill = new Fill();
const style = new Style({
  fill: fill,
  stroke: new Stroke({
    color: '#333',
    width: 2
  })
});

/**
 * The styling function for the vector layer, will return an array of styles
 * which either contains the aboove gradient or pattern.
 */
const getStackedStyle = function(feature: Feature): Style {
  const id = feature.getId();
  fill.setColor(id > 'J' ? gradient : pattern);
  return style;
};

// Create a vector layer that makes use of the style function above…
const vectorLayer = new VectorLayer({
  source: new VectorSource({
    url: 'data/geojson/countries.geojson',
    format: new GeoJSON()
  }),
  style: getStackedStyle
});

// … finally create a map with that layer.
const map = new Map({
  layers: [
    vectorLayer
  ],
  target: 'map',
  view: new View({
    center: fromLonLat([16, 48]),
    zoom: 3
  })
});
