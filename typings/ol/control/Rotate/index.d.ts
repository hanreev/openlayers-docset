declare module 'ol/control/Rotate' {

  import MapEvent from 'ol/MapEvent';
  import Control from 'ol/control/Control';

  export function render<T>(mapEvent: MapEvent<T>): void;

  export interface Options {
    className?: string;
    label?: string | HTMLElement;
    tipLabel?: string;
    duration?: number;
    autoHide?: boolean;
    render?: (<T>(param0: MapEvent<T>) => void);
    resetNorth?: (() => void);
    target?: HTMLElement | string;
  }

  export default class Rotate extends Control {
    constructor(opt_options?: Options);
  }

}
