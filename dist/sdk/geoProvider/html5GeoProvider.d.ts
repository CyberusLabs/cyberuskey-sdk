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
    /**
     * Gets a geolocalization measurement.
     *
     * @returns {Promise<Geolocation>} Geolocalization measurement.
     * @memberof HTML5GeoProvider
     */
    getGeo(): Promise<Geolocation>;
    _getGeo(): Promise<Position>;
}
