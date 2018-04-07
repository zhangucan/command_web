import mapboxgl from 'mapbox-gl'
import { Logo } from '@supermap/iclient-mapboxgl'

var host = 'http://support.supermap.com.cn:8090'
var map = new mapboxgl.Map({
  container: 'map',
  style: {
    'version': 8,
    'sources': {
      'raster-tiles': {
        'type': 'raster',
        'tiles': [host + '/iserver/services/maps/rest/maps/世界地图_Night/zxyTileImage.png?prjCoordSys={epsgCode:3857}&z={z}&x={x}&y={y}'],
        'tileSize': 256
      }
    },
    'layers': [{
      'id': 'simple-tiles',
      'type': 'raster',
      'source': 'raster-tiles',
      'minzoom': 0,
      'maxzoom': 22
    }],
    'sprite': 'http://iclient.supermap.io/web/styles/street/sprite'
  },
  center: [0, 0],
  maxZoom: 18,
  zoom: 2
})
map.addControl(new Logo(), 'bottom-right')
