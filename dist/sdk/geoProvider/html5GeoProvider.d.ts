import { GeoProvider } from './geoProvider';
import { Geolocation } from './geo';
export declare class HTML5GeoProvider implements GeoProvider {
    getGeo(): Promise<Geolocation>;
    _getGeo(): Promise<Position>;
}
