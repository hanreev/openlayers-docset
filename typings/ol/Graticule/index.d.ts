declare module 'ol/Graticule' {

  import PluggableMap from 'ol/PluggableMap';
  import LineString from 'ol/geom/LineString';
  import Point from 'ol/geom/Point';
  import Stroke from 'ol/style/Stroke';
  import Text from 'ol/style/Text';

  export default class Graticule {
    constructor(opt_options?: Options);
    getMap: () => PluggableMap;
    getMeridians: () => LineString[];
    getParallels: () => LineString[];
    setMap: (map: PluggableMap) => void;
  }

  export type GraticuleLabelDataType = {
    geom: Point;
    text: string;
  }

  export type Options = {
    map?: PluggableMap;
    maxLines?: number;
    strokeStyle?: Stroke;
    targetSize?: number;
    showLabels?: boolean;
    lonLabelFormatter?: ((param0: number) => string);
    latLabelFormatter?: ((param0: number) => string);
    lonLabelPosition?: number;
    latLabelPosition?: number;
    lonLabelStyle?: Text;
    latLabelStyle?: Text;
    intervals?: number[];
  }

}
