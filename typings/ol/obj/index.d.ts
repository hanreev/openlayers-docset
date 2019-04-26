declare module 'ol/obj' {

  export function clear(object: Object): void;

  export function getValues<V>(obj: { [key: string]: V }): V[];

  export function getValues<V>(obj: { [key: number]: V }): V[];

  export function isEmpty(object: Object): boolean;

}
