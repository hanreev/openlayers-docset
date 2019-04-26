declare module 'ol/render/Feature' {

  import GeometryType from 'ol/geom/GeometryType';
  import { Extent } from 'ol/extent';
  import { ProjectionLike } from 'ol/proj';

  export default class RenderFeature {
    constructor(type: GeometryType, flatCoordinates: number[], ends: number[] | number[][], properties: { [key in string]: any }, id: number | string);
    get(key: string): any;
    getExtent(): Extent;
    getFlatInteriorPoint(): number[];
    getFlatInteriorPoints(): number[];
    getFlatMidpoint(): number[];
    getFlatMidpoints(): number[];
    getGeometry(): RenderFeature;
    getId(): number | string;
    getOrientedFlatCoordinates(): number[];
    getProperties(): { [key in string]: any };
    getSimplifiedGeometry(squaredTolerance: number): RenderFeature;
    getStride(): number;
    getStyleFunction(): any;
    getType(): GeometryType;
    transform(source: ProjectionLike, destination: ProjectionLike): void;
  }

}
