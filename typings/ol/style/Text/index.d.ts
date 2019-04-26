declare module 'ol/style/Text' {

  import TextPlacement from 'ol/style/TextPlacement';
  import Fill from 'ol/style/Fill';
  import Stroke from 'ol/style/Stroke';

  export type Options = {
    font?: string;
    maxAngle?: number;
    offsetX?: number;
    offsetY?: number;
    overflow?: boolean;
    placement?: TextPlacement | string;
    scale?: number;
    rotateWithView?: boolean;
    rotation?: number;
    text?: string;
    textAlign?: string;
    textBaseline?: string;
    fill?: Fill;
    stroke?: Stroke;
    backgroundFill?: Fill;
    backgroundStroke?: Stroke;
    padding?: number[];
  }

  export default class Text {
    constructor(opt_options?: Options);
    clone: () => Text;
    getBackgroundFill: () => Fill;
    getBackgroundStroke: () => Stroke;
    getFill: () => Fill;
    getFont: () => string | undefined;
    getMaxAngle: () => number;
    getOffsetX: () => number;
    getOffsetY: () => number;
    getOverflow: () => boolean;
    getPadding: () => number[];
    getPlacement: () => TextPlacement | string;
    getRotateWithView: () => boolean | undefined;
    getRotation: () => number | undefined;
    getScale: () => number | undefined;
    getStroke: () => Stroke;
    getText: () => string | undefined;
    getTextAlign: () => string | undefined;
    getTextBaseline: () => string | undefined;
    setBackgroundFill: (fill: Fill) => void;
    setBackgroundStroke: (stroke: Stroke) => void;
    setFill: (fill: Fill) => void;
    setFont: (font: string | undefined) => void;
    setMaxAngle: (maxAngle: number) => void;
    setOffsetX: (offsetX: number) => void;
    setOffsetY: (offsetY: number) => void;
    setOverflow: (overflow: boolean) => void;
    setPadding: (padding: number[]) => void;
    setPlacement: (placement: TextPlacement | string) => void;
    setRotation: (rotation: number | undefined) => void;
    setScale: (scale: number | undefined) => void;
    setStroke: (stroke: Stroke) => void;
    setText: (text: string | undefined) => void;
    setTextAlign: (textAlign: string | undefined) => void;
    setTextBaseline: (textBaseline: string | undefined) => void;
  }

}
