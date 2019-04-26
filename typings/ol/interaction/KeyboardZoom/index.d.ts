declare module 'ol/interaction/KeyboardZoom' {

  import MapBrowserEvent from 'ol/MapBrowserEvent';
  import Interaction from 'ol/interaction/Interaction';
  import { Condition } from 'ol/events/condition';

  export default class KeyboardZoom extends Interaction {
    constructor(opt_options?: Options);
  }

  export interface Options {
    duration?: number;
    condition?: Condition;
    delta?: number;
  }

}
