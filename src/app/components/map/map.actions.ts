import { createAction, props } from '@ngrx/store';
import { MapActionTypes } from './map.action.types';
import { MapViewProperties } from '../../interfaces/map-view-properties';


export const GetWebMap = createAction(MapActionTypes.GetWebMap);
export const GetWebMapCompleted = createAction(MapActionTypes.GetWebMapCompleted, props<{webMapDocument: WebMapDocument}>());
export const GetWebMapError = createAction(MapActionTypes.GetWebMapError, props<{error: any}>());
export const GetWebMapNoOp = createAction(MapActionTypes.GetWebMapNoOp);