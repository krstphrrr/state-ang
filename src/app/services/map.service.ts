import { ElementRef, Injectable, NgZone } from '@angular/core';
import { EnvironmentService } from './environment.service'

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import Zoom from '@arcgis/core/widgets/Zoom';
import Graphic from '@arcgis/core/Graphic';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  map?: Map;
  mapView?: MapView;
  pointsLayer?: FeatureLayer;

  constructor(private readonly environment:EnvironmentService) { }

  public initDefaultMap(mapElementRef?: ElementRef): void{

    this.map = new Map({
      basemap: this.environment.baseConfigs.defaultMapSettings.basemapId
    })

    this.mapView = new MapView({
      map:this.map,
      center:[
        this.environment.baseConfigs.defaultMapSettings.centerLon,
        this.environment.baseConfigs.defaultMapSettings.centerLat
      ],
      zoom: this.environment.baseConfigs.defaultMapSettings.zoomLevel,
      container: mapElementRef?.nativeElement
    })
  }

  public addAllMapWidgets(): void {
    const basemapToggle = new BasemapToggle({
      view: this.mapView,
      nextBasemap: this.environment.baseConfigs.defaultMapSettings.widgets.basemapToggle.nextBasemap,
    });

    const zoom = new Zoom({
      view: this.mapView,
    });

    this.mapView?.ui.add(basemapToggle, this.environment.baseConfigs.defaultMapSettings.widgets.basemapToggle.position);
    this.mapView?.ui.add(zoom, this.environment.baseConfigs.defaultMapSettings.widgets.zoom.position);
  }

}
