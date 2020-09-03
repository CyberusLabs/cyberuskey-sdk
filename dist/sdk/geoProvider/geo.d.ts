/**
 * An abstraction for a taken geolocation measurement.
 *
 * @export
 * @class Geolocation
 */
export declare class Geolocation {
    private _latitude;
    private _longitude;
    private _accuracy;
    constructor(latitude: number, longitude: number, accuracy?: number);
    /**
     * Get a latitude.
     *
     * @readonly
     * @type {number}
     * @memberof Geolocation
     */
    get latitude(): number;
    /**
     * Gets a longitude.
     *
     * @readonly
     * @type {number}
     * @memberof Geolocation
     */
    get longitude(): number;
    /**
     * Gets an accuracy of a measurement.
     *
     * @readonly
     * @type {number}
     * @memberof Geolocation
     */
    get accuracy(): number;
}
