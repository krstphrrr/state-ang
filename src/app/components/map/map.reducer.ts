
import * as MapActions from './map.actions'
import { MapViewProperties } from '../../interfaces/map-view-properties';
import { MapState } from './map.state'
import { ServiceStatus, ServiceStatusTypes } from './map.state'
import { Action, createReducer, on } from '@ngrx/store';

const initialState: MapState = {
  status: new ServiceStatus(ServiceStatusTypes.content)
};


export function mapReducer(state = initialState, action: Action): MapState {
  return reducer(state, action);
}


const reducer = createReducer(
  initialState,
  on(MapActions.GetWebMap, (state,action)=>{
    return updateServiceStatus(state, ServiceStatusTypes.loading)
  }),

  on(MapActions.TestToggle, (state, action)=>{
    return updateServiceStatus(state,ServiceStatusTypes.content)
  })
)

function updateServiceStatus(
  state: MapState, 
  type: ServiceStatusTypes, 
  error?: any): MapState {
    console.log("1. action")
    console.log(state)
  return { ...state, status: new ServiceStatus(type, error) };
}