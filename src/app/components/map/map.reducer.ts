import { Action, createReducer, on} from '@ngrx/store'
import * as MapActions from './map.actions'
import { MapViewProperties } from '../../interfaces/map-view-properties';

export function appReducer(state = initialState, action: Action){
  
}
const reducer = createReducer(
  initialState,
  on(MapActions)
)

export function appReducer(state = initialState, action: Action){
  
}
const reducer = createReducer(
  initialState,
  on(MapActions)
)