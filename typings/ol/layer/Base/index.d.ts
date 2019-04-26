declare module 'ol/layer/Base' {

  import BaseObject from 'ol/Object';
  import { Extent } from 'ol/extent';
  import Layer from 'ol/layer/Layer';
  import { State } from 'ol/layer/Layer';
  import State_1 from 'ol/source/State';
  import LayerType from 'ol/LayerType';

  export default class BaseLayer extends BaseObject {
    constructor(options: Options);
    getExtent: () => Extent | undefined;
    getLayersArray: (opt_array?: Layer[]) => Layer[];
    getLayerState: () => State;
    getLayerStatesArray: (opt_states?: State[]) => State[];
    getMaxResolution: () => number;
    getMinResolution: () => number;
    getOpacity: () => number;
    getSourceState: () => State_1;
    getType: () => LayerType;
    getVisible: () => boolean;
    getZIndex: () => number;
    setExtent: (extent: Extent | undefined) => void;
    setMaxResolution: (maxResolution: number) => void;
    setMinResolution: (minResolution: number) => void;
    setOpacity: (opacity: number) => void;
    setVisible: (visible: boolean) => void;
    setZIndex: (zindex: number) => void;
  }

  export type Options = {
    opacity?: number;
    visible?: boolean;
    extent?: Extent;
    zIndex?: number;
    minResolution?: number;
    maxResolution?: number;
  }

}
