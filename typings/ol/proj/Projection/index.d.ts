declare module 'ol/proj/Projection' {

  import Units from 'ol/proj/Units';
  import { Extent } from 'ol/extent';
  import { Coordinate } from 'ol/coordinate';
  import TileGrid from 'ol/tilegrid/TileGrid';

  export type Options = {
    code: string;
    units?: Units | string;
    extent?: Extent;
    axisOrientation?: string;
    global?: boolean;
    metersPerUnit?: number;
    worldExtent?: Extent;
    getPointResolution?: ((param0: number, param1: Coordinate) => number);
  }

  export default class Projection {
    constructor(options: Options);
    canWrapX: () => boolean;
    getAxisOrientation: () => string;
    getCode: () => string;
    getDefaultTileGrid: () => TileGrid;
    getExtent: () => Extent;
    getMetersPerUnit: () => number | undefined;
    getPointResolutionFunc: () => ((param0: number, param1: Coordinate) => number | undefined);
    getUnits: () => Units;
    getWorldExtent: () => Extent;
    isGlobal: () => boolean;
    setDefaultTileGrid: (tileGrid: TileGrid) => void;
    setExtent: (extent: Extent) => void;
    setGetPointResolution: (func: ((param0: number, param1: Coordinate) => number)) => void;
    setGlobal: (global: boolean) => void;
    setWorldExtent: (worldExtent: Extent) => void;
  }

}
