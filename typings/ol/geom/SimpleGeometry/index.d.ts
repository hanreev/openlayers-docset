declare module 'ol/geom/SimpleGeometry' {

  import GeometryLayout from 'ol/geom/GeometryLayout';
  import { Transform } from 'ol/transform';
  import Geometry from 'ol/geom/Geometry';
  import { Coordinate } from 'ol/coordinate';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';

  export function getStrideForLayout(layout: GeometryLayout): number;

  export function transformGeom2D(simpleGeometry: SimpleGeometry, transform: Transform, opt_dest?: number[]): number[];

  export default class SimpleGeometry extends Geometry {
    constructor();
    protected flatCoordinates: number[];
    protected layout: GeometryLayout;
    protected stride: number;
    protected getSimplifiedGeometryInternal(squaredTolerance: number): SimpleGeometry;
    protected setLayout(layout: GeometryLayout, coordinates: any[], nesting: number): void;
    getCoordinates(): any[];
    getFirstCoordinate(): Coordinate;
    getFlatCoordinates(): number[];
    getLastCoordinate(): Coordinate;
    getLayout(): GeometryLayout;
    getStride(): number;
    setCoordinates(coordinates: any[], opt_layout?: GeometryLayout): void;
    setFlatCoordinates(layout: GeometryLayout, flatCoordinates: number[]): void;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
  }

}
