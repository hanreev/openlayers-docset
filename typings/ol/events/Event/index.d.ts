declare module 'ol/events/Event' {

  export function preventDefault(evt: Event | Event): void;

  export function stopPropagation(evt: Event | Event): void;

  export default class Event {
    constructor(type: string);
    target: Object;
    type: string;
    preventDefault(): void;
    stopPropagation(): void;
  }

}
