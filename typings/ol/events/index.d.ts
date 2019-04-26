declare module 'ol/events' {

  import { EventTargetLike } from 'ol/events/Target';
  import Event from 'ol/events/Event';

  export function bindListener(listenerObj: EventsKey): ListenerFunction;

  export function findListener(listeners: EventsKey[], listener: (() => void), opt_this?: Object, opt_setDeleteIndex?: boolean): EventsKey | undefined;

  export function getListeners(target: EventTargetLike, type: string): EventsKey[] | undefined;

  export function listen(target: EventTargetLike, type: string, listener: ListenerFunction, opt_this?: Object, opt_once?: boolean): EventsKey;

  export function listenOnce(target: EventTargetLike, type: string, listener: ListenerFunction, opt_this?: Object): EventsKey;

  export function unlisten(target: EventTargetLike, type: string, listener: ListenerFunction, opt_this?: Object): void;

  export function unlistenAll(target: EventTargetLike): void;

  export function unlistenByKey(key: EventsKey): void;

  export type EventsKey = {
    bindTo?: Object;
    boundListener?: ListenerFunction;
    callOnce: boolean;
    deleteIndex?: number;
    listener: ListenerFunction;
    target: EventTargetLike;
    type: string;
  }

  export type ListenerFunction = ((param0: Event | Event) => void | boolean);

}
