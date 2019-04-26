declare module 'ol/control/ZoomSlider' {

  import MapEvent from 'ol/MapEvent';
  import Control from 'ol/control/Control';

  export function render(mapEvent: MapEvent): void;

  export type Options = {
    className?: string;
    duration?: number;
    render?: ((param0: MapEvent) => void);
  }

  export default class ZoomSlider extends Control {
    constructor(opt_options?: Options);
  }

}
