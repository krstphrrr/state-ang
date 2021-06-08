import { ElementRef, Injectable, NgZone } from '@angular/core';
import { EnvironmentService } from './environment.service'

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import Zoom from '@arcgis/core/widgets/Zoom';
import EsriConfig from '@arcgis/core/config'
import LayerList from '@arcgis/core/widgets/LayerList'
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer'
import {HttpClientService }from '../services/http-client.service'
// import FeatureLayer from '@arcgis/core/layers/'
import Graphic from '@arcgis/core/Graphic';
import { Observable, ReplaySubject } from 'rxjs';
import { WebMapDocument } from '../interfaces/webmap-document';

@Injectable({
  providedIn: 'root'
})

// map service should initialize map pulling from arcgis
export class MapService {
  // new map handling 
  private webMap:any;
  private webMapSubject!: ReplaySubject<any>;
  
  // map?: Map;
  // mapView?: MapView;
  // pointsLayer?: FeatureLayer;
  // vec?: VectorTileLayer;

  constructor(
    private readonly environment:EnvironmentService,
    private httpClientService:HttpClientService
    ) { }

    getWebMap():Observable<WebMapDocument> {
      // which url here?
      return this.httpClientService.get<WebMapDocument>("")
    }

  // public initDefaultMap(mapElementRef?: ElementRef): void{
  //   EsriConfig.apiKey = "AAPKd353f70381984bfc8953135f2999d688DrHE6ez62C3Gh4MbaqaKeayxF10u1QqZ8I9XWZP7dLPAf-Cp1Lx7Ak0TzAYstv8t"
  //   this.map = new Map({
  //     basemap: this.environment.baseConfigs.defaultMapSettings.basemapId
  //   })

  //   this.pointsLayer = new FeatureLayer({
  //     url:"https://services3.arcgis.com/LrsJEcY70feoykZ9/arcgis/rest/services/JERStateMapSimple_gdb/FeatureServer/0"
  //   })

  //   this.vec = new VectorTileLayer({
  //     url: "https://vectortileservices3.arcgis.com/LrsJEcY70feoykZ9/arcgis/rest/services/jerstatemapsimple_gdb1/VectorTileServer"
  //   })
  //   this.map.add(this.pointsLayer)
  //   this.map.add(this.vec)



  //   this.mapView = new MapView({
  //     map:this.map,
  //     center:[
  //       this.environment.baseConfigs.defaultMapSettings.centerLon,
  //       this.environment.baseConfigs.defaultMapSettings.centerLat
  //     ],
  //     zoom: this.environment.baseConfigs.defaultMapSettings.zoomLevel,
  //     container: mapElementRef?.nativeElement
  //   })
  // }

  

  // public addAllMapWidgets(): void {
  //   const basemapToggle = new BasemapToggle({
  //     view: this.mapView,
  //     nextBasemap: this.environment.baseConfigs.defaultMapSettings.widgets.basemapToggle.nextBasemap,
  //   });

  //   const layerList = new LayerList({
  //     view: this.mapView
  //   })

  //   const zoom = new Zoom({
  //     view: this.mapView,
  //   });

  //   // this.mapView?.ui.add(basemapToggle, this.environment.baseConfigs.defaultMapSettings.widgets.basemapToggle.position);
  //   // this.mapView?.ui.add(layerList, this.environment.baseConfigs.defaultMapSettings.widgets.basemapToggle.position);
  //   this.mapView?.ui.add(layerList, this.environment.baseConfigs.defaultMapSettings.widgets.zoom.position);
  // }

}
