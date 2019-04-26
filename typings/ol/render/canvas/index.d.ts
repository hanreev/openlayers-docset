declare module 'ol/render/canvas' {

  import { Transform } from 'ol/transform';
  import { ColorLike } from 'ol/colorlike';
  import LRUCache from 'ol/structs/LRUCache';
  import Fill from 'ol/style/Fill';
  import Stroke from 'ol/style/Stroke';

  export function drawImage(context: CanvasRenderingContext2D, transform: Transform | null, opacity: number, image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, originX: number, originY: number, w: number, h: number, x: number, y: number, scale: number): void;

  export function measureTextWidth(font: string, text: string): number;

  export function rotateAtOffset(context: CanvasRenderingContext2D, rotation: number, offsetX: number, offsetY: number): void;

  export type DeclutterGroup = any[];

  export type FillState = {
    fillStyle: ColorLike;
  }

  export type FillStrokeState = {
    currentFillStyle?: ColorLike;
    currentStrokeStyle?: ColorLike;
    currentLineCap?: string;
    currentLineDash: number[];
    currentLineDashOffset?: number;
    currentLineJoin?: string;
    currentLineWidth?: number;
    currentMiterLimit?: number;
    lastStroke?: number;
    fillStyle?: ColorLike;
    strokeStyle?: ColorLike;
    lineCap?: string;
    lineDash: number[];
    lineDashOffset?: number;
    lineJoin?: string;
    lineWidth?: number;
    miterLimit?: number;
  }

  export const labelCache: LRUCache<HTMLCanvasElement>;

  export type StrokeState = {
    lineCap: string;
    lineDash: number[];
    lineDashOffset: number;
    lineJoin: string;
    lineWidth: number;
    miterLimit: number;
    strokeStyle: ColorLike;
  }

  export type TextState = {
    font: string;
    textAlign?: string;
    textBaseline: string;
    placement?: string;
    maxAngle?: number;
    overflow?: boolean;
    backgroundFill?: Fill;
    backgroundStroke?: Stroke;
    scale?: number;
    padding?: number[];
  }

}
