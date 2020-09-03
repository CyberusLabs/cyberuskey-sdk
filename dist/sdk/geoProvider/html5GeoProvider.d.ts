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
    private _enableHighAccuracy;
    private _navigator;
    /**
     * Creates an instance of HTML5GeoProvider.
     *
     * @param {boolean} [enableHighAccuracy=false]  Forces high accuracy of the geolocation. It may take longer.
     * @param {Navigator} [navigator=window.navigator]
     * @memberof HTML5GeoProvider
     */
    constructor(enableHighAccuracy?: boolean, navigator?: Navigator);
    /**
     * Gets a geolocalization measurement.
     *
     * @returns {Promise<Geolocation>} Geolocalization measurement.
     * @memberof HTML5GeoProvider
     */
    getGeo(): Promise<Geolocation>;
    _getGeo(enableHighAccuracy: boolean): Promise<Position>;
}
