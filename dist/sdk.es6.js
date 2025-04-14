(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("cyberuskey-sdk", [], factory);
	else if(typeof exports === 'object')
		exports["cyberuskey-sdk"] = factory();
	else
		root["cyberuskey-sdk"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

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
exports.CyberusKeyAPI = void 0;
/**
 * Cyberus Key API which allows you to do a delegate login with OpenId protocol.
 *
 * @class CyberusKeyAPI
 */
class CyberusKeyAPI {
    /**
     *Creates an instance of CyberusKeyAPI.
     * @param {string} hostUrl Base URL of the host server, e.g. `https://api.cyberuskey.com`
     * @param {GeoProvider} [geoProvider] Geolocalization provider. Use specific implementation like `HTML5GeoProvider`.
     * @param {number} [delayMs=600] Delay (ms) between making an Authentication request and a sound playing.
     * @memberof CyberusKeyAPI
     */
    constructor(hostUrl, geoProvider, delayMs = 600) {
        this._apiUrl = new URL('/api/v2/', hostUrl);
        this._geoProvider = geoProvider;
        this._delayMs = delayMs;
    }
    /**
     * Creates the Cyberus Key session.
     *
     * @param {string} clientId Public client ID generated during creating the account.
     * @param {Geolocation} [geo] Give a value if you want to pass optional geolocation measurement.
     *    It can be later use to compare it against the mobile's measurement (if you have set `fail_on_geo_mismatch`).
     *    Those measurements can be used also to general improvement of the security.
     * @param {string} [origin] The origin domain of the request being made. If `null` then the Referer header will be used.
     * @throws WrongJsonError, OpenApiError, ResourceNotFoundError, OTPGenerationError, UnknownError
     * @returns {Promise<string>} The Cyberus Key session id.
     * @memberof CyberusKeyAPI
     */
    createSession(clientId, origin, geo) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = { client_id: clientId };
            if (geo) {
                data['lat'] = geo.latitude;
                data['lng'] = geo.longitude;
            }
            else if (this._geoProvider) {
                const gps = yield this._geoProvider.getGeo();
                if (gps) {
                    data['lat'] = gps.latitude;
                    data['lng'] = gps.longitude;
                }
            }
            if (origin) {
                data['origin'] = origin;
            }
            const params = {
                method: 'POST',
                body: this._getUrlEncodedBody(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            return fetch(this._getUrl('sessions'), params)
                .then((response) => response.json())
                .then((json) => json.data.session_id);
        });
    }
    /**
     * Checks if authentication server is available
     *
     * @returns {Promise<boolean>} flag indicating if the authentication server is available.
     * @memberof CyberusKeyAPI
     */
    isOutOfService() {
        return __awaiter(this, void 0, void 0, function* () {
            let errPageMsg = (new URL(document.location.href)).searchParams.get("error");
            if (errPageMsg != null && errPageMsg == "otp_timeout_error") {
                let authActive = sessionStorage.getItem("auth_active");
                if (authActive != null && authActive === "true") {
                    sessionStorage.removeItem("auth_active");
                    let authCounter = sessionStorage.getItem("auth_counter");
                    if (authCounter != null) {
                        let authCounterValue = parseInt(authCounter, 10);
                        if (!isNaN(authCounterValue)) {
                            sessionStorage.setItem("auth_counter", (authCounterValue + 1).toString());
                        }
                    }
                    else {
                        sessionStorage.setItem("auth_counter", "1");
                    }
                }
            }
            else {
                sessionStorage.removeItem("auth_counter");
            }
            this.preloadBackgroundAudio();
            const requestOptions = {
                headers: {
                    'Accept': 'application/json'
                }
            };
            return fetch(this._getUrl(`version`), requestOptions)
                .then(response => response.json())
                .then((versionJson) => versionJson.outOfService)
                .catch((err) => {
                return err;
            });
        });
    }
    preloadBackgroundAudio() {
        if (!this.backgroundAudioPromise) {
            this.backgroundAudioPromise = (() => __awaiter(this, void 0, void 0, function* () {
                const url = 'https://staticaudio.azureedge.net/static/Piano_FSK_1a_long.wav';
                const res = yield fetch(url);
                const buffer = yield res.arrayBuffer();
                const ctx = new AudioContext();
                this.backgroundAudioBuffer = yield ctx.decodeAudioData(buffer);
            }))();
        }
    }
    /**
     * Gets a URL with sound with embedded OTP. You have to emit it.
     *
     * @param {Session} session Cyberus Key's session generated by a user for a login.
     * @returns {Promise<string>} string with url to the sound.
     * @throws ResourceNotFoundError
     * @memberof CyberusKeyAPI
     */
    getOTPSound(session) {
        const type = 'audio/mpeg';
        const requestOptions = {
            headers: {
                'Accept': type,
                'Content-Type': 'text/plain'
            }
        };
        return fetch(this._getUrl(`sessions/${session}`), requestOptions)
            .then((response) => response.arrayBuffer())
            .then((arrayBuffer) => new Blob([arrayBuffer], { type: type }))
            .then((blob) => window.URL.createObjectURL(blob))
            .catch((err) => {
            return err;
        });
    }
    getOTPSoundBackground(session) {
        return __awaiter(this, void 0, void 0, function* () {
            const otpUrl = this._getUrl(`sessions/${session}?otp_only=true`);
            const audioContext = new AudioContext();
            try {
                if (this.backgroundAudioPromise) {
                    yield this.backgroundAudioPromise;
                }
                if (!this.backgroundAudioBuffer) {
                    throw new Error('Background audio is not loaded.');
                }
                const otpResponse = yield fetch(otpUrl);
                const otpArrayBuffer = yield otpResponse.arrayBuffer();
                const otpBuffer = yield audioContext.decodeAudioData(otpArrayBuffer);
                const silenceDuration = 0.5;
                const totalPlays = 10;
                const otpDuration = otpBuffer.duration;
                const totalDuration = totalPlays * (otpDuration + silenceDuration);
                const otpSequence = audioContext.createBuffer(otpBuffer.numberOfChannels, totalDuration * audioContext.sampleRate, audioContext.sampleRate);
                for (let i = 0; i < totalPlays; i++) {
                    const startSample = Math.floor(i * (otpDuration + silenceDuration) * audioContext.sampleRate);
                    for (let channel = 0; channel < otpBuffer.numberOfChannels; channel++) {
                        const from = otpBuffer.getChannelData(channel);
                        const to = otpSequence.getChannelData(channel);
                        to.set(from, startSample);
                    }
                }
                // Create OTP blob
                const otpWavBuffer = this._encodeWav(otpSequence, audioContext.sampleRate);
                const otpBlob = new Blob([otpWavBuffer], { type: 'audio/wav' });
                const otpBlobUrl = URL.createObjectURL(otpBlob);
                // Create Piano blob
                const pianoWavBuffer = this._encodeWav(this.backgroundAudioBuffer, audioContext.sampleRate);
                const pianoBlob = new Blob([pianoWavBuffer], { type: 'audio/wav' });
                const pianoBlobUrl = URL.createObjectURL(pianoBlob);
                return {
                    otpUrl: otpBlobUrl,
                    pianoUrl: pianoBlobUrl
                };
            }
            catch (err) {
                console.error('Audio processing failed:', err);
                return Promise.resolve({ otpUrl: '', pianoUrl: '' });
            }
        });
    }
    /**
     * Gets OpenID's Authentication endpoint URL which will be used to process the authentication.
     *
     * @param sessionId unique id created for the specific login and connected to the specific otp
     * @param {OpenIdScopeParser} scope Each scope returns a set of user attributes, which are called claims.
     *    Once the user authorizes the requested scopes, the claims are returned in an ID Token.
     * @param {string} clientId Public client ID generated during creating the account.
     * @param {string} redirectUri Redirect URI to which the response will be sent. If the value is not whitelisted then the request will fail.
     * @param {string} [state]
     *    RECOMMENDED. Opaque value used to maintain state between the request and the callback. Typically, CSRF, XSRF mitigation is done by cryptographically binding the value of this parameter with a browser cookie.
     *    The state parameter preserves some state object set by the client in the Authentication request and makes it available to the client in the response.
     *    It’s that unique and non-guessable value that allows you to prevent the attack by confirming if the value coming from the response matches the one you expect (the one you generated when initiating the request).
     *    The state parameter is a string so you can encode any other information in it.
     * @param {string} [nonce]
     *    String value used to associate a Client session with an ID Token, and to mitigate replay attacks.
     *    The value is passed through unmodified from the Authentication Request to the ID Token.
     *    Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.
     * @param {string} [responseType='code'] OpenId response type. The default is `code` (Code Flow, involving the front-channel and backchannel).
     * @returns OpenID's Authentication endpoint URL
     * @throws InvalidRedirectUriError, InvalidClientError, ResourceNotFoundError
     * @memberof CyberusKeyAPI
     */
    getAuthenticationEndpointUrl(sessionId, scope, clientId, redirectUri, state, nonce, responseType = 'code') {
        const data = {
            session_id: sessionId,
            client_id: clientId,
            scope: scope.getValue(),
            redirect_uri: redirectUri,
            response_type: responseType
        };
        if (state) {
            data['state'] = state;
        }
        if (nonce) {
            data['nonce'] = nonce;
        }
        const url = new URL(this._getUrl('authenticate'));
        Object.keys(data).forEach((parameterName) => {
            url.searchParams.append(parameterName, data[parameterName]);
        });
        return url.href;
    }
    /**
     * Navigates to Authentication Endpoint
     *
     * @param {string} clientId Public client ID generated during creating the account.
     * @param {string} redirectUri Redirect URI to which the response will be sent. If the value is not whitelisted then the request will fail.
     * @param {OpenIdScopeParser} scope Each scope returns a set of user attributes, which are called claims.
     *    Once the user authorizes the requested scopes, the claims are returned in an ID Token.
     * @param {Navigator} navigator Class describes an action that will be done to Authentication URL. For browsers it will be a page redirection.
     * @param session Session id
     * @param {string} [origin] The origin domain of the request being made. If `null` then the Referer header will be used.
     * @param {string} [state]
     *    RECOMMENDED. Opaque value used to maintain state between the request and the callback. Typically, CSRF, XSRF mitigation is done by cryptographically binding the value of this parameter with a browser cookie.
     *    The state parameter preserves some state object set by the client in the Authentication request and makes it available to the client in the response.
     *    It’s that unique and non-guessable value that allows you to prevent the attack by confirming if the value coming from the response matches the one you expect (the one you generated when initiating the request).
     *    The state parameter is a string so you can encode any other information in it.
     * @param {string} [nonce]
     *    String value used to associate a Client session with an ID Token, and to mitigate replay attacks.
     *    The value is passed through unmodified from the Authentication Request to the ID Token.
     *    Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.
     * @param {string} [responseType='code'] OpenId response type. The default is `code` (Code Flow, involving the front-channel and backchannel).
     * @returns {Promise<void>}
     * @memberof CyberusKeyAPI
     */
    navigateAuthentication(clientId, redirectUri, scope, navigator, session, origin, state, nonce, responseType = 'code') {
        const authenticateUrl = this.getAuthenticationEndpointUrl(session, scope, clientId, redirectUri, state, nonce, responseType);
        sessionStorage.setItem("auth_active", "true");
        return navigator.navigate(authenticateUrl);
    }
    loginThroughCyberusKeyDashboard(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                client_id: options.clientId,
                scope: options.scope.getValue(),
                redirect_uri: options.redirectUri,
                response_type: options.responseType,
                state: options.state,
                nonce: options.nonce,
                display: options.display || 'page',
                prompt: options.prompt,
                theme: options.theme,
            };
            if (options.state) {
                data['state'] = options.state;
            }
            if (options.nonce) {
                data['nonce'] = options.nonce;
            }
            const url = new URL(this._getUrl('authenticate'));
            Object.keys(data).forEach((parameterName) => {
                url.searchParams.append(parameterName, data[parameterName]);
            });
            yield options.navigator.navigate(url.href);
        });
    }
    _getUrl(path) {
        return (new URL(path, this._apiUrl)).href;
    }
    _getUrlEncodedBody(data) {
        return Object.keys(data).reduce((result, key) => {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(data[key]);
            result.push(`${encodedKey}=${encodedValue}`);
            return result;
        }, []).join("&");
    }
    _timeout(ms) {
        return new Promise((resolve) => {
            return setTimeout(resolve, ms);
        });
    }
    _encodeWav(buffer, sampleRate) {
        const numChannels = buffer.numberOfChannels;
        const length = buffer.length * numChannels * 2;
        const output = new ArrayBuffer(44 + length);
        const view = new DataView(output);
        const writeString = (offset, str) => {
            for (let i = 0; i < str.length; i++) {
                view.setUint8(offset + i, str.charCodeAt(i));
            }
        };
        const floatTo16BitPCM = (output, offset, input) => {
            for (let i = 0; i < input.length; i++, offset += 2) {
                const s = Math.max(-1, Math.min(1, input[i]));
                output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
            }
        };
        writeString(0, 'RIFF');
        view.setUint32(4, 36 + length, true);
        writeString(8, 'WAVE');
        writeString(12, 'fmt ');
        view.setUint32(16, 16, true); // PCM
        view.setUint16(20, 1, true); // PCM format
        view.setUint16(22, numChannels, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, sampleRate * numChannels * 2, true);
        view.setUint16(32, numChannels * 2, true);
        view.setUint16(34, 16, true); // bits per sample
        writeString(36, 'data');
        view.setUint32(40, length, true);
        let offset = 44;
        const channels = [];
        for (let i = 0; i < numChannels; i++) {
            channels.push(buffer.getChannelData(i));
        }
        for (let i = 0; i < buffer.length; i++) {
            for (let channel = 0; channel < numChannels; channel++) {
                floatTo16BitPCM(view, offset, new Float32Array([channels[channel][i]]));
                offset += 2;
            }
        }
        return output;
    }
}
exports.CyberusKeyAPI = CyberusKeyAPI;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingRedirectUri = exports.OTPGenerationError = exports.ResourceNotFoundError = exports.OpenApiError = exports.WrongJsonError = exports.TooManyCallsError = exports.UnknownError = exports.CyberusKeyError = exports.ErrorCode = exports.errorFactory = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["undefined"] = 1] = "undefined";
    ErrorCode[ErrorCode["unknown_error"] = 2] = "unknown_error";
    ErrorCode[ErrorCode["server_error"] = 3] = "server_error";
    ErrorCode[ErrorCode["wrong_json"] = 4] = "wrong_json";
    ErrorCode[ErrorCode["openapi_error"] = 5] = "openapi_error";
    ErrorCode[ErrorCode["resource_not_found"] = 6] = "resource_not_found";
    ErrorCode[ErrorCode["otp_generation_failure"] = 7] = "otp_generation_failure";
    ErrorCode[ErrorCode["invalid_redirect_uri"] = 8] = "invalid_redirect_uri";
    ErrorCode[ErrorCode["invalid_client"] = 9] = "invalid_client";
    ErrorCode[ErrorCode["too_many_calls_error"] = 10] = "too_many_calls_error";
})(ErrorCode || (ErrorCode = {}));
exports.ErrorCode = ErrorCode;
class CyberusKeyError extends Error {
    constructor(code, message) {
        super(message);
        this._code = ErrorCode[code];
    }
    get code() {
        return ErrorCode[this._code];
    }
    get description() {
        return this.message;
    }
}
exports.CyberusKeyError = CyberusKeyError;
class UnknownError extends CyberusKeyError {
    constructor(code = 'unknown_error', message = 'Unknown error occured.') {
        super(code, message);
    }
}
exports.UnknownError = UnknownError;
class TooManyCallsError extends CyberusKeyError {
    constructor(code = 'too_many_calls_error', message = 'You\'ve done too many calls.') {
        super(code, message);
    }
}
exports.TooManyCallsError = TooManyCallsError;
class MissingRedirectUri extends CyberusKeyError {
    constructor() {
        super('invalid_redirect_uri', 'Missing redirection URI.');
    }
}
exports.MissingRedirectUri = MissingRedirectUri;
class WrongJsonError extends CyberusKeyError {
}
exports.WrongJsonError = WrongJsonError;
class OpenApiError extends CyberusKeyError {
}
exports.OpenApiError = OpenApiError;
class ResourceNotFoundError extends CyberusKeyError {
}
exports.ResourceNotFoundError = ResourceNotFoundError;
class OTPGenerationError extends CyberusKeyError {
}
exports.OTPGenerationError = OTPGenerationError;
class InvalidRedirectUriError extends CyberusKeyError {
}
class InvalidClientError extends CyberusKeyError {
}
const MAPPING = {
    [ErrorCode.undefined]: UnknownError,
    [ErrorCode.unknown_error]: UnknownError,
    [ErrorCode.server_error]: UnknownError,
    [ErrorCode.undefined]: WrongJsonError,
    [ErrorCode.wrong_json]: WrongJsonError,
    [ErrorCode.openapi_error]: OpenApiError,
    [ErrorCode.resource_not_found]: ResourceNotFoundError,
    [ErrorCode.otp_generation_failure]: OTPGenerationError,
    [ErrorCode.invalid_redirect_uri]: InvalidRedirectUriError,
    [ErrorCode.invalid_client]: InvalidClientError,
    [ErrorCode.too_many_calls_error]: TooManyCallsError
};
function errorFactory(code, message) {
    const enum_type = ErrorCode[code];
    const ErrorConstructor = MAPPING[enum_type];
    return new ErrorConstructor(code, message);
}
exports.errorFactory = errorFactory;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Geolocation = void 0;
/**
 * An abstraction for a taken geolocation measurement.
 *
 * @export
 * @class Geolocation
 */
