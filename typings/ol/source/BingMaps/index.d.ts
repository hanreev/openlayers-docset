declare module 'ol/source/BingMaps' {

  import TileImage from 'ol/source/TileImage';
  import { LoadFunction } from 'ol/Tile';

  export default class BingMaps extends TileImage {
    constructor(options: Options);
    getApiKey(): string;
    getImagerySet(): string;
    handleImageryMetadataResponse(response: BingMapsImageryMetadataResponse): void;
  }

  export interface BingMapsImageryMetadataResponse {
    statusCode: number;
    statusDescription: string;
    authenticationResultCode: string;
    resourceSets: ResourceSet[];
  }

  export interface CoverageArea {
    zoomMin: number;
    zoomMax: number;
    bbox: number[];
  }

  export interface ImageryProvider {
    coverageAreas: CoverageArea[];
    attribution?: string;
  }

  export interface Options {
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

  export interface Resource {
    imageHeight: number;
    imageWidth: number;
    zoomMin: number;
    zoomMax: number;
    imageUrl: string;
    imageUrlSubdomains: string[];
    imageryProviders?: ImageryProvider[];
  }

  export interface ResourceSet {
    resources: Resource[];
  }

}
