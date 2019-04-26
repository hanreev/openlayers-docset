declare module 'ol/control/Attribution' {

  import MapEvent from 'ol/MapEvent';
  import Control from 'ol/control/Control';

  export function render<T>(mapEvent: MapEvent<T>): void;

  export default class Attribution extends Control {
    constructor(opt_options?: Options);
    getCollapsed(): boolean;
    getCollapsible(): boolean;
    setCollapsed(collapsed: boolean): void;
    setCollapsible(collapsible: boolean): void;
  }

  export interface Options {
    className?: string;
    target?: HTMLElement | string;
    collapsible?: boolean;
    collapsed?: boolean;
    tipLabel?: string;
    label?: string;
    collapseLabel?: string | HTMLElement;
    render?: (<T>(param0: MapEvent<T>) => void);
  }

}
