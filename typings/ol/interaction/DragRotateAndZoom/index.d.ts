declare module 'ol/interaction/DragRotateAndZoom' {

  import PointerInteraction from 'ol/interaction/Pointer';
  import { Condition } from 'ol/events/condition';

  export default class DragRotateAndZoom extends PointerInteraction {
    constructor(opt_options?: Options);
  }

  export interface Options {
    condition?: Condition;
    duration?: number;
  }

}
