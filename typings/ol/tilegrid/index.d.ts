declare module 'ol/tilegrid' {

  import { Extent } from 'ol/extent';
  import { Size } from 'ol/size';
  import TileGrid from 'ol/tilegrid/TileGrid';
  import { ProjectionLike } from 'ol/proj';
  import Projection from 'ol/proj/Projection';
  import { TileCoord } from 'ol/tilecoord';

  export function createForExtent(extent: Extent, opt_maxZoom?: number, opt_tileSize?: number | Size, opt_corner?: Corner): TileGrid;

  export function createForProjection(projection: ProjectionLike, opt_maxZoom?: number, opt_tileSize?: number | Size, opt_corner?: Corner): TileGrid;

  export function createXYZ(opt_options?: XYZOptions): TileGrid;

  export function extentFromProjection(projection: ProjectionLike): Extent;

  export function getForProjection(projection: Projection): TileGrid;

  export function wrapX(tileGrid: TileGrid, tileCoord: TileCoord, projection: Projection): TileCoord;

  export type XYZOptions = {
    extent?: Extent;
    maxZoom?: number;
    minZoom?: number;
    tileSize?: number | Size;
  }

}
