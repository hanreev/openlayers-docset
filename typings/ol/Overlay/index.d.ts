declare module 'ol/Overlay' {

  import { Coordinate } from 'ol/coordinate';
  import OverlayPositioning from 'ol/OverlayPositioning';
  import BaseObject from 'ol/Object';
  import { EventsKey } from 'ol/events';
  import { Size } from 'ol/size';
  import { Extent } from 'ol/extent';
  import { Pixel } from 'ol/pixel';
  import PluggableMap from 'ol/PluggableMap';

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
    protected autoPan: boolean;
    protected autoPanAnimation: PanOptions;
    protected autoPanMargin: number;
    protected element: HTMLElement;
    protected id: number | string;
    protected insertFirst: boolean;
    protected mapPostrenderListenerKey: EventsKey;
    protected options: Options;
    protected rendered: Object;
    protected stopEvent: boolean;
    protected getRect(element: HTMLElement, size: Size): Extent;
    protected handleElementChanged(): void;
    protected handleMapChanged(): void;
    protected handleOffsetChanged(): void;
    protected handlePositionChanged(): void;
    protected handlePositioningChanged(): void;
    protected panIntoView(): void;
    protected render(): void;
    protected setVisible(visible: boolean): void;
    protected updatePixelPosition(): void;
    protected updateRenderedPosition(pixel: Pixel, mapSize: Size): void;
    getElement(): HTMLElement;
    getId(): number | string;
    getMap(): PluggableMap;
    getOffset(): number[];
    getOptions(): Options;
    getPosition(): Coordinate;
    getPositioning(): OverlayPositioning;
    setElement(element: HTMLElement): void;
    setMap(map: PluggableMap): void;
    setOffset(offset: number[]): void;
    setPosition(position: Coordinate): void;
    setPositioning(positioning: OverlayPositioning): void;
  }

  export interface PanOptions {
    duration?: number;
    easing?: ((param0: number) => number);
  }

}
