import { Injectable, ElementRef, Renderer2, RendererFactory2 } from '@angular/core';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import { Observable, ReplaySubject } from 'rxjs';
import {WebMapDocument} from '../../interfaces/webmap-document'
import { EnvironmentService } from '../../services/environment.service'
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import Zoom from '@arcgis/core/widgets/Zoom';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import EsriConfig from '@arcgis/core/config'
import LayerList from '@arcgis/core/widgets/LayerList';

@Injectable({
  providedIn: 'root',
})

export class MapFactory{

    private webMap!: WebMap;
    private mapView!: MapView;
    private renderer!: Renderer2;
    private mapViewContainer!: HTMLDivElement;
    private mapViewSubject!: ReplaySubject<MapView>;

    private vec!: VectorTileLayer;
    private layerList!: LayerList;

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
    // create container
    this.createMapViewContainer(elementRef)
    // create webmap / basemap
    this.createWebMap();

    // add layer
    // this.addCustomLayer(this.webMap)

    // use webmap inside mapview
    this.createMapView(this.webMap);
    // adding widgets 
    this.addAllMapWidgets()

    
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
    EsriConfig.apiKey = "AAPKd353f70381984bfc8953135f2999d688DrHE6ez62C3Gh4MbaqaKeayxF10u1QqZ8I9XWZP7dLPAf-Cp1Lx7Ak0TzAYstv8t"

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

  private createMapView(webmap:WebMap): void {
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

    this.vec = new VectorTileLayer({
      url: "https://vectortileservices3.arcgis.com/LrsJEcY70feoykZ9/arcgis/rest/services/jerstatemapsimple_gdb1/VectorTileServer"
    })
    this.layerList = new LayerList({
      view: this.mapView
    })
    webmap.add(this.vec)

    this.mapView.ui.add(this.layerList, this.environment.baseConfigs.defaultMapSettings.widgets.zoom.position);

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

  public addAllMapWidgets(): void {
    const basemapToggle = new BasemapToggle({
      view: this.mapView,
      nextBasemap: this.environment.baseConfigs.defaultMapSettings.widgets.basemapToggle.nextBasemap,
    });

    // const layerList = new LayerList({
    //   view: this.mapView
    // })

    const zoom = new Zoom({
      view: this.mapView,
    });

    this.mapView?.ui.add(basemapToggle, this.environment.baseConfigs.defaultMapSettings.widgets.basemapToggle.position);
    // this.mapView?.ui.add(layerList, this.environment.baseConfigs.defaultMapSettings.widgets.basemapToggle.position);
    // this.mapView?.ui.add(layerList, this.environment.baseConfigs.defaultMapSettings.widgets.zoom.position);
  }

  public addCustomLayer(webmap:WebMap):void{
    
  }

}