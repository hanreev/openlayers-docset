declare module 'ol/control' {

  import { DefaultsOptions } from 'ol/control/util';
  import Collection from 'ol/Collection';
  import Control from 'ol/control/Control';

  export { default as Attribution } from 'ol/control/Attribution';
  export { default as Control } from 'ol/control/Control';
  export { default as FullScreen } from 'ol/control/FullScreen';
  export { default as MousePosition } from 'ol/control/MousePosition';
  export { default as OverviewMap } from 'ol/control/OverviewMap';
  export { default as Rotate } from 'ol/control/Rotate';
  export { default as ScaleLine } from 'ol/control/ScaleLine';
  export { default as Zoom } from 'ol/control/Zoom';
  export { default as ZoomSlider } from 'ol/control/ZoomSlider';
  export { default as ZoomToExtent } from 'ol/control/ZoomToExtent';

  export function defaults(opt_options?: DefaultsOptions): Collection<Control>;

}