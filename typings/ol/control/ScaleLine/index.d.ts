declare module 'ol/control/ScaleLine' {

  import MapEvent from 'ol/MapEvent';
  import Control from 'ol/control/Control';

  export function render(mapEvent: MapEvent): void;

  export type Options = {
    className?: string;
    minWidth?: number;
    render?: ((param0: MapEvent) => void);
    target?: HTMLElement | string;
    units?: Units | string;
  }

  export default class ScaleLine extends Control {
    constructor(opt_options?: Options);
    getUnits: () => Units;
    setUnits: (units: Units) => void;
  }

  export enum Units {
    DEGREES = 'degrees',
    IMPERIAL = 'imperial',
    NAUTICAL = 'nautical',
    METRIC = 'metric',
    US = 'us',
  }

}
