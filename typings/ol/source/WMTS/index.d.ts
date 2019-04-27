declare module 'ol/source/WMTS' {

  import { UrlFunction } from 'ol/Tile';
  import { AttributionLike } from 'ol/source/Source';
  import WMTSTileGrid from 'ol/tilegrid/WMTS';
  import { ProjectionLike } from 'ol/proj';
  import WMTSRequestEncoding from 'ol/source/WMTSRequestEncoding';
  import ImageTile from 'ol/ImageTile';
  import { LoadFunction } from 'ol/Tile';
  import TileImage from 'ol/source/TileImage';

  export function optionsFromCapabilities(wmtsCap: Object, config: Object): Options;

  export interface Options {
    attributions?: AttributionLike;
    cacheSize?: number;
    crossOrigin?: string;
    tileGrid: WMTSTileGrid;
    projection: ProjectionLike;
    reprojectionErrorThreshold?: number;
    requestEncoding?: WMTSRequestEncoding | string;
    layer: string;
    style: string;
    tileClass?: ImageTile;
    tilePixelRatio?: number;
    format?: string;
    version?: string;
    matrixSet: string;
    dimensions?: Object;
    url?: string;
    tileLoadFunction?: LoadFunction;
    urls?: string[];
    wrapX?: boolean;
    transition?: number;
  }

  export default class WMTS<T> extends TileImage<T> {
    constructor(options: Options);
    getDimensions(): Object;
    getFormat(): string;
    getLayer(): string;
    getMatrixSet(): string;
    getRequestEncoding(): WMTSRequestEncoding;
    getStyle(): string;
    getVersion(): string;
    updateDimensions(dimensions: Object): void;
  }

}
