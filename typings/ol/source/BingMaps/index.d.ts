declare module 'ol/source/BingMaps' {

  import TileImage from 'ol/source/TileImage';
  import { LoadFunction } from 'ol/Tile';

  export default class BingMaps extends TileImage {
    constructor(options: Options);
    getApiKey: () => string;
    getImagerySet: () => string;
    handleImageryMetadataResponse: (response: BingMapsImageryMetadataResponse) => void;
  }

  export type BingMapsImageryMetadataResponse = {
    statusCode: number;
    statusDescription: string;
    authenticationResultCode: string;
    resourceSets: ResourceSet[];
  }

  export type CoverageArea = {
    zoomMin: number;
    zoomMax: number;
    bbox: number[];
  }

  export type ImageryProvider = {
    coverageAreas: CoverageArea[];
    attribution?: string;
  }

  export type Options = {
    cacheSize?: number;
    hidpi?: boolean;
    culture?: string;
    key: string;
    imagerySet: string;
    maxZoom?: number;
    reprojectionErrorThreshold?: number;
    tileLoadFunction?: LoadFunction;
    wrapX?: boolean;
    transition?: number;
  }

  export type Resource = {
    imageHeight: number;
    imageWidth: number;
    zoomMin: number;
    zoomMax: number;
    imageUrl: string;
    imageUrlSubdomains: string[];
    imageryProviders?: ImageryProvider[];
  }

  export type ResourceSet = {
    resources: Resource[];
  }

}
