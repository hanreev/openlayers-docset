declare module 'ol/format/Polyline' {

  import GeometryLayout from 'ol/geom/GeometryLayout';
  import TextFeature from 'ol/format/TextFeature';

  export function decodeDeltas(encoded: string, stride: number, opt_factor?: number): number[];

  export function decodeFloats(encoded: string, opt_factor?: number): number[];

  export function decodeSignedIntegers(encoded: string): number[];

  export function decodeUnsignedIntegers(encoded: string): number[];

  export function encodeDeltas(numbers: number[], stride: number, opt_factor?: number): string;

  export function encodeFloats(numbers: number[], opt_factor?: number): string;

  export function encodeSignedIntegers(numbers: number[]): string;

  export function encodeUnsignedInteger(num: number): string;

  export function encodeUnsignedIntegers(numbers: number[]): string;

  export type Options = {
    factor?: number;
    geometryLayout?: GeometryLayout;
  }

  export default class Polyline extends TextFeature {
    constructor(opt_options?: Options);
  }

}
