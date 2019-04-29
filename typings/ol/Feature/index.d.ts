declare module 'ol/Feature' {

  import { StyleFunction } from 'ol/style/Style';
  import Style from 'ol/style/Style';
  import BaseObject from 'ol/Object';
  import Geometry from 'ol/geom/Geometry';
  import { StyleLike } from 'ol/style/Style';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';
  import RenderFeature from 'ol/render/Feature';

  export function createStyleFunction(obj: StyleFunction | Style[] | Style): StyleFunction;

  export default class Feature extends BaseObject {
    constructor(opt_geometryOrProperties?: Geometry | { [key: string]: any });
    clone(): Feature;
    getGeometry(): Geometry;
    getGeometryName(): string;
    getId(): number | string;
    getStyle(): StyleLike;
    getStyleFunction(): StyleFunction;
    setGeometry(geometry: Geometry): void;
    setGeometryName(name: string): void;
    setId(id: number | string): void;
    setStyle(style: StyleLike): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): EventsKey;
    on(type: 'change:geometry', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:geometry', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:geometry', listener: (evt: ObjectEvent) => void): EventsKey;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
  }

  export type FeatureClass = Feature | RenderFeature;

  export type FeatureLike = Feature | RenderFeature;

}
