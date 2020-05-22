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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
const errors_1 = __webpack_require__(0);
const session_1 = __webpack_require__(2);
/**
 * Cyberus Key API which allows you to do a delegate login with OpenId protocol.
 *
 * @class CyberusKeyAPI
 */
class CyberusKeyAPI {
    /**
     *Creates an instance of CyberusKeyAPI.
     * @param {string} hostUrl Base URL of the host server, e.g. `https://production-api.cyberuskey.com`
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
     * @returns {Promise<Session>} The Cyberus Key session.
     * @memberof CyberusKeyAPI
     */
    createSession(clientId, geo, origin) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = { client_id: clientId };
            if (geo) {
                data['lat'] = geo.latitude;
                data['lng'] = geo.longitude;
            }
            if (origin) {
                data['origin'] = origin;
            }
            const response = yield fetch(this._getUrl('sessions'), {
                method: 'POST',
                body: this._getUrlEncodedBody(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            const json = yield response.json();
            if (response.ok && response.status === 201 && json.success) {
                return new session_1.Session(json.data);
            }
            if (!json.error) {
                throw new errors_1.UnknownError();
            }
            throw errors_1.errorFactory(json.error, json.error_description);
        });
    }
    /**
     * Gets a sonic sound with embedded OTP.
     *
     * @param {Session} session Cyberus Key's session generated by a user for a login.
     * @returns {Promise<ArrayBuffer>} Bytes of a sound.
     * @throws ResourceNotFoundError
     * @memberof CyberusKeyAPI
     */
    getOTPSound(session) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this._getUrl(`sessions/${session.sessionId}`), {
                headers: {
                    'Accept': 'audio/mpeg',
                    'Content-Type': 'text/plain'
                }
            });
            // @ts-ignore
            const buffer = response.buffer || response.arrayBuffer;
            return yield buffer.call(response);
        });
    }
    /**
     * Gets OpenID's Authentication endpoint URL which will be used to process the authentication.
     *
     * @param {Session} session Cyberus Key session.
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
    getAuthenticationEndpointUrl(session, scope, clientId, redirectUri, state, nonce, responseType = 'code') {
        const data = {
            session_id: session.sessionId,
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
     * Makes an authentication with Cyberus Key.
     *
     * @param {string} clientId Public client ID generated during creating the account.
     * @param {string} redirectUri Redirect URI to which the response will be sent. If the value is not whitelisted then the request will fail.
     * @param {OpenIdScopeParser} scope Each scope returns a set of user attributes, which are called claims.
     *    Once the user authorizes the requested scopes, the claims are returned in an ID Token.
     * @param {SoundEmitter} soundEmitter Interface which can play a sound.
     * @param {Navigator} navigator Class describes an action that will be done to Authentication URL. For browsers it will be a page redirection.
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
    authenticate(clientId, redirectUri, scope, soundEmitter, navigator, origin, state, nonce, responseType = 'code') {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._geoProvider && !this._cachedGeo) {
                this._cachedGeo = yield this._geoProvider.getGeo();
            }
            const session = yield this.createSession(clientId, this._cachedGeo, origin);
            const sound = yield this.getOTPSound(session);
            const authenticateUrl = this.getAuthenticationEndpointUrl(session, scope, clientId, redirectUri, state, nonce, responseType);
            console.info(`Navigating to ${authenticateUrl}.`);
            yield navigator.navigate(authenticateUrl);
            yield this._timeout(1000);
            console.info(`Sound emitting.`);
            yield soundEmitter.emit(sound);
        });
    }
    /**
     * Navigates to Authentication Endpoint and returns a sound. You have to emit it.
     *
     * @param {string} clientId Public client ID generated during creating the account.
     * @param {string} redirectUri Redirect URI to which the response will be sent. If the value is not whitelisted then the request will fail.
     * @param {OpenIdScopeParser} scope Each scope returns a set of user attributes, which are called claims.
     *    Once the user authorizes the requested scopes, the claims are returned in an ID Token.
     * @param {Navigator} navigator Class describes an action that will be done to Authentication URL. For browsers it will be a page redirection.
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
    navigateAndGetTheSound(clientId, redirectUri, scope, navigator, origin, state, nonce, responseType = 'code') {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._geoProvider && !this._cachedGeo) {
                this._cachedGeo = yield this._geoProvider.getGeo();
            }
            const session = yield this.createSession(clientId, this._cachedGeo, origin);
            const sound = yield this.getOTPSound(session);
            const authenticateUrl = this.getAuthenticationEndpointUrl(session, scope, clientId, redirectUri, state, nonce, responseType);
            console.info(`Navigating to ${authenticateUrl}.`);
            yield navigator.navigate(authenticateUrl);
            yield this._timeout(this._delayMs);
            return sound;
        });
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
            console.info(`Navigating to ${url.href}.`);
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
}
exports.CyberusKeyAPI = CyberusKeyAPI;


/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
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
__exportStar(__webpack_require__(1), exports);
__exportStar(__webpack_require__(5), exports);
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(0), exports);
__exportStar(__webpack_require__(7), exports);
__exportStar(__webpack_require__(8), exports);
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(2), exports);
__exportStar(__webpack_require__(3), exports);
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(12), exports);
const api_1 = __webpack_require__(1);
exports.default = api_1.CyberusKeyAPI;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 6 */
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
exports.WebAudioSoundEmitter = void 0;
const errors_1 = __webpack_require__(0);
/**
 * Class uses a HTML5's AudioContext interface to play a sound.
 *
 * @export
 * @class WebAudioSoundEmitter
 * @implements {SoundEmitter}
 */
class WebAudioSoundEmitter {
    /**
     * Emits a sound through HTML5's AudioContext interface.
     *
     * @param {ArrayBuffer} sound A binary record of the sound you want to play.
     * @returns {Promise<void>}
     * @memberof WebAudioSoundEmitter
     */
    emit(sound) {
        return __awaiter(this, void 0, void 0, function* () {
            let context;
            try {
                context = new (window['AudioContext'] || window['webkitAudioContext'])();
            }
            catch (_a) {
                throw new errors_1.OTPGenerationError('otp_generation_failure', 'AudioContext is not supported');
            }
            const source = context.createBufferSource();
            context.decodeAudioData(sound, (decodedData) => {
                source.buffer = decodedData;
                source.connect(context.destination);
                source.start(0);
            });
            yield (new Promise((resolve) => {
                source.onended = resolve;
            }));
        });
    }
}
exports.WebAudioSoundEmitter = WebAudioSoundEmitter;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 8 */
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
const errors_1 = __webpack_require__(0);
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 11 */
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
const geo_1 = __webpack_require__(3);
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
     * @memberof HTML5GeoProvider
     */
    constructor(enableHighAccuracy = false, navigator = window.navigator) {
        this._enableHighAccuracy = enableHighAccuracy;
        this._navigator = navigator;
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
            try {
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
            console.log(`enableHighAccuracy: ${enableHighAccuracy}`);
            this._navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy });
        });
    }
}
exports.HTML5GeoProvider = HTML5GeoProvider;


