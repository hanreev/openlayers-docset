declare module 'ol/control/ZoomSlider' {

  import MapEvent from 'ol/MapEvent';
  import Control from 'ol/control/Control';

  export function render<T>(mapEvent: MapEvent<T>): void;

  export interface Options {
    className?: string;
    duration?: number;
    render?: (<T>(param0: MapEvent<T>) => void);
  }

  export default class ZoomSlider extends Control {
    constructor(opt_options?: Options);
  }

}