class Geolocation {
    constructor(latitude, longitude, accuracy) {
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
    get latitude() {
        return this._latitude;
    }
    /**
     * Gets a longitude.
     *
     * @readonly
     * @type {number}
     * @memberof Geolocation
     */
    get longitude() {
        return this._longitude;
    }
    /**
     * Gets an accuracy of a measurement.
     *
     * @readonly
     * @type {number}
     * @memberof Geolocation
     */
    get accuracy() {
        return this._accuracy;
    }
}
exports.Geolocation = Geolocation;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(0), exports);
__exportStar(__webpack_require__(1), exports);
__exportStar(__webpack_require__(4), exports);
__exportStar(__webpack_require__(5), exports);
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(7), exports);
__exportStar(__webpack_require__(2), exports);
__exportStar(__webpack_require__(8), exports);
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(10), exports);
const api_1 = __webpack_require__(0);
exports.default = api_1.CyberusKeyAPI;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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
exports.RedirectNavigator = void 0;
const errors_1 = __webpack_require__(1);
/**
 * Class describes how OpenID's Authentication Endpoint will be handled.
 * This class is thighten to a default browser behaviour for OpenID protocol - a redirection.
 * Which means that your URL will be temporarily replaced by the Authentication Endpoint
 * and replaced again by its response - HTTP 302. The new location will be the one you defined as your `redirect_uri`.
 *
 * @export
 * @class RedirectNavigator
 * @implements {Navigator}
 */
class RedirectNavigator {
    /**
     * Navigates to the given URL.
     *
     * @param {string} url Authentication Endpoint URL.
     * @throws MissingRedirectUri
     * @returns {Promise<void>}
     * @memberof RedirectNavigator
     */
    navigate(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!url) {
                throw new errors_1.MissingRedirectUri();
            }
            window.location.href = url;
            return Promise.resolve();
        });
    }
}
exports.RedirectNavigator = RedirectNavigator;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenIdScopeParser = void 0;
/**
 * Handy class to define an OpenID's scope.
 * Scopes are used by an application during authentication to authorize access to a user's details,
 * like name and picture. Each scope returns a set of user attributes, which are called claims.
 *
 * You can use additional values `email` (add a user's email claim) and `profile` (add user first and last name).
 *
 * ```javascript
 * const scopeParser = new OpenIdScopeParser();
 * const scope = scopeParser.addEmail().addProfile().getValue();
 * ```
 *
 * @export
 * @class OpenIdScopeParser
 */
class OpenIdScopeParser {
    constructor() {
        this._scope = ['openid'];
    }
    /**
     * Adds `email` scope.
     *
     * @returns {this}
     * @memberof OpenIdScopeParser
     */
    addEmail() {
        if (this._scope.includes('email')) {
            return this;
        }
        this._scope.push('email');
        return this;
    }
    /**
     * Adds `profile` scope.
     *
     * @returns {this}
     * @memberof OpenIdScopeParser
     */
    addProfile() {
        if (this._scope.includes('profile')) {
            return this;
        }
        this._scope.push('profile');
        return this;
    }
    /**
     * Gets formatted scope value, e.g. `openid email`.
     *
     * @returns {string}
     * @memberof OpenIdScopeParser
     */
    getValue() {
        return this._scope.join(' ');
    }
}
exports.OpenIdScopeParser = OpenIdScopeParser;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
/**
 * Data class representing a Cyberus Key session.
 *
 * @export
 * @class Session
 */
class Session {
    constructor(json) {
        this.sessionId = json.session_id;
        this.createdAt = new Date(json.created_at);
    }
}
exports.Session = Session;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

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
const geo_1 = __webpack_require__(2);
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
            const permissionStatus = yield navigator.permissions.query({
                name: 'geolocation'
            });
            try {
                if (permissionStatus.state == "granted")
                    return yield this._getGeo(this._enableHighAccuracy);
                if (permissionStatus.state == "denied")
                    return null;
                if (permissionStatus.state == "prompt") {
                    if (!this._doIShowCustomPrompt())
                        return null;
                    if (this._onPermissionDialog)
                        this._onPermissionDialog(this.defaultMessage);
                    else
                        alert(this.defaultMessage);
                    return yield this._getGeo(this._enableHighAccuracy);
                }
            }
            catch (e) {
                return null;
            }
        });
    }
    _doIShowCustomPrompt() {
        let data = sessionStorage.getItem("auth_counter");
        if (data == null)
            return false;
        let value = parseInt(data, 10);
        return !isNaN(value) && value >= this._numOfTriesBeforeGpsActivates;
    }
    _getGeo(enableHighAccuracy) {
        return __awaiter(this, void 0, void 0, function* () {
            const { coords } = yield new Promise((resolve, reject) => {
                this._navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy });
            });
            return new geo_1.Geolocation(coords.latitude, coords.longitude, coords.accuracy);
        });
    }
}
exports.HTML5GeoProvider = HTML5GeoProvider;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginOptions = void 0;
/**
 * Login options.
 *
 * @export
 * @class LoginOptions
 */
