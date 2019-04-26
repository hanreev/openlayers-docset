declare module 'ol/webgl' {

  export function getContext(canvas: HTMLCanvasElement, opt_attributes?: Object): WebGLRenderingContext;

  export const HAS: boolean;

}
