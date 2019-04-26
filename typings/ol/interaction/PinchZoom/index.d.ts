declare module 'ol/interaction/PinchZoom' {

  import PointerInteraction from 'ol/interaction/Pointer';

  export type Options = {
    duration?: number;
    constrainResolution?: boolean;
  }

  export default class PinchZoom extends PointerInteraction {
    constructor(opt_options?: Options);
  }

}
