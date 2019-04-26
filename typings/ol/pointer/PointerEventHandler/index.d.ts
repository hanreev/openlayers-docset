declare module 'ol/pointer/PointerEventHandler' {

  import Target from 'ol/events/Target';
  import PointerEvent from 'ol/pointer/PointerEvent';
  import EventSource from 'ol/pointer/EventSource';

  export default class PointerEventHandler extends Target {
    constructor(element: Element | HTMLDocument);
    cancel: (data: Object, event: Event) => void;
    cloneEvent: (event: Event, inEvent: Event | Touch) => Object;
    down: (data: Object, event: Event) => void;
    enter: (data: Object, event: Event) => void;
    enterOver: (data: Object, event: Event) => void;
    fireEvent: (inType: string, data: Object, event: Event) => void;
    fireNativeEvent: (event: Event) => void;
    leave: (data: Object, event: Event) => void;
    leaveOut: (data: Object, event: Event) => void;
    makeEvent: (inType: string, data: Object, event: Event) => PointerEvent;
    move: (data: Object, event: Event) => void;
    out: (data: Object, event: Event) => void;
    over: (data: Object, event: Event) => void;
    registerSource: (name: string, source: EventSource) => void;
    registerSources: () => void;
    up: (data: Object, event: Event) => void;
    wrapMouseEvent: (eventType: string, event: Event) => PointerEvent;
  }

}
