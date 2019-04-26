declare module 'ol/centerconstraint' {

  import { Extent } from 'ol/extent';
  import { Coordinate } from 'ol/coordinate';

  export function createExtent(extent: Extent): Type;

  export function none(center?: Coordinate): Coordinate | undefined;

  export type Type = ((param0: Coordinate | undefined) => Coordinate | undefined);

}
