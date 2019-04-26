declare module 'ol/interaction/DoubleClickZoom' {

  import Interaction from 'ol/interaction/Interaction';
  import MapBrowserEvent from 'ol/MapBrowserEvent';

  export default class DoubleClickZoom extends Interaction {
    constructor(opt_options?: Options);
  }

  export interface Options {
    duration?: number;
    delta?: number;
  }

}
