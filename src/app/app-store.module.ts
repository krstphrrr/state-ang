import { NgModule } from "@angular/core";
import { ActionReducerMap, MetaReducer, StoreModule } from "@ngrx/store";
import { routerReducer, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { CustomRouterStateSerializer } from './router-state'
import { AppState } from './app.state'
import { mapReducer} from './components/map/map.reducer'


export const reducers: ActionReducerMap<AppState> = {
  mapState: mapReducer,
  router: routerReducer
}

@NgModule({
  imports: [
    StoreModule.forRoot({ui:mapReducer,router:routerReducer}),
    StoreRouterConnectingModule.forRoot({
      stateKey:'router',
      serializer: CustomRouterStateSerializer
    })
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer}
  ]
})

export class AppStoreModule{}