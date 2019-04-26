declare module 'ol/source/Source' {

  import { FrameState } from 'ol/PluggableMap';
  import { ProjectionLike } from 'ol/proj';
  import State from 'ol/source/State';
  import BaseObject from 'ol/Object';
  import Projection from 'ol/proj/Projection';

  export type Attribution = ((param0: FrameState) => string | string[]);

  export type AttributionLike = string | string[] | Attribution;

  export type Options = {
    attributions?: AttributionLike;
    attributionsCollapsible?: boolean;
    projection: ProjectionLike;
    state?: State;
    wrapX?: boolean;
  }

  export default class Source extends BaseObject {
    constructor(options: Options);
    getAttributions: () => Attribution;
    getAttributionsCollapsible: () => boolean;
    getProjection: () => Projection;
    getResolutions: () => number[] | undefined;
    getState: () => State;
    getWrapX: () => boolean | undefined;
    refresh: () => void;
    setAttributions: (attributions: AttributionLike | undefined) => void;
    setState: (state: State) => void;
  }

}
