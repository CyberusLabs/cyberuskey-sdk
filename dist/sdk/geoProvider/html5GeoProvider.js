"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTML5GeoProvider = void 0;
const geo_1 = require("./geo");
/**
 * Class provides a geolocalization measurement.
 * It uses a HTML5's `Geolocation.getCurrentPosition()` method.
 *
 * @export
 * @class HTML5GeoProvider
 * @implements {GeoProvider}
 */
class HTML5GeoProvider {
    /**
     * Creates an instance of HTML5GeoProvider.
     *
     * @param {boolean} [enableHighAccuracy=false]  Forces high accuracy of the geolocation. It may take longer.
     * @param {Navigator} [navigator=window.navigator]
     * @param numOfTriesBeforeGpsActivates The GPS localization will be used only after n unsuccessful tries.
     * By unsuccessful try we define the number of times the authentication resulted in session not found error.
     * @param onPermissionDialog Leave an implementation of the additional information dialog to appear before site
     * asks for localization permission for the caller to handle. It takes a function with default message as parameter
     * @memberof HTML5GeoProvider
     */
    constructor(enableHighAccuracy = false, onPermissionDialog = null, numOfTriesBeforeGpsActivates = 2, navigator = window.navigator) {
        this._numOfTriesBeforeGpsActivates = 2;
        this.defaultMessage = "Cyberus Key widget would like to access your location" +
            " to use geolocation tracking to assert successful authentication.";
        this._enableHighAccuracy = enableHighAccuracy;
        this._navigator = navigator;
        this._numOfTriesBeforeGpsActivates = numOfTriesBeforeGpsActivates;
        this._onPermissionDialog = onPermissionDialog;
    }
    /**
     * Gets a geolocalization measurement.
     *
     * @returns {Promise<Geolocation>} Geolocalization measurement.
     * @memberof HTML5GeoProvider
     */
    getGeo() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = null;
            let data = sessionStorage.getItem("auth_counter");
            if (data == null)
                return null;
            let value = parseInt(data, 10);
            if (isNaN(value) || value < this._numOfTriesBeforeGpsActivates)
                return null;
            try {
                const permissionDialog = this._onPermissionDialog;
                const defaultMessage = this.defaultMessage;
                navigator.permissions && navigator.permissions.query({ name: 'geolocation' })
                    .then(function (PermissionStatus) {
                    if (PermissionStatus.state == 'prompt') {
                        if (permissionDialog)
                            permissionDialog(defaultMessage);
                        else
                            alert(defaultMessage);
                    }
                });
                result = yield this._getGeo(this._enableHighAccuracy);
            }
            catch (_a) {
                // E.g. user didn't agree on geolicalization.
                return null;
            }
            const { coords } = result;
            return new geo_1.Geolocation(coords.latitude, coords.longitude, coords.accuracy);
        });
    }
    _getGeo(enableHighAccuracy) {
        return new Promise((resolve, reject) => {
            this._navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy });
        });
    }
}
exports.HTML5GeoProvider = HTML5GeoProvider;
//# sourceMappingURL=html5GeoProvider.js.map