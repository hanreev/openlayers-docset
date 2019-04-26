declare module 'ol/control/Rotate' {

  import MapEvent from 'ol/MapEvent';
  import Control from 'ol/control/Control';

  export function render(mapEvent: MapEvent): void;

  export type Options = {
    className?: string;
    label?: string | HTMLElement;
    tipLabel?: string;
    duration?: number;
    autoHide?: boolean;
    render?: ((param0: MapEvent) => void);
    resetNorth?: (() => void);
    target?: HTMLElement | string;
  }

  export default class Rotate extends Control {
    constructor(opt_options?: Options);
  }

}
