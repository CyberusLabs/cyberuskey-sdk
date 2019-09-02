import { Geolocation } from './geo';


/**
 * An interface allowing to get a geolocalization measurement.
 *
 * @export
 * @interface GeoProvider
 */
export interface GeoProvider {
  getGeo(): Promise<Geolocation>;
}