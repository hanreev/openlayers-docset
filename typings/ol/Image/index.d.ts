declare module 'ol/Image' {

  import ImageBase from 'ol/ImageBase';
  import { Extent } from 'ol/extent';

  export default class ImageWrapper extends ImageBase {
    constructor(extent: Extent, resolution: number | undefined, pixelRatio: number, src: string, crossOrigin: string, imageLoadFunction: LoadFunction);
    setImage: (image: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement) => void;
  }

  export type LoadFunction = ((param0: ImageWrapper, param1: string) => void);

}
