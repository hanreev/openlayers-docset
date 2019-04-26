declare module 'ol/interaction/DragRotate' {

  import PointerInteraction from 'ol/interaction/Pointer';
  import { Condition } from 'ol/events/condition';

  export default class DragRotate extends PointerInteraction {
    constructor(opt_options?: Options);
  }

  export type Options = {
    condition?: Condition;
    duration?: number;
  }

}
