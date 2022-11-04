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
  private _enableHighAccuracy: boolean;
  private _navigator: Navigator;

  /**
   * Creates an instance of HTML5GeoProvider.
   *
   * @param {boolean} [enableHighAccuracy=false]  Forces high accuracy of the geolocation. It may take longer.
   * @param {Navigator} [navigator=window.navigator]
   * @memberof HTML5GeoProvider
   */
  constructor(enableHighAccuracy = false, navigator: Navigator = window.navigator) {
    this._enableHighAccuracy = enableHighAccuracy;
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
      result = await this._getGeo(this._enableHighAccuracy);
    } catch {
      // E.g. user didn't agree on geolicalization.
      return null;
    }

    const { coords } = result;

    return new Geolocation(coords.latitude, coords.longitude, coords.accuracy);
  }

  _getGeo(enableHighAccuracy: boolean): Promise<Position> {
    return new Promise((resolve, reject) => {
      this._navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy })
    });
  }
}
