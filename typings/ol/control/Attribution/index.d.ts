declare module 'ol/control/Attribution' {

  import MapEvent from 'ol/MapEvent';
  import Control from 'ol/control/Control';

  export function render(mapEvent: MapEvent): void;

  export default class Attribution extends Control {
    constructor(opt_options?: Options);
    getCollapsed: () => boolean;
    getCollapsible: () => boolean;
    setCollapsed: (collapsed: boolean) => void;
    setCollapsible: (collapsible: boolean) => void;
  }

  export type Options = {
    className?: string;
    target?: HTMLElement | string;
    collapsible?: boolean;
    collapsed?: boolean;
    tipLabel?: string;
    label?: string;
    collapseLabel?: string | HTMLElement;
    render?: ((param0: MapEvent) => void);
  }

}
