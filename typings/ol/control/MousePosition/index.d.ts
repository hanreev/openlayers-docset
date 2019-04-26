declare module 'ol/control/MousePosition' {

  import MapEvent from 'ol/MapEvent';
  import Control from 'ol/control/Control';
  import { CoordinateFormat } from 'ol/coordinate';
  import Projection from 'ol/proj/Projection';
  import { ProjectionLike } from 'ol/proj';

  export function render(mapEvent: MapEvent): void;

  export default class MousePosition extends Control {
    constructor(opt_options?: Options);
    getCoordinateFormat: () => CoordinateFormat | undefined;
    getProjection: () => Projection | undefined;
    handleMouseMove: (event: Event) => void;
    handleMouseOut: (event: Event) => void;
    setCoordinateFormat: (format: CoordinateFormat) => void;
    setProjection: (projection: ProjectionLike) => void;
  }

  export type Options = {
    className?: string;
    coordinateFormat?: CoordinateFormat;
    projection?: ProjectionLike;
    render?: ((param0: MapEvent) => void);
    target?: HTMLElement | string;
    undefinedHTML?: string;
  }

}
