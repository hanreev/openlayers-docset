declare module 'ol/events/condition' {

  import MapBrowserEvent from 'ol/MapBrowserEvent';
  import { TRUE } from 'ol/functions';
  import { FALSE } from 'ol/functions';

  export function altKeyOnly(mapBrowserEvent: MapBrowserEvent): boolean;

  export function altShiftKeysOnly(mapBrowserEvent: MapBrowserEvent): boolean;

  export const always: typeof TRUE;

  export function click(mapBrowserEvent: MapBrowserEvent): boolean;

  export type Condition = ((this: any, param1: MapBrowserEvent) => boolean);

  export function doubleClick(mapBrowserEvent: MapBrowserEvent): boolean;

  export function focus(event: MapBrowserEvent): boolean;

  export function mouseActionButton(mapBrowserEvent: MapBrowserEvent): boolean;

  export function mouseOnly(mapBrowserEvent: MapBrowserEvent): boolean;

  export const never: typeof FALSE;

  export function noModifierKeys(mapBrowserEvent: MapBrowserEvent): boolean;

  export function platformModifierKeyOnly(mapBrowserEvent: MapBrowserEvent): boolean;

  export function pointerMove(mapBrowserEvent: MapBrowserEvent): boolean;

  export function primaryAction(mapBrowserEvent: MapBrowserEvent): boolean;

  export function shiftKeyOnly(mapBrowserEvent: MapBrowserEvent): boolean;

  export function singleClick(mapBrowserEvent: MapBrowserEvent): boolean;

  export function targetNotEditable(mapBrowserEvent: MapBrowserEvent): boolean;

}
