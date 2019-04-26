declare module 'ol/source/VectorTile' {

  import { AttributionLike } from 'ol/source/Source';
  import { Extent } from 'ol/extent';
  import FeatureFormat from 'ol/format/Feature';
  import { ProjectionLike } from 'ol/proj';
  import State from 'ol/source/State';
  import VectorTile from 'ol/VectorTile';
  import { Size } from 'ol/size';
  import TileGrid from 'ol/tilegrid/TileGrid';
  import { LoadFunction } from 'ol/Tile';
  import { UrlFunction } from 'ol/Tile';
  import UrlTile from 'ol/source/UrlTile';

  export type Options = {
    attributions?: AttributionLike;
    cacheSize?: number;
    extent?: Extent;
    format?: FeatureFormat;
    overlaps?: boolean;
    projection: ProjectionLike;
    state?: State;
    tileClass?: VectorTile;
    maxZoom?: number;
    minZoom?: number;
    tileSize?: number | Size;
    tileGrid?: TileGrid;
    tileLoadFunction?: LoadFunction;
    tileUrlFunction?: UrlFunction;
    url?: string;
    transition?: number;
    urls?: string[];
    wrapX?: boolean;
  }

  export default class VectorTile extends UrlTile {
    constructor(options: Options);
    clear: () => void;
    getOverlaps: () => boolean;
  }

}
