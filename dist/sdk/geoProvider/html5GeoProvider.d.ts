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
export declare class HTML5GeoProvider implements GeoProvider {
    private readonly _enableHighAccuracy;
    private _navigator;
    private readonly _numOfTriesBeforeGpsActivates;
    private readonly _onPermissionDialog?;
    private readonly defaultMessage;
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
    constructor(enableHighAccuracy?: boolean, onPermissionDialog?: Function, numOfTriesBeforeGpsActivates?: number, navigator?: Navigator);
    /**
     * Gets a geolocalization measurement.
     *
     * @returns {Promise<Geolocation>} Geolocalization measurement.
     * @memberof HTML5GeoProvider
     */
    getGeo(): Promise<Geolocation>;
    _getGeo(enableHighAccuracy: boolean): Promise<Position>;
}
