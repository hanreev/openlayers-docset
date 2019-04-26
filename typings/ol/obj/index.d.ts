declare module 'ol/obj' {

  export function clear(object: Object): void;

  export function getValues<K, V>(object: { [key: K]: V }): V[];

  export function isEmpty(object: Object): boolean;

}
