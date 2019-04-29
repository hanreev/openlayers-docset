import Map from 'ol/Map';
import View from 'ol/View';
import ImageLayer from 'ol/layer/Image';
import ImageMapGuide from 'ol/source/ImageMapGuide';

const mdf = 'Library://Public/Samples/Sheboygan/Maps/Sheboygan.MapDefinition';
const agentUrl =
  'http://www.buoyshark.com/mapguide/mapagent/mapagent.fcgi?';
const bounds = [
  -87.865114442365922,
  43.665065564837931,
  -87.595394059497067,
  43.823852564430069
];
const map = new Map({
  layers: [
    new ImageLayer({
      extent: bounds,
      source: new ImageMapGuide({
        projection: 'EPSG:4326',
        url: agentUrl,
        useOverlay: false,
        metersPerUnit: 111319.4908, //value returned from mapguide
        params: {
          MAPDEFINITION: mdf,
          FORMAT: 'PNG',
          USERNAME: 'OpenLayers',
          PASSWORD: 'OpenLayers'
        },
        ratio: 2
      })
    })
  ],
  target: 'map',
  view: new View({
    center: [-87.7302542509315, 43.744459064634],
    projection: 'EPSG:4326',
    zoom: 12
  })
});
