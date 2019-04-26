declare module 'ol/interaction/PinchRotate' {

  import PointerInteraction from 'ol/interaction/Pointer';

  export interface Options {
    duration?: number;
    threshold?: number;
  }

  export default class PinchRotate extends PointerInteraction {
    constructor(opt_options?: Options);
  }

}
