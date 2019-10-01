import { expect } from 'chai';

import { HTML5GeoProvider, Geolocation } from '../src/index';


describe('HTML5GeoProvider', () => {
  it('should return the geolocation', async () => {
    const geolocation = {
      getCurrentPosition: (success: Function, error: Function, options: Object) => {
        success({ coords: { latitude: 50, longitude: 49, accuracy: 1 } });
      }
    };
    // @ts-ignore
    const geoProvider = new HTML5GeoProvider({ geolocation });

    const result = await geoProvider.getGeo();

    expect(result instanceof Geolocation).to.be.true;
    expect(result).to.deep.equal({ _latitude: 50, _longitude: 49, _accuracy: 1 });
  });

  it('should return null if user didn\t agree on the geolicalization', async () => {
    const geolocation = {
      getCurrentPosition: (success: Function, error: Function, options: Object) => {
        error('User denied Geolocation');
      }
    };
    // @ts-ignore
    const geoProvider = new HTML5GeoProvider({ geolocation });

    const result = await geoProvider.getGeo();

    expect(result).to.be.null;
  });
});