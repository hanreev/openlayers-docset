declare module 'ol/render/canvas/Replay' {

  import VectorContext from 'ol/render/VectorContext';
  import { Extent } from 'ol/extent';
  import { FillStrokeState } from 'ol/render/canvas';
  import Geometry from 'ol/geom/Geometry';
  import RenderFeature from 'ol/render/Feature';
  import Feature from 'ol/Feature';
  import SimpleGeometry from 'ol/geom/SimpleGeometry';
  import { DeclutterGroup } from 'ol/render/canvas';
  import { Transform } from 'ol/transform';
  import { Coordinate } from 'ol/coordinate';

  export default class CanvasReplay extends VectorContext {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number, overlaps: boolean, declutterTree: any);
    appendFlatCoordinates(flatCoordinates: number[], offset: number, end: number, stride: number, closed: boolean, skipFirst: boolean): number;
    applyPixelRatio(dashArray: number[]): number[];
    applyStroke(state: FillStrokeState): void;
    beginGeometry(geometry: Geometry | RenderFeature, feature: Feature | RenderFeature): void;
    createFill(state: FillStrokeState, geometry: Geometry | RenderFeature): any[];
    createStroke(state: FillStrokeState): any[];
    drawCustom(): void;
    drawCustom(geometry: SimpleGeometry, feature: Feature | RenderFeature, renderer: (() => void)): void;
    drawCustomCoordinates_(flatCoordinates: number[], offset: number, ends: number[], stride: number, replayEnds: number[]): number;
    endGeometry(geometry: Geometry | RenderFeature, feature: Feature | RenderFeature): void;
    finish(): void;
    getBufferedMaxExtent(): Extent;
    renderDeclutter_(declutterGroup: DeclutterGroup, feature: Feature | RenderFeature): void;
    replay(context: CanvasRenderingContext2D, transform: Transform, viewRotation: number, skippedFeaturesHash: { [key: string]: boolean }, snapToPixel: boolean): void;
    replayHitDetection<T>(context: CanvasRenderingContext2D, transform: Transform, viewRotation: number, skippedFeaturesHash: { [key: string]: boolean }, opt_featureCallback?: (() => void), opt_hitExtent?: Extent): T;
    replayImage_(context: CanvasRenderingContext2D, x: number, y: number, image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, anchorX: number, anchorY: number, declutterGroup: DeclutterGroup, height: number, opacity: number, originX: number, originY: number, rotation: number, scale: number, snapToPixel: boolean, width: number, padding: number[], fillInstruction: any[], strokeInstruction: any[]): void;
    replayTextBackground_(context: CanvasRenderingContext2D, p1: Coordinate, p2: Coordinate, p3: Coordinate, p4: Coordinate, fillInstruction: any[], strokeInstruction: any[]): void;
    reverseHitDetectionInstructions(): void;
    updateFillStyle(state: FillStrokeState, createFill: ((this: CanvasReplay, param1: FillStrokeState, param2: Geometry | RenderFeature) => any[]), geometry: Geometry | RenderFeature): void;
    updateStrokeStyle(state: FillStrokeState, applyStroke: ((this: CanvasReplay, param1: FillStrokeState) => void)): void;
  }

}
