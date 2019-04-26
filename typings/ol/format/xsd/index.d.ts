declare module 'ol/format/xsd' {

  export function readBoolean(node: Node): boolean;

  export function readBooleanString(string: string): boolean;

  export function readDateTime(node: Node): number;

  export function readDecimal(node: Node): number;

  export function readDecimalString(string: string): number;

  export function readNonNegativeInteger(node: Node): number;

  export function readNonNegativeIntegerString(string: string): number;

  export function readString(node: Node): string;

  export function writeBooleanTextNode(node: Node, bool: boolean): void;

  export function writeCDATASection(node: Node, string: string): void;

  export function writeDateTimeTextNode(node: Node, dateTime: number): void;

  export function writeDecimalTextNode(node: Node, decimal: number): void;

  export function writeNonNegativeIntegerTextNode(node: Node, nonNegativeInteger: number): void;

  export function writeStringTextNode(node: Node, string: string): void;

}
