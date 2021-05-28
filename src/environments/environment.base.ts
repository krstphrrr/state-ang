import { BasemapId } from 'src/app/enums/basemapId';
import { WidgetPosition } from 'src/app/enums/widgetPosition';



export const baseConfigs = {

  defaultMapSettings: {
    centerLat: 33.100745,
    centerLon: -106.564757,
    zoomLevel: 5,
    basemapId: BasemapId.streets,
    widgets: {
      basemapToggle: {
        position: WidgetPosition.topLeft,
        nextBasemap: BasemapId.hybrid,
      },
      zoom: {
        position: WidgetPosition.topRight,
      },
    },
  },
};