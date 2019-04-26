declare module 'ol/control/ScaleLine' {

  import MapEvent from 'ol/MapEvent';
  import Control from 'ol/control/Control';

  export function render<T>(mapEvent: MapEvent<T>): void;

  export interface Options {
    className?: string;
    minWidth?: number;
    render?: (<T>(param0: MapEvent<T>) => void);
    target?: HTMLElement | string;
    units?: Units | string;
  }

  export default class ScaleLine extends Control {
    constructor(opt_options?: Options);
    getUnits(): Units;
    setUnits(units: Units): void;
  }

  export enum Units {
    DEGREES = 'degrees',
    IMPERIAL = 'imperial',
    NAUTICAL = 'nautical',
    METRIC = 'metric',
    US = 'us',
  }

}
