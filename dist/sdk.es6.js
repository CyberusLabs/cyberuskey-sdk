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
                display: options.display,
                prompt: options.prompt,
                theme: options.theme,
            };
            if (options.state) {
                data['state'] = options.state;
            }
            if (options.nonce) {
                data['nonce'] = options.nonce;
            }
            const url = new URL(this._getUrl('authorize'));
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

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(1));
__export(__webpack_require__(5));
__export(__webpack_require__(0));
__export(__webpack_require__(6));
__export(__webpack_require__(7));
__export(__webpack_require__(2));
__export(__webpack_require__(3));
__export(__webpack_require__(8));
__export(__webpack_require__(9));
const api_1 = __webpack_require__(1);
exports.default = api_1.CyberusKeyAPI;


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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2Vycm9ycy50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvYXBpLnRzIiwid2VicGFjazovL2N5YmVydXNrZXktc2RrLy4vc3JjL3Nkay9zZXNzaW9uLnRzIiwid2VicGFjazovL2N5YmVydXNrZXktc2RrLy4vc3JjL3Nkay9nZW9Qcm92aWRlci9nZW8udHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2VtaXR0ZXIvd2ViQXVkaW9Tb3VuZEVtaXR0ZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL25hdmlnYXRvci9yZWRpcmVjdE5hdmlnYXRvci50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvc2NvcGVQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2dlb1Byb3ZpZGVyL2h0bWw1R2VvUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2xvZ2luT3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FB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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjeWJlcnVza2V5LXNka1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjeWJlcnVza2V5LXNka1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjeWJlcnVza2V5LXNka1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiZW51bSBFcnJvckNvZGUge1xuICB1bmRlZmluZWQgPSAxLFxuICB1bmtub3duX2Vycm9yLFxuICBzZXJ2ZXJfZXJyb3IsXG4gIHdyb25nX2pzb24sXG4gIG9wZW5hcGlfZXJyb3IsXG4gIHJlc291cmNlX25vdF9mb3VuZCxcbiAgb3RwX2dlbmVyYXRpb25fZmFpbHVyZSxcbiAgaW52YWxpZF9yZWRpcmVjdF91cmksXG4gIGludmFsaWRfY2xpZW50LFxuICB0b29fbWFueV9jYWxsc19lcnJvclxufVxuXG5jbGFzcyBDeWJlcnVzS2V5RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHByaXZhdGUgX2NvZGU6IEVycm9yQ29kZTtcblxuICBjb25zdHJ1Y3Rvcihjb2RlOiBrZXlvZiB0eXBlb2YgRXJyb3JDb2RlLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlKVxuICAgIHRoaXMuX2NvZGUgPSBFcnJvckNvZGVbY29kZV07XG4gIH1cblxuICBnZXQgY29kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBFcnJvckNvZGVbdGhpcy5fY29kZV07XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICB9XG59XG5cbmNsYXNzIFVua25vd25FcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGNvZGU6IGtleW9mIHR5cGVvZiBFcnJvckNvZGUgPSAndW5rbm93bl9lcnJvcicsIG1lc3NhZ2U6IHN0cmluZyA9ICdVbmtub3duIGVycm9yIG9jY3VyZWQuJykge1xuICAgIHN1cGVyKGNvZGUsIG1lc3NhZ2UpXG4gIH1cbn1cbmNsYXNzIFRvb01hbnlDYWxsc0Vycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHtcbiAgY29uc3RydWN0b3IoY29kZToga2V5b2YgdHlwZW9mIEVycm9yQ29kZSA9ICd0b29fbWFueV9jYWxsc19lcnJvcicsIG1lc3NhZ2U6IHN0cmluZyA9ICdZb3VcXCd2ZSBkb25lIHRvbyBtYW55IGNhbGxzLicpIHtcbiAgICBzdXBlcihjb2RlLCBtZXNzYWdlKVxuICB9XG59XG5cbmNsYXNzIE1pc3NpbmdSZWRpcmVjdFVyaSBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdpbnZhbGlkX3JlZGlyZWN0X3VyaScsICdNaXNzaW5nIHJlZGlyZWN0aW9uIFVSSS4nKTtcbiAgfVxufVxuXG5jbGFzcyBXcm9uZ0pzb25FcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cbmNsYXNzIE9wZW5BcGlFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cbmNsYXNzIFJlc291cmNlTm90Rm91bmRFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cbmNsYXNzIE9UUEdlbmVyYXRpb25FcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cbmNsYXNzIEludmFsaWRSZWRpcmVjdFVyaUVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxuY2xhc3MgSW52YWxpZENsaWVudEVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxuXG5jb25zdCBNQVBQSU5HID0ge1xuICBbRXJyb3JDb2RlLnVuZGVmaW5lZF06IFVua25vd25FcnJvcixcbiAgW0Vycm9yQ29kZS51bmtub3duX2Vycm9yXTogVW5rbm93bkVycm9yLFxuICBbRXJyb3JDb2RlLnNlcnZlcl9lcnJvcl06IFVua25vd25FcnJvcixcbiAgW0Vycm9yQ29kZS51bmRlZmluZWRdOiBXcm9uZ0pzb25FcnJvcixcbiAgW0Vycm9yQ29kZS53cm9uZ19qc29uXTogV3JvbmdKc29uRXJyb3IsXG4gIFtFcnJvckNvZGUub3BlbmFwaV9lcnJvcl06IE9wZW5BcGlFcnJvcixcbiAgW0Vycm9yQ29kZS5yZXNvdXJjZV9ub3RfZm91bmRdOiBSZXNvdXJjZU5vdEZvdW5kRXJyb3IsXG4gIFtFcnJvckNvZGUub3RwX2dlbmVyYXRpb25fZmFpbHVyZV06IE9UUEdlbmVyYXRpb25FcnJvcixcbiAgW0Vycm9yQ29kZS5pbnZhbGlkX3JlZGlyZWN0X3VyaV06IEludmFsaWRSZWRpcmVjdFVyaUVycm9yLFxuICBbRXJyb3JDb2RlLmludmFsaWRfY2xpZW50XTogSW52YWxpZENsaWVudEVycm9yLFxuICBbRXJyb3JDb2RlLnRvb19tYW55X2NhbGxzX2Vycm9yXTogVG9vTWFueUNhbGxzRXJyb3Jcbn1cblxuZnVuY3Rpb24gZXJyb3JGYWN0b3J5KGNvZGU6IGtleW9mIHR5cGVvZiBFcnJvckNvZGUsIG1lc3NhZ2U6IHN0cmluZykge1xuICBjb25zdCBlbnVtX3R5cGUgPSBFcnJvckNvZGVbY29kZV07XG4gIGNvbnN0IEVycm9yQ29uc3RydWN0b3IgPSBNQVBQSU5HW2VudW1fdHlwZV07XG5cbiAgcmV0dXJuIG5ldyBFcnJvckNvbnN0cnVjdG9yKGNvZGUsIG1lc3NhZ2UpO1xufVxuXG5leHBvcnQge1xuICBlcnJvckZhY3RvcnksXG4gIEVycm9yQ29kZSxcbiAgQ3liZXJ1c0tleUVycm9yLFxuICBVbmtub3duRXJyb3IsXG4gIFRvb01hbnlDYWxsc0Vycm9yLFxuICBXcm9uZ0pzb25FcnJvcixcbiAgT3BlbkFwaUVycm9yLFxuICBSZXNvdXJjZU5vdEZvdW5kRXJyb3IsXG4gIE9UUEdlbmVyYXRpb25FcnJvcixcbiAgTWlzc2luZ1JlZGlyZWN0VXJpXG59O1xuXG4iLCJpbXBvcnQgeyBTb3VuZEVtaXR0ZXIgfSBmcm9tICcuL2VtaXR0ZXIvc291bmRFbWl0dGVyJztcbmltcG9ydCB7IGVycm9yRmFjdG9yeSwgVW5rbm93bkVycm9yIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgR2VvbG9jYXRpb24gfSBmcm9tICcuL2dlb1Byb3ZpZGVyL2dlbyc7XG5pbXBvcnQgeyBHZW9Qcm92aWRlciB9IGZyb20gJy4vZ2VvUHJvdmlkZXIvZ2VvUHJvdmlkZXInO1xuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3IvbmF2aWdhdG9yJztcbmltcG9ydCB7IE9wZW5JZFNjb3BlUGFyc2VyIH0gZnJvbSAnLi9zY29wZVBhcnNlcic7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnLi9zZXNzaW9uJztcbmltcG9ydCB7IExvZ2luT3B0aW9ucyB9IGZyb20gJy4vbG9naW5PcHRpb25zJztcblxuXG4vKipcbiAqIEN5YmVydXMgS2V5IEFQSSB3aGljaCBhbGxvd3MgeW91IHRvIGRvIGEgZGVsZWdhdGUgbG9naW4gd2l0aCBPcGVuSWQgcHJvdG9jb2wuXG4gKlxuICogQGNsYXNzIEN5YmVydXNLZXlBUElcbiAqL1xuZXhwb3J0IGNsYXNzIEN5YmVydXNLZXlBUEkge1xuICBwcml2YXRlIF9hcGlVcmw6IFVSTDtcbiAgcHJpdmF0ZSBfZ2VvUHJvdmlkZXI6IEdlb1Byb3ZpZGVyO1xuICBwcml2YXRlIF9jYWNoZWRHZW86IEdlb2xvY2F0aW9uO1xuICBwcml2YXRlIF9kZWxheU1zOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDeWJlcnVzS2V5QVBJLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaG9zdFVybCBCYXNlIFVSTCBvZiB0aGUgaG9zdCBzZXJ2ZXIsIGUuZy4gYGh0dHBzOi8vcHJvZHVjdGlvbi1hcGkuY3liZXJ1c2tleS5jb21gXG4gICAqIEBwYXJhbSB7R2VvUHJvdmlkZXJ9IFtnZW9Qcm92aWRlcl0gR2VvbG9jYWxpemF0aW9uIHByb3ZpZGVyLiBVc2Ugc3BlY2lmaWMgaW1wbGVtZW50YXRpb24gbGlrZSBgSFRNTDVHZW9Qcm92aWRlcmAuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXlNcz02MDBdIERlbGF5IChtcykgYmV0d2VlbiBtYWtpbmcgYW4gQXV0aGVudGljYXRpb24gcmVxdWVzdCBhbmQgYSBzb3VuZCBwbGF5aW5nLlxuICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxuICAgKi9cbiAgY29uc3RydWN0b3IoaG9zdFVybDogc3RyaW5nLCBnZW9Qcm92aWRlcj86IEdlb1Byb3ZpZGVyLCBkZWxheU1zOiBudW1iZXIgPSA2MDApIHtcbiAgICB0aGlzLl9hcGlVcmwgPSBuZXcgVVJMKCcvYXBpL3YyLycsIGhvc3RVcmwpO1xuICAgIHRoaXMuX2dlb1Byb3ZpZGVyID0gZ2VvUHJvdmlkZXI7XG4gICAgdGhpcy5fZGVsYXlNcyA9IGRlbGF5TXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgQ3liZXJ1cyBLZXkgc2Vzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIFB1YmxpYyBjbGllbnQgSUQgZ2VuZXJhdGVkIGR1cmluZyBjcmVhdGluZyB0aGUgYWNjb3VudC5cbiAgICogQHBhcmFtIHtHZW9sb2NhdGlvbn0gW2dlb10gR2l2ZSBhIHZhbHVlIGlmIHlvdSB3YW50IHRvIHBhc3Mgb3B0aW9uYWwgZ2VvbG9jYXRpb24gbWVhc3VyZW1lbnQuXG4gICAqICAgIEl0IGNhbiBiZSBsYXRlciB1c2UgdG8gY29tcGFyZSBpdCBhZ2FpbnN0IHRoZSBtb2JpbGUncyBtZWFzdXJlbWVudCAoaWYgeW91IGhhdmUgc2V0IGBmYWlsX29uX2dlb19taXNtYXRjaGApLlxuICAgKiAgICBUaG9zZSBtZWFzdXJlbWVudHMgY2FuIGJlIHVzZWQgYWxzbyB0byBnZW5lcmFsIGltcHJvdmVtZW50IG9mIHRoZSBzZWN1cml0eS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmlnaW5dIFRoZSBvcmlnaW4gZG9tYWluIG9mIHRoZSByZXF1ZXN0IGJlaW5nIG1hZGUuIElmIGBudWxsYCB0aGVuIHRoZSBSZWZlcmVyIGhlYWRlciB3aWxsIGJlIHVzZWQuXG4gICAqIEB0aHJvd3MgV3JvbmdKc29uRXJyb3IsIE9wZW5BcGlFcnJvciwgUmVzb3VyY2VOb3RGb3VuZEVycm9yLCBPVFBHZW5lcmF0aW9uRXJyb3IsIFVua25vd25FcnJvclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTZXNzaW9uPn0gVGhlIEN5YmVydXMgS2V5IHNlc3Npb24uXG4gICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgY3JlYXRlU2Vzc2lvbihjbGllbnRJZDogc3RyaW5nLCBnZW8/OiBHZW9sb2NhdGlvbiwgb3JpZ2luPzogc3RyaW5nKTogUHJvbWlzZTxTZXNzaW9uPiB7XG4gICAgY29uc3QgZGF0YSA9IHsgY2xpZW50X2lkOiBjbGllbnRJZCB9O1xuXG4gICAgaWYgKGdlbykge1xuICAgICAgZGF0YVsnbGF0J10gPSBnZW8ubGF0aXR1ZGU7XG4gICAgICBkYXRhWydsbmcnXSA9IGdlby5sb25naXR1ZGU7XG4gICAgfVxuXG4gICAgaWYgKG9yaWdpbikge1xuICAgICAgZGF0YVsnb3JpZ2luJ10gPSBvcmlnaW47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLl9nZXRVcmwoJ3Nlc3Npb25zJyksIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogdGhpcy5fZ2V0VXJsRW5jb2RlZEJvZHkoZGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2sgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEgJiYganNvbi5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4gbmV3IFNlc3Npb24oanNvbi5kYXRhKTtcbiAgICB9XG5cbiAgICBpZiAoIWpzb24uZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBVbmtub3duRXJyb3IoKVxuICAgIH1cblxuICAgIHRocm93IGVycm9yRmFjdG9yeShqc29uLmVycm9yLCBqc29uLmVycm9yX2Rlc2NyaXB0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgc29uaWMgc291bmQgd2l0aCBlbWJlZGRlZCBPVFAuXG4gICAqXG4gICAqIEBwYXJhbSB7U2Vzc2lvbn0gc2Vzc2lvbiBDeWJlcnVzIEtleSdzIHNlc3Npb24gZ2VuZXJhdGVkIGJ5IGEgdXNlciBmb3IgYSBsb2dpbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXlCdWZmZXI+fSBCeXRlcyBvZiBhIHNvdW5kLlxuICAgKiBAdGhyb3dzIFJlc291cmNlTm90Rm91bmRFcnJvclxuICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxuICAgKi9cbiAgcHVibGljIGFzeW5jIGdldE9UUFNvdW5kKHNlc3Npb246IFNlc3Npb24pOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLl9nZXRVcmwoYHNlc3Npb25zLyR7c2Vzc2lvbi5zZXNzaW9uSWR9YCksIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdCc6ICdhdWRpby9tcGVnJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBidWZmZXI6IEZ1bmN0aW9uID0gcmVzcG9uc2UuYnVmZmVyIHx8IHJlc3BvbnNlLmFycmF5QnVmZmVyO1xuICAgIHJldHVybiBhd2FpdCBidWZmZXIuY2FsbChyZXNwb25zZSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBHZXRzIE9wZW5JRCdzIEF1dGhlbnRpY2F0aW9uIGVuZHBvaW50IFVSTCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gcHJvY2VzcyB0aGUgYXV0aGVudGljYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7U2Vzc2lvbn0gc2Vzc2lvbiBDeWJlcnVzIEtleSBzZXNzaW9uLlxuICAgKiBAcGFyYW0ge09wZW5JZFNjb3BlUGFyc2VyfSBzY29wZSBFYWNoIHNjb3BlIHJldHVybnMgYSBzZXQgb2YgdXNlciBhdHRyaWJ1dGVzLCB3aGljaCBhcmUgY2FsbGVkIGNsYWltcy5cbiAgICogICAgT25jZSB0aGUgdXNlciBhdXRob3JpemVzIHRoZSByZXF1ZXN0ZWQgc2NvcGVzLCB0aGUgY2xhaW1zIGFyZSByZXR1cm5lZCBpbiBhbiBJRCBUb2tlbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIFB1YmxpYyBjbGllbnQgSUQgZ2VuZXJhdGVkIGR1cmluZyBjcmVhdGluZyB0aGUgYWNjb3VudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlZGlyZWN0VXJpIFJlZGlyZWN0IFVSSSB0byB3aGljaCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSBzZW50LiBJZiB0aGUgdmFsdWUgaXMgbm90IHdoaXRlbGlzdGVkIHRoZW4gdGhlIHJlcXVlc3Qgd2lsbCBmYWlsLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3N0YXRlXVxuICAgKiAgICBSRUNPTU1FTkRFRC4gT3BhcXVlIHZhbHVlIHVzZWQgdG8gbWFpbnRhaW4gc3RhdGUgYmV0d2VlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIGNhbGxiYWNrLiBUeXBpY2FsbHksIENTUkYsIFhTUkYgbWl0aWdhdGlvbiBpcyBkb25lIGJ5IGNyeXB0b2dyYXBoaWNhbGx5IGJpbmRpbmcgdGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIHdpdGggYSBicm93c2VyIGNvb2tpZS5cbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBwcmVzZXJ2ZXMgc29tZSBzdGF0ZSBvYmplY3Qgc2V0IGJ5IHRoZSBjbGllbnQgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgYW5kIG1ha2VzIGl0IGF2YWlsYWJsZSB0byB0aGUgY2xpZW50IGluIHRoZSByZXNwb25zZS5cbiAgICogICAgSXTigJlzIHRoYXQgdW5pcXVlIGFuZCBub24tZ3Vlc3NhYmxlIHZhbHVlIHRoYXQgYWxsb3dzIHlvdSB0byBwcmV2ZW50IHRoZSBhdHRhY2sgYnkgY29uZmlybWluZyBpZiB0aGUgdmFsdWUgY29taW5nIGZyb20gdGhlIHJlc3BvbnNlIG1hdGNoZXMgdGhlIG9uZSB5b3UgZXhwZWN0ICh0aGUgb25lIHlvdSBnZW5lcmF0ZWQgd2hlbiBpbml0aWF0aW5nIHRoZSByZXF1ZXN0KS5cbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBpcyBhIHN0cmluZyBzbyB5b3UgY2FuIGVuY29kZSBhbnkgb3RoZXIgaW5mb3JtYXRpb24gaW4gaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm9uY2VdXG4gICAqICAgIFN0cmluZyB2YWx1ZSB1c2VkIHRvIGFzc29jaWF0ZSBhIENsaWVudCBzZXNzaW9uIHdpdGggYW4gSUQgVG9rZW4sIGFuZCB0byBtaXRpZ2F0ZSByZXBsYXkgYXR0YWNrcy5cbiAgICogICAgVGhlIHZhbHVlIGlzIHBhc3NlZCB0aHJvdWdoIHVubW9kaWZpZWQgZnJvbSB0aGUgQXV0aGVudGljYXRpb24gUmVxdWVzdCB0byB0aGUgSUQgVG9rZW4uXG4gICAqICAgIFN1ZmZpY2llbnQgZW50cm9weSBNVVNUIGJlIHByZXNlbnQgaW4gdGhlIG5vbmNlIHZhbHVlcyB1c2VkIHRvIHByZXZlbnQgYXR0YWNrZXJzIGZyb20gZ3Vlc3NpbmcgdmFsdWVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3Jlc3BvbnNlVHlwZT0nY29kZSddIE9wZW5JZCByZXNwb25zZSB0eXBlLiBUaGUgZGVmYXVsdCBpcyBgY29kZWAgKENvZGUgRmxvdywgaW52b2x2aW5nIHRoZSBmcm9udC1jaGFubmVsIGFuZCBiYWNrY2hhbm5lbCkuXG4gICAqIEByZXR1cm5zIE9wZW5JRCdzIEF1dGhlbnRpY2F0aW9uIGVuZHBvaW50IFVSTFxuICAgKiBAdGhyb3dzIEludmFsaWRSZWRpcmVjdFVyaUVycm9yLCBJbnZhbGlkQ2xpZW50RXJyb3IsIFJlc291cmNlTm90Rm91bmRFcnJvclxuICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxuICAgKi9cbiAgcHVibGljIGdldEF1dGhlbnRpY2F0aW9uRW5kcG9pbnRVcmwoc2Vzc2lvbjogU2Vzc2lvbiwgc2NvcGU6IE9wZW5JZFNjb3BlUGFyc2VyLCBjbGllbnRJZDogc3RyaW5nLCByZWRpcmVjdFVyaTogc3RyaW5nLCBzdGF0ZT86IHN0cmluZywgbm9uY2U/OiBzdHJpbmcsIHJlc3BvbnNlVHlwZSA9ICdjb2RlJyk6IHN0cmluZyB7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgc2Vzc2lvbl9pZDogc2Vzc2lvbi5zZXNzaW9uSWQsXG4gICAgICBjbGllbnRfaWQ6IGNsaWVudElkLFxuICAgICAgc2NvcGU6IHNjb3BlLmdldFZhbHVlKCksXG4gICAgICByZWRpcmVjdF91cmk6IHJlZGlyZWN0VXJpLFxuICAgICAgcmVzcG9uc2VfdHlwZTogcmVzcG9uc2VUeXBlXG4gICAgfTtcblxuICAgIGlmIChzdGF0ZSkge1xuICAgICAgZGF0YVsnc3RhdGUnXSA9IHN0YXRlO1xuICAgIH1cblxuICAgIGlmIChub25jZSkge1xuICAgICAgZGF0YVsnbm9uY2UnXSA9IG5vbmNlO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodGhpcy5fZ2V0VXJsKCdhdXRoZW50aWNhdGUnKSk7XG5cbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChwYXJhbWV0ZXJOYW1lKSA9PiB7XG4gICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChwYXJhbWV0ZXJOYW1lLCBkYXRhW3BhcmFtZXRlck5hbWVdKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB1cmwuaHJlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBhbiBhdXRoZW50aWNhdGlvbiB3aXRoIEN5YmVydXMgS2V5LiBcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIFB1YmxpYyBjbGllbnQgSUQgZ2VuZXJhdGVkIGR1cmluZyBjcmVhdGluZyB0aGUgYWNjb3VudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlZGlyZWN0VXJpIFJlZGlyZWN0IFVSSSB0byB3aGljaCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSBzZW50LiBJZiB0aGUgdmFsdWUgaXMgbm90IHdoaXRlbGlzdGVkIHRoZW4gdGhlIHJlcXVlc3Qgd2lsbCBmYWlsLlxuICAgKiBAcGFyYW0ge09wZW5JZFNjb3BlUGFyc2VyfSBzY29wZSBFYWNoIHNjb3BlIHJldHVybnMgYSBzZXQgb2YgdXNlciBhdHRyaWJ1dGVzLCB3aGljaCBhcmUgY2FsbGVkIGNsYWltcy5cbiAgICogICAgT25jZSB0aGUgdXNlciBhdXRob3JpemVzIHRoZSByZXF1ZXN0ZWQgc2NvcGVzLCB0aGUgY2xhaW1zIGFyZSByZXR1cm5lZCBpbiBhbiBJRCBUb2tlbi5cbiAgICogQHBhcmFtIHtTb3VuZEVtaXR0ZXJ9IHNvdW5kRW1pdHRlciBJbnRlcmZhY2Ugd2hpY2ggY2FuIHBsYXkgYSBzb3VuZC5cbiAgICogQHBhcmFtIHtOYXZpZ2F0b3J9IG5hdmlnYXRvciBDbGFzcyBkZXNjcmliZXMgYW4gYWN0aW9uIHRoYXQgd2lsbCBiZSBkb25lIHRvIEF1dGhlbnRpY2F0aW9uIFVSTC4gRm9yIGJyb3dzZXJzIGl0IHdpbGwgYmUgYSBwYWdlIHJlZGlyZWN0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29yaWdpbl0gVGhlIG9yaWdpbiBkb21haW4gb2YgdGhlIHJlcXVlc3QgYmVpbmcgbWFkZS4gSWYgYG51bGxgIHRoZW4gdGhlIFJlZmVyZXIgaGVhZGVyIHdpbGwgYmUgdXNlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0ZV1cbiAgICogICAgUkVDT01NRU5ERUQuIE9wYXF1ZSB2YWx1ZSB1c2VkIHRvIG1haW50YWluIHN0YXRlIGJldHdlZW4gdGhlIHJlcXVlc3QgYW5kIHRoZSBjYWxsYmFjay4gVHlwaWNhbGx5LCBDU1JGLCBYU1JGIG1pdGlnYXRpb24gaXMgZG9uZSBieSBjcnlwdG9ncmFwaGljYWxseSBiaW5kaW5nIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciB3aXRoIGEgYnJvd3NlciBjb29raWUuXG4gICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgcHJlc2VydmVzIHNvbWUgc3RhdGUgb2JqZWN0IHNldCBieSB0aGUgY2xpZW50IGluIHRoZSBBdXRoZW50aWNhdGlvbiByZXF1ZXN0IGFuZCBtYWtlcyBpdCBhdmFpbGFibGUgdG8gdGhlIGNsaWVudCBpbiB0aGUgcmVzcG9uc2UuXG4gICAqICAgIEl04oCZcyB0aGF0IHVuaXF1ZSBhbmQgbm9uLWd1ZXNzYWJsZSB2YWx1ZSB0aGF0IGFsbG93cyB5b3UgdG8gcHJldmVudCB0aGUgYXR0YWNrIGJ5IGNvbmZpcm1pbmcgaWYgdGhlIHZhbHVlIGNvbWluZyBmcm9tIHRoZSByZXNwb25zZSBtYXRjaGVzIHRoZSBvbmUgeW91IGV4cGVjdCAodGhlIG9uZSB5b3UgZ2VuZXJhdGVkIHdoZW4gaW5pdGlhdGluZyB0aGUgcmVxdWVzdCkuXG4gICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgaXMgYSBzdHJpbmcgc28geW91IGNhbiBlbmNvZGUgYW55IG90aGVyIGluZm9ybWF0aW9uIGluIGl0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vbmNlXVxuICAgKiAgICBTdHJpbmcgdmFsdWUgdXNlZCB0byBhc3NvY2lhdGUgYSBDbGllbnQgc2Vzc2lvbiB3aXRoIGFuIElEIFRva2VuLCBhbmQgdG8gbWl0aWdhdGUgcmVwbGF5IGF0dGFja3MuXG4gICAqICAgIFRoZSB2YWx1ZSBpcyBwYXNzZWQgdGhyb3VnaCB1bm1vZGlmaWVkIGZyb20gdGhlIEF1dGhlbnRpY2F0aW9uIFJlcXVlc3QgdG8gdGhlIElEIFRva2VuLlxuICAgKiAgICBTdWZmaWNpZW50IGVudHJvcHkgTVVTVCBiZSBwcmVzZW50IGluIHRoZSBub25jZSB2YWx1ZXMgdXNlZCB0byBwcmV2ZW50IGF0dGFja2VycyBmcm9tIGd1ZXNzaW5nIHZhbHVlcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtyZXNwb25zZVR5cGU9J2NvZGUnXSBPcGVuSWQgcmVzcG9uc2UgdHlwZS4gVGhlIGRlZmF1bHQgaXMgYGNvZGVgIChDb2RlIEZsb3csIGludm9sdmluZyB0aGUgZnJvbnQtY2hhbm5lbCBhbmQgYmFja2NoYW5uZWwpLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcbiAgICovXG4gIHB1YmxpYyBhc3luYyBhdXRoZW50aWNhdGUoY2xpZW50SWQ6IHN0cmluZywgcmVkaXJlY3RVcmk6IHN0cmluZywgc2NvcGU6IE9wZW5JZFNjb3BlUGFyc2VyLCBzb3VuZEVtaXR0ZXI6IFNvdW5kRW1pdHRlciwgbmF2aWdhdG9yOiBOYXZpZ2F0b3IsIG9yaWdpbj86IHN0cmluZywgc3RhdGU/OiBzdHJpbmcsIG5vbmNlPzogc3RyaW5nLCByZXNwb25zZVR5cGUgPSAnY29kZScpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5fZ2VvUHJvdmlkZXIgJiYgIXRoaXMuX2NhY2hlZEdlbykge1xuICAgICAgdGhpcy5fY2FjaGVkR2VvID0gYXdhaXQgdGhpcy5fZ2VvUHJvdmlkZXIuZ2V0R2VvKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHRoaXMuY3JlYXRlU2Vzc2lvbihjbGllbnRJZCwgdGhpcy5fY2FjaGVkR2VvLCBvcmlnaW4pO1xuICAgIGNvbnN0IHNvdW5kID0gYXdhaXQgdGhpcy5nZXRPVFBTb3VuZChzZXNzaW9uKTtcblxuICAgIGNvbnN0IGF1dGhlbnRpY2F0ZVVybCA9IHRoaXMuZ2V0QXV0aGVudGljYXRpb25FbmRwb2ludFVybChzZXNzaW9uLCBzY29wZSwgY2xpZW50SWQsIHJlZGlyZWN0VXJpLCBzdGF0ZSwgbm9uY2UsIHJlc3BvbnNlVHlwZSk7XG5cbiAgICBjb25zb2xlLmluZm8oYE5hdmlnYXRpbmcgdG8gJHthdXRoZW50aWNhdGVVcmx9LmApO1xuXG4gICAgYXdhaXQgbmF2aWdhdG9yLm5hdmlnYXRlKGF1dGhlbnRpY2F0ZVVybCk7XG5cbiAgICBhd2FpdCB0aGlzLl90aW1lb3V0KDEwMDApO1xuXG4gICAgY29uc29sZS5pbmZvKGBTb3VuZCBlbWl0dGluZy5gKVxuXG4gICAgYXdhaXQgc291bmRFbWl0dGVyLmVtaXQoc291bmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byBBdXRoZW50aWNhdGlvbiBFbmRwb2ludCBhbmQgcmV0dXJucyBhIHNvdW5kLiBZb3UgaGF2ZSB0byBlbWl0IGl0LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50SWQgUHVibGljIGNsaWVudCBJRCBnZW5lcmF0ZWQgZHVyaW5nIGNyZWF0aW5nIHRoZSBhY2NvdW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVkaXJlY3RVcmkgUmVkaXJlY3QgVVJJIHRvIHdoaWNoIHRoZSByZXNwb25zZSB3aWxsIGJlIHNlbnQuIElmIHRoZSB2YWx1ZSBpcyBub3Qgd2hpdGVsaXN0ZWQgdGhlbiB0aGUgcmVxdWVzdCB3aWxsIGZhaWwuXG4gICAqIEBwYXJhbSB7T3BlbklkU2NvcGVQYXJzZXJ9IHNjb3BlIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLlxuICAgKiAgICBPbmNlIHRoZSB1c2VyIGF1dGhvcml6ZXMgdGhlIHJlcXVlc3RlZCBzY29wZXMsIHRoZSBjbGFpbXMgYXJlIHJldHVybmVkIGluIGFuIElEIFRva2VuLlxuICAgKiBAcGFyYW0ge05hdmlnYXRvcn0gbmF2aWdhdG9yIENsYXNzIGRlc2NyaWJlcyBhbiBhY3Rpb24gdGhhdCB3aWxsIGJlIGRvbmUgdG8gQXV0aGVudGljYXRpb24gVVJMLiBGb3IgYnJvd3NlcnMgaXQgd2lsbCBiZSBhIHBhZ2UgcmVkaXJlY3Rpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JpZ2luXSBUaGUgb3JpZ2luIGRvbWFpbiBvZiB0aGUgcmVxdWVzdCBiZWluZyBtYWRlLiBJZiBgbnVsbGAgdGhlbiB0aGUgUmVmZXJlciBoZWFkZXIgd2lsbCBiZSB1c2VkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3N0YXRlXVxuICAgKiAgICBSRUNPTU1FTkRFRC4gT3BhcXVlIHZhbHVlIHVzZWQgdG8gbWFpbnRhaW4gc3RhdGUgYmV0d2VlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIGNhbGxiYWNrLiBUeXBpY2FsbHksIENTUkYsIFhTUkYgbWl0aWdhdGlvbiBpcyBkb25lIGJ5IGNyeXB0b2dyYXBoaWNhbGx5IGJpbmRpbmcgdGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIHdpdGggYSBicm93c2VyIGNvb2tpZS5cbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBwcmVzZXJ2ZXMgc29tZSBzdGF0ZSBvYmplY3Qgc2V0IGJ5IHRoZSBjbGllbnQgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgYW5kIG1ha2VzIGl0IGF2YWlsYWJsZSB0byB0aGUgY2xpZW50IGluIHRoZSByZXNwb25zZS5cbiAgICogICAgSXTigJlzIHRoYXQgdW5pcXVlIGFuZCBub24tZ3Vlc3NhYmxlIHZhbHVlIHRoYXQgYWxsb3dzIHlvdSB0byBwcmV2ZW50IHRoZSBhdHRhY2sgYnkgY29uZmlybWluZyBpZiB0aGUgdmFsdWUgY29taW5nIGZyb20gdGhlIHJlc3BvbnNlIG1hdGNoZXMgdGhlIG9uZSB5b3UgZXhwZWN0ICh0aGUgb25lIHlvdSBnZW5lcmF0ZWQgd2hlbiBpbml0aWF0aW5nIHRoZSByZXF1ZXN0KS5cbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBpcyBhIHN0cmluZyBzbyB5b3UgY2FuIGVuY29kZSBhbnkgb3RoZXIgaW5mb3JtYXRpb24gaW4gaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm9uY2VdXG4gICAqICAgIFN0cmluZyB2YWx1ZSB1c2VkIHRvIGFzc29jaWF0ZSBhIENsaWVudCBzZXNzaW9uIHdpdGggYW4gSUQgVG9rZW4sIGFuZCB0byBtaXRpZ2F0ZSByZXBsYXkgYXR0YWNrcy5cbiAgICogICAgVGhlIHZhbHVlIGlzIHBhc3NlZCB0aHJvdWdoIHVubW9kaWZpZWQgZnJvbSB0aGUgQXV0aGVudGljYXRpb24gUmVxdWVzdCB0byB0aGUgSUQgVG9rZW4uXG4gICAqICAgIFN1ZmZpY2llbnQgZW50cm9weSBNVVNUIGJlIHByZXNlbnQgaW4gdGhlIG5vbmNlIHZhbHVlcyB1c2VkIHRvIHByZXZlbnQgYXR0YWNrZXJzIGZyb20gZ3Vlc3NpbmcgdmFsdWVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3Jlc3BvbnNlVHlwZT0nY29kZSddIE9wZW5JZCByZXNwb25zZSB0eXBlLiBUaGUgZGVmYXVsdCBpcyBgY29kZWAgKENvZGUgRmxvdywgaW52b2x2aW5nIHRoZSBmcm9udC1jaGFubmVsIGFuZCBiYWNrY2hhbm5lbCkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxuICAgKi9cbiAgcHVibGljIGFzeW5jIG5hdmlnYXRlQW5kR2V0VGhlU291bmQoY2xpZW50SWQ6IHN0cmluZywgcmVkaXJlY3RVcmk6IHN0cmluZywgc2NvcGU6IE9wZW5JZFNjb3BlUGFyc2VyLCBuYXZpZ2F0b3I6IE5hdmlnYXRvciwgb3JpZ2luPzogc3RyaW5nLCBzdGF0ZT86IHN0cmluZywgbm9uY2U/OiBzdHJpbmcsIHJlc3BvbnNlVHlwZSA9ICdjb2RlJyk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcbiAgICBpZiAodGhpcy5fZ2VvUHJvdmlkZXIgJiYgIXRoaXMuX2NhY2hlZEdlbykge1xuICAgICAgdGhpcy5fY2FjaGVkR2VvID0gYXdhaXQgdGhpcy5fZ2VvUHJvdmlkZXIuZ2V0R2VvKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHRoaXMuY3JlYXRlU2Vzc2lvbihjbGllbnRJZCwgdGhpcy5fY2FjaGVkR2VvLCBvcmlnaW4pO1xuICAgIGNvbnN0IHNvdW5kID0gYXdhaXQgdGhpcy5nZXRPVFBTb3VuZChzZXNzaW9uKTtcblxuICAgIGNvbnN0IGF1dGhlbnRpY2F0ZVVybCA9IHRoaXMuZ2V0QXV0aGVudGljYXRpb25FbmRwb2ludFVybChzZXNzaW9uLCBzY29wZSwgY2xpZW50SWQsIHJlZGlyZWN0VXJpLCBzdGF0ZSwgbm9uY2UsIHJlc3BvbnNlVHlwZSk7XG5cbiAgICBjb25zb2xlLmluZm8oYE5hdmlnYXRpbmcgdG8gJHthdXRoZW50aWNhdGVVcmx9LmApO1xuXG4gICAgYXdhaXQgbmF2aWdhdG9yLm5hdmlnYXRlKGF1dGhlbnRpY2F0ZVVybCk7XG5cbiAgICBhd2FpdCB0aGlzLl90aW1lb3V0KHRoaXMuX2RlbGF5TXMpO1xuXG4gICAgcmV0dXJuIHNvdW5kO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGxvZ2luVGhyb3VnaEN5YmVydXNLZXlEYXNoYm9hcmQob3B0aW9uczogTG9naW5PcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgY2xpZW50X2lkOiBvcHRpb25zLmNsaWVudElkLFxuICAgICAgc2NvcGU6IG9wdGlvbnMuc2NvcGUuZ2V0VmFsdWUoKSxcbiAgICAgIHJlZGlyZWN0X3VyaTogb3B0aW9ucy5yZWRpcmVjdFVyaSxcbiAgICAgIHJlc3BvbnNlX3R5cGU6IG9wdGlvbnMucmVzcG9uc2VUeXBlLFxuICAgICAgZGlzcGxheTogb3B0aW9ucy5kaXNwbGF5LFxuICAgICAgcHJvbXB0OiBvcHRpb25zLnByb21wdCxcbiAgICAgIHRoZW1lOiBvcHRpb25zLnRoZW1lLFxuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucy5zdGF0ZSkge1xuICAgICAgZGF0YVsnc3RhdGUnXSA9IG9wdGlvbnMuc3RhdGU7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubm9uY2UpIHtcbiAgICAgIGRhdGFbJ25vbmNlJ10gPSBvcHRpb25zLm5vbmNlO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodGhpcy5fZ2V0VXJsKCdhdXRob3JpemUnKSk7XG5cbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChwYXJhbWV0ZXJOYW1lKSA9PiB7XG4gICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChwYXJhbWV0ZXJOYW1lLCBkYXRhW3BhcmFtZXRlck5hbWVdKTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUuaW5mbyhgTmF2aWdhdGluZyB0byAke3VybC5ocmVmfS5gKTtcblxuICAgIGF3YWl0IG9wdGlvbnMubmF2aWdhdG9yLm5hdmlnYXRlKHVybC5ocmVmKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFVybChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAobmV3IFVSTChwYXRoLCB0aGlzLl9hcGlVcmwpKS5ocmVmO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VXJsRW5jb2RlZEJvZHkoZGF0YTogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkucmVkdWNlPHN0cmluZ1tdPigocmVzdWx0OiBzdHJpbmdbXSwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGVuY29kZWRLZXkgPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgICAgIGNvbnN0IGVuY29kZWRWYWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pO1xuXG4gICAgICByZXN1bHQucHVzaChgJHtlbmNvZGVkS2V5fT0ke2VuY29kZWRWYWx1ZX1gKTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCBbXSkuam9pbihcIiZcIilcbiAgfVxuXG4gIHByaXZhdGUgX3RpbWVvdXQobXM6IG51bWJlcik6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgU2Vzc2lvblJlc3BvbnNlIHtcbiAgc2Vzc2lvbl9pZDogc3RyaW5nO1xuICBjcmVhdGVkX2F0OiBzdHJpbmc7XG59XG5cblxuLyoqXG4gKiBEYXRhIGNsYXNzIHJlcHJlc2VudGluZyBhIEN5YmVydXMgS2V5IHNlc3Npb24uXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIFNlc3Npb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb24ge1xuICAvKipcbiAgICogU2Vzc2lvbidzIHVuaXF1ZSBpZGVudGlmaWVyLiBJdCdzIHZhbGlkIHVwIHRvIDIwcy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIFNlc3Npb25cbiAgICovXG4gIHB1YmxpYyBzZXNzaW9uSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogQSBVVEMgZGF0ZSByZXByZXNlbnRpbmcgYSBkYXRlIChhbmQgdGltZSkgd2hlbiBhIHNlc3Npb24gaGFzIGJlZW4gY3JlYXRlZC5cbiAgICpcbiAgICogQHR5cGUge0RhdGV9XG4gICAqIEBtZW1iZXJvZiBTZXNzaW9uXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlZEF0OiBEYXRlO1xuXG4gIGNvbnN0cnVjdG9yKGpzb246IFNlc3Npb25SZXNwb25zZSkge1xuICAgIHRoaXMuc2Vzc2lvbklkID0ganNvbi5zZXNzaW9uX2lkO1xuICAgIHRoaXMuY3JlYXRlZEF0ID0gbmV3IERhdGUoanNvbi5jcmVhdGVkX2F0KTtcbiAgfVxufSIsIi8qKlxuICogQW4gYWJzdHJhY3Rpb24gZm9yIGEgdGFrZW4gZ2VvbG9jYXRpb24gbWVhc3VyZW1lbnQuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEdlb2xvY2F0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBHZW9sb2NhdGlvbiB7XG4gIHByaXZhdGUgX2xhdGl0dWRlOiBudW1iZXI7XG4gIHByaXZhdGUgX2xvbmdpdHVkZTogbnVtYmVyO1xuICBwcml2YXRlIF9hY2N1cmFjeTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGxhdGl0dWRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyLCBhY2N1cmFjeT86IG51bWJlcikge1xuICAgIHRoaXMuX2xhdGl0dWRlID0gbGF0aXR1ZGU7XG4gICAgdGhpcy5fbG9uZ2l0dWRlID0gbG9uZ2l0dWRlO1xuICAgIHRoaXMuX2FjY3VyYWN5ID0gYWNjdXJhY3k7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgbGF0aXR1ZGUuXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgR2VvbG9jYXRpb25cbiAgICovXG4gIGdldCBsYXRpdHVkZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXRpdHVkZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgbG9uZ2l0dWRlLlxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEdlb2xvY2F0aW9uXG4gICAqL1xuICBnZXQgbG9uZ2l0dWRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xvbmdpdHVkZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFuIGFjY3VyYWN5IG9mIGEgbWVhc3VyZW1lbnQuXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgR2VvbG9jYXRpb25cbiAgICovXG4gIGdldCBhY2N1cmFjeSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9hY2N1cmFjeTtcbiAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vc2RrL2FwaSc7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9lbWl0dGVyL3NvdW5kRW1pdHRlcic7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9lbWl0dGVyL3dlYkF1ZGlvU291bmRFbWl0dGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2Vycm9ycyc7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9uYXZpZ2F0b3IvbmF2aWdhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL25hdmlnYXRvci9yZWRpcmVjdE5hdmlnYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9zY29wZVBhcnNlcic7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9zZXNzaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2dlb1Byb3ZpZGVyL2dlbyc7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9nZW9Qcm92aWRlci9nZW9Qcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9nZW9Qcm92aWRlci9odG1sNUdlb1Byb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2xvZ2luT3B0aW9ucyc7XG5cbmltcG9ydCB7IEN5YmVydXNLZXlBUEkgfSBmcm9tICcuL3Nkay9hcGknO1xuZXhwb3J0IGRlZmF1bHQgQ3liZXJ1c0tleUFQSTsiLCJpbXBvcnQgeyBTb3VuZEVtaXR0ZXIgfSBmcm9tICcuL3NvdW5kRW1pdHRlcic7XG5pbXBvcnQgeyBPVFBHZW5lcmF0aW9uRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMnO1xuXG4vKipcbiAqIENsYXNzIHVzZXMgYSBIVE1MNSdzIEF1ZGlvQ29udGV4dCBpbnRlcmZhY2UgdG8gcGxheSBhIHNvdW5kLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBXZWJBdWRpb1NvdW5kRW1pdHRlclxuICogQGltcGxlbWVudHMge1NvdW5kRW1pdHRlcn1cbiAqL1xuZXhwb3J0IGNsYXNzIFdlYkF1ZGlvU291bmRFbWl0dGVyIGltcGxlbWVudHMgU291bmRFbWl0dGVyIHtcblxuICAvKipcbiAgICogRW1pdHMgYSBzb3VuZCB0aHJvdWdoIEhUTUw1J3MgQXVkaW9Db250ZXh0IGludGVyZmFjZS5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gc291bmQgQSBiaW5hcnkgcmVjb3JkIG9mIHRoZSBzb3VuZCB5b3Ugd2FudCB0byBwbGF5LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICogQG1lbWJlcm9mIFdlYkF1ZGlvU291bmRFbWl0dGVyXG4gICAqL1xuICBhc3luYyBlbWl0KHNvdW5kOiBBcnJheUJ1ZmZlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBjb250ZXh0OiBBdWRpb0NvbnRleHQ7XG5cbiAgICB0cnkge1xuICAgICAgY29udGV4dCA9IG5ldyAod2luZG93WydBdWRpb0NvbnRleHQnXSB8fCB3aW5kb3dbJ3dlYmtpdEF1ZGlvQ29udGV4dCddKSgpO1xuICAgIH0gY2F0Y2gge1xuXG4gICAgICB0aHJvdyBuZXcgT1RQR2VuZXJhdGlvbkVycm9yKCdvdHBfZ2VuZXJhdGlvbl9mYWlsdXJlJywgJ0F1ZGlvQ29udGV4dCBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlID0gY29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcblxuICAgIGNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKHNvdW5kLCAoZGVjb2RlZERhdGEpID0+IHtcbiAgICAgIHNvdXJjZS5idWZmZXIgPSBkZWNvZGVkRGF0YTtcbiAgICAgIHNvdXJjZS5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgc291cmNlLnN0YXJ0KDApO1xuICAgIH0pO1xuXG4gICAgYXdhaXQgKG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzb3VyY2Uub25lbmRlZCA9IHJlc29sdmU7XG4gICAgfSkpO1xuICB9XG59XG5cbiIsImltcG9ydCB7IE1pc3NpbmdSZWRpcmVjdFVyaSB9IGZyb20gJy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBOYXZpZ2F0b3IgfSBmcm9tICcuL25hdmlnYXRvcic7XG5cblxuLyoqXG4gKiBDbGFzcyBkZXNjcmliZXMgaG93IE9wZW5JRCdzIEF1dGhlbnRpY2F0aW9uIEVuZHBvaW50IHdpbGwgYmUgaGFuZGxlZC5cbiAqIFRoaXMgY2xhc3MgaXMgdGhpZ2h0ZW4gdG8gYSBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3VyIGZvciBPcGVuSUQgcHJvdG9jb2wgLSBhIHJlZGlyZWN0aW9uLlxuICogV2hpY2ggbWVhbnMgdGhhdCB5b3VyIFVSTCB3aWxsIGJlIHRlbXBvcmFyaWx5IHJlcGxhY2VkIGJ5IHRoZSBBdXRoZW50aWNhdGlvbiBFbmRwb2ludFxuICogYW5kIHJlcGxhY2VkIGFnYWluIGJ5IGl0cyByZXNwb25zZSAtIEhUVFAgMzAyLiBUaGUgbmV3IGxvY2F0aW9uIHdpbGwgYmUgdGhlIG9uZSB5b3UgZGVmaW5lZCBhcyB5b3VyIGByZWRpcmVjdF91cmlgLlxuICogXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgUmVkaXJlY3ROYXZpZ2F0b3JcbiAqIEBpbXBsZW1lbnRzIHtOYXZpZ2F0b3J9XG4gKi9cbmV4cG9ydCBjbGFzcyBSZWRpcmVjdE5hdmlnYXRvciBpbXBsZW1lbnRzIE5hdmlnYXRvciB7XG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBBdXRoZW50aWNhdGlvbiBFbmRwb2ludCBVUkwuXG4gICAqIEB0aHJvd3MgTWlzc2luZ1JlZGlyZWN0VXJpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKiBAbWVtYmVyb2YgUmVkaXJlY3ROYXZpZ2F0b3JcbiAgICovXG4gIGFzeW5jIG5hdmlnYXRlKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHRocm93IG5ldyBNaXNzaW5nUmVkaXJlY3RVcmkoKVxuICAgIH1cblxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG59IiwiXG4vKipcbiAqIEhhbmR5IGNsYXNzIHRvIGRlZmluZSBhbiBPcGVuSUQncyBzY29wZS5cbiAqIFNjb3BlcyBhcmUgdXNlZCBieSBhbiBhcHBsaWNhdGlvbiBkdXJpbmcgYXV0aGVudGljYXRpb24gdG8gYXV0aG9yaXplIGFjY2VzcyB0byBhIHVzZXIncyBkZXRhaWxzLFxuICogbGlrZSBuYW1lIGFuZCBwaWN0dXJlLiBFYWNoIHNjb3BlIHJldHVybnMgYSBzZXQgb2YgdXNlciBhdHRyaWJ1dGVzLCB3aGljaCBhcmUgY2FsbGVkIGNsYWltcy4gXG4gKiBcbiAqIFlvdSBjYW4gdXNlIGFkZGl0aW9uYWwgdmFsdWVzIGBlbWFpbGAgKGFkZCBhIHVzZXIncyBlbWFpbCBjbGFpbSkgYW5kIGBwcm9maWxlYCAoYWRkIHVzZXIgZmlyc3QgYW5kIGxhc3QgbmFtZSkuXG4gKiBcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IHNjb3BlUGFyc2VyID0gbmV3IE9wZW5JZFNjb3BlUGFyc2VyKCk7XG4gKiBjb25zdCBzY29wZSA9IHNjb3BlUGFyc2VyLmFkZEVtYWlsKCkuYWRkUHJvZmlsZSgpLmdldFZhbHVlKCk7XG4gKiBgYGBcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgT3BlbklkU2NvcGVQYXJzZXJcbiAqL1xuZXhwb3J0IGNsYXNzIE9wZW5JZFNjb3BlUGFyc2VyIHtcbiAgcHJpdmF0ZSBfc2NvcGU6IEFycmF5PHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fc2NvcGUgPSBbJ29wZW5pZCddO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYGVtYWlsYCBzY29wZS5cbiAgICpcbiAgICogQHJldHVybnMge3RoaXN9XG4gICAqIEBtZW1iZXJvZiBPcGVuSWRTY29wZVBhcnNlclxuICAgKi9cbiAgcHVibGljIGFkZEVtYWlsKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9zY29wZS5pbmNsdWRlcygnZW1haWwnKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fc2NvcGUucHVzaCgnZW1haWwnKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYHByb2ZpbGVgIHNjb3BlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICogQG1lbWJlcm9mIE9wZW5JZFNjb3BlUGFyc2VyXG4gICAqL1xuICBwdWJsaWMgYWRkUHJvZmlsZSgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5fc2NvcGUuaW5jbHVkZXMoJ3Byb2ZpbGUnKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fc2NvcGUucHVzaCgncHJvZmlsZScpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBmb3JtYXR0ZWQgc2NvcGUgdmFsdWUsIGUuZy4gYG9wZW5pZCBlbWFpbGAuXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBPcGVuSWRTY29wZVBhcnNlclxuICAgKi9cbiAgcHVibGljIGdldFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Njb3BlLmpvaW4oJyAnKTtcbiAgfVxufSIsImltcG9ydCB7IEdlb2xvY2F0aW9uIH0gZnJvbSAnLi9nZW8nO1xuaW1wb3J0IHsgR2VvUHJvdmlkZXIgfSBmcm9tICcuL2dlb1Byb3ZpZGVyJztcblxuXG4vKipcbiAqIENsYXNzIHByb3ZpZGVzIGEgZ2VvbG9jYWxpemF0aW9uIG1lYXN1cmVtZW50LlxuICogSXQgdXNlcyBhIEhUTUw1J3MgYEdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigpYCBtZXRob2QuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEhUTUw1R2VvUHJvdmlkZXJcbiAqIEBpbXBsZW1lbnRzIHtHZW9Qcm92aWRlcn1cbiAqL1xuZXhwb3J0IGNsYXNzIEhUTUw1R2VvUHJvdmlkZXIgaW1wbGVtZW50cyBHZW9Qcm92aWRlciB7XG4gIHByaXZhdGUgX2VuYWJsZUhpZ2hBY2N1cmFjeTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbmF2aWdhdG9yOiBOYXZpZ2F0b3I7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgSFRNTDVHZW9Qcm92aWRlci5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBbZW5hYmxlSGlnaEFjY3VyYWN5PWZhbHNlXSAgRm9yY2VzIGhpZ2ggYWNjdXJhY3kgb2YgdGhlIGdlb2xvY2F0aW9uLiBJdCBtYXkgdGFrZSBsb25nZXIuXG4gICAqIEBwYXJhbSB7TmF2aWdhdG9yfSBbbmF2aWdhdG9yPXdpbmRvdy5uYXZpZ2F0b3JdXG4gICAqIEBtZW1iZXJvZiBIVE1MNUdlb1Byb3ZpZGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbmFibGVIaWdoQWNjdXJhY3kgPSBmYWxzZSwgbmF2aWdhdG9yOiBOYXZpZ2F0b3IgPSB3aW5kb3cubmF2aWdhdG9yKSB7XG4gICAgdGhpcy5fZW5hYmxlSGlnaEFjY3VyYWN5ID0gZW5hYmxlSGlnaEFjY3VyYWN5O1xuICAgIHRoaXMuX25hdmlnYXRvciA9IG5hdmlnYXRvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgZ2VvbG9jYWxpemF0aW9uIG1lYXN1cmVtZW50LlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxHZW9sb2NhdGlvbj59IEdlb2xvY2FsaXphdGlvbiBtZWFzdXJlbWVudC5cbiAgICogQG1lbWJlcm9mIEhUTUw1R2VvUHJvdmlkZXJcbiAgICovXG4gIGFzeW5jIGdldEdlbygpOiBQcm9taXNlPEdlb2xvY2F0aW9uPiB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgdGhpcy5fZ2V0R2VvKHRoaXMuX2VuYWJsZUhpZ2hBY2N1cmFjeSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBFLmcuIHVzZXIgZGlkbid0IGFncmVlIG9uIGdlb2xpY2FsaXphdGlvbi5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgY29vcmRzIH0gPSByZXN1bHQ7XG5cbiAgICByZXR1cm4gbmV3IEdlb2xvY2F0aW9uKGNvb3Jkcy5sYXRpdHVkZSwgY29vcmRzLmxvbmdpdHVkZSwgY29vcmRzLmFjY3VyYWN5KTtcbiAgfVxuXG4gIF9nZXRHZW8oZW5hYmxlSGlnaEFjY3VyYWN5OiBib29sZWFuKTogUHJvbWlzZTxQb3NpdGlvbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgZW5hYmxlSGlnaEFjY3VyYWN5OiAke2VuYWJsZUhpZ2hBY2N1cmFjeX1gKTtcblxuICAgICAgdGhpcy5fbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihyZXNvbHZlLCByZWplY3QsIHsgZW5hYmxlSGlnaEFjY3VyYWN5IH0pXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5hdmlnYXRvciB9IGZyb20gJy4vbmF2aWdhdG9yL25hdmlnYXRvcic7XG5pbXBvcnQgeyBPcGVuSWRTY29wZVBhcnNlciB9IGZyb20gJy4vc2NvcGVQYXJzZXInO1xuXG5cbi8qKlxuICogTG9naW4gb3B0aW9ucy5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgTG9naW5PcHRpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2dpbk9wdGlvbnMge1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIFB1YmxpYyBjbGllbnQgSUQgZ2VuZXJhdGVkIGR1cmluZyBjcmVhdGluZyB0aGUgYWNjb3VudC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgY2xpZW50SWQ6IHN0cmluZztcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlZGlyZWN0VXJpIFJlZGlyZWN0IFVSSSB0byB3aGljaCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSBzZW50LiBJZiB0aGUgdmFsdWUgaXMgbm90IHdoaXRlbGlzdGVkIHRoZW4gdGhlIHJlcXVlc3Qgd2lsbCBmYWlsLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSByZWRpcmVjdFVyaTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09wZW5JZFNjb3BlUGFyc2VyfSBzY29wZSBFYWNoIHNjb3BlIHJldHVybnMgYSBzZXQgb2YgdXNlciBhdHRyaWJ1dGVzLCB3aGljaCBhcmUgY2FsbGVkIGNsYWltcy5cbiAgICogICAgT25jZSB0aGUgdXNlciBhdXRob3JpemVzIHRoZSByZXF1ZXN0ZWQgc2NvcGVzLCB0aGUgY2xhaW1zIGFyZSByZXR1cm5lZCBpbiBhbiBJRCBUb2tlbi5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgc2NvcGU6IE9wZW5JZFNjb3BlUGFyc2VyO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB7TmF2aWdhdG9yfSBuYXZpZ2F0b3IgQ2xhc3MgZGVzY3JpYmVzIGFuIGFjdGlvbiB0aGF0IHdpbGwgYmUgZG9uZSB0byBBdXRoZW50aWNhdGlvbiBVUkwuIEZvciBicm93c2VycyBpdCB3aWxsIGJlIGEgcGFnZSByZWRpcmVjdGlvbi5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgbmF2aWdhdG9yOiBOYXZpZ2F0b3I7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JpZ2luXSBUaGUgb3JpZ2luIGRvbWFpbiBvZiB0aGUgcmVxdWVzdCBiZWluZyBtYWRlLiBJZiBgbnVsbGAgdGhlbiB0aGUgUmVmZXJlciBoZWFkZXIgd2lsbCBiZSB1c2VkLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBvcmlnaW46IHN0cmluZztcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0ZV1cbiAgICogICAgUkVDT01NRU5ERUQuIE9wYXF1ZSB2YWx1ZSB1c2VkIHRvIG1haW50YWluIHN0YXRlIGJldHdlZW4gdGhlIHJlcXVlc3QgYW5kIHRoZSBjYWxsYmFjay4gVHlwaWNhbGx5LCBDU1JGLCBYU1JGIG1pdGlnYXRpb24gaXMgZG9uZSBieSBjcnlwdG9ncmFwaGljYWxseSBiaW5kaW5nIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciB3aXRoIGEgYnJvd3NlciBjb29raWUuXG4gICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgcHJlc2VydmVzIHNvbWUgc3RhdGUgb2JqZWN0IHNldCBieSB0aGUgY2xpZW50IGluIHRoZSBBdXRoZW50aWNhdGlvbiByZXF1ZXN0IGFuZCBtYWtlcyBpdCBhdmFpbGFibGUgdG8gdGhlIGNsaWVudCBpbiB0aGUgcmVzcG9uc2UuXG4gICAqICAgIEl04oCZcyB0aGF0IHVuaXF1ZSBhbmQgbm9uLWd1ZXNzYWJsZSB2YWx1ZSB0aGF0IGFsbG93cyB5b3UgdG8gcHJldmVudCB0aGUgYXR0YWNrIGJ5IGNvbmZpcm1pbmcgaWYgdGhlIHZhbHVlIGNvbWluZyBmcm9tIHRoZSByZXNwb25zZSBtYXRjaGVzIHRoZSBvbmUgeW91IGV4cGVjdCAodGhlIG9uZSB5b3UgZ2VuZXJhdGVkIHdoZW4gaW5pdGlhdGluZyB0aGUgcmVxdWVzdCkuXG4gICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgaXMgYSBzdHJpbmcgc28geW91IGNhbiBlbmNvZGUgYW55IG90aGVyIGluZm9ybWF0aW9uIGluIGl0LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBzdGF0ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vbmNlXVxuICAgKiAgICBTdHJpbmcgdmFsdWUgdXNlZCB0byBhc3NvY2lhdGUgYSBDbGllbnQgc2Vzc2lvbiB3aXRoIGFuIElEIFRva2VuLCBhbmQgdG8gbWl0aWdhdGUgcmVwbGF5IGF0dGFja3MuXG4gICAqICAgIFRoZSB2YWx1ZSBpcyBwYXNzZWQgdGhyb3VnaCB1bm1vZGlmaWVkIGZyb20gdGhlIEF1dGhlbnRpY2F0aW9uIFJlcXVlc3QgdG8gdGhlIElEIFRva2VuLlxuICAgKiAgICBTdWZmaWNpZW50IGVudHJvcHkgTVVTVCBiZSBwcmVzZW50IGluIHRoZSBub25jZSB2YWx1ZXMgdXNlZCB0byBwcmV2ZW50IGF0dGFja2VycyBmcm9tIGd1ZXNzaW5nIHZhbHVlcy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgbm9uY2U6IHN0cmluZztcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtyZXNwb25zZVR5cGU9J2NvZGUnXSBPcGVuSWQgcmVzcG9uc2UgdHlwZS4gVGhlIGRlZmF1bHQgaXMgYGNvZGVgIChDb2RlIEZsb3csIGludm9sdmluZyB0aGUgZnJvbnQtY2hhbm5lbCBhbmQgYmFja2NoYW5uZWwpLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSByZXNwb25zZVR5cGU6IHN0cmluZyA9ICdjb2RlJztcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXkgSXQgc3BlY2lmaWVzIGhvdyB0aGUgQXV0aG9yaXphdGlvbiBTZXJ2ZXIgZGlzcGxheXMgdGhlIGF1dGhlbnRpY2F0aW9uIGFuZCBjb25zZW50IHVzZXIgaW50ZXJmYWNlIHBhZ2VzIHRvIHRoZSBFbmQtVXNlci5cbiAgICogICBEZWZhdWx0IGFuZCB0aGUgb25seSBzdXBwb3J0ZWQgdmFsdWUgaXMgYHBhZ2VgLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBkaXNwbGF5OiBzdHJpbmcgPSAncGFnZSdcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb21wdCBTcGFjZSBkZWxpbWl0ZWQsIGNhc2Ugc2Vuc2l0aXZlIGxpc3Qgb2Ygc3RyaW5nIHZhbHVlcyB0aGF0IHNwZWNpZmllcyB3aGV0aGVyIHRoZSBBdXRob3JpemF0aW9uIFNlcnZlclxuICAgKiAgIHByb21wdHMgdGhlIEVuZC1Vc2VyIGZvciByZWF1dGhlbnRpY2F0aW9uIGFuZCBjb25zZW50LiBUaGUgZGVmaW5lZCB2YWx1ZXMgYXJlOiBgbG9naW5gLCBgbm9uZWAuXG4gICAqICAgRGVmYXVsdCBpcyBgbG9naW4sbm9uZWAuIENhbid0IGJlIGNoYW5nZWQgZm9yIG5vdy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgcHJvbXB0OiBzdHJpbmcgPSAnbG9naW4sbm9uZSdcblxuICAvKipcbiAgICogVGhlbWUgb2YgdGhlIGxvZ2luIHBhZ2Ugb2YgQ3liZXJ1cyBLZXkgRGFzaGJvYXJkLiBEZWZhdWx0IGlzIGBkZWZhdWx0YC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgdGhlbWU6IHN0cmluZyA9ICdkZWZhdWx0Jztcbn0iXSwic291cmNlUm9vdCI6IiJ9