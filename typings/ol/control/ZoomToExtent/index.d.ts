declare module 'ol/control/ZoomToExtent' {

  import { Extent } from 'ol/extent';
  import Control from 'ol/control/Control';

  export interface Options {
    className?: string;
    target?: HTMLElement | string;
    label?: string | HTMLElement;
    tipLabel?: string;
    extent?: Extent;
  }

  export default class ZoomToExtent extends Control {
    constructor(opt_options?: Options);
    handleZoomToExtent(): void;
  }

}
