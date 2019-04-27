declare module 'ol/control/MousePosition' {

  import MapEvent from 'ol/MapEvent';
  import Control from 'ol/control/Control';
  import { CoordinateFormat } from 'ol/coordinate';
  import Projection from 'ol/proj/Projection';
  import { ProjectionLike } from 'ol/proj';

  export function render<T>(mapEvent: MapEvent<T>): void;

  export default class MousePosition extends Control {
    constructor(opt_options?: Options);
    protected handleMouseMove(event: Event): void;
    protected handleMouseOut(event: Event): void;
    getCoordinateFormat(): CoordinateFormat;
    getProjection(): Projection;
    setCoordinateFormat(format: CoordinateFormat): void;
    setProjection(projection: ProjectionLike): void;
  }

  export interface Options {
    className?: string;
    coordinateFormat?: CoordinateFormat;
    projection?: ProjectionLike;
    render?: (<T>(param0: MapEvent<T>) => void);
    target?: HTMLElement | string;
    undefinedHTML?: string;
  }

}
