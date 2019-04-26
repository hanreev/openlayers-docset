declare module 'ol/control/FullScreen' {

  import Control from 'ol/control/Control';

  export default class FullScreen extends Control {
    constructor(opt_options?: Options);
  }

  export interface Options {
    className?: string;
    label?: string | Text;
    labelActive?: string | Text;
    tipLabel?: string;
    keys?: boolean;
    target?: HTMLElement | string;
    source?: HTMLElement | string;
  }

}
