declare module 'ol/resolutionconstraint' {

  export function createSnapToPower(power: number, maxResolution: number, opt_maxLevel?: number): Type;

  export function createSnapToResolutions(resolutions: number[]): Type;

  export type Type = ((param0: number | undefined, param1: number, param2: number) => number | undefined);

}
