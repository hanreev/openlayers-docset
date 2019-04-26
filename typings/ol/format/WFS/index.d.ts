declare module 'ol/format/WFS' {

  import Filter from 'ol/format/filter/Filter';
  import { Extent } from 'ol/extent';
  import GMLBase from 'ol/format/GMLBase';
  import XMLFeature from 'ol/format/XMLFeature';
  import Feature from 'ol/Feature';
  import Bbox from 'ol/format/filter/Bbox';
  import ComparisonBinary from 'ol/format/filter/ComparisonBinary';
  import Contains from 'ol/format/filter/Contains';
  import During from 'ol/format/filter/During';
  import Intersects from 'ol/format/filter/Intersects';
  import IsBetween from 'ol/format/filter/IsBetween';
  import IsLike from 'ol/format/filter/IsLike';
  import IsNull from 'ol/format/filter/IsNull';
  import LogicalNary from 'ol/format/filter/LogicalNary';
  import Not from 'ol/format/filter/Not';
  import { Options } from 'ol/format/GMLBase';
  import Within from 'ol/format/filter/Within';

  export function writeFilter(filter: Filter): Node;

  export type FeatureCollectionMetadata = {
    numberOfFeatures: number;
    bounds: Extent;
  }

  export type Options = {
    featureNS?: { [key: string]: string } | string;
    featureType?: string[] | string;
    gmlFormat?: GMLBase;
    schemaLocation?: string;
  }

  export type TransactionResponse = {
    totalDeleted: number;
    totalInserted: number;
    totalUpdated: number;
    insertIds: string[];
  }

  export default class WFS extends XMLFeature {
    constructor(opt_options?: Options);
    getFeatureType: () => string[] | string | undefined;
    readFeatureCollectionMetadata: (source: Document | Element | Object | string) => FeatureCollectionMetadata | undefined;
    readFeatureCollectionMetadataFromDocument: (doc: Document) => FeatureCollectionMetadata | undefined;
    readFeatureCollectionMetadataFromNode: (node: Element) => FeatureCollectionMetadata | undefined;
    readTransactionResponse: (source: Document | Element | Object | string) => TransactionResponse | undefined;
    readTransactionResponseFromDocument: (doc: Document) => TransactionResponse | undefined;
    readTransactionResponseFromNode: (node: Element) => TransactionResponse | undefined;
    setFeatureType: (featureType: string[] | string | undefined) => void;
    writeGetFeature: (options: WriteGetFeatureOptions) => Node;
    writeTransaction: (inserts: Feature[], updates: Feature[], deletes: Feature[], options: WriteTransactionOptions) => Node;
  }

  export type WriteGetFeatureOptions = {
    featureNS: string;
    featurePrefix: string;
    featureTypes: string[];
    srsName?: string;
    handle?: string;
    outputFormat?: string;
    maxFeatures?: number;
    geometryName?: string;
    propertyNames?: string[];
    viewParams?: string;
    startIndex?: number;
    count?: number;
    bbox?: Extent;
    filter?: Filter;
    resultType?: string;
  }

  export type WriteTransactionOptions = {
    featureNS: string;
    featurePrefix: string;
    featureType: string;
    srsName?: string;
    handle?: string;
    hasZ?: boolean;
    nativeElements: Object[];
    gmlOptions?: Options;
    version?: string;
  }

}
