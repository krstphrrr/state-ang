import { Injectable, ElementRef, Renderer2, RendererFactory2 } from '@angular/core';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import { Observable, ReplaySubject } from 'rxjs';
import {WebMapDocument} from '../../interfaces/webmap-document'
import { EnvironmentService } from '../../services/environment.service'


@Injectable({
  providedIn: 'root',
})

export class MapFactory{

    private webMap!: WebMap;
    private mapView!: MapView;
    private renderer!: Renderer2;
    private mapViewContainer!: HTMLDivElement;
    private mapViewSubject!: ReplaySubject<MapView>;

  constructor(
    private rendererFactory:RendererFactory2,
    private environment:EnvironmentService
    ){
    // makes the mapview 'revisitable' with the replaysubject(stores old values)
    this.mapViewSubject = new ReplaySubject<MapView>(1)
  }

  public getMapView():Observable<MapView>{
    return this.mapViewSubject.asObservable()
  }

  public initializeMapView(elementRef:ElementRef):MapView{
    this.createMapViewContainer(elementRef)
    this.createWebMap();
    this.createMapView();
    this.mapViewSubject.next(this.mapView);
    return this.mapView
  }

  private createMapViewContainer(elementRef: ElementRef): void {
    if (elementRef == null) { return; }
    if (this.mapViewContainer == null) {
        this.mapViewContainer = document.createElement('div');
        this.mapViewContainer.style.cssText = 'height: 100%';
    }
    this.initializeRenderer();
    this.renderer.appendChild(elementRef.nativeElement, this.mapViewContainer);
  }

  private createWebMap(): void {
    if (this.webMap == null) {

        // The JSON from NgRx is immutable the WebMap.fromJSON() validates the JSON
        // and removes whitespace so we are uisng parse/stringify to make a clone.
        // This should be fixed in a future version of the JSAPI.
        // this.webMap = WebMap.fromJSON(JSON.parse(JSON.stringify(webMapDocument)));

        this.webMap = new WebMap({
          basemap: this.environment.baseConfigs.defaultMapSettings.basemapId
        })
    }


  }

  private createMapView(): void {
    if (this.mapView == null) {
        this.mapView = new MapView(
            {
                container: this.mapViewContainer,
                map: this.webMap,
                center:[
                  this.environment.baseConfigs.defaultMapSettings.centerLon,
                  this.environment.baseConfigs.defaultMapSettings.centerLat
                ],
                zoom: this.environment.baseConfigs.defaultMapSettings.zoomLevel,
            }
        );
    }
  }

  private initializeRenderer(): void {
    if (this.renderer == null) {
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }
  }

  public removeMapViewContainer(elementRef: ElementRef): void {
    if (this.mapViewContainer == null) { return; }
    this.initializeRenderer();
    this.renderer.removeChild(elementRef.nativeElement, this.mapViewContainer);
  }

}