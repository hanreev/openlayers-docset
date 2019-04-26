declare module 'ol/style/Icon' {

  import ImageStyle from 'ol/style/Image';
  import { Color } from 'ol/color';
  import IconOrigin from 'ol/style/IconOrigin';
  import IconAnchorUnits from 'ol/style/IconAnchorUnits';
  import { Size } from 'ol/size';

  export default class Icon extends ImageStyle {
    constructor(opt_options?: Options);
    clone: () => Icon;
    getColor: () => Color;
    getSrc: () => string | undefined;
    setAnchor: (anchor: number[]) => void;
  }

  export type Options = {
    anchor?: number[];
    anchorOrigin?: IconOrigin;
    anchorXUnits?: IconAnchorUnits;
    anchorYUnits?: IconAnchorUnits;
    color?: Color | string;
    crossOrigin?: null | string;
    img?: HTMLImageElement | HTMLCanvasElement;
    offset?: number[];
    offsetOrigin?: IconOrigin;
    opacity?: number;
    scale?: number;
    rotateWithView?: boolean;
    rotation?: number;
    size?: Size;
    imgSize?: Size;
    src?: string;
  }

}
