import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from "@angular/flex-layout"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapViewComponent } from './components/map/map-view/map-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MapComponent } from './components/map/map.component';
import { MapContentsComponent } from './components/map/map-contents/map-contents.component';

import { mapReducer } from './components/map/map.reducer';
import { StoreModule } from '@ngrx/store';
import { AppStoreModule } from './app-store.module';
import { AboutComponent } from './components/about/about.component';
import { TestComponent } from './components/test/test.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapViewComponent,
    HeaderComponent,
    SidenavListComponent,
    WelcomeComponent,
    MapComponent,
    MapContentsComponent,
    AboutComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    // StoreModule.forRoot({ui: mapReducer}),
    AppStoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
