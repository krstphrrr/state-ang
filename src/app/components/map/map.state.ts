
import { MapViewProperties } from '../../interfaces/map-view-properties';
// import { ServiceStatus } from '../shared/models/service-status';
// import { WebMapDocument } from '../shared/models/webmap-document';

export class WebMapDocument {
	operationalLayers!: any[];
	basemap: any;
	spatialReference: any;
	initialState: any;
	authoringApp: any;
	authoringAppVersion: any;
	version: any;
}


export enum ServiceStatusTypes{
	loading = 'loading',
	content = 'content',
	empty = 'empty',
	error = 'error'
}

export class ServiceStatus {
	constructor(
		public type: ServiceStatusTypes,
		public error?:any
	){}
}



export interface MapState {
    status: ServiceStatus;
    webMap?: WebMapDocument;
    // mapViewProperties?: MapViewProperties;
    // sidenav?: {
        // opened: boolean,
        // path: string
    // };
}