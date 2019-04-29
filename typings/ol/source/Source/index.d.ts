declare module 'ol/source/Source' {

  import { FrameState } from 'ol/PluggableMap';
  import { ProjectionLike } from 'ol/proj';
  import State from 'ol/source/State';
  import BaseObject from 'ol/Object';
  import Projection from 'ol/proj/Projection';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';

  export type Attribution = (<T>(param0: FrameState<T>) => string | string[]);

  export type AttributionLike = string | string[] | Attribution;

  export interface Options {
    attributions?: AttributionLike;
    attributionsCollapsible?: boolean;
    projection?: ProjectionLike;
    state?: State;
    wrapX?: boolean;
  }

  export default class Source extends BaseObject {
    constructor(options: Options);
    protected setState(state: State): void;
    getAttributions(): Attribution;
    getAttributionsCollapsible(): boolean;
    getProjection(): Projection;
    getResolutions(): number[];
    getState(): State;
    getWrapX(): boolean;
    refresh(): void;
    setAttributions(attributions: AttributionLike): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
  }

}
