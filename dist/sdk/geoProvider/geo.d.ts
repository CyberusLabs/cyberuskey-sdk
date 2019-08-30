export declare class Geolocation {
    private _latitude;
    private _longitude;
    private _accuracy;
    constructor(latitude: number, longitude: number, accuracy?: number);
    readonly latitude: number;
    readonly longitude: number;
    readonly accuracy: number;
}
