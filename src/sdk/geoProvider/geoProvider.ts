import { Geolocation } from './geo';


export interface GeoProvider {
  getGeo(): Promise<Geolocation>;
}