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
  private _navigator: Navigator;

  constructor(navigator: Navigator = window.navigator) {
    this._navigator = navigator;
  }

  /**
   * Gets a geolocalization measurement.
   *
   * @returns {Promise<Geolocation>} Geolocalization measurement.
   * @memberof HTML5GeoProvider
   */
  async getGeo(): Promise<Geolocation> {
    let result = null;

    try {
      result = await this._getGeo();
    } catch {
      // E.g. user didn't agree on geolicalization.
      return null;
    }

    const { coords } = result;

    return new Geolocation(coords.latitude, coords.longitude, coords.accuracy);
  }

  _getGeo(): Promise<Position> {
    return new Promise((resolve, reject) => {
      this._navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true })
    });
  }
}
