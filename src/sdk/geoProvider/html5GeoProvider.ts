import {Geolocation} from './geo';
import {GeoProvider} from './geoProvider';


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
    constructor(enableHighAccuracy = false, onPermissionDialog: Function = null, numOfTriesBeforeGpsActivates: number = 2, navigator: Navigator = window.navigator) {
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

        const permissionStatus = await navigator.permissions.query({
            name: 'geolocation'
        });

        try {
            if (permissionStatus.state == "granted")
                return await this._getGeo(this._enableHighAccuracy);

            if (permissionStatus.state == "denied")
                return null;

            if (permissionStatus.state == "prompt") {
                if (!this._doIShowCustomPrompt())
                    return null;

                if (this._onPermissionDialog)
                    this._onPermissionDialog(this.defaultMessage)
                else
                    alert(this.defaultMessage);

                return await this._getGeo(this._enableHighAccuracy);

            }
        } catch (e) {
            return null;
        }

    }

    _doIShowCustomPrompt() {
        let data = sessionStorage.getItem("auth_counter");
        if (data == null)
            return false;

        let value = parseInt(data, 10)

        return !isNaN(value) && value >= this._numOfTriesBeforeGpsActivates;


    }

    async _getGeo(enableHighAccuracy: boolean): Promise<Geolocation> {
        const {coords} = await new Promise((resolve, reject) => {
            this._navigator.geolocation.getCurrentPosition(resolve, reject, {enableHighAccuracy})
        });

        return new Geolocation(coords.latitude, coords.longitude, coords.accuracy);

    }
}
