import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import EsriMap  from "@arcgis/core/Map"
import { Subject } from 'rxjs';
import { WebMapDocument } from 'src/app/interfaces/webmap-document';
import { EnvironmentService } from 'src/app/services/environment.service';
import { MapService } from 'src/app/services/map.service';
import { MapFactory } from '../map.factory'

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.sass']
})
export class MapViewComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('mapView', { static: false})
  mapElementRef!: ElementRef;
  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(
    readonly environment: EnvironmentService,
    readonly mapService: MapService,
    private mapFactory: MapFactory,
    ) { }

    ngOnInit(){
      
    }

    ngAfterViewInit(): void {
      // this.mapService.initDefaultMap(this.mapElementRef);
      this.mapFactory.initializeMapView(this.mapElementRef)
      // this.mapService.addAllMapWidgets();
    }

    ngOnDestroy(): void {
      // if (this.mapService.mapView) {
      //   this.mapService.mapView.destroy();
      // }
    }

}
