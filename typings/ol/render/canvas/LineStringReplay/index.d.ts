declare module 'ol/render/canvas/LineStringReplay' {

  import CanvasReplay from 'ol/render/canvas/Replay';
  import { Extent } from 'ol/extent';

  export default class CanvasLineStringReplay extends CanvasReplay {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number, overlaps: boolean, declutterTree: any);
    applyStroke: () => void;
  }

}
