declare module 'ol/interaction/Pointer' {

  import PointerEvent from 'ol/pointer/PointerEvent';
  import { Pixel } from 'ol/pixel';
  import MapBrowserPointerEvent from 'ol/MapBrowserPointerEvent';
  import MapBrowserEvent from 'ol/MapBrowserEvent';
  import Interaction from 'ol/interaction/Interaction';

  export function centroid(pointerEvents: PointerEvent[]): Pixel;

  export type Options = {
    handleDownEvent?: ((param0: MapBrowserPointerEvent) => boolean);
    handleDragEvent?: ((param0: MapBrowserPointerEvent) => void);
    handleEvent?: ((param0: MapBrowserEvent) => boolean);
    handleMoveEvent?: ((param0: MapBrowserPointerEvent) => void);
    handleUpEvent?: ((param0: MapBrowserPointerEvent) => boolean);
    stopDown?: ((param0: boolean) => boolean);
  }

  export default class PointerInteraction extends Interaction {
    constructor(opt_options?: Options);
    handleDownEvent: (mapBrowserEvent: MapBrowserPointerEvent) => boolean;
    handleDragEvent: (mapBrowserEvent: MapBrowserPointerEvent) => void;
    handleMoveEvent: (mapBrowserEvent: MapBrowserPointerEvent) => void;
    handleUpEvent: (mapBrowserEvent: MapBrowserPointerEvent) => boolean;
    stopDown: (handled: boolean) => boolean;
  }

}
