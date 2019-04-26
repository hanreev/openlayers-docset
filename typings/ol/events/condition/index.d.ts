declare module 'ol/events/condition' {

  import MapBrowserEvent from 'ol/MapBrowserEvent';
  import { TRUE } from 'ol/functions';
  import { FALSE } from 'ol/functions';

  export function altKeyOnly<T>(mapBrowserEvent: MapBrowserEvent<T>): boolean;

  export function altShiftKeysOnly<T>(mapBrowserEvent: MapBrowserEvent<T>): boolean;

  export const always: typeof TRUE;

  export function click<T>(mapBrowserEvent: MapBrowserEvent<T>): boolean;

  export type Condition = (<T>(this: any, param1: MapBrowserEvent<T>) => boolean);

  export function doubleClick<T>(mapBrowserEvent: MapBrowserEvent<T>): boolean;

  export function focus<T>(event: MapBrowserEvent<T>): boolean;

  export function mouseActionButton<T>(mapBrowserEvent: MapBrowserEvent<T>): boolean;

  export function mouseOnly<T>(mapBrowserEvent: MapBrowserEvent<T>): boolean;

  export const never: typeof FALSE;

  export function noModifierKeys<T>(mapBrowserEvent: MapBrowserEvent<T>): boolean;

  export function platformModifierKeyOnly<T>(mapBrowserEvent: MapBrowserEvent<T>): boolean;

  export function pointerMove<T>(mapBrowserEvent: MapBrowserEvent<T>): boolean;

  export function primaryAction<T>(mapBrowserEvent: MapBrowserEvent<T>): boolean;

  export function shiftKeyOnly<T>(mapBrowserEvent: MapBrowserEvent<T>): boolean;

  export function singleClick<T>(mapBrowserEvent: MapBrowserEvent<T>): boolean;

  export function targetNotEditable<T>(mapBrowserEvent: MapBrowserEvent<T>): boolean;

}
