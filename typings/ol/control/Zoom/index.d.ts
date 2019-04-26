declare module 'ol/control/Zoom' {

  import Control from 'ol/control/Control';

  export type Options = {
    duration?: number;
    className?: string;
    zoomInLabel?: string | HTMLElement;
    zoomOutLabel?: string | HTMLElement;
    zoomInTipLabel?: string;
    zoomOutTipLabel?: string;
    delta?: number;
    target?: HTMLElement | string;
  }

  export default class Zoom extends Control {
    constructor(opt_options?: Options);
  }

}
