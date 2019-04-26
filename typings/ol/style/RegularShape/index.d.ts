declare module 'ol/style/RegularShape' {

  import Fill from 'ol/style/Fill';
  import Stroke from 'ol/style/Stroke';
  import AtlasManager from 'ol/style/AtlasManager';
  import ImageStyle from 'ol/style/Image';
  import { ColorLike } from 'ol/colorlike';

  export type Options = {
    fill?: Fill;
    points: number;
    radius?: number;
    radius1?: number;
    radius2?: number;
    angle?: number;
    stroke?: Stroke;
    rotation?: number;
    rotateWithView?: boolean;
    atlasManager?: AtlasManager;
  }

  export default class RegularShape extends ImageStyle {
    constructor(options: Options);
    clone: () => RegularShape;
    getAngle: () => number;
    getChecksum: () => string;
    getFill: () => Fill;
    getPoints: () => number;
    getRadius: () => number;
    getRadius2: () => number | undefined;
    getStroke: () => Stroke;
    render_: (atlasManager: AtlasManager | undefined) => void;
  }

  export type RenderOptions = {
    strokeStyle?: ColorLike;
    strokeWidth: number;
    size: number;
    lineCap: string;
    lineDash: number[];
    lineDashOffset: number;
    lineJoin: string;
    miterLimit: number;
  }

}
