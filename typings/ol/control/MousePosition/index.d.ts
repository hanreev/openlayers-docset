declare module 'ol/control/MousePosition' {

  import MapEvent from 'ol/MapEvent';
  import Control from 'ol/control/Control';
  import { CoordinateFormat } from 'ol/coordinate';
  import Projection from 'ol/proj/Projection';
  import { ProjectionLike } from 'ol/proj';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';

  export function render(mapEvent: MapEvent): void;

  export default class MousePosition extends Control {
    constructor(opt_options?: Options);
    protected handleMouseMove(event: Event): void;
    protected handleMouseOut(event: Event): void;
    getCoordinateFormat(): CoordinateFormat;
    getProjection(): Projection;
    setCoordinateFormat(format: CoordinateFormat): void;
    setProjection(projection: ProjectionLike): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'change:coordinateFormat', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:coordinateFormat', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:coordinateFormat', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:projection', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:projection', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:projection', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
  }

  export interface Options {
    className?: string;
    coordinateFormat?: CoordinateFormat;
    projection?: ProjectionLike;
    render?: ((param0: MapEvent) => void);
    target?: HTMLElement | string;
    undefinedHTML?: string;
  }

}
