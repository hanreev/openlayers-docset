declare module 'ol/interaction/Extent' {

  import PointerInteraction from 'ol/interaction/Pointer';
  import { Extent } from 'ol/extent';
  import Event from 'ol/events/Event';
  import { StyleFunction } from 'ol/style/Style';
  import { Coordinate } from 'ol/coordinate';
  import { StyleLike } from 'ol/style/Style';

  export default class ExtentInteraction extends PointerInteraction {
    constructor(opt_options?: Options);
    getExtent: () => Extent;
    setExtent: (extent: Extent) => void;
  }

  export type Options = {
    extent?: Extent;
    boxStyle?: StyleLike;
    pixelTolerance?: number;
    pointerStyle?: StyleLike;
    wrapX?: boolean;
  }

}
