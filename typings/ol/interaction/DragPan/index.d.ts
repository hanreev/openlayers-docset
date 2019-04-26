declare module 'ol/interaction/DragPan' {

  import PointerInteraction from 'ol/interaction/Pointer';
  import { Condition } from 'ol/events/condition';
  import Kinetic from 'ol/Kinetic';

  export default class DragPan extends PointerInteraction {
    constructor(opt_options?: Options);
  }

  export interface Options {
    condition?: Condition;
    kinetic?: Kinetic;
  }

}
