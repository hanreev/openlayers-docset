import {
  AssertionError,
  Collection,
  Disposable,
  Feature,
  Geolocation,
  getUid,
  Graticule,
  Image,
  ImageBase,
  ImageCanvas,
  ImageTile,
  inherits,
  Kinetic,
  Map,
  MapBrowserEvent,
  MapBrowserEventHandler,
  MapBrowserPointerEvent,
  MapEvent,
  Object,
  Observable,
  Overlay,
  PluggableMap,
  Tile,
  TileCache,
  TileQueue,
  TileRange,
  VectorImageTile,
  VectorTile,
  VERSION,
  View,
  WebGLMap
} from 'ol';
import {
  binarySearch,
  equals,
  extend,
  find,
  findIndex,
  includes,
  isSorted,
  linearFindNearest,
  numberSafeCompareFunction,
  remove,
  reverseSubArray,
  stableSort
} from 'ol/array';
import AssertionError_1 from 'ol/AssertionError';
import { assert } from 'ol/asserts';
import { createExtent, none } from 'ol/centerconstraint';
import Collection_1 from 'ol/Collection';
import { CollectionEvent } from 'ol/Collection';
import CollectionEventType from 'ol/CollectionEventType';
import { asArray, asString, normalize, toString } from 'ol/color';
import { asColorLike } from 'ol/colorlike';
import {
  Attribution,
  Control,
  defaults,
  FullScreen,
  MousePosition,
  OverviewMap,
  Rotate,
  ScaleLine,
  Zoom,
  ZoomSlider,
  ZoomToExtent
} from 'ol/control';
import Attribution_1 from 'ol/control/Attribution';
import { render } from 'ol/control/Attribution';
import Control_1 from 'ol/control/Control';
import FullScreen_1 from 'ol/control/FullScreen';
import MousePosition_1 from 'ol/control/MousePosition';
import { render as render_1 } from 'ol/control/MousePosition';
import OverviewMap_1 from 'ol/control/OverviewMap';
import { render as render_2 } from 'ol/control/OverviewMap';
import Rotate_1 from 'ol/control/Rotate';
import { render as render_3 } from 'ol/control/Rotate';
import ScaleLine_1 from 'ol/control/ScaleLine';
import { render as render_4, Units } from 'ol/control/ScaleLine';
import Zoom_1 from 'ol/control/Zoom';
import ZoomSlider_1 from 'ol/control/ZoomSlider';
import { render as render_5 } from 'ol/control/ZoomSlider';
import ZoomToExtent_1 from 'ol/control/ZoomToExtent';
import {
  add,
  closestOnCircle,
  closestOnSegment,
  createStringXY,
  degreesToStringHDMS,
  distance,
  equals as equals_1,
  format,
  rotate,
  scale,
  squaredDistance,
  squaredDistanceToSegment,
  toStringHDMS,
  toStringXY
} from 'ol/coordinate';
import {
  CLASS_COLLAPSED,
  CLASS_CONTROL,
  CLASS_HIDDEN,
  CLASS_SELECTABLE,
  CLASS_UNSELECTABLE,
  CLASS_UNSUPPORTED,
  getFontFamilies
} from 'ol/css';
import Disposable_1 from 'ol/Disposable';
import { createCanvasContext2D, outerHeight, outerWidth, removeChildren, removeNode, replaceNode } from 'ol/dom';
import { easeIn, easeOut, inAndOut, linear, upAndDown } from 'ol/easing';
import {
  bindListener,
  findListener,
  getListeners,
  listen,
  listenOnce,
  unlisten,
  unlistenAll,
  unlistenByKey
} from 'ol/events';
import {
  altKeyOnly,
  altShiftKeysOnly,
  always,
  click,
  doubleClick,
  focus,
  mouseActionButton,
  mouseOnly,
  never,
  noModifierKeys,
  platformModifierKeyOnly,
  pointerMove,
  primaryAction,
  shiftKeyOnly,
  singleClick,
  targetNotEditable
} from 'ol/events/condition';
import Event from 'ol/events/Event';
import { preventDefault, stopPropagation } from 'ol/events/Event';
import EventType from 'ol/events/EventType';
import KeyCode from 'ol/events/KeyCode';
import Target from 'ol/events/Target';
import {
  applyTransform,
  boundingExtent,
  buffer,
  clone,
  closestSquaredDistanceXY,
  containsCoordinate,
  containsExtent,
  containsXY,
  coordinateRelationship,
  createEmpty,
  createOrUpdate,
  createOrUpdateEmpty,
  createOrUpdateFromCoordinate,
  createOrUpdateFromCoordinates,
  createOrUpdateFromFlatCoordinates,
  createOrUpdateFromRings,
  equals as equals_2,
  extend as extend_1,
  extendCoordinate,
  extendCoordinates,
  extendFlatCoordinates,
  extendRings,
  extendXY,
  forEachCorner,
  getArea,
  getBottomLeft,
  getBottomRight,
  getCenter,
  getCorner,
  getEnlargedArea,
  getForViewAndSize,
  getHeight,
  getIntersection,
  getIntersectionArea,
  getMargin,
  getSize,
  getTopLeft,
  getTopRight,
  getWidth,
  intersects,
  intersectsSegment,
  isEmpty,
  returnOrUpdate,
  scaleFromCenter
} from 'ol/extent';
import Corner from 'ol/extent/Corner';
import Relationship from 'ol/extent/Relationship';
import Feature_1 from 'ol/Feature';
import { createStyleFunction } from 'ol/Feature';
import { loadFeaturesXhr, xhr } from 'ol/featureloader';
import {
  EsriJSON,
  GeoJSON,
  GML,
  GPX,
  IGC,
  KML,
  MVT,
  OWS,
  Polyline,
  TopoJSON,
  WFS,
  WKT,
  WMSCapabilities,
  WMSGetFeatureInfo,
  WMTSCapabilities
} from 'ol/format';
import EsriJSON_1 from 'ol/format/EsriJSON';
import Feature_2 from 'ol/format/Feature';
import { transformWithOptions } from 'ol/format/Feature';
import {
  and,
  bbox,
  between,
  contains,
  during,
  equalTo,
  greaterThan,
  greaterThanOrEqualTo,
  intersects as intersects_1,
  isNull,
  lessThan,
  lessThanOrEqualTo,
  like,
  not,
  notEqualTo,
  or,
  within
} from 'ol/format/filter';
import And from 'ol/format/filter/And';
import Bbox from 'ol/format/filter/Bbox';
import Comparison from 'ol/format/filter/Comparison';
import ComparisonBinary from 'ol/format/filter/ComparisonBinary';
import Contains from 'ol/format/filter/Contains';
import During from 'ol/format/filter/During';
import EqualTo from 'ol/format/filter/EqualTo';
import Filter from 'ol/format/filter/Filter';
import GreaterThan from 'ol/format/filter/GreaterThan';
import GreaterThanOrEqualTo from 'ol/format/filter/GreaterThanOrEqualTo';
import Intersects from 'ol/format/filter/Intersects';
import IsBetween from 'ol/format/filter/IsBetween';
import IsLike from 'ol/format/filter/IsLike';
import IsNull from 'ol/format/filter/IsNull';
import LessThan from 'ol/format/filter/LessThan';
import LessThanOrEqualTo from 'ol/format/filter/LessThanOrEqualTo';
import LogicalNary from 'ol/format/filter/LogicalNary';
import Not from 'ol/format/filter/Not';
import NotEqualTo from 'ol/format/filter/NotEqualTo';
import Or from 'ol/format/filter/Or';
import Spatial from 'ol/format/filter/Spatial';
import Within from 'ol/format/filter/Within';
import FormatType from 'ol/format/FormatType';
import GeoJSON_1 from 'ol/format/GeoJSON';
import GML_1 from 'ol/format/GML';
import GML2 from 'ol/format/GML2';
import GML3 from 'ol/format/GML3';
import GML32 from 'ol/format/GML32';
import GMLBase from 'ol/format/GMLBase';
import { GMLNS } from 'ol/format/GMLBase';
import GPX_1 from 'ol/format/GPX';
import IGC_1 from 'ol/format/IGC';
import { IGCZ } from 'ol/format/IGC';
import JSONFeature from 'ol/format/JSONFeature';
import KML_1 from 'ol/format/KML';
import {
  getDefaultFillStyle,
  getDefaultImageStyle,
  getDefaultStrokeStyle,
  getDefaultStyle,
  getDefaultStyleArray,
  getDefaultTextStyle,
  readFlatCoordinates
} from 'ol/format/KML';
import MVT_1 from 'ol/format/MVT';
import OSMXML from 'ol/format/OSMXML';
import OWS_1 from 'ol/format/OWS';
import Polyline_1 from 'ol/format/Polyline';
import {
  decodeDeltas,
  decodeFloats,
  decodeSignedIntegers,
  decodeUnsignedIntegers,
  encodeDeltas,
  encodeFloats,
  encodeSignedIntegers,
  encodeUnsignedInteger,
  encodeUnsignedIntegers
} from 'ol/format/Polyline';
import TextFeature from 'ol/format/TextFeature';
import TopoJSON_1 from 'ol/format/TopoJSON';
import WFS_1 from 'ol/format/WFS';
import { writeFilter } from 'ol/format/WFS';
import WKT_1 from 'ol/format/WKT';
import WMSCapabilities_1 from 'ol/format/WMSCapabilities';
import WMSGetFeatureInfo_1 from 'ol/format/WMSGetFeatureInfo';
import WMTSCapabilities_1 from 'ol/format/WMTSCapabilities';
import { readHref } from 'ol/format/XLink';
import XML from 'ol/format/XML';
import XMLFeature from 'ol/format/XMLFeature';
import {
  readBoolean,
  readBooleanString,
  readDateTime,
  readDecimal,
  readDecimalString,
  readNonNegativeInteger,
  readNonNegativeIntegerString,
  readString,
  writeBooleanTextNode,
  writeCDATASection,
  writeDateTimeTextNode,
  writeDecimalTextNode,
  writeNonNegativeIntegerTextNode,
  writeStringTextNode
} from 'ol/format/xsd';
import { FALSE, TRUE, VOID } from 'ol/functions';
import Geolocation_1 from 'ol/Geolocation';
import { Circle, Geometry, LineString, MultiLineString, MultiPoint, MultiPolygon, Point, Polygon } from 'ol/geom';
import Circle_1 from 'ol/geom/Circle';
import { linearRing, linearRings, linearRingss } from 'ol/geom/flat/area';
import { linearRingss as linearRingss_1 } from 'ol/geom/flat/center';
import {
  arrayMaxSquaredDelta,
  assignClosestArrayPoint,
  assignClosestMultiArrayPoint,
  assignClosestPoint,
  maxSquaredDelta,
  multiArrayMaxSquaredDelta
} from 'ol/geom/flat/closest';
import {
  linearRingContainsExtent,
  linearRingContainsXY,
  linearRingsContainsXY,
  linearRingssContainsXY
} from 'ol/geom/flat/contains';
import {
  deflateCoordinate,
  deflateCoordinates,
  deflateCoordinatesArray,
  deflateMultiCoordinatesArray
} from 'ol/geom/flat/deflate';
import { flipXY } from 'ol/geom/flat/flip';
import { greatCircleArc, meridian, parallel } from 'ol/geom/flat/geodesic';
import { inflateCoordinates, inflateCoordinatesArray, inflateMultiCoordinatesArray } from 'ol/geom/flat/inflate';
import { getInteriorPointOfArray, getInteriorPointsOfMultiArray } from 'ol/geom/flat/interiorpoint';
import { interpolatePoint, lineStringCoordinateAtM, lineStringsCoordinateAtM } from 'ol/geom/flat/interpolate';
import {
  intersectsLinearRing,
  intersectsLinearRingArray,
  intersectsLinearRingMultiArray,
  intersectsLineString,
  intersectsLineStringArray
} from 'ol/geom/flat/intersectsextent';
import { linearRingLength, lineStringLength } from 'ol/geom/flat/length';
import {
  linearRingIsClockwise,
  linearRingIsOriented,
  linearRingsAreOriented,
  orientLinearRings,
  orientLinearRingsArray
} from 'ol/geom/flat/orient';
import { coordinates } from 'ol/geom/flat/reverse';
import { forEach } from 'ol/geom/flat/segments';
import {
  douglasPeucker,
  douglasPeuckerArray,
  douglasPeuckerMultiArray,
  quantize,
  quantizeArray,
  quantizeMultiArray,
  radialDistance,
  simplifyLineString,
  snap
} from 'ol/geom/flat/simplify';
import { matchingChunk } from 'ol/geom/flat/straightchunk';
import { drawTextOnPath } from 'ol/geom/flat/textpath';
import { lineStringIsClosed } from 'ol/geom/flat/topology';
import { rotate as rotate_1, scale as scale_1, transform2D, translate } from 'ol/geom/flat/transform';
import Geometry_1 from 'ol/geom/Geometry';
import GeometryCollection from 'ol/geom/GeometryCollection';
import GeometryLayout from 'ol/geom/GeometryLayout';
import GeometryType from 'ol/geom/GeometryType';
import LinearRing from 'ol/geom/LinearRing';
import LineString_1 from 'ol/geom/LineString';
import MultiLineString_1 from 'ol/geom/MultiLineString';
import MultiPoint_1 from 'ol/geom/MultiPoint';
import MultiPolygon_1 from 'ol/geom/MultiPolygon';
import Point_1 from 'ol/geom/Point';
import Polygon_1 from 'ol/geom/Polygon';
import { circular, fromCircle, fromExtent, makeRegular } from 'ol/geom/Polygon';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
import { getStrideForLayout, transformGeom2D } from 'ol/geom/SimpleGeometry';
import Graticule_1 from 'ol/Graticule';
import { DEVICE_PIXEL_RATIO, GEOLOCATION, TOUCH, WEBGL } from 'ol/has';
import Image_1 from 'ol/Image';
import ImageBase_1 from 'ol/ImageBase';
import ImageCanvas_1 from 'ol/ImageCanvas';
import ImageState from 'ol/ImageState';
import ImageTile_1 from 'ol/ImageTile';
import {
  defaults as defaults_1,
  DoubleClickZoom,
  DragAndDrop,
  DragBox,
  DragPan,
  DragRotate,
  DragRotateAndZoom,
  DragZoom,
  Draw,
  Extent,
  Interaction,
  KeyboardPan,
  KeyboardZoom,
  Modify,
  MouseWheelZoom,
  PinchRotate,
  PinchZoom,
  Pointer,
  Select,
  Snap,
  Translate
} from 'ol/interaction';
import DoubleClickZoom_1 from 'ol/interaction/DoubleClickZoom';
import DragAndDrop_1 from 'ol/interaction/DragAndDrop';
import DragBox_1 from 'ol/interaction/DragBox';
import DragPan_1 from 'ol/interaction/DragPan';
import DragRotate_1 from 'ol/interaction/DragRotate';
import DragRotateAndZoom_1 from 'ol/interaction/DragRotateAndZoom';
import DragZoom_1 from 'ol/interaction/DragZoom';
import Draw_1 from 'ol/interaction/Draw';
import { createBox, createRegularPolygon } from 'ol/interaction/Draw';
import Extent_1 from 'ol/interaction/Extent';
import Interaction_1 from 'ol/interaction/Interaction';
import {
  pan,
  rotate as rotate_2,
  rotateWithoutConstraints,
  zoom,
  zoomByDelta,
  zoomWithoutConstraints
} from 'ol/interaction/Interaction';
import KeyboardPan_1 from 'ol/interaction/KeyboardPan';
import KeyboardZoom_1 from 'ol/interaction/KeyboardZoom';
import Modify_1 from 'ol/interaction/Modify';
import { ModifyEvent } from 'ol/interaction/Modify';
import MouseWheelZoom_1 from 'ol/interaction/MouseWheelZoom';
import { Mode } from 'ol/interaction/MouseWheelZoom';
import PinchRotate_1 from 'ol/interaction/PinchRotate';
import PinchZoom_1 from 'ol/interaction/PinchZoom';
import Pointer_1 from 'ol/interaction/Pointer';
import { centroid } from 'ol/interaction/Pointer';
import Property from 'ol/interaction/Property';
import Select_1 from 'ol/interaction/Select';
import Snap_1 from 'ol/interaction/Snap';
import Translate_1 from 'ol/interaction/Translate';
import { TranslateEvent } from 'ol/interaction/Translate';
import Kinetic_1 from 'ol/Kinetic';
import { Group, Heatmap, Image as Image_2, Layer, Tile as Tile_1, Vector, VectorTile as VectorTile_1 } from 'ol/layer';
import Base from 'ol/layer/Base';
import Group_1 from 'ol/layer/Group';
import Heatmap_1 from 'ol/layer/Heatmap';
import Image_3 from 'ol/layer/Image';
import Layer_1 from 'ol/layer/Layer';
import { visibleAtResolution } from 'ol/layer/Layer';
import Property_1 from 'ol/layer/Property';
import Tile_2 from 'ol/layer/Tile';
import TileProperty from 'ol/layer/TileProperty';
import Vector_1 from 'ol/layer/Vector';
import VectorRenderType from 'ol/layer/VectorRenderType';
import VectorTile_2 from 'ol/layer/VectorTile';
import VectorTileRenderType from 'ol/layer/VectorTileRenderType';
import LayerType from 'ol/LayerType';
import { all, bbox as bbox_1, tile } from 'ol/loadingstrategy';
import Map_1 from 'ol/Map';
import MapBrowserEvent_1 from 'ol/MapBrowserEvent';
import MapBrowserEventHandler_1 from 'ol/MapBrowserEventHandler';
import MapBrowserEventType from 'ol/MapBrowserEventType';
import MapBrowserPointerEvent_1 from 'ol/MapBrowserPointerEvent';
import MapEvent_1 from 'ol/MapEvent';
import MapEventType from 'ol/MapEventType';
import MapProperty from 'ol/MapProperty';
import {
  clamp,
  lerp,
  modulo,
  roundUpToPowerOfTwo,
  solveLinearSystem,
  squaredDistance as squaredDistance_1,
  squaredSegmentDistance,
  toDegrees,
  toRadians
} from 'ol/math';
import { jsonp } from 'ol/net';
import { clear, getValues, isEmpty as isEmpty_1 } from 'ol/obj';
import Object_1 from 'ol/Object';
import { getChangeEventType, ObjectEvent } from 'ol/Object';
import ObjectEventType from 'ol/ObjectEventType';
import Observable_1 from 'ol/Observable';
import { unByKey } from 'ol/Observable';
import Overlay_1 from 'ol/Overlay';
import OverlayPositioning from 'ol/OverlayPositioning';
import PluggableMap_1 from 'ol/PluggableMap';
import EventSource from 'ol/pointer/EventSource';
import EventType_1 from 'ol/pointer/EventType';
import MouseSource from 'ol/pointer/MouseSource';
import { prepareEvent } from 'ol/pointer/MouseSource';
import MsSource from 'ol/pointer/MsSource';
import NativeSource from 'ol/pointer/NativeSource';
import PointerEvent from 'ol/pointer/PointerEvent';
import PointerEventHandler from 'ol/pointer/PointerEventHandler';
import TouchSource from 'ol/pointer/TouchSource';
import {
  addCommon,
  addCoordinateTransforms,
  addEquivalentProjections,
  addEquivalentTransforms,
  addProjection,
  addProjections,
  clearAllProjections,
  cloneTransform,
  createProjection,
  createTransformFromCoordinateTransform,
  equivalent,
  fromLonLat,
  get,
  getPointResolution,
  getTransform,
  getTransformFromProjections,
  identityTransform,
  toLonLat,
  transform,
  transformExtent,
  transformWithProjections
} from 'ol/proj';
import { fromEPSG4326, toEPSG4326 } from 'ol/proj/epsg3857';
import { register } from 'ol/proj/proj4';
import Projection from 'ol/proj/Projection';
import { add as add_1, clear as clear_1, get as get_1 } from 'ol/proj/projections';
import { add as add_2, clear as clear_2, get as get_2, remove as remove_1 } from 'ol/proj/transforms';
import Units_1 from 'ol/proj/Units';
import { METERS_PER_UNIT } from 'ol/proj/Units';
import { toContext } from 'ol/render';
import Box from 'ol/render/Box';
import { drawImage, labelCache, measureTextWidth, rotateAtOffset } from 'ol/render/canvas';
import ImageReplay from 'ol/render/canvas/ImageReplay';
import Immediate from 'ol/render/canvas/Immediate';
import Instruction from 'ol/render/canvas/Instruction';
import LineStringReplay from 'ol/render/canvas/LineStringReplay';
import PolygonReplay from 'ol/render/canvas/PolygonReplay';
import Replay from 'ol/render/canvas/Replay';
import ReplayGroup from 'ol/render/canvas/ReplayGroup';
import { getCircleArray, replayDeclutter } from 'ol/render/canvas/ReplayGroup';
import TextReplay from 'ol/render/canvas/TextReplay';
import { measureTextWidths } from 'ol/render/canvas/TextReplay';
import Event_1 from 'ol/render/Event';
import EventType_2 from 'ol/render/EventType';
import Feature_3 from 'ol/render/Feature';
import { ORDER, TEXT_ALIGN } from 'ol/render/replay';
import ReplayGroup_1 from 'ol/render/ReplayGroup';
import ReplayType from 'ol/render/ReplayType';
import VectorContext from 'ol/render/VectorContext';
import { triangleIsCounterClockwise } from 'ol/render/webgl';
import CircleReplay from 'ol/render/webgl/CircleReplay';
import { fragment, vertex } from 'ol/render/webgl/circlereplay/defaultshader';
import Locations from 'ol/render/webgl/circlereplay/defaultshader/Locations';
import ImageReplay_1 from 'ol/render/webgl/ImageReplay';
import Immediate_1 from 'ol/render/webgl/Immediate';
import LineStringReplay_1 from 'ol/render/webgl/LineStringReplay';
import { fragment as fragment_1, vertex as vertex_1 } from 'ol/render/webgl/linestringreplay/defaultshader';
import Locations_1 from 'ol/render/webgl/linestringreplay/defaultshader/Locations';
import PolygonReplay_1 from 'ol/render/webgl/PolygonReplay';
import { fragment as fragment_2, vertex as vertex_2 } from 'ol/render/webgl/polygonreplay/defaultshader';
import Locations_2 from 'ol/render/webgl/polygonreplay/defaultshader/Locations';
import Replay_1 from 'ol/render/webgl/Replay';
import ReplayGroup_2 from 'ol/render/webgl/ReplayGroup';
import TextReplay_1 from 'ol/render/webgl/TextReplay';
import TextureReplay from 'ol/render/webgl/TextureReplay';
import { fragment as fragment_3, vertex as vertex_3 } from 'ol/render/webgl/texturereplay/defaultshader';
import Locations_3 from 'ol/render/webgl/texturereplay/defaultshader/Locations';
import ImageLayer from 'ol/renderer/canvas/ImageLayer';
import IntermediateCanvas from 'ol/renderer/canvas/IntermediateCanvas';
import Layer_2 from 'ol/renderer/canvas/Layer';
import Map_2 from 'ol/renderer/canvas/Map';
import TileLayer from 'ol/renderer/canvas/TileLayer';
import VectorLayer from 'ol/renderer/canvas/VectorLayer';
import VectorTileLayer from 'ol/renderer/canvas/VectorTileLayer';
import Layer_3 from 'ol/renderer/Layer';
import Map_3 from 'ol/renderer/Map';
import { sortByZIndex } from 'ol/renderer/Map';
import { defaultOrder, getSquaredTolerance, getTolerance, renderFeature } from 'ol/renderer/vector';
import { fragment as fragment_4, vertex as vertex_4 } from 'ol/renderer/webgl/defaultmapshader';
import Locations_4 from 'ol/renderer/webgl/defaultmapshader/Locations';
import ImageLayer_1 from 'ol/renderer/webgl/ImageLayer';
import Layer_4 from 'ol/renderer/webgl/Layer';
import Map_4 from 'ol/renderer/webgl/Map';
import TileLayer_1 from 'ol/renderer/webgl/TileLayer';
import { fragment as fragment_5, vertex as vertex_5 } from 'ol/renderer/webgl/tilelayershader';
import Locations_5 from 'ol/renderer/webgl/tilelayershader/Locations';
import VectorLayer_1 from 'ol/renderer/webgl/VectorLayer';
import { calculateSourceResolution, render as render_6 } from 'ol/reproj';
import { ENABLE_RASTER_REPROJECTION, ERROR_THRESHOLD } from 'ol/reproj/common';
import Image_4 from 'ol/reproj/Image';
import Tile_3 from 'ol/reproj/Tile';
import Triangulation from 'ol/reproj/Triangulation';
import { createSnapToPower, createSnapToResolutions } from 'ol/resolutionconstraint';
import { createSnapToN, createSnapToZero, disable, none as none_1 } from 'ol/rotationconstraint';
import { buffer as buffer_1, hasArea, scale as scale_2, toSize } from 'ol/size';
import {
  BingMaps,
  CartoDB,
  Cluster,
  Image as Image_5,
  ImageArcGISRest,
  ImageCanvas as ImageCanvas_2,
  ImageMapGuide,
  ImageStatic,
  ImageWMS,
  OSM,
  Raster,
  Source,
  Stamen,
  Tile as Tile_4,
  TileArcGISRest,
  TileDebug,
  TileImage,
  TileJSON,
  TileWMS,
  UrlTile,
  UTFGrid,
  Vector as Vector_2,
  VectorTile as VectorTile_3,
  WMTS,
  XYZ,
  Zoomify
} from 'ol/source';
import BingMaps_1 from 'ol/source/BingMaps';
import CartoDB_1 from 'ol/source/CartoDB';
import Cluster_1 from 'ol/source/Cluster';
import { DEFAULT_WMS_VERSION } from 'ol/source/common';
import Image_6 from 'ol/source/Image';
import { defaultImageLoadFunction } from 'ol/source/Image';
import ImageArcGISRest_1 from 'ol/source/ImageArcGISRest';
import ImageCanvas_3 from 'ol/source/ImageCanvas';
import ImageMapGuide_1 from 'ol/source/ImageMapGuide';
import ImageStatic_1 from 'ol/source/ImageStatic';
import ImageWMS_1 from 'ol/source/ImageWMS';
import OSM_1 from 'ol/source/OSM';
import { ATTRIBUTION } from 'ol/source/OSM';
import Raster_1 from 'ol/source/Raster';
import { RasterOperationType } from 'ol/source/Raster';
import Source_1 from 'ol/source/Source';
import Stamen_1 from 'ol/source/Stamen';
import State from 'ol/source/State';
import Tile_5 from 'ol/source/Tile';
import { TileSourceEvent } from 'ol/source/Tile';
import TileArcGISRest_1 from 'ol/source/TileArcGISRest';
import TileDebug_1 from 'ol/source/TileDebug';
import TileEventType from 'ol/source/TileEventType';
import TileImage_1 from 'ol/source/TileImage';
import TileJSON_1 from 'ol/source/TileJSON';
import TileWMS_1 from 'ol/source/TileWMS';
import UrlTile_1 from 'ol/source/UrlTile';
import UTFGrid_1 from 'ol/source/UTFGrid';
import { CustomTile } from 'ol/source/UTFGrid';
import Vector_3 from 'ol/source/Vector';
import { VectorSourceEvent } from 'ol/source/Vector';
import VectorEventType from 'ol/source/VectorEventType';
import VectorTile_4 from 'ol/source/VectorTile';
import WMSServerType from 'ol/source/WMSServerType';
import WMTS_1 from 'ol/source/WMTS';
import { optionsFromCapabilities } from 'ol/source/WMTS';
import WMTSRequestEncoding from 'ol/source/WMTSRequestEncoding';
import XYZ_1 from 'ol/source/XYZ';
import Zoomify_1 from 'ol/source/Zoomify';
import { CustomTile as CustomTile_1 } from 'ol/source/Zoomify';
import { getArea as getArea_1, getDistance, getLength, offset } from 'ol/sphere';
import { compareVersions, padNumber } from 'ol/string';
import LinkedList from 'ol/structs/LinkedList';
import LRUCache from 'ol/structs/LRUCache';
import PriorityQueue from 'ol/structs/PriorityQueue';
import RBush from 'ol/structs/RBush';
import {
  Atlas,
  AtlasManager,
  Circle as Circle_2,
  Fill,
  Icon,
  IconImage,
  Image as Image_7,
  RegularShape,
  Stroke,
  Style,
  Text
} from 'ol/style';
import Atlas_1 from 'ol/style/Atlas';
import AtlasManager_1 from 'ol/style/AtlasManager';
import Circle_3 from 'ol/style/Circle';
import Fill_1 from 'ol/style/Fill';
import Icon_1 from 'ol/style/Icon';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
import IconImage_1 from 'ol/style/IconImage';
import { get as get_3 } from 'ol/style/IconImage';
import IconImageCache from 'ol/style/IconImageCache';
import { shared } from 'ol/style/IconImageCache';
import IconOrigin from 'ol/style/IconOrigin';
import Image_8 from 'ol/style/Image';
import RegularShape_1 from 'ol/style/RegularShape';
import Stroke_1 from 'ol/style/Stroke';
import Style_1 from 'ol/style/Style';
import { createDefaultStyle, createEditingStyle, toFunction } from 'ol/style/Style';
import Text_1 from 'ol/style/Text';
import TextPlacement from 'ol/style/TextPlacement';
import Tile_6 from 'ol/Tile';
import TileCache_1 from 'ol/TileCache';
import {
  createOrUpdate as createOrUpdate_1,
  fromKey,
  getKey,
  getKeyZXY,
  hash,
  quadKey,
  withinExtentAndZ
} from 'ol/tilecoord';
import {
  createForExtent,
  createForProjection,
  createXYZ,
  extentFromProjection,
  getForProjection,
  wrapX
} from 'ol/tilegrid';
import { DEFAULT_MAX_ZOOM, DEFAULT_TILE_SIZE } from 'ol/tilegrid/common';
import TileGrid from 'ol/tilegrid/TileGrid';
import WMTS_2 from 'ol/tilegrid/WMTS';
import { createFromCapabilitiesMatrixSet } from 'ol/tilegrid/WMTS';
import TileQueue_1 from 'ol/TileQueue';
import TileRange_1 from 'ol/TileRange';
import { createOrUpdate as createOrUpdate_2 } from 'ol/TileRange';
import TileState from 'ol/TileState';
import {
  createFromTemplate,
  createFromTemplates,
  createFromTileUrlFunctions,
  expandUrl,
  nullTileUrlFunction
} from 'ol/tileurlfunction';
import {
  apply,
  compose,
  create,
  determinant,
  invert,
  multiply,
  reset,
  rotate as rotate_3,
  scale as scale_3,
  set,
  setFromArray,
  translate as translate_1
} from 'ol/transform';
import { appendParams } from 'ol/uri';
import { abstract, VERSION as VERSION_1 } from 'ol/util';
import { create as create_1, fromTransform } from 'ol/vec/mat4';
import VectorImageTile_1 from 'ol/VectorImageTile';
import { defaultLoadFunction } from 'ol/VectorImageTile';
import VectorTile_5 from 'ol/VectorTile';
import View_1 from 'ol/View';
import { createCenterConstraint, createResolutionConstraint, createRotationConstraint, isNoopAnimation } from 'ol/View';
import ViewHint from 'ol/ViewHint';
import ViewProperty from 'ol/ViewProperty';
import { getContext, HAS } from 'ol/webgl';
import Buffer from 'ol/webgl/Buffer';
import Context from 'ol/webgl/Context';
import { createEmptyTexture, createTexture } from 'ol/webgl/Context';
import ContextEventType from 'ol/webgl/ContextEventType';
import Fragment from 'ol/webgl/Fragment';
import Shader from 'ol/webgl/Shader';
import Vertex from 'ol/webgl/Vertex';
import WebGLMap_1 from 'ol/WebGLMap';
import {
  createElementNS,
  getAllTextContent,
  getAttributeNS,
  isDocument,
  makeArrayExtender,
  makeArrayPusher,
  makeArraySerializer,
  makeChildAppender,
  makeObjectPropertyPusher,
  makeObjectPropertySetter,
  makeReplacer,
  makeSequence,
  makeSimpleNodeFactory,
  makeStructureNS,
  parse,
  parseNode,
  pushParseAndPop,
  pushSerializeAndPop,
  serialize
} from 'ol/xml';
