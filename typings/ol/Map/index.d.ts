declare module 'ol/Map' {

  import PluggableMap from 'ol/PluggableMap';
  import { MapOptions } from 'ol/PluggableMap';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';
  import MapBrowserEvent from 'ol/MapBrowserEvent';
  import MapEvent from 'ol/MapEvent';
  import RenderEvent from 'ol/render/Event';

  export default class Map extends PluggableMap {
    constructor(options: MapOptions);
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'change:layerGroup', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:layerGroup', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:layerGroup', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:size', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:size', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:size', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:target', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:target', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:target', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'change:view', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:view', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:view', listener: (evt: ObjectEvent) => void): EventsKey;
    on<T>(type: 'click', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    once<T>(type: 'click', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    un<T>(type: 'click', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    on<T>(type: 'dblclick', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    once<T>(type: 'dblclick', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    un<T>(type: 'dblclick', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    on<T>(type: 'moveend', listener: (evt: MapEvent<T>) => void): EventsKey;
    once<T>(type: 'moveend', listener: (evt: MapEvent<T>) => void): EventsKey;
    un<T>(type: 'moveend', listener: (evt: MapEvent<T>) => void): EventsKey;
    on<T>(type: 'movestart', listener: (evt: MapEvent<T>) => void): EventsKey;
    once<T>(type: 'movestart', listener: (evt: MapEvent<T>) => void): EventsKey;
    un<T>(type: 'movestart', listener: (evt: MapEvent<T>) => void): EventsKey;
    on<T>(type: 'pointerdrag', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    once<T>(type: 'pointerdrag', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    un<T>(type: 'pointerdrag', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    on<T>(type: 'pointermove', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    once<T>(type: 'pointermove', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    un<T>(type: 'pointermove', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    on<T>(type: 'postcompose', listener: (evt: RenderEvent<T>) => void): EventsKey;
    once<T>(type: 'postcompose', listener: (evt: RenderEvent<T>) => void): EventsKey;
    un<T>(type: 'postcompose', listener: (evt: RenderEvent<T>) => void): EventsKey;
    on<T>(type: 'postrender', listener: (evt: MapEvent<T>) => void): EventsKey;
    once<T>(type: 'postrender', listener: (evt: MapEvent<T>) => void): EventsKey;
    un<T>(type: 'postrender', listener: (evt: MapEvent<T>) => void): EventsKey;
    on<T>(type: 'precompose', listener: (evt: RenderEvent<T>) => void): EventsKey;
    once<T>(type: 'precompose', listener: (evt: RenderEvent<T>) => void): EventsKey;
    un<T>(type: 'precompose', listener: (evt: RenderEvent<T>) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    on<T>(type: 'rendercomplete', listener: (evt: RenderEvent<T>) => void): EventsKey;
    once<T>(type: 'rendercomplete', listener: (evt: RenderEvent<T>) => void): EventsKey;
    un<T>(type: 'rendercomplete', listener: (evt: RenderEvent<T>) => void): EventsKey;
    on<T>(type: 'singleclick', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    once<T>(type: 'singleclick', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
    un<T>(type: 'singleclick', listener: (evt: MapBrowserEvent<T>) => void): EventsKey;
  }

}
