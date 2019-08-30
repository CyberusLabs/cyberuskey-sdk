"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Geolocation {
    constructor(latitude, longitude, accuracy) {
        this._latitude = latitude;
        this._longitude = longitude;
        this._accuracy = accuracy;
    }
    get latitude() {
        return this._latitude;
    }
    get longitude() {
        return this._longitude;
    }
    get accuracy() {
        return this._accuracy;
    }
}
exports.Geolocation = Geolocation;
//# sourceMappingURL=geo.js.map