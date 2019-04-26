declare module 'ol/rotationconstraint' {

  export function createSnapToN(n: number): Type;

  export function createSnapToZero(opt_tolerance?: number): Type;

  export function disable(rotation: number | undefined, delta: number): number | undefined;

  export function none(rotation: number | undefined, delta: number): number | undefined;

  export type Type = ((param0: number | undefined, param1: number) => number | undefined);

}
