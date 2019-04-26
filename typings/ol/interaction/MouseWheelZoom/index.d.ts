declare module 'ol/interaction/MouseWheelZoom' {

  import Interaction from 'ol/interaction/Interaction';
  import { Condition } from 'ol/events/condition';

  export enum Mode {
    TRACKPAD = 'trackpad',
    WHEEL = 'wheel',
  }

  export default class MouseWheelZoom extends Interaction {
    constructor(opt_options?: Options);
    setMouseAnchor: (useAnchor: boolean) => void;
  }

  export type Options = {
    condition?: Condition;
    duration?: number;
    timeout?: number;
    constrainResolution?: boolean;
    useAnchor?: boolean;
  }

}
