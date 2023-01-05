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
  private readonly _enableHighAccuracy: boolean;
  private _navigator: Navigator;
  private readonly _numOfTriesBeforeGpsActivates: number = 2;
  private readonly _onPermissionDialog?: Function;
  private readonly defaultMessage = "Cyberus Key widget would like to access your location" +
      " to use geolocation tracking to assert successful authentication."
  /**
   * Creates an instance of HTML5GeoProvider.
   *
   * @param {boolean} [enableHighAccuracy=false]  Forces high accuracy of the geolocation. It may take longer.
   * @param {Navigator} [navigator=window.navigator]
   * @param numOfTriesBeforeGpsActivates The GPS localization will be used only after n unsuccessful tries.
   * By unsuccessful try we define the number of times the authentication resulted in session not found error.
   * @param onPermissionDialog Leave an implementation of the additional information dialog to appear before site
   * asks for localization permission for the caller to handle. It takes a function with default message as parameter
   * @memberof HTML5GeoProvider
   */
  constructor(enableHighAccuracy = false, onPermissionDialog:Function = null, numOfTriesBeforeGpsActivates: number = 2, navigator: Navigator = window.navigator) {
    this._enableHighAccuracy = enableHighAccuracy;
    this._navigator = navigator;
    this._numOfTriesBeforeGpsActivates = numOfTriesBeforeGpsActivates;
    this._onPermissionDialog = onPermissionDialog;

  }

  /**
   * Gets a geolocalization measurement.
   *
   * @returns {Promise<Geolocation>} Geolocalization measurement.
   * @memberof HTML5GeoProvider
   */
  async getGeo(): Promise<Geolocation> {
    let result = null;



    let data = sessionStorage.getItem("auth_counter");
    if (data ==null)
      return null;

    let value = parseInt(data, 10)

    if(isNaN(value) || value < this._numOfTriesBeforeGpsActivates)
      return null;

    try {
      const permissionDialog = this._onPermissionDialog;
      const defaultMessage = this.defaultMessage;

      navigator.permissions && navigator.permissions.query({name: 'geolocation'})
          .then(function(PermissionStatus) {
            if (PermissionStatus.state == 'prompt') {
              if(permissionDialog)
                permissionDialog(defaultMessage)
              else
                alert(defaultMessage);
            }
          })


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
