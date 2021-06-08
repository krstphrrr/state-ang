import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import EsriMap  from "@arcgis/core/Map"
import { EnvironmentService } from 'src/app/services/environment.service';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.sass']
})
export class MapViewComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapView', { static: false})
  mapElementRef?: ElementRef;

  constructor(
    readonly environment: EnvironmentService,
    readonly mapService: MapService) { }

    ngAfterViewInit(): void {
      this.mapService.initDefaultMap(this.mapElementRef);
      this.mapService.addAllMapWidgets();
    }

    ngOnDestroy(): void {
      if (this.mapService.mapView) {
        this.mapService.mapView.destroy();
      }
    }

}
