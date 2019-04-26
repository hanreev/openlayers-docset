declare module 'ol/source/Source' {

  import { FrameState } from 'ol/PluggableMap';
  import { ProjectionLike } from 'ol/proj';
  import State from 'ol/source/State';
  import BaseObject from 'ol/Object';
  import Projection from 'ol/proj/Projection';

  export type Attribution = (<T>(param0: FrameState<T>) => string | string[]);

  export type AttributionLike = string | string[] | Attribution;

  export interface Options {
    attributions?: AttributionLike;
    attributionsCollapsible?: boolean;
    projection: ProjectionLike;
    state?: State;
    wrapX?: boolean;
  }

  export default class Source extends BaseObject {
    constructor(options: Options);
    getAttributions(): Attribution;
    getAttributionsCollapsible(): boolean;
    getProjection(): Projection;
    getResolutions(): number[];
    getState(): State;
    getWrapX(): boolean;
    refresh(): void;
    setAttributions(attributions: AttributionLike): void;
    setState(state: State): void;
  }

}
