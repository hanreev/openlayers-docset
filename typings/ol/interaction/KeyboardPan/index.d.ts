declare module 'ol/interaction/KeyboardPan' {

  import MapBrowserEvent from 'ol/MapBrowserEvent';
  import Interaction from 'ol/interaction/Interaction';
  import { Condition } from 'ol/events/condition';

  export default class KeyboardPan extends Interaction {
    constructor(opt_options?: Options);
  }

  export type Options = {
    condition?: Condition;
    duration?: number;
    pixelDelta?: number;
  }

}
