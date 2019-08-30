import { GeoProvider } from './geoProvider';
import { Geolocation } from './geo';


export class HTML5GeoProvider implements GeoProvider {
  async getGeo(): Promise<Geolocation> {
    const { coords } = await this._getGeo();

    return new Geolocation(coords.latitude, coords.longitude, coords.accuracy);
  }

  _getGeo(): Promise<Position> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true })
    });
  }
}
