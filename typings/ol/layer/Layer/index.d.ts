declare module 'ol/layer/Layer' {

  import BaseLayer from 'ol/layer/Base';
  import Source from 'ol/source/Source';
  import PluggableMap from 'ol/PluggableMap';
  import { Extent } from 'ol/extent';
  import State_1 from 'ol/source/State';

  export function visibleAtResolution(layerState: State, resolution: number): boolean;

  export default class Layer extends BaseLayer {
    constructor(options: Options);
    getSource(): Source;
    setMap(map: PluggableMap): void;
    setSource(source: Source): void;
  }

  export interface Options {
    opacity?: number;
    visible?: boolean;
    extent?: Extent;
    zIndex?: number;
    minResolution?: number;
    maxResolution?: number;
    source?: Source;
    map?: PluggableMap;
  }

  export interface State {
    layer: BaseLayer;
    opacity: number;
    sourceState: State_1;
    visible: boolean;
    managed: boolean;
    extent?: Extent;
    zIndex: number;
    maxResolution: number;
    minResolution: number;
  }

}
