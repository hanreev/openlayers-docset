declare module 'ol/render/webgl/TextureReplay' {

  import WebGLReplay from 'ol/render/webgl/Replay';
  import { Extent } from 'ol/extent';
  import WebGLContext from 'ol/webgl/Context';

  export default class WebGLTextureReplay extends WebGLReplay {
    constructor(tolerance: number, maxExtent: Extent);
    createTextures(textures: WebGLTexture[], images: any[], texturePerImage: { [key in string]: WebGLTexture }, gl: WebGLRenderingContext): void;
    drawCoordinates(flatCoordinates: number[], offset: number, end: number, stride: number): number;
    drawReplaySkipping(gl: WebGLRenderingContext, context: WebGLContext, skippedFeaturesHash: { [key in string]: boolean }, textures: WebGLTexture[], groupIndices: number[]): void;
    getHitDetectionTextures(): WebGLTexture[];
    getTextures(opt_all?: boolean): WebGLTexture[];
  }

}
