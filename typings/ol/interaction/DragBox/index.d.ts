declare module 'ol/interaction/DragBox' {

  import PointerInteraction from 'ol/interaction/Pointer';
  import MapBrowserEvent from 'ol/MapBrowserEvent';
  import { Pixel } from 'ol/pixel';
  import Polygon from 'ol/geom/Polygon';
  import Event from 'ol/events/Event';
  import { Coordinate } from 'ol/coordinate';
  import { Condition } from 'ol/events/condition';

  export default class DragBox extends PointerInteraction {
    constructor(opt_options?: Options);
    defaultBoxEndCondition: (mapBrowserEvent: MapBrowserEvent, startPixel: Pixel, endPixel: Pixel) => boolean;
    getGeometry: () => Polygon;
  }

  export type EndCondition = ((this: any, param1: MapBrowserEvent, param2: Pixel, param3: Pixel) => boolean);

  export type Options = {
    className?: string;
    condition?: Condition;
    minArea?: number;
    boxEndCondition?: EndCondition;
    onBoxEnd: ((this: DragBox, param1: MapBrowserEvent) => void);
  }

}
