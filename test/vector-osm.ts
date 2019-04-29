import OSMXML from 'ol/format/OSMXML';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { bbox as bboxStrategy } from 'ol/loadingstrategy';
import Map from 'ol/Map';
import { transformExtent } from 'ol/proj';
import BingMaps from 'ol/source/BingMaps';
import VectorSource from 'ol/source/Vector';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import View from 'ol/View';

let map: Map = null;

const styles: { [key: string]: { [key: string]: Style } } = {
  'amenity': {
    'parking': new Style({
      stroke: new Stroke({
        color: 'rgba(170, 170, 170, 1.0)',
        width: 1
      }),
      fill: new Fill({
        color: 'rgba(170, 170, 170, 0.3)'
      })
    })
  },
  'building': {
    '.*': new Style({
      zIndex: 100,
      stroke: new Stroke({
        color: 'rgba(246, 99, 79, 1.0)',
        width: 1
      }),
      fill: new Fill({
        color: 'rgba(246, 99, 79, 0.3)'
      })
    })
  },
  'highway': {
    'service': new Style({
      stroke: new Stroke({
        color: 'rgba(255, 255, 255, 1.0)',
        width: 2
      })
    }),
    '.*': new Style({
      stroke: new Stroke({
        color: 'rgba(255, 255, 255, 1.0)',
        width: 3
      })
    })
  },
  'landuse': {
    'forest|grass|allotments': new Style({
      stroke: new Stroke({
        color: 'rgba(140, 208, 95, 1.0)',
        width: 1
      }),
      fill: new Fill({
        color: 'rgba(140, 208, 95, 0.3)'
      })
    })
  },
  'natural': {
    'tree': new Style({
      image: new CircleStyle({
        radius: 2,
        fill: new Fill({
          color: 'rgba(140, 208, 95, 1.0)'
        }),
        stroke: null
      })
    })
  }
};

const vectorSource = new VectorSource({
  format: new OSMXML(),
  loader: function(extent, resolution, projection) {
    const epsg4326Extent = transformExtent(extent, projection, 'EPSG:4326');
    const client = new XMLHttpRequest();
    client.open('POST', 'https://overpass-api.de/api/interpreter');
    client.addEventListener('load', function() {
      const features = new OSMXML().readFeatures(client.responseText, {
        featureProjection: map.getView().getProjection()
      });
      vectorSource.addFeatures(features);
    });
    const query = '(node(' +
      epsg4326Extent[1] + ',' + epsg4326Extent[0] + ',' +
      epsg4326Extent[3] + ',' + epsg4326Extent[2] +
      ');rel(bn)->.foo;way(bn);node(w)->.foo;rel(bw););out meta;';
    client.send(query);
  },
  strategy: bboxStrategy
});

const vector = new VectorLayer({
  source: vectorSource,
  style: function(feature) {
    for (const key in styles) {
      const value = feature.get(key);
      if (value !== undefined) {
        for (const regexp in styles[key]) {
          if (new RegExp(regexp).test(value)) {
            return styles[key][regexp];
          }
        }
      }
    }
    return null;
  }
});

const raster = new TileLayer({
  source: new BingMaps({
    imagerySet: 'Aerial',
    key: 'As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5'
  })
});

map = new Map({
  layers: [raster, vector],
  target: document.getElementById('map'),
  view: new View({
    center: [739218, 5906096],
    maxZoom: 19,
    zoom: 17
  })
});
