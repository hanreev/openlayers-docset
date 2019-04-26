declare module 'ol/interaction/DragZoom' {

  import DragBox from 'ol/interaction/DragBox';
  import { Condition } from 'ol/events/condition';

  export default class DragZoom extends DragBox {
    constructor(opt_options?: Options);
  }

  export interface Options {
    className?: string;
    condition?: Condition;
    duration?: number;
    out?: boolean;
  }

}
