declare module 'ol/Overlay' {

  import { Coordinate } from 'ol/coordinate';
  import OverlayPositioning from 'ol/OverlayPositioning';
  import BaseObject from 'ol/Object';
  import PluggableMap from 'ol/PluggableMap';
  import { Size } from 'ol/size';
  import { Extent } from 'ol/extent';
  import { Pixel } from 'ol/pixel';

  export interface Options {
    id?: number | string;
    element?: HTMLElement;
    offset?: number[];
    position?: Coordinate;
    positioning?: OverlayPositioning;
    stopEvent?: boolean;
    insertFirst?: boolean;
    autoPan?: boolean;
    autoPanAnimation?: PanOptions;
    autoPanMargin?: number;
    className?: string;
  }

  export default class Overlay extends BaseObject {
    constructor(options: Options);
    getElement(): HTMLElement;
    getId(): number | string;
    getMap(): PluggableMap;
    getOffset(): number[];
    getOptions(): Options;
    getPosition(): Coordinate;
    getPositioning(): OverlayPositioning;
    getRect(element: HTMLElement, size: Size): Extent;
    handleElementChanged(): void;
    handleMapChanged(): void;
    handleOffsetChanged(): void;
    handlePositionChanged(): void;
    handlePositioningChanged(): void;
    panIntoView(): void;
    render(): void;
    setElement(element: HTMLElement): void;
    setMap(map: PluggableMap): void;
    setOffset(offset: number[]): void;
    setPosition(position: Coordinate): void;
    setPositioning(positioning: OverlayPositioning): void;
    setVisible(visible: boolean): void;
    updatePixelPosition(): void;
    updateRenderedPosition(pixel: Pixel, mapSize: Size): void;
  }

  export interface PanOptions {
    duration?: number;
    easing?: ((param0: number) => number);
  }

}
