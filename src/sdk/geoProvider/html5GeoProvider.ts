import { Geolocation } from './geo';
import { GeoProvider } from './geoProvider';


/**
 * Class provides a geolocalization measurement.
 * It uses a HTML5's `Geolocation.getCurrentPosition()` method.
 *
 * @export
 * @class HTML5GeoProvider
 * @implements {GeoProvider}
 */
export class HTML5GeoProvider implements GeoProvider {
  /**
   * Gets a geolocalization measurement.
   *
   * @returns {Promise<Geolocation>} Geolocalization measurement.
   * @memberof HTML5GeoProvider
   */
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
