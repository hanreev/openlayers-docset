declare module 'ol/tilegrid/WMTS' {

  import { Extent } from 'ol/extent';
  import { Coordinate } from 'ol/coordinate';
  import { Size } from 'ol/size';
  import TileGrid from 'ol/tilegrid/TileGrid';

  export function createFromCapabilitiesMatrixSet(matrixSet: Object, opt_extent?: Extent, opt_matrixLimits?: Object[]): WMTSTileGrid;

  export type Options = {
    extent?: Extent;
    origin?: Coordinate;
    origins?: Coordinate[];
    resolutions: number[];
    matrixIds: string[];
    sizes?: Size[];
    tileSize?: number | Size;
    tileSizes?: Size[];
    widths?: number[];
  }

  export default class WMTSTileGrid extends TileGrid {
    constructor(options: Options);
    getMatrixId: (z: number) => string;
    getMatrixIds: () => string[];
  }

}
