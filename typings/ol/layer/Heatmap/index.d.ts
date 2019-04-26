declare module 'ol/layer/Heatmap' {

  import VectorLayer from 'ol/layer/Vector';
  import { Extent } from 'ol/extent';
  import VectorRenderType from 'ol/layer/VectorRenderType';
  import VectorSource from 'ol/source/Vector';

  export default class Heatmap extends VectorLayer {
    constructor(opt_options?: Options);
    getBlur(): number;
    getGradient(): string[];
    getRadius(): number;
    setBlur(blur: number): void;
    setGradient(colors: string[]): void;
    setRadius(radius: number): void;
  }

  export interface Options {
    opacity?: number;
    visible?: boolean;
    extent?: Extent;
    zIndex?: number;
    minResolution?: number;
    maxResolution?: number;
    gradient?: string[];
    radius?: number;
    blur?: number;
    shadow?: number;
    weight?: string | (() => void);
    renderMode?: VectorRenderType | string;
    source?: VectorSource;
  }

}
