declare module 'ol/interaction/PinchZoom' {

  import PointerInteraction from 'ol/interaction/Pointer';

  export interface Options {
    duration?: number;
    constrainResolution?: boolean;
  }

  export default class PinchZoom extends PointerInteraction {
    constructor(opt_options?: Options);
  }

}
