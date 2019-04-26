declare module 'ol/geom/GeometryCollection' {

  import Geometry from 'ol/geom/Geometry';

  export default class GeometryCollection extends Geometry {
    constructor(opt_geometries?: Geometry[]);
    getGeometries: () => Geometry[];
    getGeometriesArray: () => Geometry[];
    isEmpty: () => boolean;
    setGeometries: (geometries: Geometry[]) => void;
    setGeometriesArray: (geometries: Geometry[]) => void;
  }

}