/***/ }),
/* 12 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2Vycm9ycy50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvYXBpLnRzIiwid2VicGFjazovL2N5YmVydXNrZXktc2RrLy4vc3JjL3Nkay9zZXNzaW9uLnRzIiwid2VicGFjazovL2N5YmVydXNrZXktc2RrLy4vc3JjL3Nkay9nZW9Qcm92aWRlci9nZW8udHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2VtaXR0ZXIvd2ViQXVkaW9Tb3VuZEVtaXR0ZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL25hdmlnYXRvci9yZWRpcmVjdE5hdmlnYXRvci50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvc2NvcGVQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2dlb1Byb3ZpZGVyL2h0bWw1R2VvUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2xvZ2luT3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FB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RXZDOzs7Ozs7V0FNRztRQUNNLFlBQU8sR0FBVyxNQUFNO1FBRWpDOzs7Ozs7O1dBT0c7UUFDTSxXQUFNLEdBQVcsWUFBWTtRQUV0Qzs7Ozs7V0FLRztRQUNNLFVBQUssR0FBVyxTQUFTLENBQUM7SUFDckMsQ0FBQztDQUFBO0FBbkdELG9DQW1HQyIsImZpbGUiOiJzZGsuZXM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjeWJlcnVza2V5LXNka1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjeWJlcnVza2V5LXNka1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjeWJlcnVza2V5LXNka1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiZW51bSBFcnJvckNvZGUge1xuICB1bmRlZmluZWQgPSAxLFxuICB1bmtub3duX2Vycm9yLFxuICBzZXJ2ZXJfZXJyb3IsXG4gIHdyb25nX2pzb24sXG4gIG9wZW5hcGlfZXJyb3IsXG4gIHJlc291cmNlX25vdF9mb3VuZCxcbiAgb3RwX2dlbmVyYXRpb25fZmFpbHVyZSxcbiAgaW52YWxpZF9yZWRpcmVjdF91cmksXG4gIGludmFsaWRfY2xpZW50LFxuICB0b29fbWFueV9jYWxsc19lcnJvclxufVxuXG5jbGFzcyBDeWJlcnVzS2V5RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHByaXZhdGUgX2NvZGU6IEVycm9yQ29kZTtcblxuICBjb25zdHJ1Y3Rvcihjb2RlOiBrZXlvZiB0eXBlb2YgRXJyb3JDb2RlLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlKVxuICAgIHRoaXMuX2NvZGUgPSBFcnJvckNvZGVbY29kZV07XG4gIH1cblxuICBnZXQgY29kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBFcnJvckNvZGVbdGhpcy5fY29kZV07XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICB9XG59XG5cbmNsYXNzIFVua25vd25FcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGNvZGU6IGtleW9mIHR5cGVvZiBFcnJvckNvZGUgPSAndW5rbm93bl9lcnJvcicsIG1lc3NhZ2U6IHN0cmluZyA9ICdVbmtub3duIGVycm9yIG9jY3VyZWQuJykge1xuICAgIHN1cGVyKGNvZGUsIG1lc3NhZ2UpXG4gIH1cbn1cbmNsYXNzIFRvb01hbnlDYWxsc0Vycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHtcbiAgY29uc3RydWN0b3IoY29kZToga2V5b2YgdHlwZW9mIEVycm9yQ29kZSA9ICd0b29fbWFueV9jYWxsc19lcnJvcicsIG1lc3NhZ2U6IHN0cmluZyA9ICdZb3VcXCd2ZSBkb25lIHRvbyBtYW55IGNhbGxzLicpIHtcbiAgICBzdXBlcihjb2RlLCBtZXNzYWdlKVxuICB9XG59XG5cbmNsYXNzIE1pc3NpbmdSZWRpcmVjdFVyaSBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdpbnZhbGlkX3JlZGlyZWN0X3VyaScsICdNaXNzaW5nIHJlZGlyZWN0aW9uIFVSSS4nKTtcbiAgfVxufVxuXG5jbGFzcyBXcm9uZ0pzb25FcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cbmNsYXNzIE9wZW5BcGlFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cbmNsYXNzIFJlc291cmNlTm90Rm91bmRFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cbmNsYXNzIE9UUEdlbmVyYXRpb25FcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cbmNsYXNzIEludmFsaWRSZWRpcmVjdFVyaUVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxuY2xhc3MgSW52YWxpZENsaWVudEVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxuXG5jb25zdCBNQVBQSU5HID0ge1xuICBbRXJyb3JDb2RlLnVuZGVmaW5lZF06IFVua25vd25FcnJvcixcbiAgW0Vycm9yQ29kZS51bmtub3duX2Vycm9yXTogVW5rbm93bkVycm9yLFxuICBbRXJyb3JDb2RlLnNlcnZlcl9lcnJvcl06IFVua25vd25FcnJvcixcbiAgW0Vycm9yQ29kZS51bmRlZmluZWRdOiBXcm9uZ0pzb25FcnJvcixcbiAgW0Vycm9yQ29kZS53cm9uZ19qc29uXTogV3JvbmdKc29uRXJyb3IsXG4gIFtFcnJvckNvZGUub3BlbmFwaV9lcnJvcl06IE9wZW5BcGlFcnJvcixcbiAgW0Vycm9yQ29kZS5yZXNvdXJjZV9ub3RfZm91bmRdOiBSZXNvdXJjZU5vdEZvdW5kRXJyb3IsXG4gIFtFcnJvckNvZGUub3RwX2dlbmVyYXRpb25fZmFpbHVyZV06IE9UUEdlbmVyYXRpb25FcnJvcixcbiAgW0Vycm9yQ29kZS5pbnZhbGlkX3JlZGlyZWN0X3VyaV06IEludmFsaWRSZWRpcmVjdFVyaUVycm9yLFxuICBbRXJyb3JDb2RlLmludmFsaWRfY2xpZW50XTogSW52YWxpZENsaWVudEVycm9yLFxuICBbRXJyb3JDb2RlLnRvb19tYW55X2NhbGxzX2Vycm9yXTogVG9vTWFueUNhbGxzRXJyb3Jcbn1cblxuZnVuY3Rpb24gZXJyb3JGYWN0b3J5KGNvZGU6IGtleW9mIHR5cGVvZiBFcnJvckNvZGUsIG1lc3NhZ2U6IHN0cmluZykge1xuICBjb25zdCBlbnVtX3R5cGUgPSBFcnJvckNvZGVbY29kZV07XG4gIGNvbnN0IEVycm9yQ29uc3RydWN0b3IgPSBNQVBQSU5HW2VudW1fdHlwZV07XG5cbiAgcmV0dXJuIG5ldyBFcnJvckNvbnN0cnVjdG9yKGNvZGUsIG1lc3NhZ2UpO1xufVxuXG5leHBvcnQge1xuICBlcnJvckZhY3RvcnksXG4gIEVycm9yQ29kZSxcbiAgQ3liZXJ1c0tleUVycm9yLFxuICBVbmtub3duRXJyb3IsXG4gIFRvb01hbnlDYWxsc0Vycm9yLFxuICBXcm9uZ0pzb25FcnJvcixcbiAgT3BlbkFwaUVycm9yLFxuICBSZXNvdXJjZU5vdEZvdW5kRXJyb3IsXG4gIE9UUEdlbmVyYXRpb25FcnJvcixcbiAgTWlzc2luZ1JlZGlyZWN0VXJpXG59O1xuXG4iLCJpbXBvcnQgeyBTb3VuZEVtaXR0ZXIgfSBmcm9tICcuL2VtaXR0ZXIvc291bmRFbWl0dGVyJztcbmltcG9ydCB7IGVycm9yRmFjdG9yeSwgVW5rbm93bkVycm9yIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgR2VvbG9jYXRpb24gfSBmcm9tICcuL2dlb1Byb3ZpZGVyL2dlbyc7XG5pbXBvcnQgeyBHZW9Qcm92aWRlciB9IGZyb20gJy4vZ2VvUHJvdmlkZXIvZ2VvUHJvdmlkZXInO1xuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3IvbmF2aWdhdG9yJztcbmltcG9ydCB7IE9wZW5JZFNjb3BlUGFyc2VyIH0gZnJvbSAnLi9zY29wZVBhcnNlcic7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnLi9zZXNzaW9uJztcbmltcG9ydCB7IExvZ2luT3B0aW9ucyB9IGZyb20gJy4vbG9naW5PcHRpb25zJztcblxuXG4vKipcbiAqIEN5YmVydXMgS2V5IEFQSSB3aGljaCBhbGxvd3MgeW91IHRvIGRvIGEgZGVsZWdhdGUgbG9naW4gd2l0aCBPcGVuSWQgcHJvdG9jb2wuXG4gKlxuICogQGNsYXNzIEN5YmVydXNLZXlBUElcbiAqL1xuZXhwb3J0IGNsYXNzIEN5YmVydXNLZXlBUEkge1xuICBwcml2YXRlIF9hcGlVcmw6IFVSTDtcbiAgcHJpdmF0ZSBfZ2VvUHJvdmlkZXI6IEdlb1Byb3ZpZGVyO1xuICBwcml2YXRlIF9jYWNoZWRHZW86IEdlb2xvY2F0aW9uO1xuICBwcml2YXRlIF9kZWxheU1zOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDeWJlcnVzS2V5QVBJLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaG9zdFVybCBCYXNlIFVSTCBvZiB0aGUgaG9zdCBzZXJ2ZXIsIGUuZy4gYGh0dHBzOi8vcHJvZHVjdGlvbi1hcGkuY3liZXJ1c2tleS5jb21gXG4gICAqIEBwYXJhbSB7R2VvUHJvdmlkZXJ9IFtnZW9Qcm92aWRlcl0gR2VvbG9jYWxpemF0aW9uIHByb3ZpZGVyLiBVc2Ugc3BlY2lmaWMgaW1wbGVtZW50YXRpb24gbGlrZSBgSFRNTDVHZW9Qcm92aWRlcmAuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXlNcz02MDBdIERlbGF5IChtcykgYmV0d2VlbiBtYWtpbmcgYW4gQXV0aGVudGljYXRpb24gcmVxdWVzdCBhbmQgYSBzb3VuZCBwbGF5aW5nLlxuICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxuICAgKi9cbiAgY29uc3RydWN0b3IoaG9zdFVybDogc3RyaW5nLCBnZW9Qcm92aWRlcj86IEdlb1Byb3ZpZGVyLCBkZWxheU1zOiBudW1iZXIgPSA2MDApIHtcbiAgICB0aGlzLl9hcGlVcmwgPSBuZXcgVVJMKCcvYXBpL3YyLycsIGhvc3RVcmwpO1xuICAgIHRoaXMuX2dlb1Byb3ZpZGVyID0gZ2VvUHJvdmlkZXI7XG4gICAgdGhpcy5fZGVsYXlNcyA9IGRlbGF5TXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgQ3liZXJ1cyBLZXkgc2Vzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIFB1YmxpYyBjbGllbnQgSUQgZ2VuZXJhdGVkIGR1cmluZyBjcmVhdGluZyB0aGUgYWNjb3VudC5cbiAgICogQHBhcmFtIHtHZW9sb2NhdGlvbn0gW2dlb10gR2l2ZSBhIHZhbHVlIGlmIHlvdSB3YW50IHRvIHBhc3Mgb3B0aW9uYWwgZ2VvbG9jYXRpb24gbWVhc3VyZW1lbnQuXG4gICAqICAgIEl0IGNhbiBiZSBsYXRlciB1c2UgdG8gY29tcGFyZSBpdCBhZ2FpbnN0IHRoZSBtb2JpbGUncyBtZWFzdXJlbWVudCAoaWYgeW91IGhhdmUgc2V0IGBmYWlsX29uX2dlb19taXNtYXRjaGApLlxuICAgKiAgICBUaG9zZSBtZWFzdXJlbWVudHMgY2FuIGJlIHVzZWQgYWxzbyB0byBnZW5lcmFsIGltcHJvdmVtZW50IG9mIHRoZSBzZWN1cml0eS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmlnaW5dIFRoZSBvcmlnaW4gZG9tYWluIG9mIHRoZSByZXF1ZXN0IGJlaW5nIG1hZGUuIElmIGBudWxsYCB0aGVuIHRoZSBSZWZlcmVyIGhlYWRlciB3aWxsIGJlIHVzZWQuXG4gICAqIEB0aHJvd3MgV3JvbmdKc29uRXJyb3IsIE9wZW5BcGlFcnJvciwgUmVzb3VyY2VOb3RGb3VuZEVycm9yLCBPVFBHZW5lcmF0aW9uRXJyb3IsIFVua25vd25FcnJvclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTZXNzaW9uPn0gVGhlIEN5YmVydXMgS2V5IHNlc3Npb24uXG4gICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgY3JlYXRlU2Vzc2lvbihjbGllbnRJZDogc3RyaW5nLCBnZW8/OiBHZW9sb2NhdGlvbiwgb3JpZ2luPzogc3RyaW5nKTogUHJvbWlzZTxTZXNzaW9uPiB7XG4gICAgY29uc3QgZGF0YSA9IHsgY2xpZW50X2lkOiBjbGllbnRJZCB9O1xuXG4gICAgaWYgKGdlbykge1xuICAgICAgZGF0YVsnbGF0J10gPSBnZW8ubGF0aXR1ZGU7XG4gICAgICBkYXRhWydsbmcnXSA9IGdlby5sb25naXR1ZGU7XG4gICAgfVxuXG4gICAgaWYgKG9yaWdpbikge1xuICAgICAgZGF0YVsnb3JpZ2luJ10gPSBvcmlnaW47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLl9nZXRVcmwoJ3Nlc3Npb25zJyksIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogdGhpcy5fZ2V0VXJsRW5jb2RlZEJvZHkoZGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2sgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEgJiYganNvbi5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4gbmV3IFNlc3Npb24oanNvbi5kYXRhKTtcbiAgICB9XG5cbiAgICBpZiAoIWpzb24uZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBVbmtub3duRXJyb3IoKVxuICAgIH1cblxuICAgIHRocm93IGVycm9yRmFjdG9yeShqc29uLmVycm9yLCBqc29uLmVycm9yX2Rlc2NyaXB0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgc29uaWMgc291bmQgd2l0aCBlbWJlZGRlZCBPVFAuXG4gICAqXG4gICAqIEBwYXJhbSB7U2Vzc2lvbn0gc2Vzc2lvbiBDeWJlcnVzIEtleSdzIHNlc3Npb24gZ2VuZXJhdGVkIGJ5IGEgdXNlciBmb3IgYSBsb2dpbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXlCdWZmZXI+fSBCeXRlcyBvZiBhIHNvdW5kLlxuICAgKiBAdGhyb3dzIFJlc291cmNlTm90Rm91bmRFcnJvclxuICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxuICAgKi9cbiAgcHVibGljIGFzeW5jIGdldE9UUFNvdW5kKHNlc3Npb246IFNlc3Npb24pOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLl9nZXRVcmwoYHNlc3Npb25zLyR7c2Vzc2lvbi5zZXNzaW9uSWR9YCksIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdCc6ICdhdWRpby9tcGVnJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBidWZmZXI6IEZ1bmN0aW9uID0gcmVzcG9uc2UuYnVmZmVyIHx8IHJlc3BvbnNlLmFycmF5QnVmZmVyO1xuICAgIHJldHVybiBhd2FpdCBidWZmZXIuY2FsbChyZXNwb25zZSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBHZXRzIE9wZW5JRCdzIEF1dGhlbnRpY2F0aW9uIGVuZHBvaW50IFVSTCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gcHJvY2VzcyB0aGUgYXV0aGVudGljYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7U2Vzc2lvbn0gc2Vzc2lvbiBDeWJlcnVzIEtleSBzZXNzaW9uLlxuICAgKiBAcGFyYW0ge09wZW5JZFNjb3BlUGFyc2VyfSBzY29wZSBFYWNoIHNjb3BlIHJldHVybnMgYSBzZXQgb2YgdXNlciBhdHRyaWJ1dGVzLCB3aGljaCBhcmUgY2FsbGVkIGNsYWltcy5cbiAgICogICAgT25jZSB0aGUgdXNlciBhdXRob3JpemVzIHRoZSByZXF1ZXN0ZWQgc2NvcGVzLCB0aGUgY2xhaW1zIGFyZSByZXR1cm5lZCBpbiBhbiBJRCBUb2tlbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIFB1YmxpYyBjbGllbnQgSUQgZ2VuZXJhdGVkIGR1cmluZyBjcmVhdGluZyB0aGUgYWNjb3VudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlZGlyZWN0VXJpIFJlZGlyZWN0IFVSSSB0byB3aGljaCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSBzZW50LiBJZiB0aGUgdmFsdWUgaXMgbm90IHdoaXRlbGlzdGVkIHRoZW4gdGhlIHJlcXVlc3Qgd2lsbCBmYWlsLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3N0YXRlXVxuICAgKiAgICBSRUNPTU1FTkRFRC4gT3BhcXVlIHZhbHVlIHVzZWQgdG8gbWFpbnRhaW4gc3RhdGUgYmV0d2VlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIGNhbGxiYWNrLiBUeXBpY2FsbHksIENTUkYsIFhTUkYgbWl0aWdhdGlvbiBpcyBkb25lIGJ5IGNyeXB0b2dyYXBoaWNhbGx5IGJpbmRpbmcgdGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIHdpdGggYSBicm93c2VyIGNvb2tpZS5cbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBwcmVzZXJ2ZXMgc29tZSBzdGF0ZSBvYmplY3Qgc2V0IGJ5IHRoZSBjbGllbnQgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgYW5kIG1ha2VzIGl0IGF2YWlsYWJsZSB0byB0aGUgY2xpZW50IGluIHRoZSByZXNwb25zZS5cbiAgICogICAgSXTigJlzIHRoYXQgdW5pcXVlIGFuZCBub24tZ3Vlc3NhYmxlIHZhbHVlIHRoYXQgYWxsb3dzIHlvdSB0byBwcmV2ZW50IHRoZSBhdHRhY2sgYnkgY29uZmlybWluZyBpZiB0aGUgdmFsdWUgY29taW5nIGZyb20gdGhlIHJlc3BvbnNlIG1hdGNoZXMgdGhlIG9uZSB5b3UgZXhwZWN0ICh0aGUgb25lIHlvdSBnZW5lcmF0ZWQgd2hlbiBpbml0aWF0aW5nIHRoZSByZXF1ZXN0KS5cbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBpcyBhIHN0cmluZyBzbyB5b3UgY2FuIGVuY29kZSBhbnkgb3RoZXIgaW5mb3JtYXRpb24gaW4gaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm9uY2VdXG4gICAqICAgIFN0cmluZyB2YWx1ZSB1c2VkIHRvIGFzc29jaWF0ZSBhIENsaWVudCBzZXNzaW9uIHdpdGggYW4gSUQgVG9rZW4sIGFuZCB0byBtaXRpZ2F0ZSByZXBsYXkgYXR0YWNrcy5cbiAgICogICAgVGhlIHZhbHVlIGlzIHBhc3NlZCB0aHJvdWdoIHVubW9kaWZpZWQgZnJvbSB0aGUgQXV0aGVudGljYXRpb24gUmVxdWVzdCB0byB0aGUgSUQgVG9rZW4uXG4gICAqICAgIFN1ZmZpY2llbnQgZW50cm9weSBNVVNUIGJlIHByZXNlbnQgaW4gdGhlIG5vbmNlIHZhbHVlcyB1c2VkIHRvIHByZXZlbnQgYXR0YWNrZXJzIGZyb20gZ3Vlc3NpbmcgdmFsdWVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3Jlc3BvbnNlVHlwZT0nY29kZSddIE9wZW5JZCByZXNwb25zZSB0eXBlLiBUaGUgZGVmYXVsdCBpcyBgY29kZWAgKENvZGUgRmxvdywgaW52b2x2aW5nIHRoZSBmcm9udC1jaGFubmVsIGFuZCBiYWNrY2hhbm5lbCkuXG4gICAqIEByZXR1cm5zIE9wZW5JRCdzIEF1dGhlbnRpY2F0aW9uIGVuZHBvaW50IFVSTFxuICAgKiBAdGhyb3dzIEludmFsaWRSZWRpcmVjdFVyaUVycm9yLCBJbnZhbGlkQ2xpZW50RXJyb3IsIFJlc291cmNlTm90Rm91bmRFcnJvclxuICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxuICAgKi9cbiAgcHVibGljIGdldEF1dGhlbnRpY2F0aW9uRW5kcG9pbnRVcmwoc2Vzc2lvbjogU2Vzc2lvbiwgc2NvcGU6IE9wZW5JZFNjb3BlUGFyc2VyLCBjbGllbnRJZDogc3RyaW5nLCByZWRpcmVjdFVyaTogc3RyaW5nLCBzdGF0ZT86IHN0cmluZywgbm9uY2U/OiBzdHJpbmcsIHJlc3BvbnNlVHlwZSA9ICdjb2RlJyk6IHN0cmluZyB7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgc2Vzc2lvbl9pZDogc2Vzc2lvbi5zZXNzaW9uSWQsXG4gICAgICBjbGllbnRfaWQ6IGNsaWVudElkLFxuICAgICAgc2NvcGU6IHNjb3BlLmdldFZhbHVlKCksXG4gICAgICByZWRpcmVjdF91cmk6IHJlZGlyZWN0VXJpLFxuICAgICAgcmVzcG9uc2VfdHlwZTogcmVzcG9uc2VUeXBlXG4gICAgfTtcblxuICAgIGlmIChzdGF0ZSkge1xuICAgICAgZGF0YVsnc3RhdGUnXSA9IHN0YXRlO1xuICAgIH1cblxuICAgIGlmIChub25jZSkge1xuICAgICAgZGF0YVsnbm9uY2UnXSA9IG5vbmNlO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodGhpcy5fZ2V0VXJsKCdhdXRoZW50aWNhdGUnKSk7XG5cbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChwYXJhbWV0ZXJOYW1lKSA9PiB7XG4gICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChwYXJhbWV0ZXJOYW1lLCBkYXRhW3BhcmFtZXRlck5hbWVdKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB1cmwuaHJlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBhbiBhdXRoZW50aWNhdGlvbiB3aXRoIEN5YmVydXMgS2V5LiBcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIFB1YmxpYyBjbGllbnQgSUQgZ2VuZXJhdGVkIGR1cmluZyBjcmVhdGluZyB0aGUgYWNjb3VudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlZGlyZWN0VXJpIFJlZGlyZWN0IFVSSSB0byB3aGljaCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSBzZW50LiBJZiB0aGUgdmFsdWUgaXMgbm90IHdoaXRlbGlzdGVkIHRoZW4gdGhlIHJlcXVlc3Qgd2lsbCBmYWlsLlxuICAgKiBAcGFyYW0ge09wZW5JZFNjb3BlUGFyc2VyfSBzY29wZSBFYWNoIHNjb3BlIHJldHVybnMgYSBzZXQgb2YgdXNlciBhdHRyaWJ1dGVzLCB3aGljaCBhcmUgY2FsbGVkIGNsYWltcy5cbiAgICogICAgT25jZSB0aGUgdXNlciBhdXRob3JpemVzIHRoZSByZXF1ZXN0ZWQgc2NvcGVzLCB0aGUgY2xhaW1zIGFyZSByZXR1cm5lZCBpbiBhbiBJRCBUb2tlbi5cbiAgICogQHBhcmFtIHtTb3VuZEVtaXR0ZXJ9IHNvdW5kRW1pdHRlciBJbnRlcmZhY2Ugd2hpY2ggY2FuIHBsYXkgYSBzb3VuZC5cbiAgICogQHBhcmFtIHtOYXZpZ2F0b3J9IG5hdmlnYXRvciBDbGFzcyBkZXNjcmliZXMgYW4gYWN0aW9uIHRoYXQgd2lsbCBiZSBkb25lIHRvIEF1dGhlbnRpY2F0aW9uIFVSTC4gRm9yIGJyb3dzZXJzIGl0IHdpbGwgYmUgYSBwYWdlIHJlZGlyZWN0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29yaWdpbl0gVGhlIG9yaWdpbiBkb21haW4gb2YgdGhlIHJlcXVlc3QgYmVpbmcgbWFkZS4gSWYgYG51bGxgIHRoZW4gdGhlIFJlZmVyZXIgaGVhZGVyIHdpbGwgYmUgdXNlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0ZV1cbiAgICogICAgUkVDT01NRU5ERUQuIE9wYXF1ZSB2YWx1ZSB1c2VkIHRvIG1haW50YWluIHN0YXRlIGJldHdlZW4gdGhlIHJlcXVlc3QgYW5kIHRoZSBjYWxsYmFjay4gVHlwaWNhbGx5LCBDU1JGLCBYU1JGIG1pdGlnYXRpb24gaXMgZG9uZSBieSBjcnlwdG9ncmFwaGljYWxseSBiaW5kaW5nIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciB3aXRoIGEgYnJvd3NlciBjb29raWUuXG4gICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgcHJlc2VydmVzIHNvbWUgc3RhdGUgb2JqZWN0IHNldCBieSB0aGUgY2xpZW50IGluIHRoZSBBdXRoZW50aWNhdGlvbiByZXF1ZXN0IGFuZCBtYWtlcyBpdCBhdmFpbGFibGUgdG8gdGhlIGNsaWVudCBpbiB0aGUgcmVzcG9uc2UuXG4gICAqICAgIEl04oCZcyB0aGF0IHVuaXF1ZSBhbmQgbm9uLWd1ZXNzYWJsZSB2YWx1ZSB0aGF0IGFsbG93cyB5b3UgdG8gcHJldmVudCB0aGUgYXR0YWNrIGJ5IGNvbmZpcm1pbmcgaWYgdGhlIHZhbHVlIGNvbWluZyBmcm9tIHRoZSByZXNwb25zZSBtYXRjaGVzIHRoZSBvbmUgeW91IGV4cGVjdCAodGhlIG9uZSB5b3UgZ2VuZXJhdGVkIHdoZW4gaW5pdGlhdGluZyB0aGUgcmVxdWVzdCkuXG4gICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgaXMgYSBzdHJpbmcgc28geW91IGNhbiBlbmNvZGUgYW55IG90aGVyIGluZm9ybWF0aW9uIGluIGl0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vbmNlXVxuICAgKiAgICBTdHJpbmcgdmFsdWUgdXNlZCB0byBhc3NvY2lhdGUgYSBDbGllbnQgc2Vzc2lvbiB3aXRoIGFuIElEIFRva2VuLCBhbmQgdG8gbWl0aWdhdGUgcmVwbGF5IGF0dGFja3MuXG4gICAqICAgIFRoZSB2YWx1ZSBpcyBwYXNzZWQgdGhyb3VnaCB1bm1vZGlmaWVkIGZyb20gdGhlIEF1dGhlbnRpY2F0aW9uIFJlcXVlc3QgdG8gdGhlIElEIFRva2VuLlxuICAgKiAgICBTdWZmaWNpZW50IGVudHJvcHkgTVVTVCBiZSBwcmVzZW50IGluIHRoZSBub25jZSB2YWx1ZXMgdXNlZCB0byBwcmV2ZW50IGF0dGFja2VycyBmcm9tIGd1ZXNzaW5nIHZhbHVlcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtyZXNwb25zZVR5cGU9J2NvZGUnXSBPcGVuSWQgcmVzcG9uc2UgdHlwZS4gVGhlIGRlZmF1bHQgaXMgYGNvZGVgIChDb2RlIEZsb3csIGludm9sdmluZyB0aGUgZnJvbnQtY2hhbm5lbCBhbmQgYmFja2NoYW5uZWwpLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcbiAgICovXG4gIHB1YmxpYyBhc3luYyBhdXRoZW50aWNhdGUoY2xpZW50SWQ6IHN0cmluZywgcmVkaXJlY3RVcmk6IHN0cmluZywgc2NvcGU6IE9wZW5JZFNjb3BlUGFyc2VyLCBzb3VuZEVtaXR0ZXI6IFNvdW5kRW1pdHRlciwgbmF2aWdhdG9yOiBOYXZpZ2F0b3IsIG9yaWdpbj86IHN0cmluZywgc3RhdGU/OiBzdHJpbmcsIG5vbmNlPzogc3RyaW5nLCByZXNwb25zZVR5cGUgPSAnY29kZScpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5fZ2VvUHJvdmlkZXIgJiYgIXRoaXMuX2NhY2hlZEdlbykge1xuICAgICAgdGhpcy5fY2FjaGVkR2VvID0gYXdhaXQgdGhpcy5fZ2VvUHJvdmlkZXIuZ2V0R2VvKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHRoaXMuY3JlYXRlU2Vzc2lvbihjbGllbnRJZCwgdGhpcy5fY2FjaGVkR2VvLCBvcmlnaW4pO1xuICAgIGNvbnN0IHNvdW5kID0gYXdhaXQgdGhpcy5nZXRPVFBTb3VuZChzZXNzaW9uKTtcblxuICAgIGNvbnN0IGF1dGhlbnRpY2F0ZVVybCA9IHRoaXMuZ2V0QXV0aGVudGljYXRpb25FbmRwb2ludFVybChzZXNzaW9uLCBzY29wZSwgY2xpZW50SWQsIHJlZGlyZWN0VXJpLCBzdGF0ZSwgbm9uY2UsIHJlc3BvbnNlVHlwZSk7XG5cbiAgICBjb25zb2xlLmluZm8oYE5hdmlnYXRpbmcgdG8gJHthdXRoZW50aWNhdGVVcmx9LmApO1xuXG4gICAgYXdhaXQgbmF2aWdhdG9yLm5hdmlnYXRlKGF1dGhlbnRpY2F0ZVVybCk7XG5cbiAgICBhd2FpdCB0aGlzLl90aW1lb3V0KDEwMDApO1xuXG4gICAgY29uc29sZS5pbmZvKGBTb3VuZCBlbWl0dGluZy5gKVxuXG4gICAgYXdhaXQgc291bmRFbWl0dGVyLmVtaXQoc291bmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byBBdXRoZW50aWNhdGlvbiBFbmRwb2ludCBhbmQgcmV0dXJucyBhIHNvdW5kLiBZb3UgaGF2ZSB0byBlbWl0IGl0LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50SWQgUHVibGljIGNsaWVudCBJRCBnZW5lcmF0ZWQgZHVyaW5nIGNyZWF0aW5nIHRoZSBhY2NvdW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVkaXJlY3RVcmkgUmVkaXJlY3QgVVJJIHRvIHdoaWNoIHRoZSByZXNwb25zZSB3aWxsIGJlIHNlbnQuIElmIHRoZSB2YWx1ZSBpcyBub3Qgd2hpdGVsaXN0ZWQgdGhlbiB0aGUgcmVxdWVzdCB3aWxsIGZhaWwuXG4gICAqIEBwYXJhbSB7T3BlbklkU2NvcGVQYXJzZXJ9IHNjb3BlIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLlxuICAgKiAgICBPbmNlIHRoZSB1c2VyIGF1dGhvcml6ZXMgdGhlIHJlcXVlc3RlZCBzY29wZXMsIHRoZSBjbGFpbXMgYXJlIHJldHVybmVkIGluIGFuIElEIFRva2VuLlxuICAgKiBAcGFyYW0ge05hdmlnYXRvcn0gbmF2aWdhdG9yIENsYXNzIGRlc2NyaWJlcyBhbiBhY3Rpb24gdGhhdCB3aWxsIGJlIGRvbmUgdG8gQXV0aGVudGljYXRpb24gVVJMLiBGb3IgYnJvd3NlcnMgaXQgd2lsbCBiZSBhIHBhZ2UgcmVkaXJlY3Rpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JpZ2luXSBUaGUgb3JpZ2luIGRvbWFpbiBvZiB0aGUgcmVxdWVzdCBiZWluZyBtYWRlLiBJZiBgbnVsbGAgdGhlbiB0aGUgUmVmZXJlciBoZWFkZXIgd2lsbCBiZSB1c2VkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3N0YXRlXVxuICAgKiAgICBSRUNPTU1FTkRFRC4gT3BhcXVlIHZhbHVlIHVzZWQgdG8gbWFpbnRhaW4gc3RhdGUgYmV0d2VlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIGNhbGxiYWNrLiBUeXBpY2FsbHksIENTUkYsIFhTUkYgbWl0aWdhdGlvbiBpcyBkb25lIGJ5IGNyeXB0b2dyYXBoaWNhbGx5IGJpbmRpbmcgdGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIHdpdGggYSBicm93c2VyIGNvb2tpZS5cbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBwcmVzZXJ2ZXMgc29tZSBzdGF0ZSBvYmplY3Qgc2V0IGJ5IHRoZSBjbGllbnQgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgYW5kIG1ha2VzIGl0IGF2YWlsYWJsZSB0byB0aGUgY2xpZW50IGluIHRoZSByZXNwb25zZS5cbiAgICogICAgSXTigJlzIHRoYXQgdW5pcXVlIGFuZCBub24tZ3Vlc3NhYmxlIHZhbHVlIHRoYXQgYWxsb3dzIHlvdSB0byBwcmV2ZW50IHRoZSBhdHRhY2sgYnkgY29uZmlybWluZyBpZiB0aGUgdmFsdWUgY29taW5nIGZyb20gdGhlIHJlc3BvbnNlIG1hdGNoZXMgdGhlIG9uZSB5b3UgZXhwZWN0ICh0aGUgb25lIHlvdSBnZW5lcmF0ZWQgd2hlbiBpbml0aWF0aW5nIHRoZSByZXF1ZXN0KS5cbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBpcyBhIHN0cmluZyBzbyB5b3UgY2FuIGVuY29kZSBhbnkgb3RoZXIgaW5mb3JtYXRpb24gaW4gaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm9uY2VdXG4gICAqICAgIFN0cmluZyB2YWx1ZSB1c2VkIHRvIGFzc29jaWF0ZSBhIENsaWVudCBzZXNzaW9uIHdpdGggYW4gSUQgVG9rZW4sIGFuZCB0byBtaXRpZ2F0ZSByZXBsYXkgYXR0YWNrcy5cbiAgICogICAgVGhlIHZhbHVlIGlzIHBhc3NlZCB0aHJvdWdoIHVubW9kaWZpZWQgZnJvbSB0aGUgQXV0aGVudGljYXRpb24gUmVxdWVzdCB0byB0aGUgSUQgVG9rZW4uXG4gICAqICAgIFN1ZmZpY2llbnQgZW50cm9weSBNVVNUIGJlIHByZXNlbnQgaW4gdGhlIG5vbmNlIHZhbHVlcyB1c2VkIHRvIHByZXZlbnQgYXR0YWNrZXJzIGZyb20gZ3Vlc3NpbmcgdmFsdWVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3Jlc3BvbnNlVHlwZT0nY29kZSddIE9wZW5JZCByZXNwb25zZSB0eXBlLiBUaGUgZGVmYXVsdCBpcyBgY29kZWAgKENvZGUgRmxvdywgaW52b2x2aW5nIHRoZSBmcm9udC1jaGFubmVsIGFuZCBiYWNrY2hhbm5lbCkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxuICAgKi9cbiAgcHVibGljIGFzeW5jIG5hdmlnYXRlQW5kR2V0VGhlU291bmQoY2xpZW50SWQ6IHN0cmluZywgcmVkaXJlY3RVcmk6IHN0cmluZywgc2NvcGU6IE9wZW5JZFNjb3BlUGFyc2VyLCBuYXZpZ2F0b3I6IE5hdmlnYXRvciwgb3JpZ2luPzogc3RyaW5nLCBzdGF0ZT86IHN0cmluZywgbm9uY2U/OiBzdHJpbmcsIHJlc3BvbnNlVHlwZSA9ICdjb2RlJyk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcbiAgICBpZiAodGhpcy5fZ2VvUHJvdmlkZXIgJiYgIXRoaXMuX2NhY2hlZEdlbykge1xuICAgICAgdGhpcy5fY2FjaGVkR2VvID0gYXdhaXQgdGhpcy5fZ2VvUHJvdmlkZXIuZ2V0R2VvKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHRoaXMuY3JlYXRlU2Vzc2lvbihjbGllbnRJZCwgdGhpcy5fY2FjaGVkR2VvLCBvcmlnaW4pO1xuICAgIGNvbnN0IHNvdW5kID0gYXdhaXQgdGhpcy5nZXRPVFBTb3VuZChzZXNzaW9uKTtcblxuICAgIGNvbnN0IGF1dGhlbnRpY2F0ZVVybCA9IHRoaXMuZ2V0QXV0aGVudGljYXRpb25FbmRwb2ludFVybChzZXNzaW9uLCBzY29wZSwgY2xpZW50SWQsIHJlZGlyZWN0VXJpLCBzdGF0ZSwgbm9uY2UsIHJlc3BvbnNlVHlwZSk7XG5cbiAgICBjb25zb2xlLmluZm8oYE5hdmlnYXRpbmcgdG8gJHthdXRoZW50aWNhdGVVcmx9LmApO1xuXG4gICAgYXdhaXQgbmF2aWdhdG9yLm5hdmlnYXRlKGF1dGhlbnRpY2F0ZVVybCk7XG5cbiAgICBhd2FpdCB0aGlzLl90aW1lb3V0KHRoaXMuX2RlbGF5TXMpO1xuXG4gICAgcmV0dXJuIHNvdW5kO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGxvZ2luVGhyb3VnaEN5YmVydXNLZXlEYXNoYm9hcmQob3B0aW9uczogTG9naW5PcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgY2xpZW50X2lkOiBvcHRpb25zLmNsaWVudElkLFxuICAgICAgc2NvcGU6IG9wdGlvbnMuc2NvcGUuZ2V0VmFsdWUoKSxcbiAgICAgIHJlZGlyZWN0X3VyaTogb3B0aW9ucy5yZWRpcmVjdFVyaSxcbiAgICAgIHJlc3BvbnNlX3R5cGU6IG9wdGlvbnMucmVzcG9uc2VUeXBlLFxuICAgICAgc3RhdGU6IG9wdGlvbnMuc3RhdGUsXG4gICAgICBub25jZTogb3B0aW9ucy5ub25jZSxcbiAgICAgIGRpc3BsYXk6IG9wdGlvbnMuZGlzcGxheSB8fCAncGFnZScsXG4gICAgICBwcm9tcHQ6IG9wdGlvbnMucHJvbXB0LFxuICAgICAgdGhlbWU6IG9wdGlvbnMudGhlbWUsXG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zLnN0YXRlKSB7XG4gICAgICBkYXRhWydzdGF0ZSddID0gb3B0aW9ucy5zdGF0ZTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5ub25jZSkge1xuICAgICAgZGF0YVsnbm9uY2UnXSA9IG9wdGlvbnMubm9uY2U7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCh0aGlzLl9nZXRVcmwoJ2F1dGhlbnRpY2F0ZScpKTtcblxuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKHBhcmFtZXRlck5hbWUpID0+IHtcbiAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKHBhcmFtZXRlck5hbWUsIGRhdGFbcGFyYW1ldGVyTmFtZV0pO1xuICAgIH0pO1xuXG4gICAgY29uc29sZS5pbmZvKGBOYXZpZ2F0aW5nIHRvICR7dXJsLmhyZWZ9LmApO1xuXG4gICAgYXdhaXQgb3B0aW9ucy5uYXZpZ2F0b3IubmF2aWdhdGUodXJsLmhyZWYpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VXJsKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChuZXcgVVJMKHBhdGgsIHRoaXMuX2FwaVVybCkpLmhyZWY7XG4gIH1cblxuICBwcml2YXRlIF9nZXRVcmxFbmNvZGVkQm9keShkYXRhOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5yZWR1Y2U8c3RyaW5nW10+KChyZXN1bHQ6IHN0cmluZ1tdLCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZW5jb2RlZEtleSA9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpO1xuICAgICAgY29uc3QgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XG5cbiAgICAgIHJlc3VsdC5wdXNoKGAke2VuY29kZWRLZXl9PSR7ZW5jb2RlZFZhbHVlfWApO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIFtdKS5qb2luKFwiJlwiKVxuICB9XG5cbiAgcHJpdmF0ZSBfdGltZW91dChtczogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBTZXNzaW9uUmVzcG9uc2Uge1xuICBzZXNzaW9uX2lkOiBzdHJpbmc7XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbn1cblxuXG4vKipcbiAqIERhdGEgY2xhc3MgcmVwcmVzZW50aW5nIGEgQ3liZXJ1cyBLZXkgc2Vzc2lvbi5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgU2Vzc2lvblxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvbiB7XG4gIC8qKlxuICAgKiBTZXNzaW9uJ3MgdW5pcXVlIGlkZW50aWZpZXIuIEl0J3MgdmFsaWQgdXAgdG8gMjBzLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgU2Vzc2lvblxuICAgKi9cbiAgcHVibGljIHNlc3Npb25JZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIFVUQyBkYXRlIHJlcHJlc2VudGluZyBhIGRhdGUgKGFuZCB0aW1lKSB3aGVuIGEgc2Vzc2lvbiBoYXMgYmVlbiBjcmVhdGVkLlxuICAgKlxuICAgKiBAdHlwZSB7RGF0ZX1cbiAgICogQG1lbWJlcm9mIFNlc3Npb25cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVkQXQ6IERhdGU7XG5cbiAgY29uc3RydWN0b3IoanNvbjogU2Vzc2lvblJlc3BvbnNlKSB7XG4gICAgdGhpcy5zZXNzaW9uSWQgPSBqc29uLnNlc3Npb25faWQ7XG4gICAgdGhpcy5jcmVhdGVkQXQgPSBuZXcgRGF0ZShqc29uLmNyZWF0ZWRfYXQpO1xuICB9XG59IiwiLyoqXG4gKiBBbiBhYnN0cmFjdGlvbiBmb3IgYSB0YWtlbiBnZW9sb2NhdGlvbiBtZWFzdXJlbWVudC5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgR2VvbG9jYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEdlb2xvY2F0aW9uIHtcbiAgcHJpdmF0ZSBfbGF0aXR1ZGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbG9uZ2l0dWRlOiBudW1iZXI7XG4gIHByaXZhdGUgX2FjY3VyYWN5OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IobGF0aXR1ZGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIsIGFjY3VyYWN5PzogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGF0aXR1ZGUgPSBsYXRpdHVkZTtcbiAgICB0aGlzLl9sb25naXR1ZGUgPSBsb25naXR1ZGU7XG4gICAgdGhpcy5fYWNjdXJhY3kgPSBhY2N1cmFjeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBsYXRpdHVkZS5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBHZW9sb2NhdGlvblxuICAgKi9cbiAgZ2V0IGxhdGl0dWRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdGl0dWRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBsb25naXR1ZGUuXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgR2VvbG9jYXRpb25cbiAgICovXG4gIGdldCBsb25naXR1ZGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbG9uZ2l0dWRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYW4gYWNjdXJhY3kgb2YgYSBtZWFzdXJlbWVudC5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBHZW9sb2NhdGlvblxuICAgKi9cbiAgZ2V0IGFjY3VyYWN5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY3VyYWN5O1xuICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9zZGsvYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2VtaXR0ZXIvc291bmRFbWl0dGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2VtaXR0ZXIvd2ViQXVkaW9Tb3VuZEVtaXR0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvZXJyb3JzJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL25hdmlnYXRvci9uYXZpZ2F0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvbmF2aWdhdG9yL3JlZGlyZWN0TmF2aWdhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL3Njb3BlUGFyc2VyJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL3Nlc3Npb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvZ2VvUHJvdmlkZXIvZ2VvJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2dlb1Byb3ZpZGVyL2dlb1Byb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2dlb1Byb3ZpZGVyL2h0bWw1R2VvUHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvbG9naW5PcHRpb25zJztcblxuaW1wb3J0IHsgQ3liZXJ1c0tleUFQSSB9IGZyb20gJy4vc2RrL2FwaSc7XG5leHBvcnQgZGVmYXVsdCBDeWJlcnVzS2V5QVBJOyIsImltcG9ydCB7IFNvdW5kRW1pdHRlciB9IGZyb20gJy4vc291bmRFbWl0dGVyJztcbmltcG9ydCB7IE9UUEdlbmVyYXRpb25FcnJvciB9IGZyb20gJy4uL2Vycm9ycyc7XG5cbi8qKlxuICogQ2xhc3MgdXNlcyBhIEhUTUw1J3MgQXVkaW9Db250ZXh0IGludGVyZmFjZSB0byBwbGF5IGEgc291bmQuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIFdlYkF1ZGlvU291bmRFbWl0dGVyXG4gKiBAaW1wbGVtZW50cyB7U291bmRFbWl0dGVyfVxuICovXG5leHBvcnQgY2xhc3MgV2ViQXVkaW9Tb3VuZEVtaXR0ZXIgaW1wbGVtZW50cyBTb3VuZEVtaXR0ZXIge1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhIHNvdW5kIHRocm91Z2ggSFRNTDUncyBBdWRpb0NvbnRleHQgaW50ZXJmYWNlLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBzb3VuZCBBIGJpbmFyeSByZWNvcmQgb2YgdGhlIHNvdW5kIHlvdSB3YW50IHRvIHBsYXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKiBAbWVtYmVyb2YgV2ViQXVkaW9Tb3VuZEVtaXR0ZXJcbiAgICovXG4gIGFzeW5jIGVtaXQoc291bmQ6IEFycmF5QnVmZmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IGNvbnRleHQ6IEF1ZGlvQ29udGV4dDtcblxuICAgIHRyeSB7XG4gICAgICBjb250ZXh0ID0gbmV3ICh3aW5kb3dbJ0F1ZGlvQ29udGV4dCddIHx8IHdpbmRvd1snd2Via2l0QXVkaW9Db250ZXh0J10pKCk7XG4gICAgfSBjYXRjaCB7XG5cbiAgICAgIHRocm93IG5ldyBPVFBHZW5lcmF0aW9uRXJyb3IoJ290cF9nZW5lcmF0aW9uX2ZhaWx1cmUnLCAnQXVkaW9Db250ZXh0IGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2UgPSBjb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuXG4gICAgY29udGV4dC5kZWNvZGVBdWRpb0RhdGEoc291bmQsIChkZWNvZGVkRGF0YSkgPT4ge1xuICAgICAgc291cmNlLmJ1ZmZlciA9IGRlY29kZWREYXRhO1xuICAgICAgc291cmNlLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgICBzb3VyY2Uuc3RhcnQoMCk7XG4gICAgfSk7XG5cbiAgICBhd2FpdCAobmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHNvdXJjZS5vbmVuZGVkID0gcmVzb2x2ZTtcbiAgICB9KSk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgTWlzc2luZ1JlZGlyZWN0VXJpIH0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7IE5hdmlnYXRvciB9IGZyb20gJy4vbmF2aWdhdG9yJztcblxuXG4vKipcbiAqIENsYXNzIGRlc2NyaWJlcyBob3cgT3BlbklEJ3MgQXV0aGVudGljYXRpb24gRW5kcG9pbnQgd2lsbCBiZSBoYW5kbGVkLlxuICogVGhpcyBjbGFzcyBpcyB0aGlnaHRlbiB0byBhIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvdXIgZm9yIE9wZW5JRCBwcm90b2NvbCAtIGEgcmVkaXJlY3Rpb24uXG4gKiBXaGljaCBtZWFucyB0aGF0IHlvdXIgVVJMIHdpbGwgYmUgdGVtcG9yYXJpbHkgcmVwbGFjZWQgYnkgdGhlIEF1dGhlbnRpY2F0aW9uIEVuZHBvaW50XG4gKiBhbmQgcmVwbGFjZWQgYWdhaW4gYnkgaXRzIHJlc3BvbnNlIC0gSFRUUCAzMDIuIFRoZSBuZXcgbG9jYXRpb24gd2lsbCBiZSB0aGUgb25lIHlvdSBkZWZpbmVkIGFzIHlvdXIgYHJlZGlyZWN0X3VyaWAuXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBSZWRpcmVjdE5hdmlnYXRvclxuICogQGltcGxlbWVudHMge05hdmlnYXRvcn1cbiAqL1xuZXhwb3J0IGNsYXNzIFJlZGlyZWN0TmF2aWdhdG9yIGltcGxlbWVudHMgTmF2aWdhdG9yIHtcbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIEF1dGhlbnRpY2F0aW9uIEVuZHBvaW50IFVSTC5cbiAgICogQHRocm93cyBNaXNzaW5nUmVkaXJlY3RVcmlcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqIEBtZW1iZXJvZiBSZWRpcmVjdE5hdmlnYXRvclxuICAgKi9cbiAgYXN5bmMgbmF2aWdhdGUodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXVybCkge1xuICAgICAgdGhyb3cgbmV3IE1pc3NpbmdSZWRpcmVjdFVyaSgpXG4gICAgfVxuXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn0iLCJcbi8qKlxuICogSGFuZHkgY2xhc3MgdG8gZGVmaW5lIGFuIE9wZW5JRCdzIHNjb3BlLlxuICogU2NvcGVzIGFyZSB1c2VkIGJ5IGFuIGFwcGxpY2F0aW9uIGR1cmluZyBhdXRoZW50aWNhdGlvbiB0byBhdXRob3JpemUgYWNjZXNzIHRvIGEgdXNlcidzIGRldGFpbHMsXG4gKiBsaWtlIG5hbWUgYW5kIHBpY3R1cmUuIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLiBcbiAqIFxuICogWW91IGNhbiB1c2UgYWRkaXRpb25hbCB2YWx1ZXMgYGVtYWlsYCAoYWRkIGEgdXNlcidzIGVtYWlsIGNsYWltKSBhbmQgYHByb2ZpbGVgIChhZGQgdXNlciBmaXJzdCBhbmQgbGFzdCBuYW1lKS5cbiAqIFxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3Qgc2NvcGVQYXJzZXIgPSBuZXcgT3BlbklkU2NvcGVQYXJzZXIoKTtcbiAqIGNvbnN0IHNjb3BlID0gc2NvcGVQYXJzZXIuYWRkRW1haWwoKS5hZGRQcm9maWxlKCkuZ2V0VmFsdWUoKTtcbiAqIGBgYFxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBPcGVuSWRTY29wZVBhcnNlclxuICovXG5leHBvcnQgY2xhc3MgT3BlbklkU2NvcGVQYXJzZXIge1xuICBwcml2YXRlIF9zY29wZTogQXJyYXk8c3RyaW5nPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9zY29wZSA9IFsnb3BlbmlkJ107XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBgZW1haWxgIHNjb3BlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICogQG1lbWJlcm9mIE9wZW5JZFNjb3BlUGFyc2VyXG4gICAqL1xuICBwdWJsaWMgYWRkRW1haWwoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuX3Njb3BlLmluY2x1ZGVzKCdlbWFpbCcpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9zY29wZS5wdXNoKCdlbWFpbCcpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBgcHJvZmlsZWAgc2NvcGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHt0aGlzfVxuICAgKiBAbWVtYmVyb2YgT3BlbklkU2NvcGVQYXJzZXJcbiAgICovXG4gIHB1YmxpYyBhZGRQcm9maWxlKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9zY29wZS5pbmNsdWRlcygncHJvZmlsZScpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9zY29wZS5wdXNoKCdwcm9maWxlJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGZvcm1hdHRlZCBzY29wZSB2YWx1ZSwgZS5nLiBgb3BlbmlkIGVtYWlsYC5cbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIE9wZW5JZFNjb3BlUGFyc2VyXG4gICAqL1xuICBwdWJsaWMgZ2V0VmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcGUuam9pbignICcpO1xuICB9XG59IiwiaW1wb3J0IHsgR2VvbG9jYXRpb24gfSBmcm9tICcuL2dlbyc7XG5pbXBvcnQgeyBHZW9Qcm92aWRlciB9IGZyb20gJy4vZ2VvUHJvdmlkZXInO1xuXG5cbi8qKlxuICogQ2xhc3MgcHJvdmlkZXMgYSBnZW9sb2NhbGl6YXRpb24gbWVhc3VyZW1lbnQuXG4gKiBJdCB1c2VzIGEgSFRNTDUncyBgR2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKClgIG1ldGhvZC5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgSFRNTDVHZW9Qcm92aWRlclxuICogQGltcGxlbWVudHMge0dlb1Byb3ZpZGVyfVxuICovXG5leHBvcnQgY2xhc3MgSFRNTDVHZW9Qcm92aWRlciBpbXBsZW1lbnRzIEdlb1Byb3ZpZGVyIHtcbiAgcHJpdmF0ZSBfZW5hYmxlSGlnaEFjY3VyYWN5OiBib29sZWFuO1xuICBwcml2YXRlIF9uYXZpZ2F0b3I6IE5hdmlnYXRvcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBIVE1MNUdlb1Byb3ZpZGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtlbmFibGVIaWdoQWNjdXJhY3k9ZmFsc2VdICBGb3JjZXMgaGlnaCBhY2N1cmFjeSBvZiB0aGUgZ2VvbG9jYXRpb24uIEl0IG1heSB0YWtlIGxvbmdlci5cbiAgICogQHBhcmFtIHtOYXZpZ2F0b3J9IFtuYXZpZ2F0b3I9d2luZG93Lm5hdmlnYXRvcl1cbiAgICogQG1lbWJlcm9mIEhUTUw1R2VvUHJvdmlkZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVuYWJsZUhpZ2hBY2N1cmFjeSA9IGZhbHNlLCBuYXZpZ2F0b3I6IE5hdmlnYXRvciA9IHdpbmRvdy5uYXZpZ2F0b3IpIHtcbiAgICB0aGlzLl9lbmFibGVIaWdoQWNjdXJhY3kgPSBlbmFibGVIaWdoQWNjdXJhY3k7XG4gICAgdGhpcy5fbmF2aWdhdG9yID0gbmF2aWdhdG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBnZW9sb2NhbGl6YXRpb24gbWVhc3VyZW1lbnQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEdlb2xvY2F0aW9uPn0gR2VvbG9jYWxpemF0aW9uIG1lYXN1cmVtZW50LlxuICAgKiBAbWVtYmVyb2YgSFRNTDVHZW9Qcm92aWRlclxuICAgKi9cbiAgYXN5bmMgZ2V0R2VvKCk6IFByb21pc2U8R2VvbG9jYXRpb24+IHtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCB0aGlzLl9nZXRHZW8odGhpcy5fZW5hYmxlSGlnaEFjY3VyYWN5KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIEUuZy4gdXNlciBkaWRuJ3QgYWdyZWUgb24gZ2VvbGljYWxpemF0aW9uLlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb29yZHMgfSA9IHJlc3VsdDtcblxuICAgIHJldHVybiBuZXcgR2VvbG9jYXRpb24oY29vcmRzLmxhdGl0dWRlLCBjb29yZHMubG9uZ2l0dWRlLCBjb29yZHMuYWNjdXJhY3kpO1xuICB9XG5cbiAgX2dldEdlbyhlbmFibGVIaWdoQWNjdXJhY3k6IGJvb2xlYW4pOiBQcm9taXNlPFBvc2l0aW9uPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBlbmFibGVIaWdoQWNjdXJhY3k6ICR7ZW5hYmxlSGlnaEFjY3VyYWN5fWApO1xuXG4gICAgICB0aGlzLl9uYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHJlc29sdmUsIHJlamVjdCwgeyBlbmFibGVIaWdoQWNjdXJhY3kgfSlcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3IvbmF2aWdhdG9yJztcbmltcG9ydCB7IE9wZW5JZFNjb3BlUGFyc2VyIH0gZnJvbSAnLi9zY29wZVBhcnNlcic7XG5cblxuLyoqXG4gKiBMb2dpbiBvcHRpb25zLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBMb2dpbk9wdGlvbnNcbiAqL1xuZXhwb3J0IGNsYXNzIExvZ2luT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50SWQgUHVibGljIGNsaWVudCBJRCBnZW5lcmF0ZWQgZHVyaW5nIGNyZWF0aW5nIHRoZSBhY2NvdW50LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBjbGllbnRJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVkaXJlY3RVcmkgUmVkaXJlY3QgVVJJIHRvIHdoaWNoIHRoZSByZXNwb25zZSB3aWxsIGJlIHNlbnQuIElmIHRoZSB2YWx1ZSBpcyBub3Qgd2hpdGVsaXN0ZWQgdGhlbiB0aGUgcmVxdWVzdCB3aWxsIGZhaWwuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IHJlZGlyZWN0VXJpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T3BlbklkU2NvcGVQYXJzZXJ9IHNjb3BlIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLlxuICAgKiAgICBPbmNlIHRoZSB1c2VyIGF1dGhvcml6ZXMgdGhlIHJlcXVlc3RlZCBzY29wZXMsIHRoZSBjbGFpbXMgYXJlIHJldHVybmVkIGluIGFuIElEIFRva2VuLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBzY29wZTogT3BlbklkU2NvcGVQYXJzZXI7XG5cbiAgLyoqXG4gICogQHBhcmFtIHtOYXZpZ2F0b3J9IG5hdmlnYXRvciBDbGFzcyBkZXNjcmliZXMgYW4gYWN0aW9uIHRoYXQgd2lsbCBiZSBkb25lIHRvIEF1dGhlbnRpY2F0aW9uIFVSTC4gRm9yIGJyb3dzZXJzIGl0IHdpbGwgYmUgYSBwYWdlIHJlZGlyZWN0aW9uLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBuYXZpZ2F0b3I6IE5hdmlnYXRvcjtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmlnaW5dIFRoZSBvcmlnaW4gZG9tYWluIG9mIHRoZSByZXF1ZXN0IGJlaW5nIG1hZGUuIElmIGBudWxsYCB0aGVuIHRoZSBSZWZlcmVyIGhlYWRlciB3aWxsIGJlIHVzZWQuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IG9yaWdpbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3N0YXRlXVxuICAgKiAgICBSRUNPTU1FTkRFRC4gT3BhcXVlIHZhbHVlIHVzZWQgdG8gbWFpbnRhaW4gc3RhdGUgYmV0d2VlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIGNhbGxiYWNrLiBUeXBpY2FsbHksIENTUkYsIFhTUkYgbWl0aWdhdGlvbiBpcyBkb25lIGJ5IGNyeXB0b2dyYXBoaWNhbGx5IGJpbmRpbmcgdGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIHdpdGggYSBicm93c2VyIGNvb2tpZS5cbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBwcmVzZXJ2ZXMgc29tZSBzdGF0ZSBvYmplY3Qgc2V0IGJ5IHRoZSBjbGllbnQgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgYW5kIG1ha2VzIGl0IGF2YWlsYWJsZSB0byB0aGUgY2xpZW50IGluIHRoZSByZXNwb25zZS5cbiAgICogICAgSXTigJlzIHRoYXQgdW5pcXVlIGFuZCBub24tZ3Vlc3NhYmxlIHZhbHVlIHRoYXQgYWxsb3dzIHlvdSB0byBwcmV2ZW50IHRoZSBhdHRhY2sgYnkgY29uZmlybWluZyBpZiB0aGUgdmFsdWUgY29taW5nIGZyb20gdGhlIHJlc3BvbnNlIG1hdGNoZXMgdGhlIG9uZSB5b3UgZXhwZWN0ICh0aGUgb25lIHlvdSBnZW5lcmF0ZWQgd2hlbiBpbml0aWF0aW5nIHRoZSByZXF1ZXN0KS5cbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBpcyBhIHN0cmluZyBzbyB5b3UgY2FuIGVuY29kZSBhbnkgb3RoZXIgaW5mb3JtYXRpb24gaW4gaXQuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IHN0YXRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm9uY2VdXG4gICAqICAgIFN0cmluZyB2YWx1ZSB1c2VkIHRvIGFzc29jaWF0ZSBhIENsaWVudCBzZXNzaW9uIHdpdGggYW4gSUQgVG9rZW4sIGFuZCB0byBtaXRpZ2F0ZSByZXBsYXkgYXR0YWNrcy5cbiAgICogICAgVGhlIHZhbHVlIGlzIHBhc3NlZCB0aHJvdWdoIHVubW9kaWZpZWQgZnJvbSB0aGUgQXV0aGVudGljYXRpb24gUmVxdWVzdCB0byB0aGUgSUQgVG9rZW4uXG4gICAqICAgIFN1ZmZpY2llbnQgZW50cm9weSBNVVNUIGJlIHByZXNlbnQgaW4gdGhlIG5vbmNlIHZhbHVlcyB1c2VkIHRvIHByZXZlbnQgYXR0YWNrZXJzIGZyb20gZ3Vlc3NpbmcgdmFsdWVzLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBub25jZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3Jlc3BvbnNlVHlwZT0nY29kZSddIE9wZW5JZCByZXNwb25zZSB0eXBlLiBUaGUgZGVmYXVsdCBpcyBgY29kZWAgKENvZGUgRmxvdywgaW52b2x2aW5nIHRoZSBmcm9udC1jaGFubmVsIGFuZCBiYWNrY2hhbm5lbCkuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IHJlc3BvbnNlVHlwZTogc3RyaW5nID0gJ2NvZGUnO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheSBJdCBzcGVjaWZpZXMgaG93IHRoZSBBdXRob3JpemF0aW9uIFNlcnZlciBkaXNwbGF5cyB0aGUgYXV0aGVudGljYXRpb24gYW5kIGNvbnNlbnQgdXNlciBpbnRlcmZhY2UgcGFnZXMgdG8gdGhlIEVuZC1Vc2VyLlxuICAgKiAgIERlZmF1bHQgYW5kIHRoZSBvbmx5IHN1cHBvcnRlZCB2YWx1ZSBpcyBgcGFnZWAuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IGRpc3BsYXk6IHN0cmluZyA9ICdwYWdlJ1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvbXB0IFNwYWNlIGRlbGltaXRlZCwgY2FzZSBzZW5zaXRpdmUgbGlzdCBvZiBzdHJpbmcgdmFsdWVzIHRoYXQgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIEF1dGhvcml6YXRpb24gU2VydmVyXG4gICAqICAgcHJvbXB0cyB0aGUgRW5kLVVzZXIgZm9yIHJlYXV0aGVudGljYXRpb24gYW5kIGNvbnNlbnQuIFRoZSBkZWZpbmVkIHZhbHVlcyBhcmU6IGBsb2dpbmAsIGBub25lYC5cbiAgICogICBEZWZhdWx0IGlzIGBsb2dpbixub25lYC4gQ2FuJ3QgYmUgY2hhbmdlZCBmb3Igbm93LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBwcm9tcHQ6IHN0cmluZyA9ICdsb2dpbixub25lJ1xuXG4gIC8qKlxuICAgKiBUaGVtZSBvZiB0aGUgbG9naW4gcGFnZSBvZiBDeWJlcnVzIEtleSBEYXNoYm9hcmQuIERlZmF1bHQgaXMgYGRlZmF1bHRgLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSB0aGVtZTogc3RyaW5nID0gJ2RlZmF1bHQnO1xufSJdLCJzb3VyY2VSb290IjoiIn0=