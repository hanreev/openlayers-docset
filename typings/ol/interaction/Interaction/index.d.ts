declare module 'ol/interaction/Interaction' {

  import View from 'ol/View';
  import { Coordinate } from 'ol/coordinate';
  import BaseObject from 'ol/Object';
  import PluggableMap from 'ol/PluggableMap';
  import MapBrowserEvent from 'ol/MapBrowserEvent';

  export function pan(view: View, delta: Coordinate, opt_duration?: number): void;

  export function rotate(view: View, rotation: number | undefined, opt_anchor?: Coordinate, opt_duration?: number): void;

  export function rotateWithoutConstraints(view: View, rotation: number | undefined, opt_anchor?: Coordinate, opt_duration?: number): void;

  export function zoom(view: View, resolution: number | undefined, opt_anchor?: Coordinate, opt_duration?: number, opt_direction?: number): void;

  export function zoomByDelta(view: View, delta: number, opt_anchor?: Coordinate, opt_duration?: number): void;

  export function zoomWithoutConstraints(view: View, resolution: number | undefined, opt_anchor?: Coordinate, opt_duration?: number): void;

  export default class Interaction extends BaseObject {
    constructor(options: InteractionOptions);
    getActive: () => boolean;
    getMap: () => PluggableMap;
    handleEvent: (mapBrowserEvent: MapBrowserEvent) => boolean;
    setActive: (active: boolean) => void;
    setMap: (map: PluggableMap) => void;
  }

  export type InteractionOptions = {
    handleEvent: ((param0: MapBrowserEvent) => boolean);
  }

}
