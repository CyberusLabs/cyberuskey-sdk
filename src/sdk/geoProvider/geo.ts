/**
 * An abstraction for a taken geolocation measurement.
 *
 * @export
 * @class Geolocation
 */
export class Geolocation {
  private _latitude: number;
  private _longitude: number;
  private _accuracy: number;

  constructor(latitude: number, longitude: number, accuracy?: number) {
    this._latitude = latitude;
    this._longitude = longitude;
    this._accuracy = accuracy;
  }

  /**
   * Get a latitude.
   *
   * @readonly
   * @type {number}
   * @memberof Geolocation
   */
  get latitude(): number {
    return this._latitude;
  }

  /**
   * Gets a longitude.
   *
   * @readonly
   * @type {number}
   * @memberof Geolocation
   */
  get longitude(): number {
    return this._longitude;
  }

  /**
   * Gets an accuracy of a measurement.
   *
   * @readonly
   * @type {number}
   * @memberof Geolocation
   */
  get accuracy(): number {
    return this._accuracy;
  }
}