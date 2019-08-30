export class Geolocation {
  private _latitude: number;
  private _longitude: number;
  private _accuracy: number;

  constructor(latitude: number, longitude: number, accuracy?: number) {
    this._latitude = latitude;
    this._longitude = longitude;
    this._accuracy = accuracy;
  }

  get latitude(): number {
    return this._latitude;
  }

  get longitude(): number {
    return this._longitude;
  }

  get accuracy(): number {
    return this._accuracy;
  }
}