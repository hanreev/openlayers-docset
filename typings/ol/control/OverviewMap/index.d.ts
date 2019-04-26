declare module 'ol/control/OverviewMap' {

  import MapEvent from 'ol/MapEvent';
  import Layer from 'ol/layer/Layer';
  import Collection from 'ol/Collection';
  import View from 'ol/View';
  import Control from 'ol/control/Control';
  import PluggableMap from 'ol/PluggableMap';

  export function render(mapEvent: MapEvent): void;

  export type Options = {
    className?: string;
    collapsed?: boolean;
    collapseLabel?: string | HTMLElement;
    collapsible?: boolean;
    label?: string | HTMLElement;
    layers?: Layer[] | Collection<Layer>;
    render?: ((param0: MapEvent) => void);
    target?: HTMLElement | string;
    tipLabel?: string;
    view?: View;
  }

  export default class OverviewMap extends Control {
    constructor(opt_options?: Options);
    getCollapsed: () => boolean;
    getCollapsible: () => boolean;
    getOverviewMap: () => PluggableMap;
    setCollapsed: (collapsed: boolean) => void;
    setCollapsible: (collapsible: boolean) => void;
  }

}
