
import { MapActionTypes } from './map.action.types';
import { MapViewProperties } from '../../interfaces/map-view-properties';
import { WebMapDocument } from './map.state'
import { createAction, props } from '@ngrx/store';

export const TestToggle = createAction(
  MapActionTypes.TestMapAction
)

export const GetWebMap = createAction(
  MapActionTypes.GetWebMap
  );

export const GetWebMapCompleted = createAction(
  MapActionTypes.GetWebMapCompleted, 
  props<{webMapDocument: WebMapDocument}>()
  );

export const GetWebMapError = createAction(
  MapActionTypes.GetWebMapError, 
  props<{error: any}>()
  );

export const GetWebMapNoOp = createAction(
  MapActionTypes.GetWebMapNoOp
  );

export const NavigationRequest = createAction(MapActionTypes.NavigationRequest, props<{target: any}>());

export const UpdateMapViewProperties = createAction(
  MapActionTypes.UpdateMapViewProperties,
  props<{mapViewProperties: MapViewProperties}>()
);