class LoginOptions {
    constructor() {
        /**
         * @param {string} [responseType='code'] OpenId response type. The default is `code` (Code Flow, involving the front-channel and backchannel).
         *
         * @type {string}
         * @memberof LoginOptions
         */
        this.responseType = 'code';
        /**
         * @param {string} display It specifies how the Authorization Server displays the authentication and consent user interface pages to the End-User.
         *   Default and the only supported value is `page`.
         *
         * @type {string}
         * @memberof LoginOptions
         */
        this.display = 'page';
        /**
         * @param {string} prompt Space delimited, case sensitive list of string values that specifies whether the Authorization Server
         *   prompts the End-User for reauthentication and consent. The defined values are: `login`, `none`.
         *   Default is `login,none`. Can't be changed for now.
         *
         * @type {string}
         * @memberof LoginOptions
         */
        this.prompt = 'login,none';
        /**
         * Theme of the login page of Cyberus Key Dashboard. Default is `default`.
         *
         * @type {string}
         * @memberof LoginOptions
         */
        this.theme = 'default';
    }
}
exports.LoginOptions = LoginOptions;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2FwaS50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvZXJyb3JzLnRzIiwid2VicGFjazovL2N5YmVydXNrZXktc2RrLy4vc3JjL3Nkay9nZW9Qcm92aWRlci9nZW8udHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL25hdmlnYXRvci9yZWRpcmVjdE5hdmlnYXRvci50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvc2NvcGVQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL3Nlc3Npb24udHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2dlb1Byb3ZpZGVyL2h0bWw1R2VvUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2xvZ2luT3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7Ozs7R0FJRztBQUNILE1BQWEsYUFBYTtJQU90Qjs7Ozs7O09BTUc7SUFDSCxZQUFZLE9BQWUsRUFBRSxXQUF5QixFQUFFLFVBQWtCLEdBQUc7UUFDekUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7Ozs7Ozs7OztPQVdHO0lBQ1UsYUFBYSxDQUFDLFFBQWdCLEVBQUUsTUFBZSxFQUFFLEdBQWlCOztZQUUzRSxNQUFNLElBQUksR0FBRyxFQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUMsQ0FBQztZQUVuQyxJQUFJLEdBQUcsRUFBRTtnQkFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7YUFDL0I7aUJBQU0sSUFBRyxJQUFJLENBQUMsWUFBWSxFQUFDO2dCQUN4QixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzdDLElBQUksR0FBRyxFQUFDO29CQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO29CQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztpQkFDL0I7YUFDSjtZQUVELElBQUksTUFBTSxFQUFFO2dCQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7YUFDM0I7WUFFRCxNQUFNLE1BQU0sR0FBRztnQkFDWCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDbkMsT0FBTyxFQUFFO29CQUNMLGNBQWMsRUFBRSxtQ0FBbUM7aUJBQ3REO2FBQ0osQ0FBQztZQUVGLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsTUFBTSxDQUFDO2lCQUN6QyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLENBQUM7S0FBQTtJQUVEOzs7OztPQUtHO0lBR1UsY0FBYzs7WUFFdkIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU3RSxJQUFJLFVBQVUsSUFBRyxJQUFJLElBQUksVUFBVSxJQUFJLG1CQUFtQixFQUFDO2dCQUN2RCxJQUFJLFVBQVUsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLFVBQVUsSUFBRyxJQUFJLElBQUksVUFBVSxLQUFLLE1BQU0sRUFBQztvQkFDM0MsY0FBYyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDekMsSUFBSSxXQUFXLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDekQsSUFBSSxXQUFXLElBQUUsSUFBSSxFQUFDO3dCQUNsQixJQUFJLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO3dCQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEVBQUM7NEJBQ3pCLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzt5QkFDN0U7cUJBQ0o7eUJBQUk7d0JBQ0QsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQy9DO2lCQUNKO2FBQ0o7aUJBQ0c7Z0JBQ0EsY0FBYyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUM3QztZQUVELElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQVM3QixNQUFNLGNBQWMsR0FBRztnQkFDbkIsT0FBTyxFQUFFO29CQUNMLFFBQVEsRUFBRSxrQkFBa0I7aUJBQy9CO2FBQ0osQ0FBQztZQUVGLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsY0FBYyxDQUFDO2lCQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2pDLElBQUksQ0FBQyxDQUFDLFdBQTRCLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7aUJBQ2hFLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNYLE9BQU8sR0FBRyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7UUFFWCxDQUFDO0tBQUE7SUFJTSxzQkFBc0I7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUM5QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxHQUFTLEVBQUU7Z0JBQ3RDLE1BQU0sR0FBRyxHQUFHLGdFQUFnRSxDQUFDO2dCQUM3RSxNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBRXZDLE1BQU0sR0FBRyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLEdBQUcsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkUsQ0FBQyxFQUFDLEVBQUUsQ0FBQztTQUNSO0lBQ0wsQ0FBQztJQUlEOzs7Ozs7O09BT0c7SUFHSSxXQUFXLENBQUMsT0FBZTtRQUM5QixNQUFNLElBQUksR0FBRyxZQUFZLENBQUM7UUFDMUIsTUFBTSxjQUFjLEdBQUc7WUFDbkIsT0FBTyxFQUFFO2dCQUNMLFFBQVEsRUFBRSxJQUFJO2dCQUNkLGNBQWMsRUFBRSxZQUFZO2FBQy9CO1NBQ0osQ0FBQztRQUVGLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxPQUFPLEVBQUUsQ0FBQyxFQUFFLGNBQWMsQ0FBQzthQUM1RCxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUMxQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQzthQUM1RCxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ1gsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUVYLENBQUM7SUFHWSxxQkFBcUIsQ0FBQyxPQUFlOztZQUM5QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksT0FBTyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sWUFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7WUFFeEMsSUFBSTtnQkFDQSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtvQkFDN0IsTUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUM7aUJBQ3JDO2dCQUVELElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7b0JBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztpQkFDdEQ7Z0JBRUQsTUFBTSxXQUFXLEdBQUcsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hDLE1BQU0sY0FBYyxHQUFHLE1BQU0sV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN2RCxNQUFNLFNBQVMsR0FBRyxNQUFNLFlBQVksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBRXJFLE1BQU0sZUFBZSxHQUFHLEdBQUcsQ0FBQztnQkFDNUIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUN0QixNQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO2dCQUN2QyxNQUFNLGFBQWEsR0FBRyxVQUFVLEdBQUcsQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLENBQUM7Z0JBRW5FLE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQ3pDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFDMUIsYUFBYSxHQUFHLFlBQVksQ0FBQyxVQUFVLEVBQ3ZDLFlBQVksQ0FBQyxVQUFVLENBQzFCLENBQUM7Z0JBRUYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDakMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUM5RixLQUFLLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxFQUFFO3dCQUNuRSxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUMvQyxNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUMvQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztxQkFDN0I7aUJBQ0o7Z0JBRUQsa0JBQWtCO2dCQUNsQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzNFLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFDaEUsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFaEQsb0JBQW9CO2dCQUNwQixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzVGLE1BQU0sU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFDcEUsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFcEQsT0FBTztvQkFDSCxNQUFNLEVBQUUsVUFBVTtvQkFDbEIsUUFBUSxFQUFFLFlBQVk7aUJBQ3pCLENBQUM7YUFFTDtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQy9DLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDeEQ7UUFDTCxDQUFDO0tBQUE7SUFJRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BcUJHO0lBQ0ksNEJBQTRCLENBQUMsU0FBaUIsRUFBRSxLQUF3QixFQUFFLFFBQWdCLEVBQUUsV0FBbUIsRUFBRSxLQUFjLEVBQUUsS0FBYyxFQUFFLFlBQVksR0FBRyxNQUFNO1FBQ3pLLE1BQU0sSUFBSSxHQUFRO1lBQ2QsVUFBVSxFQUFFLFNBQVM7WUFDckIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDdkIsWUFBWSxFQUFFLFdBQVc7WUFDekIsYUFBYSxFQUFFLFlBQVk7U0FDOUIsQ0FBQztRQUVGLElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUN6QjtRQUNELElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUN6QjtRQUVELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUVsRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztJQUNwQixDQUFDO0lBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FzQkc7SUFDSSxzQkFBc0IsQ0FBQyxRQUFnQixFQUFFLFdBQW1CLEVBQUUsS0FBd0IsRUFBRSxTQUFvQixFQUFFLE9BQWUsRUFBRSxNQUFlLEVBQUUsS0FBYyxFQUFFLEtBQWMsRUFBRSxZQUFZLEdBQUcsTUFBTTtRQUN4TSxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDN0gsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUMsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFWSwrQkFBK0IsQ0FBQyxPQUFxQjs7WUFDOUQsTUFBTSxJQUFJLEdBQVE7Z0JBQ2QsU0FBUyxFQUFFLE9BQU8sQ0FBQyxRQUFRO2dCQUMzQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQy9CLFlBQVksRUFBRSxPQUFPLENBQUMsV0FBVztnQkFDakMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxZQUFZO2dCQUNuQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7Z0JBQ3BCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztnQkFDcEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLElBQUksTUFBTTtnQkFDbEMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2dCQUN0QixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7YUFDdkIsQ0FBQztZQUVGLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDZixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUNqQztZQUVELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDZixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUNqQztZQUVELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUVsRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFO2dCQUN4QyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDaEUsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxDQUFDO0tBQUE7SUFFTyxPQUFPLENBQUMsSUFBWTtRQUN4QixPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM5QyxDQUFDO0lBRU8sa0JBQWtCLENBQUMsSUFBUztRQUNoQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFXLENBQUMsTUFBZ0IsRUFBRSxHQUFXLEVBQUUsRUFBRTtZQUN4RSxNQUFNLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQyxNQUFNLFlBQVksR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUM7WUFFN0MsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVPLFFBQVEsQ0FBQyxFQUFVO1FBQ3ZCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUMzQixPQUFPLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR08sVUFBVSxDQUFDLE1BQW1CLEVBQUUsVUFBa0I7UUFDdEQsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQzVDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUMvQyxNQUFNLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDNUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbEMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxNQUFjLEVBQUUsR0FBVyxFQUFFLEVBQUU7WUFDaEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEQ7UUFDTCxDQUFDLENBQUM7UUFFRixNQUFNLGVBQWUsR0FBRyxDQUFDLE1BQWdCLEVBQUUsTUFBYyxFQUFFLEtBQW1CLEVBQUUsRUFBRTtZQUM5RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUNoRCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDbEU7UUFDTCxDQUFDLENBQUM7UUFFRixXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsV0FBVyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QixXQUFXLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUUsYUFBYTtRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFVBQVUsR0FBRyxXQUFXLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFdBQVcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsa0JBQWtCO1FBQ2hELFdBQVcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWpDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLEtBQUssSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxXQUFXLEVBQUUsT0FBTyxFQUFFLEVBQUU7Z0JBQ3BELGVBQWUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSxNQUFNLElBQUksQ0FBQyxDQUFDO2FBQ2Y7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FHSjtBQXJaRCxzQ0FxWkM7Ozs7Ozs7Ozs7O0FDbGFELElBQUssU0FXSjtBQVhELFdBQUssU0FBUztJQUNaLG1EQUFhO0lBQ2IsMkRBQWE7SUFDYix5REFBWTtJQUNaLHFEQUFVO0lBQ1YsMkRBQWE7SUFDYixxRUFBa0I7SUFDbEIsNkVBQXNCO0lBQ3RCLHlFQUFvQjtJQUNwQiw2REFBYztJQUNkLDBFQUFvQjtBQUN0QixDQUFDLEVBWEksU0FBUyxLQUFULFNBQVMsUUFXYjtBQWtFQyw4QkFBUztBQWhFWCxNQUFNLGVBQWdCLFNBQVEsS0FBSztJQUdqQyxZQUFZLElBQTRCLEVBQUUsT0FBZTtRQUN2RCxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQWtEQywwQ0FBZTtBQWhEakIsTUFBTSxZQUFhLFNBQVEsZUFBZTtJQUN4QyxZQUFZLE9BQStCLGVBQWUsRUFBRSxVQUFrQix3QkFBd0I7UUFDcEcsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7SUFDdEIsQ0FBQztDQUNGO0FBNkNDLG9DQUFZO0FBNUNkLE1BQU0saUJBQWtCLFNBQVEsZUFBZTtJQUM3QyxZQUFZLE9BQStCLHNCQUFzQixFQUFFLFVBQWtCLDhCQUE4QjtRQUNqSCxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUF5Q0MsOENBQWlCO0FBdkNuQixNQUFNLGtCQUFtQixTQUFRLGVBQWU7SUFDOUM7UUFDRSxLQUFLLENBQUMsc0JBQXNCLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBQ0Y7QUF3Q0MsZ0RBQWtCO0FBdENwQixNQUFNLGNBQWUsU0FBUSxlQUFlO0NBQUk7QUFrQzlDLHdDQUFjO0FBakNoQixNQUFNLFlBQWEsU0FBUSxlQUFlO0NBQUk7QUFrQzVDLG9DQUFZO0FBakNkLE1BQU0scUJBQXNCLFNBQVEsZUFBZTtDQUFJO0FBa0NyRCxzREFBcUI7QUFqQ3ZCLE1BQU0sa0JBQW1CLFNBQVEsZUFBZTtDQUFJO0FBa0NsRCxnREFBa0I7QUFqQ3BCLE1BQU0sdUJBQXdCLFNBQVEsZUFBZTtDQUFJO0FBQ3pELE1BQU0sa0JBQW1CLFNBQVEsZUFBZTtDQUFJO0FBRXBELE1BQU0sT0FBTyxHQUFHO0lBQ2QsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsWUFBWTtJQUNuQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRSxZQUFZO0lBQ3ZDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLFlBQVk7SUFDdEMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsY0FBYztJQUNyQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxjQUFjO0lBQ3RDLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFLFlBQVk7SUFDdkMsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsRUFBRSxxQkFBcUI7SUFDckQsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsRUFBRSxrQkFBa0I7SUFDdEQsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsRUFBRSx1QkFBdUI7SUFDekQsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUUsa0JBQWtCO0lBQzlDLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsaUJBQWlCO0NBQ3BEO0FBRUQsU0FBUyxZQUFZLENBQUMsSUFBNEIsRUFBRSxPQUFlO0lBQ2pFLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUU1QyxPQUFPLElBQUksZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFHQyxvQ0FBWTs7Ozs7Ozs7Ozs7QUM1RWQ7Ozs7O0dBS0c7QUFDSCxNQUFhLFdBQVc7SUFLdEIsWUFBWSxRQUFnQixFQUFFLFNBQWlCLEVBQUUsUUFBaUI7UUFDaEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztDQUNGO0FBM0NELGtDQTJDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREQsOENBQTBCO0FBQzFCLDhDQUE2QjtBQUM3Qiw4Q0FBMEM7QUFDMUMsOENBQWtEO0FBQ2xELDhDQUFrQztBQUNsQyw4Q0FBOEI7QUFDOUIsOENBQXNDO0FBQ3RDLDhDQUE4QztBQUM5Qyw4Q0FBbUQ7QUFDbkQsK0NBQW1DO0FBRW5DLHFDQUEwQztBQUMxQyxrQkFBZSxtQkFBYSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1o3Qix3Q0FBK0M7QUFJL0M7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBYSxpQkFBaUI7SUFDNUI7Ozs7Ozs7T0FPRztJQUNHLFFBQVEsQ0FBQyxHQUFXOztZQUN4QixJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNSLE1BQU0sSUFBSSwyQkFBa0IsRUFBRTthQUMvQjtZQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUUzQixPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixDQUFDO0tBQUE7Q0FDRjtBQWxCRCw4Q0FrQkM7Ozs7Ozs7Ozs7O0FDL0JEOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0gsTUFBYSxpQkFBaUI7SUFHNUI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksUUFBUTtRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksVUFBVTtRQUNmLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBaERELDhDQWdEQzs7Ozs7Ozs7Ozs7QUMxREQ7Ozs7O0dBS0c7QUFDSCxNQUFhLE9BQU87SUFpQmxCLFlBQVksSUFBcUI7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDRjtBQXJCRCwwQkFxQkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNELHFDQUFrQztBQUlsQzs7Ozs7OztHQU9HO0FBQ0gsTUFBYSxnQkFBZ0I7SUFRekI7Ozs7Ozs7Ozs7T0FVRztJQUNILFlBQVksa0JBQWtCLEdBQUcsS0FBSyxFQUFFLHFCQUErQixJQUFJLEVBQUUsK0JBQXVDLENBQUMsRUFBRSxZQUF1QixNQUFNLENBQUMsU0FBUztRQWhCN0ksa0NBQTZCLEdBQVcsQ0FBQyxDQUFDO1FBRTFDLG1CQUFjLEdBQUcsdURBQXVEO1lBQ3JGLG1FQUFtRTtRQWNuRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsa0JBQWtCLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLDZCQUE2QixHQUFHLDRCQUE0QixDQUFDO1FBQ2xFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQztJQUVsRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDRyxNQUFNOztZQUVSLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDdkQsSUFBSSxFQUFFLGFBQWE7YUFDdEIsQ0FBQyxDQUFDO1lBRUgsSUFBSTtnQkFDQSxJQUFJLGdCQUFnQixDQUFDLEtBQUssSUFBSSxTQUFTO29CQUNuQyxPQUFPLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFFeEQsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLElBQUksUUFBUTtvQkFDbEMsT0FBTyxJQUFJLENBQUM7Z0JBRWhCLElBQUksZ0JBQWdCLENBQUMsS0FBSyxJQUFJLFFBQVEsRUFBRTtvQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTt3QkFDNUIsT0FBTyxJQUFJLENBQUM7b0JBRWhCLElBQUksSUFBSSxDQUFDLG1CQUFtQjt3QkFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7O3dCQUU3QyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUUvQixPQUFPLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztpQkFFdkQ7YUFDSjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNSLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7UUFFTCxDQUFDO0tBQUE7SUFFRCxvQkFBb0I7UUFDaEIsSUFBSSxJQUFJLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJO1lBQ1osT0FBTyxLQUFLLENBQUM7UUFFakIsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7UUFFOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLDZCQUE2QixDQUFDO0lBR3hFLENBQUM7SUFFSyxPQUFPLENBQUMsa0JBQTJCOztZQUNyQyxNQUFNLEVBQUMsTUFBTSxFQUFDLEdBQUcsTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFDLGtCQUFrQixFQUFDLENBQUM7WUFDekYsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLElBQUksaUJBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRS9FLENBQUM7S0FBQTtDQUNKO0FBcEZELDRDQW9GQzs7Ozs7Ozs7Ozs7QUM1RkQ7Ozs7O0dBS0c7QUFDSCxNQUFhLFlBQVk7SUFBekI7UUFpRUU7Ozs7O1dBS0c7UUFDTSxpQkFBWSxHQUFXLE1BQU0sQ0FBQztRQUV2Qzs7Ozs7O1dBTUc7UUFDTSxZQUFPLEdBQVcsTUFBTTtRQUVqQzs7Ozs7OztXQU9HO1FBQ00sV0FBTSxHQUFXLFlBQVk7UUFFdEM7Ozs7O1dBS0c7UUFDTSxVQUFLLEdBQVcsU0FBUyxDQUFDO0lBQ3JDLENBQUM7Q0FBQTtBQW5HRCxvQ0FtR0MiLCJmaWxlIjoic2RrLmVzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiY3liZXJ1c2tleS1zZGtcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3liZXJ1c2tleS1zZGtcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3liZXJ1c2tleS1zZGtcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCB7R2VvbG9jYXRpb259IGZyb20gJy4vZ2VvUHJvdmlkZXIvZ2VvJztcbmltcG9ydCB7R2VvUHJvdmlkZXJ9IGZyb20gJy4vZ2VvUHJvdmlkZXIvZ2VvUHJvdmlkZXInO1xuaW1wb3J0IHtOYXZpZ2F0b3J9IGZyb20gJy4vbmF2aWdhdG9yL25hdmlnYXRvcic7XG5pbXBvcnQge09wZW5JZFNjb3BlUGFyc2VyfSBmcm9tICcuL3Njb3BlUGFyc2VyJztcbmltcG9ydCB7U2Vzc2lvbn0gZnJvbSAnLi9zZXNzaW9uJztcbmltcG9ydCB7TG9naW5PcHRpb25zfSBmcm9tICcuL2xvZ2luT3B0aW9ucyc7XG5cblxuLyoqXG4gKiBDeWJlcnVzIEtleSBBUEkgd2hpY2ggYWxsb3dzIHlvdSB0byBkbyBhIGRlbGVnYXRlIGxvZ2luIHdpdGggT3BlbklkIHByb3RvY29sLlxuICpcbiAqIEBjbGFzcyBDeWJlcnVzS2V5QVBJXG4gKi9cbmV4cG9ydCBjbGFzcyBDeWJlcnVzS2V5QVBJIHtcbiAgICBwcml2YXRlIF9hcGlVcmw6IFVSTDtcbiAgICBwcml2YXRlIF9nZW9Qcm92aWRlcjogR2VvUHJvdmlkZXI7XG4gICAgcHJpdmF0ZSBfZGVsYXlNczogbnVtYmVyO1xuICAgIHByaXZhdGUgYmFja2dyb3VuZEF1ZGlvQnVmZmVyPzogQXVkaW9CdWZmZXI7XG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kQXVkaW9Qcm9taXNlPzogUHJvbWlzZTx2b2lkPjtcblxuICAgIC8qKlxuICAgICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDeWJlcnVzS2V5QVBJLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBob3N0VXJsIEJhc2UgVVJMIG9mIHRoZSBob3N0IHNlcnZlciwgZS5nLiBgaHR0cHM6Ly9hcGkuY3liZXJ1c2tleS5jb21gXG4gICAgICogQHBhcmFtIHtHZW9Qcm92aWRlcn0gW2dlb1Byb3ZpZGVyXSBHZW9sb2NhbGl6YXRpb24gcHJvdmlkZXIuIFVzZSBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbiBsaWtlIGBIVE1MNUdlb1Byb3ZpZGVyYC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5TXM9NjAwXSBEZWxheSAobXMpIGJldHdlZW4gbWFraW5nIGFuIEF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgYW5kIGEgc291bmQgcGxheWluZy5cbiAgICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGhvc3RVcmw6IHN0cmluZywgZ2VvUHJvdmlkZXI/OiBHZW9Qcm92aWRlciwgZGVsYXlNczogbnVtYmVyID0gNjAwKSB7XG4gICAgICAgIHRoaXMuX2FwaVVybCA9IG5ldyBVUkwoJy9hcGkvdjIvJywgaG9zdFVybCk7XG4gICAgICAgIHRoaXMuX2dlb1Byb3ZpZGVyID0gZ2VvUHJvdmlkZXI7XG4gICAgICAgIHRoaXMuX2RlbGF5TXMgPSBkZWxheU1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIEN5YmVydXMgS2V5IHNlc3Npb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50SWQgUHVibGljIGNsaWVudCBJRCBnZW5lcmF0ZWQgZHVyaW5nIGNyZWF0aW5nIHRoZSBhY2NvdW50LlxuICAgICAqIEBwYXJhbSB7R2VvbG9jYXRpb259IFtnZW9dIEdpdmUgYSB2YWx1ZSBpZiB5b3Ugd2FudCB0byBwYXNzIG9wdGlvbmFsIGdlb2xvY2F0aW9uIG1lYXN1cmVtZW50LlxuICAgICAqICAgIEl0IGNhbiBiZSBsYXRlciB1c2UgdG8gY29tcGFyZSBpdCBhZ2FpbnN0IHRoZSBtb2JpbGUncyBtZWFzdXJlbWVudCAoaWYgeW91IGhhdmUgc2V0IGBmYWlsX29uX2dlb19taXNtYXRjaGApLlxuICAgICAqICAgIFRob3NlIG1lYXN1cmVtZW50cyBjYW4gYmUgdXNlZCBhbHNvIHRvIGdlbmVyYWwgaW1wcm92ZW1lbnQgb2YgdGhlIHNlY3VyaXR5LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JpZ2luXSBUaGUgb3JpZ2luIGRvbWFpbiBvZiB0aGUgcmVxdWVzdCBiZWluZyBtYWRlLiBJZiBgbnVsbGAgdGhlbiB0aGUgUmVmZXJlciBoZWFkZXIgd2lsbCBiZSB1c2VkLlxuICAgICAqIEB0aHJvd3MgV3JvbmdKc29uRXJyb3IsIE9wZW5BcGlFcnJvciwgUmVzb3VyY2VOb3RGb3VuZEVycm9yLCBPVFBHZW5lcmF0aW9uRXJyb3IsIFVua25vd25FcnJvclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFRoZSBDeWJlcnVzIEtleSBzZXNzaW9uIGlkLlxuICAgICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZVNlc3Npb24oY2xpZW50SWQ6IHN0cmluZywgb3JpZ2luPzogc3RyaW5nLCBnZW8/OiBHZW9sb2NhdGlvbik6IFByb21pc2U8c3RyaW5nPiB7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHtjbGllbnRfaWQ6IGNsaWVudElkfTtcblxuICAgICAgICBpZiAoZ2VvKSB7XG4gICAgICAgICAgICBkYXRhWydsYXQnXSA9IGdlby5sYXRpdHVkZTtcbiAgICAgICAgICAgIGRhdGFbJ2xuZyddID0gZ2VvLmxvbmdpdHVkZTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuX2dlb1Byb3ZpZGVyKXtcbiAgICAgICAgICAgIGNvbnN0IGdwcyA9IGF3YWl0IHRoaXMuX2dlb1Byb3ZpZGVyLmdldEdlbygpO1xuICAgICAgICAgICAgaWYgKGdwcyl7XG4gICAgICAgICAgICAgICAgZGF0YVsnbGF0J10gPSBncHMubGF0aXR1ZGU7XG4gICAgICAgICAgICAgICAgZGF0YVsnbG5nJ10gPSBncHMubG9uZ2l0dWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9yaWdpbikge1xuICAgICAgICAgICAgZGF0YVsnb3JpZ2luJ10gPSBvcmlnaW47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IHRoaXMuX2dldFVybEVuY29kZWRCb2R5KGRhdGEpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLl9nZXRVcmwoJ3Nlc3Npb25zJyksIHBhcmFtcylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKGpzb24pID0+IGpzb24uZGF0YS5zZXNzaW9uX2lkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgYXV0aGVudGljYXRpb24gc2VydmVyIGlzIGF2YWlsYWJsZVxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IGZsYWcgaW5kaWNhdGluZyBpZiB0aGUgYXV0aGVudGljYXRpb24gc2VydmVyIGlzIGF2YWlsYWJsZS5cbiAgICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxuICAgICAqL1xuXG5cbiAgICBwdWJsaWMgYXN5bmMgaXNPdXRPZlNlcnZpY2UoKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgbGV0IGVyclBhZ2VNc2cgPSAobmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbi5ocmVmKSkuc2VhcmNoUGFyYW1zLmdldChcImVycm9yXCIpO1xuXG4gICAgICAgIGlmIChlcnJQYWdlTXNnICE9bnVsbCAmJiBlcnJQYWdlTXNnID09IFwib3RwX3RpbWVvdXRfZXJyb3JcIil7XG4gICAgICAgICAgICBsZXQgYXV0aEFjdGl2ZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJhdXRoX2FjdGl2ZVwiKTtcbiAgICAgICAgICAgIGlmIChhdXRoQWN0aXZlICE9bnVsbCAmJiBhdXRoQWN0aXZlID09PSBcInRydWVcIil7XG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhfYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIGxldCBhdXRoQ291bnRlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJhdXRoX2NvdW50ZXJcIik7XG4gICAgICAgICAgICAgICAgaWYgKGF1dGhDb3VudGVyIT1udWxsKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF1dGhDb3VudGVyVmFsdWUgPSBwYXJzZUludChhdXRoQ291bnRlciwgMTApXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4oYXV0aENvdW50ZXJWYWx1ZSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImF1dGhfY291bnRlclwiLCAoYXV0aENvdW50ZXJWYWx1ZSArIDEpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJhdXRoX2NvdW50ZXJcIiwgXCIxXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhfY291bnRlclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJlbG9hZEJhY2tncm91bmRBdWRpbygpXG5cbiAgICAgICAgaW50ZXJmYWNlIFZlcnNpb25SZXNwb25zZSB7XG4gICAgICAgICAgICB2ZXJzaW9uOiBzdHJpbmc7XG4gICAgICAgICAgICBtaW5Nb2JpbGVWZXJzaW9uOiBzdHJpbmc7XG4gICAgICAgICAgICBtYXhNb2JpbGVWZXJzaW9uOiBzdHJpbmc7XG4gICAgICAgICAgICBvdXRPZlNlcnZpY2U6IGJvb2xlYW47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX2dldFVybChgdmVyc2lvbmApLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKCh2ZXJzaW9uSnNvbjogVmVyc2lvblJlc3BvbnNlKSA9PiB2ZXJzaW9uSnNvbi5vdXRPZlNlcnZpY2UpXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuXG5cbiAgICBwdWJsaWMgcHJlbG9hZEJhY2tncm91bmRBdWRpbygpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmJhY2tncm91bmRBdWRpb1Byb21pc2UpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZEF1ZGlvUHJvbWlzZSA9IChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vc3RhdGljYXVkaW8uYXp1cmVlZGdlLm5ldC9zdGF0aWMvUGlhbm9fRlNLXzFhX2xvbmcud2F2JztcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IHJlcy5hcnJheUJ1ZmZlcigpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZEF1ZGlvQnVmZmVyID0gYXdhaXQgY3R4LmRlY29kZUF1ZGlvRGF0YShidWZmZXIpO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgVVJMIHdpdGggc291bmQgd2l0aCBlbWJlZGRlZCBPVFAuIFlvdSBoYXZlIHRvIGVtaXQgaXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Nlc3Npb259IHNlc3Npb24gQ3liZXJ1cyBLZXkncyBzZXNzaW9uIGdlbmVyYXRlZCBieSBhIHVzZXIgZm9yIGEgbG9naW4uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gc3RyaW5nIHdpdGggdXJsIHRvIHRoZSBzb3VuZC5cbiAgICAgKiBAdGhyb3dzIFJlc291cmNlTm90Rm91bmRFcnJvclxuICAgICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXG4gICAgICovXG5cblxuICAgIHB1YmxpYyBnZXRPVFBTb3VuZChzZXNzaW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCB0eXBlID0gJ2F1ZGlvL21wZWcnO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogdHlwZSxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX2dldFVybChgc2Vzc2lvbnMvJHtzZXNzaW9ufWApLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgICAgIC50aGVuKChhcnJheUJ1ZmZlcikgPT4gbmV3IEJsb2IoW2FycmF5QnVmZmVyXSwge3R5cGU6IHR5cGV9KSlcbiAgICAgICAgICAgIC50aGVuKChibG9iKSA9PiB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0T1RQU291bmRCYWNrZ3JvdW5kKHNlc3Npb246IHN0cmluZyk6IFByb21pc2U8eyBvdHBVcmw6IHN0cmluZzsgcGlhbm9Vcmw6IHN0cmluZyB9PiB7XG4gICAgICAgIGNvbnN0IG90cFVybCA9IHRoaXMuX2dldFVybChgc2Vzc2lvbnMvJHtzZXNzaW9ufT9vdHBfb25seT10cnVlYCk7XG4gICAgICAgIGNvbnN0IGF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYmFja2dyb3VuZEF1ZGlvUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYmFja2dyb3VuZEF1ZGlvUHJvbWlzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLmJhY2tncm91bmRBdWRpb0J1ZmZlcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQmFja2dyb3VuZCBhdWRpbyBpcyBub3QgbG9hZGVkLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBvdHBSZXNwb25zZSA9IGF3YWl0IGZldGNoKG90cFVybCk7XG4gICAgICAgICAgICBjb25zdCBvdHBBcnJheUJ1ZmZlciA9IGF3YWl0IG90cFJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG4gICAgICAgICAgICBjb25zdCBvdHBCdWZmZXIgPSBhd2FpdCBhdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKG90cEFycmF5QnVmZmVyKTtcblxuICAgICAgICAgICAgY29uc3Qgc2lsZW5jZUR1cmF0aW9uID0gMC41O1xuICAgICAgICAgICAgY29uc3QgdG90YWxQbGF5cyA9IDEwO1xuICAgICAgICAgICAgY29uc3Qgb3RwRHVyYXRpb24gPSBvdHBCdWZmZXIuZHVyYXRpb247XG4gICAgICAgICAgICBjb25zdCB0b3RhbER1cmF0aW9uID0gdG90YWxQbGF5cyAqIChvdHBEdXJhdGlvbiArIHNpbGVuY2VEdXJhdGlvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IG90cFNlcXVlbmNlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlcihcbiAgICAgICAgICAgICAgICBvdHBCdWZmZXIubnVtYmVyT2ZDaGFubmVscyxcbiAgICAgICAgICAgICAgICB0b3RhbER1cmF0aW9uICogYXVkaW9Db250ZXh0LnNhbXBsZVJhdGUsXG4gICAgICAgICAgICAgICAgYXVkaW9Db250ZXh0LnNhbXBsZVJhdGVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxQbGF5czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRTYW1wbGUgPSBNYXRoLmZsb29yKGkgKiAob3RwRHVyYXRpb24gKyBzaWxlbmNlRHVyYXRpb24pICogYXVkaW9Db250ZXh0LnNhbXBsZVJhdGUpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoYW5uZWwgPSAwOyBjaGFubmVsIDwgb3RwQnVmZmVyLm51bWJlck9mQ2hhbm5lbHM7IGNoYW5uZWwrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcm9tID0gb3RwQnVmZmVyLmdldENoYW5uZWxEYXRhKGNoYW5uZWwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0byA9IG90cFNlcXVlbmNlLmdldENoYW5uZWxEYXRhKGNoYW5uZWwpO1xuICAgICAgICAgICAgICAgICAgICB0by5zZXQoZnJvbSwgc3RhcnRTYW1wbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIE9UUCBibG9iXG4gICAgICAgICAgICBjb25zdCBvdHBXYXZCdWZmZXIgPSB0aGlzLl9lbmNvZGVXYXYob3RwU2VxdWVuY2UsIGF1ZGlvQ29udGV4dC5zYW1wbGVSYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IG90cEJsb2IgPSBuZXcgQmxvYihbb3RwV2F2QnVmZmVyXSwgeyB0eXBlOiAnYXVkaW8vd2F2JyB9KTtcbiAgICAgICAgICAgIGNvbnN0IG90cEJsb2JVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG90cEJsb2IpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgUGlhbm8gYmxvYlxuICAgICAgICAgICAgY29uc3QgcGlhbm9XYXZCdWZmZXIgPSB0aGlzLl9lbmNvZGVXYXYodGhpcy5iYWNrZ3JvdW5kQXVkaW9CdWZmZXIsIGF1ZGlvQ29udGV4dC5zYW1wbGVSYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHBpYW5vQmxvYiA9IG5ldyBCbG9iKFtwaWFub1dhdkJ1ZmZlcl0sIHsgdHlwZTogJ2F1ZGlvL3dhdicgfSk7XG4gICAgICAgICAgICBjb25zdCBwaWFub0Jsb2JVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHBpYW5vQmxvYik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3RwVXJsOiBvdHBCbG9iVXJsLFxuICAgICAgICAgICAgICAgIHBpYW5vVXJsOiBwaWFub0Jsb2JVcmxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBdWRpbyBwcm9jZXNzaW5nIGZhaWxlZDonLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IG90cFVybDogJycsIHBpYW5vVXJsOiAnJyB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIE9wZW5JRCdzIEF1dGhlbnRpY2F0aW9uIGVuZHBvaW50IFVSTCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gcHJvY2VzcyB0aGUgYXV0aGVudGljYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2Vzc2lvbklkIHVuaXF1ZSBpZCBjcmVhdGVkIGZvciB0aGUgc3BlY2lmaWMgbG9naW4gYW5kIGNvbm5lY3RlZCB0byB0aGUgc3BlY2lmaWMgb3RwXG4gICAgICogQHBhcmFtIHtPcGVuSWRTY29wZVBhcnNlcn0gc2NvcGUgRWFjaCBzY29wZSByZXR1cm5zIGEgc2V0IG9mIHVzZXIgYXR0cmlidXRlcywgd2hpY2ggYXJlIGNhbGxlZCBjbGFpbXMuXG4gICAgICogICAgT25jZSB0aGUgdXNlciBhdXRob3JpemVzIHRoZSByZXF1ZXN0ZWQgc2NvcGVzLCB0aGUgY2xhaW1zIGFyZSByZXR1cm5lZCBpbiBhbiBJRCBUb2tlbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50SWQgUHVibGljIGNsaWVudCBJRCBnZW5lcmF0ZWQgZHVyaW5nIGNyZWF0aW5nIHRoZSBhY2NvdW50LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWRpcmVjdFVyaSBSZWRpcmVjdCBVUkkgdG8gd2hpY2ggdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudC4gSWYgdGhlIHZhbHVlIGlzIG5vdCB3aGl0ZWxpc3RlZCB0aGVuIHRoZSByZXF1ZXN0IHdpbGwgZmFpbC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3N0YXRlXVxuICAgICAqICAgIFJFQ09NTUVOREVELiBPcGFxdWUgdmFsdWUgdXNlZCB0byBtYWludGFpbiBzdGF0ZSBiZXR3ZWVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgY2FsbGJhY2suIFR5cGljYWxseSwgQ1NSRiwgWFNSRiBtaXRpZ2F0aW9uIGlzIGRvbmUgYnkgY3J5cHRvZ3JhcGhpY2FsbHkgYmluZGluZyB0aGUgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgd2l0aCBhIGJyb3dzZXIgY29va2llLlxuICAgICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgcHJlc2VydmVzIHNvbWUgc3RhdGUgb2JqZWN0IHNldCBieSB0aGUgY2xpZW50IGluIHRoZSBBdXRoZW50aWNhdGlvbiByZXF1ZXN0IGFuZCBtYWtlcyBpdCBhdmFpbGFibGUgdG8gdGhlIGNsaWVudCBpbiB0aGUgcmVzcG9uc2UuXG4gICAgICogICAgSXTigJlzIHRoYXQgdW5pcXVlIGFuZCBub24tZ3Vlc3NhYmxlIHZhbHVlIHRoYXQgYWxsb3dzIHlvdSB0byBwcmV2ZW50IHRoZSBhdHRhY2sgYnkgY29uZmlybWluZyBpZiB0aGUgdmFsdWUgY29taW5nIGZyb20gdGhlIHJlc3BvbnNlIG1hdGNoZXMgdGhlIG9uZSB5b3UgZXhwZWN0ICh0aGUgb25lIHlvdSBnZW5lcmF0ZWQgd2hlbiBpbml0aWF0aW5nIHRoZSByZXF1ZXN0KS5cbiAgICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIGlzIGEgc3RyaW5nIHNvIHlvdSBjYW4gZW5jb2RlIGFueSBvdGhlciBpbmZvcm1hdGlvbiBpbiBpdC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW25vbmNlXVxuICAgICAqICAgIFN0cmluZyB2YWx1ZSB1c2VkIHRvIGFzc29jaWF0ZSBhIENsaWVudCBzZXNzaW9uIHdpdGggYW4gSUQgVG9rZW4sIGFuZCB0byBtaXRpZ2F0ZSByZXBsYXkgYXR0YWNrcy5cbiAgICAgKiAgICBUaGUgdmFsdWUgaXMgcGFzc2VkIHRocm91Z2ggdW5tb2RpZmllZCBmcm9tIHRoZSBBdXRoZW50aWNhdGlvbiBSZXF1ZXN0IHRvIHRoZSBJRCBUb2tlbi5cbiAgICAgKiAgICBTdWZmaWNpZW50IGVudHJvcHkgTVVTVCBiZSBwcmVzZW50IGluIHRoZSBub25jZSB2YWx1ZXMgdXNlZCB0byBwcmV2ZW50IGF0dGFja2VycyBmcm9tIGd1ZXNzaW5nIHZhbHVlcy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Jlc3BvbnNlVHlwZT0nY29kZSddIE9wZW5JZCByZXNwb25zZSB0eXBlLiBUaGUgZGVmYXVsdCBpcyBgY29kZWAgKENvZGUgRmxvdywgaW52b2x2aW5nIHRoZSBmcm9udC1jaGFubmVsIGFuZCBiYWNrY2hhbm5lbCkuXG4gICAgICogQHJldHVybnMgT3BlbklEJ3MgQXV0aGVudGljYXRpb24gZW5kcG9pbnQgVVJMXG4gICAgICogQHRocm93cyBJbnZhbGlkUmVkaXJlY3RVcmlFcnJvciwgSW52YWxpZENsaWVudEVycm9yLCBSZXNvdXJjZU5vdEZvdW5kRXJyb3JcbiAgICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBdXRoZW50aWNhdGlvbkVuZHBvaW50VXJsKHNlc3Npb25JZDogc3RyaW5nLCBzY29wZTogT3BlbklkU2NvcGVQYXJzZXIsIGNsaWVudElkOiBzdHJpbmcsIHJlZGlyZWN0VXJpOiBzdHJpbmcsIHN0YXRlPzogc3RyaW5nLCBub25jZT86IHN0cmluZywgcmVzcG9uc2VUeXBlID0gJ2NvZGUnKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgICAgICAgc2Vzc2lvbl9pZDogc2Vzc2lvbklkLFxuICAgICAgICAgICAgY2xpZW50X2lkOiBjbGllbnRJZCxcbiAgICAgICAgICAgIHNjb3BlOiBzY29wZS5nZXRWYWx1ZSgpLFxuICAgICAgICAgICAgcmVkaXJlY3RfdXJpOiByZWRpcmVjdFVyaSxcbiAgICAgICAgICAgIHJlc3BvbnNlX3R5cGU6IHJlc3BvbnNlVHlwZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgZGF0YVsnc3RhdGUnXSA9IHN0YXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgICAgZGF0YVsnbm9uY2UnXSA9IG5vbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh0aGlzLl9nZXRVcmwoJ2F1dGhlbnRpY2F0ZScpKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChwYXJhbWV0ZXJOYW1lKSA9PiB7XG4gICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChwYXJhbWV0ZXJOYW1lLCBkYXRhW3BhcmFtZXRlck5hbWVdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHVybC5ocmVmO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTmF2aWdhdGVzIHRvIEF1dGhlbnRpY2F0aW9uIEVuZHBvaW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50SWQgUHVibGljIGNsaWVudCBJRCBnZW5lcmF0ZWQgZHVyaW5nIGNyZWF0aW5nIHRoZSBhY2NvdW50LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWRpcmVjdFVyaSBSZWRpcmVjdCBVUkkgdG8gd2hpY2ggdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudC4gSWYgdGhlIHZhbHVlIGlzIG5vdCB3aGl0ZWxpc3RlZCB0aGVuIHRoZSByZXF1ZXN0IHdpbGwgZmFpbC5cbiAgICAgKiBAcGFyYW0ge09wZW5JZFNjb3BlUGFyc2VyfSBzY29wZSBFYWNoIHNjb3BlIHJldHVybnMgYSBzZXQgb2YgdXNlciBhdHRyaWJ1dGVzLCB3aGljaCBhcmUgY2FsbGVkIGNsYWltcy5cbiAgICAgKiAgICBPbmNlIHRoZSB1c2VyIGF1dGhvcml6ZXMgdGhlIHJlcXVlc3RlZCBzY29wZXMsIHRoZSBjbGFpbXMgYXJlIHJldHVybmVkIGluIGFuIElEIFRva2VuLlxuICAgICAqIEBwYXJhbSB7TmF2aWdhdG9yfSBuYXZpZ2F0b3IgQ2xhc3MgZGVzY3JpYmVzIGFuIGFjdGlvbiB0aGF0IHdpbGwgYmUgZG9uZSB0byBBdXRoZW50aWNhdGlvbiBVUkwuIEZvciBicm93c2VycyBpdCB3aWxsIGJlIGEgcGFnZSByZWRpcmVjdGlvbi5cbiAgICAgKiBAcGFyYW0gc2Vzc2lvbiBTZXNzaW9uIGlkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmlnaW5dIFRoZSBvcmlnaW4gZG9tYWluIG9mIHRoZSByZXF1ZXN0IGJlaW5nIG1hZGUuIElmIGBudWxsYCB0aGVuIHRoZSBSZWZlcmVyIGhlYWRlciB3aWxsIGJlIHVzZWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0ZV1cbiAgICAgKiAgICBSRUNPTU1FTkRFRC4gT3BhcXVlIHZhbHVlIHVzZWQgdG8gbWFpbnRhaW4gc3RhdGUgYmV0d2VlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIGNhbGxiYWNrLiBUeXBpY2FsbHksIENTUkYsIFhTUkYgbWl0aWdhdGlvbiBpcyBkb25lIGJ5IGNyeXB0b2dyYXBoaWNhbGx5IGJpbmRpbmcgdGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIHdpdGggYSBicm93c2VyIGNvb2tpZS5cbiAgICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIHByZXNlcnZlcyBzb21lIHN0YXRlIG9iamVjdCBzZXQgYnkgdGhlIGNsaWVudCBpbiB0aGUgQXV0aGVudGljYXRpb24gcmVxdWVzdCBhbmQgbWFrZXMgaXQgYXZhaWxhYmxlIHRvIHRoZSBjbGllbnQgaW4gdGhlIHJlc3BvbnNlLlxuICAgICAqICAgIEl04oCZcyB0aGF0IHVuaXF1ZSBhbmQgbm9uLWd1ZXNzYWJsZSB2YWx1ZSB0aGF0IGFsbG93cyB5b3UgdG8gcHJldmVudCB0aGUgYXR0YWNrIGJ5IGNvbmZpcm1pbmcgaWYgdGhlIHZhbHVlIGNvbWluZyBmcm9tIHRoZSByZXNwb25zZSBtYXRjaGVzIHRoZSBvbmUgeW91IGV4cGVjdCAodGhlIG9uZSB5b3UgZ2VuZXJhdGVkIHdoZW4gaW5pdGlhdGluZyB0aGUgcmVxdWVzdCkuXG4gICAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBpcyBhIHN0cmluZyBzbyB5b3UgY2FuIGVuY29kZSBhbnkgb3RoZXIgaW5mb3JtYXRpb24gaW4gaXQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtub25jZV1cbiAgICAgKiAgICBTdHJpbmcgdmFsdWUgdXNlZCB0byBhc3NvY2lhdGUgYSBDbGllbnQgc2Vzc2lvbiB3aXRoIGFuIElEIFRva2VuLCBhbmQgdG8gbWl0aWdhdGUgcmVwbGF5IGF0dGFja3MuXG4gICAgICogICAgVGhlIHZhbHVlIGlzIHBhc3NlZCB0aHJvdWdoIHVubW9kaWZpZWQgZnJvbSB0aGUgQXV0aGVudGljYXRpb24gUmVxdWVzdCB0byB0aGUgSUQgVG9rZW4uXG4gICAgICogICAgU3VmZmljaWVudCBlbnRyb3B5IE1VU1QgYmUgcHJlc2VudCBpbiB0aGUgbm9uY2UgdmFsdWVzIHVzZWQgdG8gcHJldmVudCBhdHRhY2tlcnMgZnJvbSBndWVzc2luZyB2YWx1ZXMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtyZXNwb25zZVR5cGU9J2NvZGUnXSBPcGVuSWQgcmVzcG9uc2UgdHlwZS4gVGhlIGRlZmF1bHQgaXMgYGNvZGVgIChDb2RlIEZsb3csIGludm9sdmluZyB0aGUgZnJvbnQtY2hhbm5lbCBhbmQgYmFja2NoYW5uZWwpLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXG4gICAgICovXG4gICAgcHVibGljIG5hdmlnYXRlQXV0aGVudGljYXRpb24oY2xpZW50SWQ6IHN0cmluZywgcmVkaXJlY3RVcmk6IHN0cmluZywgc2NvcGU6IE9wZW5JZFNjb3BlUGFyc2VyLCBuYXZpZ2F0b3I6IE5hdmlnYXRvciwgc2Vzc2lvbjogc3RyaW5nLCBvcmlnaW4/OiBzdHJpbmcsIHN0YXRlPzogc3RyaW5nLCBub25jZT86IHN0cmluZywgcmVzcG9uc2VUeXBlID0gJ2NvZGUnKSB7XG4gICAgICAgIGNvbnN0IGF1dGhlbnRpY2F0ZVVybCA9IHRoaXMuZ2V0QXV0aGVudGljYXRpb25FbmRwb2ludFVybChzZXNzaW9uLCBzY29wZSwgY2xpZW50SWQsIHJlZGlyZWN0VXJpLCBzdGF0ZSwgbm9uY2UsIHJlc3BvbnNlVHlwZSk7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJhdXRoX2FjdGl2ZVwiLCBcInRydWVcIik7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubmF2aWdhdGUoYXV0aGVudGljYXRlVXJsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgbG9naW5UaHJvdWdoQ3liZXJ1c0tleURhc2hib2FyZChvcHRpb25zOiBMb2dpbk9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgICAgICAgY2xpZW50X2lkOiBvcHRpb25zLmNsaWVudElkLFxuICAgICAgICAgICAgc2NvcGU6IG9wdGlvbnMuc2NvcGUuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogb3B0aW9ucy5yZWRpcmVjdFVyaSxcbiAgICAgICAgICAgIHJlc3BvbnNlX3R5cGU6IG9wdGlvbnMucmVzcG9uc2VUeXBlLFxuICAgICAgICAgICAgc3RhdGU6IG9wdGlvbnMuc3RhdGUsXG4gICAgICAgICAgICBub25jZTogb3B0aW9ucy5ub25jZSxcbiAgICAgICAgICAgIGRpc3BsYXk6IG9wdGlvbnMuZGlzcGxheSB8fCAncGFnZScsXG4gICAgICAgICAgICBwcm9tcHQ6IG9wdGlvbnMucHJvbXB0LFxuICAgICAgICAgICAgdGhlbWU6IG9wdGlvbnMudGhlbWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhdGUpIHtcbiAgICAgICAgICAgIGRhdGFbJ3N0YXRlJ10gPSBvcHRpb25zLnN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubm9uY2UpIHtcbiAgICAgICAgICAgIGRhdGFbJ25vbmNlJ10gPSBvcHRpb25zLm5vbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh0aGlzLl9nZXRVcmwoJ2F1dGhlbnRpY2F0ZScpKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChwYXJhbWV0ZXJOYW1lKSA9PiB7XG4gICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChwYXJhbWV0ZXJOYW1lLCBkYXRhW3BhcmFtZXRlck5hbWVdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgb3B0aW9ucy5uYXZpZ2F0b3IubmF2aWdhdGUodXJsLmhyZWYpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFVybChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKG5ldyBVUkwocGF0aCwgdGhpcy5fYXBpVXJsKSkuaHJlZjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRVcmxFbmNvZGVkQm9keShkYXRhOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkucmVkdWNlPHN0cmluZ1tdPigocmVzdWx0OiBzdHJpbmdbXSwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVuY29kZWRLZXkgPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgICAgICAgICAgIGNvbnN0IGVuY29kZWRWYWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pO1xuXG4gICAgICAgICAgICByZXN1bHQucHVzaChgJHtlbmNvZGVkS2V5fT0ke2VuY29kZWRWYWx1ZX1gKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSwgW10pLmpvaW4oXCImXCIpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdGltZW91dChtczogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBfZW5jb2RlV2F2KGJ1ZmZlcjogQXVkaW9CdWZmZXIsIHNhbXBsZVJhdGU6IG51bWJlcik6IEFycmF5QnVmZmVyIHtcbiAgICAgICAgY29uc3QgbnVtQ2hhbm5lbHMgPSBidWZmZXIubnVtYmVyT2ZDaGFubmVscztcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCAqIG51bUNoYW5uZWxzICogMjtcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gbmV3IEFycmF5QnVmZmVyKDQ0ICsgbGVuZ3RoKTtcbiAgICAgICAgY29uc3QgdmlldyA9IG5ldyBEYXRhVmlldyhvdXRwdXQpO1xuXG4gICAgICAgIGNvbnN0IHdyaXRlU3RyaW5nID0gKG9mZnNldDogbnVtYmVyLCBzdHI6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCArIGksIHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBmbG9hdFRvMTZCaXRQQ00gPSAob3V0cHV0OiBEYXRhVmlldywgb2Zmc2V0OiBudW1iZXIsIGlucHV0OiBGbG9hdDMyQXJyYXkpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyssIG9mZnNldCArPSAyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBpbnB1dFtpXSkpO1xuICAgICAgICAgICAgICAgIG91dHB1dC5zZXRJbnQxNihvZmZzZXQsIHMgPCAwID8gcyAqIDB4ODAwMCA6IHMgKiAweDdGRkYsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHdyaXRlU3RyaW5nKDAsICdSSUZGJyk7XG4gICAgICAgIHZpZXcuc2V0VWludDMyKDQsIDM2ICsgbGVuZ3RoLCB0cnVlKTtcbiAgICAgICAgd3JpdGVTdHJpbmcoOCwgJ1dBVkUnKTtcbiAgICAgICAgd3JpdGVTdHJpbmcoMTIsICdmbXQgJyk7XG4gICAgICAgIHZpZXcuc2V0VWludDMyKDE2LCAxNiwgdHJ1ZSk7IC8vIFBDTVxuICAgICAgICB2aWV3LnNldFVpbnQxNigyMCwgMSwgdHJ1ZSk7ICAvLyBQQ00gZm9ybWF0XG4gICAgICAgIHZpZXcuc2V0VWludDE2KDIyLCBudW1DaGFubmVscywgdHJ1ZSk7XG4gICAgICAgIHZpZXcuc2V0VWludDMyKDI0LCBzYW1wbGVSYXRlLCB0cnVlKTtcbiAgICAgICAgdmlldy5zZXRVaW50MzIoMjgsIHNhbXBsZVJhdGUgKiBudW1DaGFubmVscyAqIDIsIHRydWUpO1xuICAgICAgICB2aWV3LnNldFVpbnQxNigzMiwgbnVtQ2hhbm5lbHMgKiAyLCB0cnVlKTtcbiAgICAgICAgdmlldy5zZXRVaW50MTYoMzQsIDE2LCB0cnVlKTsgLy8gYml0cyBwZXIgc2FtcGxlXG4gICAgICAgIHdyaXRlU3RyaW5nKDM2LCAnZGF0YScpO1xuICAgICAgICB2aWV3LnNldFVpbnQzMig0MCwgbGVuZ3RoLCB0cnVlKTtcblxuICAgICAgICBsZXQgb2Zmc2V0ID0gNDQ7XG4gICAgICAgIGNvbnN0IGNoYW5uZWxzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ2hhbm5lbHM7IGkrKykge1xuICAgICAgICAgICAgY2hhbm5lbHMucHVzaChidWZmZXIuZ2V0Q2hhbm5lbERhdGEoaSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWZmZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNoYW5uZWwgPSAwOyBjaGFubmVsIDwgbnVtQ2hhbm5lbHM7IGNoYW5uZWwrKykge1xuICAgICAgICAgICAgICAgIGZsb2F0VG8xNkJpdFBDTSh2aWV3LCBvZmZzZXQsIG5ldyBGbG9hdDMyQXJyYXkoW2NoYW5uZWxzW2NoYW5uZWxdW2ldXSkpO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG5cblxufVxuIiwiZW51bSBFcnJvckNvZGUge1xuICB1bmRlZmluZWQgPSAxLFxuICB1bmtub3duX2Vycm9yLFxuICBzZXJ2ZXJfZXJyb3IsXG4gIHdyb25nX2pzb24sXG4gIG9wZW5hcGlfZXJyb3IsXG4gIHJlc291cmNlX25vdF9mb3VuZCxcbiAgb3RwX2dlbmVyYXRpb25fZmFpbHVyZSxcbiAgaW52YWxpZF9yZWRpcmVjdF91cmksXG4gIGludmFsaWRfY2xpZW50LFxuICB0b29fbWFueV9jYWxsc19lcnJvclxufVxuXG5jbGFzcyBDeWJlcnVzS2V5RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHByaXZhdGUgX2NvZGU6IEVycm9yQ29kZTtcblxuICBjb25zdHJ1Y3Rvcihjb2RlOiBrZXlvZiB0eXBlb2YgRXJyb3JDb2RlLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlKVxuICAgIHRoaXMuX2NvZGUgPSBFcnJvckNvZGVbY29kZV07XG4gIH1cblxuICBnZXQgY29kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBFcnJvckNvZGVbdGhpcy5fY29kZV07XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICB9XG59XG5cbmNsYXNzIFVua25vd25FcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGNvZGU6IGtleW9mIHR5cGVvZiBFcnJvckNvZGUgPSAndW5rbm93bl9lcnJvcicsIG1lc3NhZ2U6IHN0cmluZyA9ICdVbmtub3duIGVycm9yIG9jY3VyZWQuJykge1xuICAgIHN1cGVyKGNvZGUsIG1lc3NhZ2UpXG4gIH1cbn1cbmNsYXNzIFRvb01hbnlDYWxsc0Vycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHtcbiAgY29uc3RydWN0b3IoY29kZToga2V5b2YgdHlwZW9mIEVycm9yQ29kZSA9ICd0b29fbWFueV9jYWxsc19lcnJvcicsIG1lc3NhZ2U6IHN0cmluZyA9ICdZb3VcXCd2ZSBkb25lIHRvbyBtYW55IGNhbGxzLicpIHtcbiAgICBzdXBlcihjb2RlLCBtZXNzYWdlKVxuICB9XG59XG5cbmNsYXNzIE1pc3NpbmdSZWRpcmVjdFVyaSBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdpbnZhbGlkX3JlZGlyZWN0X3VyaScsICdNaXNzaW5nIHJlZGlyZWN0aW9uIFVSSS4nKTtcbiAgfVxufVxuXG5jbGFzcyBXcm9uZ0pzb25FcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cbmNsYXNzIE9wZW5BcGlFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cbmNsYXNzIFJlc291cmNlTm90Rm91bmRFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cbmNsYXNzIE9UUEdlbmVyYXRpb25FcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cbmNsYXNzIEludmFsaWRSZWRpcmVjdFVyaUVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxuY2xhc3MgSW52YWxpZENsaWVudEVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxuXG5jb25zdCBNQVBQSU5HID0ge1xuICBbRXJyb3JDb2RlLnVuZGVmaW5lZF06IFVua25vd25FcnJvcixcbiAgW0Vycm9yQ29kZS51bmtub3duX2Vycm9yXTogVW5rbm93bkVycm9yLFxuICBbRXJyb3JDb2RlLnNlcnZlcl9lcnJvcl06IFVua25vd25FcnJvcixcbiAgW0Vycm9yQ29kZS51bmRlZmluZWRdOiBXcm9uZ0pzb25FcnJvcixcbiAgW0Vycm9yQ29kZS53cm9uZ19qc29uXTogV3JvbmdKc29uRXJyb3IsXG4gIFtFcnJvckNvZGUub3BlbmFwaV9lcnJvcl06IE9wZW5BcGlFcnJvcixcbiAgW0Vycm9yQ29kZS5yZXNvdXJjZV9ub3RfZm91bmRdOiBSZXNvdXJjZU5vdEZvdW5kRXJyb3IsXG4gIFtFcnJvckNvZGUub3RwX2dlbmVyYXRpb25fZmFpbHVyZV06IE9UUEdlbmVyYXRpb25FcnJvcixcbiAgW0Vycm9yQ29kZS5pbnZhbGlkX3JlZGlyZWN0X3VyaV06IEludmFsaWRSZWRpcmVjdFVyaUVycm9yLFxuICBbRXJyb3JDb2RlLmludmFsaWRfY2xpZW50XTogSW52YWxpZENsaWVudEVycm9yLFxuICBbRXJyb3JDb2RlLnRvb19tYW55X2NhbGxzX2Vycm9yXTogVG9vTWFueUNhbGxzRXJyb3Jcbn1cblxuZnVuY3Rpb24gZXJyb3JGYWN0b3J5KGNvZGU6IGtleW9mIHR5cGVvZiBFcnJvckNvZGUsIG1lc3NhZ2U6IHN0cmluZykge1xuICBjb25zdCBlbnVtX3R5cGUgPSBFcnJvckNvZGVbY29kZV07XG4gIGNvbnN0IEVycm9yQ29uc3RydWN0b3IgPSBNQVBQSU5HW2VudW1fdHlwZV07XG5cbiAgcmV0dXJuIG5ldyBFcnJvckNvbnN0cnVjdG9yKGNvZGUsIG1lc3NhZ2UpO1xufVxuXG5leHBvcnQge1xuICBlcnJvckZhY3RvcnksXG4gIEVycm9yQ29kZSxcbiAgQ3liZXJ1c0tleUVycm9yLFxuICBVbmtub3duRXJyb3IsXG4gIFRvb01hbnlDYWxsc0Vycm9yLFxuICBXcm9uZ0pzb25FcnJvcixcbiAgT3BlbkFwaUVycm9yLFxuICBSZXNvdXJjZU5vdEZvdW5kRXJyb3IsXG4gIE9UUEdlbmVyYXRpb25FcnJvcixcbiAgTWlzc2luZ1JlZGlyZWN0VXJpXG59O1xuXG4iLCIvKipcbiAqIEFuIGFic3RyYWN0aW9uIGZvciBhIHRha2VuIGdlb2xvY2F0aW9uIG1lYXN1cmVtZW50LlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBHZW9sb2NhdGlvblxuICovXG5leHBvcnQgY2xhc3MgR2VvbG9jYXRpb24ge1xuICBwcml2YXRlIF9sYXRpdHVkZTogbnVtYmVyO1xuICBwcml2YXRlIF9sb25naXR1ZGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYWNjdXJhY3k6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihsYXRpdHVkZTogbnVtYmVyLCBsb25naXR1ZGU6IG51bWJlciwgYWNjdXJhY3k/OiBudW1iZXIpIHtcbiAgICB0aGlzLl9sYXRpdHVkZSA9IGxhdGl0dWRlO1xuICAgIHRoaXMuX2xvbmdpdHVkZSA9IGxvbmdpdHVkZTtcbiAgICB0aGlzLl9hY2N1cmFjeSA9IGFjY3VyYWN5O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGxhdGl0dWRlLlxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEdlb2xvY2F0aW9uXG4gICAqL1xuICBnZXQgbGF0aXR1ZGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGF0aXR1ZGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIGxvbmdpdHVkZS5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBHZW9sb2NhdGlvblxuICAgKi9cbiAgZ2V0IGxvbmdpdHVkZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sb25naXR1ZGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhbiBhY2N1cmFjeSBvZiBhIG1lYXN1cmVtZW50LlxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEdlb2xvY2F0aW9uXG4gICAqL1xuICBnZXQgYWNjdXJhY3koKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjdXJhY3k7XG4gIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL3Nkay9hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvZXJyb3JzJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL25hdmlnYXRvci9uYXZpZ2F0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvbmF2aWdhdG9yL3JlZGlyZWN0TmF2aWdhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL3Njb3BlUGFyc2VyJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL3Nlc3Npb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvZ2VvUHJvdmlkZXIvZ2VvJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2dlb1Byb3ZpZGVyL2dlb1Byb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2dlb1Byb3ZpZGVyL2h0bWw1R2VvUHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvbG9naW5PcHRpb25zJztcblxuaW1wb3J0IHsgQ3liZXJ1c0tleUFQSSB9IGZyb20gJy4vc2RrL2FwaSc7XG5leHBvcnQgZGVmYXVsdCBDeWJlcnVzS2V5QVBJOyIsImltcG9ydCB7IE1pc3NpbmdSZWRpcmVjdFVyaSB9IGZyb20gJy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBOYXZpZ2F0b3IgfSBmcm9tICcuL25hdmlnYXRvcic7XG5cblxuLyoqXG4gKiBDbGFzcyBkZXNjcmliZXMgaG93IE9wZW5JRCdzIEF1dGhlbnRpY2F0aW9uIEVuZHBvaW50IHdpbGwgYmUgaGFuZGxlZC5cbiAqIFRoaXMgY2xhc3MgaXMgdGhpZ2h0ZW4gdG8gYSBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3VyIGZvciBPcGVuSUQgcHJvdG9jb2wgLSBhIHJlZGlyZWN0aW9uLlxuICogV2hpY2ggbWVhbnMgdGhhdCB5b3VyIFVSTCB3aWxsIGJlIHRlbXBvcmFyaWx5IHJlcGxhY2VkIGJ5IHRoZSBBdXRoZW50aWNhdGlvbiBFbmRwb2ludFxuICogYW5kIHJlcGxhY2VkIGFnYWluIGJ5IGl0cyByZXNwb25zZSAtIEhUVFAgMzAyLiBUaGUgbmV3IGxvY2F0aW9uIHdpbGwgYmUgdGhlIG9uZSB5b3UgZGVmaW5lZCBhcyB5b3VyIGByZWRpcmVjdF91cmlgLlxuICogXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgUmVkaXJlY3ROYXZpZ2F0b3JcbiAqIEBpbXBsZW1lbnRzIHtOYXZpZ2F0b3J9XG4gKi9cbmV4cG9ydCBjbGFzcyBSZWRpcmVjdE5hdmlnYXRvciBpbXBsZW1lbnRzIE5hdmlnYXRvciB7XG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBBdXRoZW50aWNhdGlvbiBFbmRwb2ludCBVUkwuXG4gICAqIEB0aHJvd3MgTWlzc2luZ1JlZGlyZWN0VXJpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKiBAbWVtYmVyb2YgUmVkaXJlY3ROYXZpZ2F0b3JcbiAgICovXG4gIGFzeW5jIG5hdmlnYXRlKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHRocm93IG5ldyBNaXNzaW5nUmVkaXJlY3RVcmkoKVxuICAgIH1cblxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG59IiwiXG4vKipcbiAqIEhhbmR5IGNsYXNzIHRvIGRlZmluZSBhbiBPcGVuSUQncyBzY29wZS5cbiAqIFNjb3BlcyBhcmUgdXNlZCBieSBhbiBhcHBsaWNhdGlvbiBkdXJpbmcgYXV0aGVudGljYXRpb24gdG8gYXV0aG9yaXplIGFjY2VzcyB0byBhIHVzZXIncyBkZXRhaWxzLFxuICogbGlrZSBuYW1lIGFuZCBwaWN0dXJlLiBFYWNoIHNjb3BlIHJldHVybnMgYSBzZXQgb2YgdXNlciBhdHRyaWJ1dGVzLCB3aGljaCBhcmUgY2FsbGVkIGNsYWltcy4gXG4gKiBcbiAqIFlvdSBjYW4gdXNlIGFkZGl0aW9uYWwgdmFsdWVzIGBlbWFpbGAgKGFkZCBhIHVzZXIncyBlbWFpbCBjbGFpbSkgYW5kIGBwcm9maWxlYCAoYWRkIHVzZXIgZmlyc3QgYW5kIGxhc3QgbmFtZSkuXG4gKiBcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IHNjb3BlUGFyc2VyID0gbmV3IE9wZW5JZFNjb3BlUGFyc2VyKCk7XG4gKiBjb25zdCBzY29wZSA9IHNjb3BlUGFyc2VyLmFkZEVtYWlsKCkuYWRkUHJvZmlsZSgpLmdldFZhbHVlKCk7XG4gKiBgYGBcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgT3BlbklkU2NvcGVQYXJzZXJcbiAqL1xuZXhwb3J0IGNsYXNzIE9wZW5JZFNjb3BlUGFyc2VyIHtcbiAgcHJpdmF0ZSBfc2NvcGU6IEFycmF5PHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fc2NvcGUgPSBbJ29wZW5pZCddO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYGVtYWlsYCBzY29wZS5cbiAgICpcbiAgICogQHJldHVybnMge3RoaXN9XG4gICAqIEBtZW1iZXJvZiBPcGVuSWRTY29wZVBhcnNlclxuICAgKi9cbiAgcHVibGljIGFkZEVtYWlsKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9zY29wZS5pbmNsdWRlcygnZW1haWwnKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fc2NvcGUucHVzaCgnZW1haWwnKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYHByb2ZpbGVgIHNjb3BlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICogQG1lbWJlcm9mIE9wZW5JZFNjb3BlUGFyc2VyXG4gICAqL1xuICBwdWJsaWMgYWRkUHJvZmlsZSgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5fc2NvcGUuaW5jbHVkZXMoJ3Byb2ZpbGUnKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fc2NvcGUucHVzaCgncHJvZmlsZScpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBmb3JtYXR0ZWQgc2NvcGUgdmFsdWUsIGUuZy4gYG9wZW5pZCBlbWFpbGAuXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBPcGVuSWRTY29wZVBhcnNlclxuICAgKi9cbiAgcHVibGljIGdldFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Njb3BlLmpvaW4oJyAnKTtcbiAgfVxufSIsImV4cG9ydCBpbnRlcmZhY2UgU2Vzc2lvblJlc3BvbnNlIHtcbiAgc2Vzc2lvbl9pZDogc3RyaW5nO1xuICBjcmVhdGVkX2F0OiBzdHJpbmc7XG59XG5cblxuLyoqXG4gKiBEYXRhIGNsYXNzIHJlcHJlc2VudGluZyBhIEN5YmVydXMgS2V5IHNlc3Npb24uXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIFNlc3Npb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb24ge1xuICAvKipcbiAgICogU2Vzc2lvbidzIHVuaXF1ZSBpZGVudGlmaWVyLiBJdCdzIHZhbGlkIHVwIHRvIDIwcy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIFNlc3Npb25cbiAgICovXG4gIHB1YmxpYyBzZXNzaW9uSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogQSBVVEMgZGF0ZSByZXByZXNlbnRpbmcgYSBkYXRlIChhbmQgdGltZSkgd2hlbiBhIHNlc3Npb24gaGFzIGJlZW4gY3JlYXRlZC5cbiAgICpcbiAgICogQHR5cGUge0RhdGV9XG4gICAqIEBtZW1iZXJvZiBTZXNzaW9uXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlZEF0OiBEYXRlO1xuXG4gIGNvbnN0cnVjdG9yKGpzb246IFNlc3Npb25SZXNwb25zZSkge1xuICAgIHRoaXMuc2Vzc2lvbklkID0ganNvbi5zZXNzaW9uX2lkO1xuICAgIHRoaXMuY3JlYXRlZEF0ID0gbmV3IERhdGUoanNvbi5jcmVhdGVkX2F0KTtcbiAgfVxufSIsImltcG9ydCB7R2VvbG9jYXRpb259IGZyb20gJy4vZ2VvJztcbmltcG9ydCB7R2VvUHJvdmlkZXJ9IGZyb20gJy4vZ2VvUHJvdmlkZXInO1xuXG5cbi8qKlxuICogQ2xhc3MgcHJvdmlkZXMgYSBnZW9sb2NhbGl6YXRpb24gbWVhc3VyZW1lbnQuXG4gKiBJdCB1c2VzIGEgSFRNTDUncyBgR2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKClgIG1ldGhvZC5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgSFRNTDVHZW9Qcm92aWRlclxuICogQGltcGxlbWVudHMge0dlb1Byb3ZpZGVyfVxuICovXG5leHBvcnQgY2xhc3MgSFRNTDVHZW9Qcm92aWRlciBpbXBsZW1lbnRzIEdlb1Byb3ZpZGVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9lbmFibGVIaWdoQWNjdXJhY3k6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfbmF2aWdhdG9yOiBOYXZpZ2F0b3I7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfbnVtT2ZUcmllc0JlZm9yZUdwc0FjdGl2YXRlczogbnVtYmVyID0gMjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9vblBlcm1pc3Npb25EaWFsb2c/OiBGdW5jdGlvbjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRlZmF1bHRNZXNzYWdlID0gXCJDeWJlcnVzIEtleSB3aWRnZXQgd291bGQgbGlrZSB0byBhY2Nlc3MgeW91ciBsb2NhdGlvblwiICtcbiAgICAgICAgXCIgdG8gdXNlIGdlb2xvY2F0aW9uIHRyYWNraW5nIHRvIGFzc2VydCBzdWNjZXNzZnVsIGF1dGhlbnRpY2F0aW9uLlwiXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEhUTUw1R2VvUHJvdmlkZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtlbmFibGVIaWdoQWNjdXJhY3k9ZmFsc2VdICBGb3JjZXMgaGlnaCBhY2N1cmFjeSBvZiB0aGUgZ2VvbG9jYXRpb24uIEl0IG1heSB0YWtlIGxvbmdlci5cbiAgICAgKiBAcGFyYW0ge05hdmlnYXRvcn0gW25hdmlnYXRvcj13aW5kb3cubmF2aWdhdG9yXVxuICAgICAqIEBwYXJhbSBudW1PZlRyaWVzQmVmb3JlR3BzQWN0aXZhdGVzIFRoZSBHUFMgbG9jYWxpemF0aW9uIHdpbGwgYmUgdXNlZCBvbmx5IGFmdGVyIG4gdW5zdWNjZXNzZnVsIHRyaWVzLlxuICAgICAqIEJ5IHVuc3VjY2Vzc2Z1bCB0cnkgd2UgZGVmaW5lIHRoZSBudW1iZXIgb2YgdGltZXMgdGhlIGF1dGhlbnRpY2F0aW9uIHJlc3VsdGVkIGluIHNlc3Npb24gbm90IGZvdW5kIGVycm9yLlxuICAgICAqIEBwYXJhbSBvblBlcm1pc3Npb25EaWFsb2cgTGVhdmUgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gZGlhbG9nIHRvIGFwcGVhciBiZWZvcmUgc2l0ZVxuICAgICAqIGFza3MgZm9yIGxvY2FsaXphdGlvbiBwZXJtaXNzaW9uIGZvciB0aGUgY2FsbGVyIHRvIGhhbmRsZS4gSXQgdGFrZXMgYSBmdW5jdGlvbiB3aXRoIGRlZmF1bHQgbWVzc2FnZSBhcyBwYXJhbWV0ZXJcbiAgICAgKiBAbWVtYmVyb2YgSFRNTDVHZW9Qcm92aWRlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVuYWJsZUhpZ2hBY2N1cmFjeSA9IGZhbHNlLCBvblBlcm1pc3Npb25EaWFsb2c6IEZ1bmN0aW9uID0gbnVsbCwgbnVtT2ZUcmllc0JlZm9yZUdwc0FjdGl2YXRlczogbnVtYmVyID0gMiwgbmF2aWdhdG9yOiBOYXZpZ2F0b3IgPSB3aW5kb3cubmF2aWdhdG9yKSB7XG4gICAgICAgIHRoaXMuX2VuYWJsZUhpZ2hBY2N1cmFjeSA9IGVuYWJsZUhpZ2hBY2N1cmFjeTtcbiAgICAgICAgdGhpcy5fbmF2aWdhdG9yID0gbmF2aWdhdG9yO1xuICAgICAgICB0aGlzLl9udW1PZlRyaWVzQmVmb3JlR3BzQWN0aXZhdGVzID0gbnVtT2ZUcmllc0JlZm9yZUdwc0FjdGl2YXRlcztcbiAgICAgICAgdGhpcy5fb25QZXJtaXNzaW9uRGlhbG9nID0gb25QZXJtaXNzaW9uRGlhbG9nO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIGdlb2xvY2FsaXphdGlvbiBtZWFzdXJlbWVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEdlb2xvY2F0aW9uPn0gR2VvbG9jYWxpemF0aW9uIG1lYXN1cmVtZW50LlxuICAgICAqIEBtZW1iZXJvZiBIVE1MNUdlb1Byb3ZpZGVyXG4gICAgICovXG4gICAgYXN5bmMgZ2V0R2VvKCk6IFByb21pc2U8R2VvbG9jYXRpb24+IHtcblxuICAgICAgICBjb25zdCBwZXJtaXNzaW9uU3RhdHVzID0gYXdhaXQgbmF2aWdhdG9yLnBlcm1pc3Npb25zLnF1ZXJ5KHtcbiAgICAgICAgICAgIG5hbWU6ICdnZW9sb2NhdGlvbidcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChwZXJtaXNzaW9uU3RhdHVzLnN0YXRlID09IFwiZ3JhbnRlZFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9nZXRHZW8odGhpcy5fZW5hYmxlSGlnaEFjY3VyYWN5KTtcblxuICAgICAgICAgICAgaWYgKHBlcm1pc3Npb25TdGF0dXMuc3RhdGUgPT0gXCJkZW5pZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgaWYgKHBlcm1pc3Npb25TdGF0dXMuc3RhdGUgPT0gXCJwcm9tcHRcIikge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZG9JU2hvd0N1c3RvbVByb21wdCgpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vblBlcm1pc3Npb25EaWFsb2cpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uUGVybWlzc2lvbkRpYWxvZyh0aGlzLmRlZmF1bHRNZXNzYWdlKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQodGhpcy5kZWZhdWx0TWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fZ2V0R2VvKHRoaXMuX2VuYWJsZUhpZ2hBY2N1cmFjeSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIF9kb0lTaG93Q3VzdG9tUHJvbXB0KCkge1xuICAgICAgICBsZXQgZGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJhdXRoX2NvdW50ZXJcIik7XG4gICAgICAgIGlmIChkYXRhID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoZGF0YSwgMTApXG5cbiAgICAgICAgcmV0dXJuICFpc05hTih2YWx1ZSkgJiYgdmFsdWUgPj0gdGhpcy5fbnVtT2ZUcmllc0JlZm9yZUdwc0FjdGl2YXRlcztcblxuXG4gICAgfVxuXG4gICAgYXN5bmMgX2dldEdlbyhlbmFibGVIaWdoQWNjdXJhY3k6IGJvb2xlYW4pOiBQcm9taXNlPEdlb2xvY2F0aW9uPiB7XG4gICAgICAgIGNvbnN0IHtjb29yZHN9ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihyZXNvbHZlLCByZWplY3QsIHtlbmFibGVIaWdoQWNjdXJhY3l9KVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3IEdlb2xvY2F0aW9uKGNvb3Jkcy5sYXRpdHVkZSwgY29vcmRzLmxvbmdpdHVkZSwgY29vcmRzLmFjY3VyYWN5KTtcblxuICAgIH1cbn1cbiIsImltcG9ydCB7IE5hdmlnYXRvciB9IGZyb20gJy4vbmF2aWdhdG9yL25hdmlnYXRvcic7XG5pbXBvcnQgeyBPcGVuSWRTY29wZVBhcnNlciB9IGZyb20gJy4vc2NvcGVQYXJzZXInO1xuXG5cbi8qKlxuICogTG9naW4gb3B0aW9ucy5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgTG9naW5PcHRpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2dpbk9wdGlvbnMge1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIFB1YmxpYyBjbGllbnQgSUQgZ2VuZXJhdGVkIGR1cmluZyBjcmVhdGluZyB0aGUgYWNjb3VudC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgY2xpZW50SWQ6IHN0cmluZztcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlZGlyZWN0VXJpIFJlZGlyZWN0IFVSSSB0byB3aGljaCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSBzZW50LiBJZiB0aGUgdmFsdWUgaXMgbm90IHdoaXRlbGlzdGVkIHRoZW4gdGhlIHJlcXVlc3Qgd2lsbCBmYWlsLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSByZWRpcmVjdFVyaTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09wZW5JZFNjb3BlUGFyc2VyfSBzY29wZSBFYWNoIHNjb3BlIHJldHVybnMgYSBzZXQgb2YgdXNlciBhdHRyaWJ1dGVzLCB3aGljaCBhcmUgY2FsbGVkIGNsYWltcy5cbiAgICogICAgT25jZSB0aGUgdXNlciBhdXRob3JpemVzIHRoZSByZXF1ZXN0ZWQgc2NvcGVzLCB0aGUgY2xhaW1zIGFyZSByZXR1cm5lZCBpbiBhbiBJRCBUb2tlbi5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgc2NvcGU6IE9wZW5JZFNjb3BlUGFyc2VyO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB7TmF2aWdhdG9yfSBuYXZpZ2F0b3IgQ2xhc3MgZGVzY3JpYmVzIGFuIGFjdGlvbiB0aGF0IHdpbGwgYmUgZG9uZSB0byBBdXRoZW50aWNhdGlvbiBVUkwuIEZvciBicm93c2VycyBpdCB3aWxsIGJlIGEgcGFnZSByZWRpcmVjdGlvbi5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgbmF2aWdhdG9yOiBOYXZpZ2F0b3I7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JpZ2luXSBUaGUgb3JpZ2luIGRvbWFpbiBvZiB0aGUgcmVxdWVzdCBiZWluZyBtYWRlLiBJZiBgbnVsbGAgdGhlbiB0aGUgUmVmZXJlciBoZWFkZXIgd2lsbCBiZSB1c2VkLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBvcmlnaW46IHN0cmluZztcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0ZV1cbiAgICogICAgUkVDT01NRU5ERUQuIE9wYXF1ZSB2YWx1ZSB1c2VkIHRvIG1haW50YWluIHN0YXRlIGJldHdlZW4gdGhlIHJlcXVlc3QgYW5kIHRoZSBjYWxsYmFjay4gVHlwaWNhbGx5LCBDU1JGLCBYU1JGIG1pdGlnYXRpb24gaXMgZG9uZSBieSBjcnlwdG9ncmFwaGljYWxseSBiaW5kaW5nIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciB3aXRoIGEgYnJvd3NlciBjb29raWUuXG4gICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgcHJlc2VydmVzIHNvbWUgc3RhdGUgb2JqZWN0IHNldCBieSB0aGUgY2xpZW50IGluIHRoZSBBdXRoZW50aWNhdGlvbiByZXF1ZXN0IGFuZCBtYWtlcyBpdCBhdmFpbGFibGUgdG8gdGhlIGNsaWVudCBpbiB0aGUgcmVzcG9uc2UuXG4gICAqICAgIEl04oCZcyB0aGF0IHVuaXF1ZSBhbmQgbm9uLWd1ZXNzYWJsZSB2YWx1ZSB0aGF0IGFsbG93cyB5b3UgdG8gcHJldmVudCB0aGUgYXR0YWNrIGJ5IGNvbmZpcm1pbmcgaWYgdGhlIHZhbHVlIGNvbWluZyBmcm9tIHRoZSByZXNwb25zZSBtYXRjaGVzIHRoZSBvbmUgeW91IGV4cGVjdCAodGhlIG9uZSB5b3UgZ2VuZXJhdGVkIHdoZW4gaW5pdGlhdGluZyB0aGUgcmVxdWVzdCkuXG4gICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgaXMgYSBzdHJpbmcgc28geW91IGNhbiBlbmNvZGUgYW55IG90aGVyIGluZm9ybWF0aW9uIGluIGl0LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBzdGF0ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vbmNlXVxuICAgKiAgICBTdHJpbmcgdmFsdWUgdXNlZCB0byBhc3NvY2lhdGUgYSBDbGllbnQgc2Vzc2lvbiB3aXRoIGFuIElEIFRva2VuLCBhbmQgdG8gbWl0aWdhdGUgcmVwbGF5IGF0dGFja3MuXG4gICAqICAgIFRoZSB2YWx1ZSBpcyBwYXNzZWQgdGhyb3VnaCB1bm1vZGlmaWVkIGZyb20gdGhlIEF1dGhlbnRpY2F0aW9uIFJlcXVlc3QgdG8gdGhlIElEIFRva2VuLlxuICAgKiAgICBTdWZmaWNpZW50IGVudHJvcHkgTVVTVCBiZSBwcmVzZW50IGluIHRoZSBub25jZSB2YWx1ZXMgdXNlZCB0byBwcmV2ZW50IGF0dGFja2VycyBmcm9tIGd1ZXNzaW5nIHZhbHVlcy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgbm9uY2U6IHN0cmluZztcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtyZXNwb25zZVR5cGU9J2NvZGUnXSBPcGVuSWQgcmVzcG9uc2UgdHlwZS4gVGhlIGRlZmF1bHQgaXMgYGNvZGVgIChDb2RlIEZsb3csIGludm9sdmluZyB0aGUgZnJvbnQtY2hhbm5lbCBhbmQgYmFja2NoYW5uZWwpLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSByZXNwb25zZVR5cGU6IHN0cmluZyA9ICdjb2RlJztcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXkgSXQgc3BlY2lmaWVzIGhvdyB0aGUgQXV0aG9yaXphdGlvbiBTZXJ2ZXIgZGlzcGxheXMgdGhlIGF1dGhlbnRpY2F0aW9uIGFuZCBjb25zZW50IHVzZXIgaW50ZXJmYWNlIHBhZ2VzIHRvIHRoZSBFbmQtVXNlci5cbiAgICogICBEZWZhdWx0IGFuZCB0aGUgb25seSBzdXBwb3J0ZWQgdmFsdWUgaXMgYHBhZ2VgLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBkaXNwbGF5OiBzdHJpbmcgPSAncGFnZSdcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb21wdCBTcGFjZSBkZWxpbWl0ZWQsIGNhc2Ugc2Vuc2l0aXZlIGxpc3Qgb2Ygc3RyaW5nIHZhbHVlcyB0aGF0IHNwZWNpZmllcyB3aGV0aGVyIHRoZSBBdXRob3JpemF0aW9uIFNlcnZlclxuICAgKiAgIHByb21wdHMgdGhlIEVuZC1Vc2VyIGZvciByZWF1dGhlbnRpY2F0aW9uIGFuZCBjb25zZW50LiBUaGUgZGVmaW5lZCB2YWx1ZXMgYXJlOiBgbG9naW5gLCBgbm9uZWAuXG4gICAqICAgRGVmYXVsdCBpcyBgbG9naW4sbm9uZWAuIENhbid0IGJlIGNoYW5nZWQgZm9yIG5vdy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgcHJvbXB0OiBzdHJpbmcgPSAnbG9naW4sbm9uZSdcblxuICAvKipcbiAgICogVGhlbWUgb2YgdGhlIGxvZ2luIHBhZ2Ugb2YgQ3liZXJ1cyBLZXkgRGFzaGJvYXJkLiBEZWZhdWx0IGlzIGBkZWZhdWx0YC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgdGhlbWU6IHN0cmluZyA9ICdkZWZhdWx0Jztcbn0iXSwic291cmNlUm9vdCI6IiJ9