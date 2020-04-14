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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2Vycm9ycy50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvYXBpLnRzIiwid2VicGFjazovL2N5YmVydXNrZXktc2RrLy4vc3JjL3Nkay9zZXNzaW9uLnRzIiwid2VicGFjazovL2N5YmVydXNrZXktc2RrLy4vc3JjL3Nkay9nZW9Qcm92aWRlci9nZW8udHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2VtaXR0ZXIvd2ViQXVkaW9Tb3VuZEVtaXR0ZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL25hdmlnYXRvci9yZWRpcmVjdE5hdmlnYXRvci50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvc2NvcGVQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2dlb1Byb3ZpZGVyL2h0bWw1R2VvUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2xvZ2luT3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7OztBQ2xGQSxJQUFLLFNBV0o7QUFYRCxXQUFLLFNBQVM7SUFDWixtREFBYTtJQUNiLDJEQUFhO0lBQ2IseURBQVk7SUFDWixxREFBVTtJQUNWLDJEQUFhO0lBQ2IscUVBQWtCO0lBQ2xCLDZFQUFzQjtJQUN0Qix5RUFBb0I7SUFDcEIsNkRBQWM7SUFDZCwwRUFBb0I7QUFDdEIsQ0FBQyxFQVhJLFNBQVMsS0FBVCxTQUFTLFFBV2I7QUFrRUMsOEJBQVM7QUFoRVgsTUFBTSxlQUFnQixTQUFRLEtBQUs7SUFHakMsWUFBWSxJQUE0QixFQUFFLE9BQWU7UUFDdkQsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFrREMsMENBQWU7QUFoRGpCLE1BQU0sWUFBYSxTQUFRLGVBQWU7SUFDeEMsWUFBWSxPQUErQixlQUFlLEVBQUUsVUFBa0Isd0JBQXdCO1FBQ3BHLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQTZDQyxvQ0FBWTtBQTVDZCxNQUFNLGlCQUFrQixTQUFRLGVBQWU7SUFDN0MsWUFBWSxPQUErQixzQkFBc0IsRUFBRSxVQUFrQiw4QkFBOEI7UUFDakgsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7SUFDdEIsQ0FBQztDQUNGO0FBeUNDLDhDQUFpQjtBQXZDbkIsTUFBTSxrQkFBbUIsU0FBUSxlQUFlO0lBQzlDO1FBQ0UsS0FBSyxDQUFDLHNCQUFzQixFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDNUQsQ0FBQztDQUNGO0FBd0NDLGdEQUFrQjtBQXRDcEIsTUFBTSxjQUFlLFNBQVEsZUFBZTtDQUFJO0FBa0M5Qyx3Q0FBYztBQWpDaEIsTUFBTSxZQUFhLFNBQVEsZUFBZTtDQUFJO0FBa0M1QyxvQ0FBWTtBQWpDZCxNQUFNLHFCQUFzQixTQUFRLGVBQWU7Q0FBSTtBQWtDckQsc0RBQXFCO0FBakN2QixNQUFNLGtCQUFtQixTQUFRLGVBQWU7Q0FBSTtBQWtDbEQsZ0RBQWtCO0FBakNwQixNQUFNLHVCQUF3QixTQUFRLGVBQWU7Q0FBSTtBQUN6RCxNQUFNLGtCQUFtQixTQUFRLGVBQWU7Q0FBSTtBQUVwRCxNQUFNLE9BQU8sR0FBRztJQUNkLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFlBQVk7SUFDbkMsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUUsWUFBWTtJQUN2QyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxZQUFZO0lBQ3RDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLGNBQWM7SUFDckMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsY0FBYztJQUN0QyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRSxZQUFZO0lBQ3ZDLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLEVBQUUscUJBQXFCO0lBQ3JELENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsa0JBQWtCO0lBQ3RELENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsdUJBQXVCO0lBQ3pELENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUFFLGtCQUFrQjtJQUM5QyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLGlCQUFpQjtDQUNwRDtBQUVELFNBQVMsWUFBWSxDQUFDLElBQTRCLEVBQUUsT0FBZTtJQUNqRSxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFNUMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBR0Msb0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRWQsd0NBQXNEO0FBS3RELHlDQUFvQztBQUlwQzs7OztHQUlHO0FBQ0gsTUFBYSxhQUFhO0lBTXhCOzs7Ozs7T0FNRztJQUNILFlBQVksT0FBZSxFQUFFLFdBQXlCLEVBQUUsVUFBa0IsR0FBRztRQUMzRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDVSxhQUFhLENBQUMsUUFBZ0IsRUFBRSxHQUFpQixFQUFFLE1BQWU7O1lBQzdFLE1BQU0sSUFBSSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxDQUFDO1lBRXJDLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO2dCQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQzthQUM3QjtZQUVELElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7YUFDekI7WUFFRCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNyRCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDbkMsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSxtQ0FBbUM7aUJBQ3BEO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFbkMsSUFBSSxRQUFRLENBQUMsRUFBRSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzFELE9BQU8sSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvQjtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNmLE1BQU0sSUFBSSxxQkFBWSxFQUFFO2FBQ3pCO1lBRUQsTUFBTSxxQkFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDekQsQ0FBQztLQUFBO0lBRUQ7Ozs7Ozs7T0FPRztJQUNVLFdBQVcsQ0FBQyxPQUFnQjs7WUFDdkMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFO2dCQUMxRSxPQUFPLEVBQUU7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLGNBQWMsRUFBRSxZQUFZO2lCQUM3QjthQUNGLENBQUMsQ0FBQztZQUNILGFBQWE7WUFDYixNQUFNLE1BQU0sR0FBYSxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUM7WUFDakUsT0FBTyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQztLQUFBO0lBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXFCRztJQUNJLDRCQUE0QixDQUFDLE9BQWdCLEVBQUUsS0FBd0IsRUFBRSxRQUFnQixFQUFFLFdBQW1CLEVBQUUsS0FBYyxFQUFFLEtBQWMsRUFBRSxZQUFZLEdBQUcsTUFBTTtRQUMxSyxNQUFNLElBQUksR0FBUTtZQUNoQixVQUFVLEVBQUUsT0FBTyxDQUFDLFNBQVM7WUFDN0IsU0FBUyxFQUFFLFFBQVE7WUFDbkIsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDdkIsWUFBWSxFQUFFLFdBQVc7WUFDekIsYUFBYSxFQUFFLFlBQVk7U0FDNUIsQ0FBQztRQUVGLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUVELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUVELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUVsRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQzFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FzQkc7SUFDVSxZQUFZLENBQUMsUUFBZ0IsRUFBRSxXQUFtQixFQUFFLEtBQXdCLEVBQUUsWUFBMEIsRUFBRSxTQUFvQixFQUFFLE1BQWUsRUFBRSxLQUFjLEVBQUUsS0FBYyxFQUFFLFlBQVksR0FBRyxNQUFNOztZQUNqTixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNwRDtZQUVELE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1RSxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFOUMsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBRTdILE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFFbEQsTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRTFDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUUxQixPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBRS9CLE1BQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDO0tBQUE7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BcUJHO0lBQ1Usc0JBQXNCLENBQUMsUUFBZ0IsRUFBRSxXQUFtQixFQUFFLEtBQXdCLEVBQUUsU0FBb0IsRUFBRSxNQUFlLEVBQUUsS0FBYyxFQUFFLEtBQWMsRUFBRSxZQUFZLEdBQUcsTUFBTTs7WUFDL0wsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDcEQ7WUFFRCxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDNUUsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTlDLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztZQUU3SCxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixlQUFlLEdBQUcsQ0FBQyxDQUFDO1lBRWxELE1BQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUUxQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRW5DLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztLQUFBO0lBRVksK0JBQStCLENBQUMsT0FBcUI7O1lBQ2hFLE1BQU0sSUFBSSxHQUFRO2dCQUNoQixTQUFTLEVBQUUsT0FBTyxDQUFDLFFBQVE7Z0JBQzNCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDL0IsWUFBWSxFQUFFLE9BQU8sQ0FBQyxXQUFXO2dCQUNqQyxhQUFhLEVBQUUsT0FBTyxDQUFDLFlBQVk7Z0JBQ25DLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztnQkFDcEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO2dCQUNwQixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sSUFBSSxNQUFNO2dCQUNsQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07Z0JBQ3RCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSzthQUNyQixDQUFDO1lBRUYsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUMvQjtZQUVELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7YUFDL0I7WUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFFbEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtnQkFDMUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzlELENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFFM0MsTUFBTSxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsQ0FBQztLQUFBO0lBRU8sT0FBTyxDQUFDLElBQVk7UUFDMUIsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDNUMsQ0FBQztJQUVPLGtCQUFrQixDQUFDLElBQVM7UUFDbEMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBVyxDQUFDLE1BQWdCLEVBQUUsR0FBVyxFQUFFLEVBQUU7WUFDMUUsTUFBTSxVQUFVLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0MsTUFBTSxZQUFZLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsSUFBSSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1lBRTdDLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFFTyxRQUFRLENBQUMsRUFBVTtRQUN6QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDN0IsT0FBTyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBN1FELHNDQTZRQzs7Ozs7Ozs7OztBQ3RSRDs7Ozs7R0FLRztBQUNILE1BQWEsT0FBTztJQWlCbEIsWUFBWSxJQUFxQjtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBckJELDBCQXFCQzs7Ozs7Ozs7OztBQ2pDRDs7Ozs7R0FLRztBQUNILE1BQWEsV0FBVztJQUt0QixZQUFZLFFBQWdCLEVBQUUsU0FBaUIsRUFBRSxRQUFpQjtRQUNoRSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUEzQ0Qsa0NBMkNDOzs7Ozs7Ozs7Ozs7O0FDakRELGlDQUEwQjtBQUUxQixpQ0FBbUQ7QUFDbkQsaUNBQTZCO0FBRTdCLGlDQUFrRDtBQUNsRCxpQ0FBa0M7QUFDbEMsaUNBQThCO0FBQzlCLGlDQUFzQztBQUV0QyxpQ0FBbUQ7QUFDbkQsaUNBQW1DO0FBRW5DLHFDQUEwQztBQUMxQyxrQkFBZSxtQkFBYSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjdCLHdDQUErQztBQUUvQzs7Ozs7O0dBTUc7QUFDSCxNQUFhLG9CQUFvQjtJQUUvQjs7Ozs7O09BTUc7SUFDRyxJQUFJLENBQUMsS0FBa0I7O1lBQzNCLElBQUksT0FBcUIsQ0FBQztZQUUxQixJQUFJO2dCQUNGLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUMxRTtZQUFDLFdBQU07Z0JBRU4sTUFBTSxJQUFJLDJCQUFrQixDQUFDLHdCQUF3QixFQUFFLCtCQUErQixDQUFDLENBQUM7YUFDekY7WUFFRCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUU1QyxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUM3QyxNQUFNLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztnQkFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3BDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDN0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNOLENBQUM7S0FBQTtDQUNGO0FBL0JELG9EQStCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDRCx3Q0FBK0M7QUFJL0M7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBYSxpQkFBaUI7SUFDNUI7Ozs7Ozs7T0FPRztJQUNHLFFBQVEsQ0FBQyxHQUFXOztZQUN4QixJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNSLE1BQU0sSUFBSSwyQkFBa0IsRUFBRTthQUMvQjtZQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUUzQixPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixDQUFDO0tBQUE7Q0FDRjtBQWxCRCw4Q0FrQkM7Ozs7Ozs7Ozs7QUMvQkQ7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDSCxNQUFhLGlCQUFpQjtJQUc1QjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxRQUFRO1FBQ2IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxVQUFVO1FBQ2YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNuQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7QUFoREQsOENBZ0RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVELHFDQUFvQztBQUlwQzs7Ozs7OztHQU9HO0FBQ0gsTUFBYSxnQkFBZ0I7SUFJM0I7Ozs7OztPQU1HO0lBQ0gsWUFBWSxrQkFBa0IsR0FBRyxLQUFLLEVBQUUsWUFBdUIsTUFBTSxDQUFDLFNBQVM7UUFDN0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGtCQUFrQixDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNHLE1BQU07O1lBQ1YsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRWxCLElBQUk7Z0JBQ0YsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUN2RDtZQUFDLFdBQU07Z0JBQ04sNkNBQTZDO2dCQUM3QyxPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQztZQUUxQixPQUFPLElBQUksaUJBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdFLENBQUM7S0FBQTtJQUVELE9BQU8sQ0FBQyxrQkFBMkI7UUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixrQkFBa0IsRUFBRSxDQUFDLENBQUM7WUFFekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLGtCQUFrQixFQUFFLENBQUM7UUFDekYsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUE1Q0QsNENBNENDOzs7Ozs7Ozs7O0FDcEREOzs7OztHQUtHO0FBQ0gsTUFBYSxZQUFZO0lBQXpCO1FBaUVFOzs7OztXQUtHO1FBQ00saUJBQVksR0FBVyxNQUFNLENBQUM7UUFFdkM7Ozs7OztXQU1HO1FBQ00sWUFBTyxHQUFXLE1BQU07UUFFakM7Ozs7Ozs7V0FPRztRQUNNLFdBQU0sR0FBVyxZQUFZO1FBRXRDOzs7OztXQUtHO1FBQ00sVUFBSyxHQUFXLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0NBQUE7QUFuR0Qsb0NBbUdDIiwiZmlsZSI6InNkay5lczYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImN5YmVydXNrZXktc2RrXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImN5YmVydXNrZXktc2RrXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImN5YmVydXNrZXktc2RrXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJlbnVtIEVycm9yQ29kZSB7XG4gIHVuZGVmaW5lZCA9IDEsXG4gIHVua25vd25fZXJyb3IsXG4gIHNlcnZlcl9lcnJvcixcbiAgd3JvbmdfanNvbixcbiAgb3BlbmFwaV9lcnJvcixcbiAgcmVzb3VyY2Vfbm90X2ZvdW5kLFxuICBvdHBfZ2VuZXJhdGlvbl9mYWlsdXJlLFxuICBpbnZhbGlkX3JlZGlyZWN0X3VyaSxcbiAgaW52YWxpZF9jbGllbnQsXG4gIHRvb19tYW55X2NhbGxzX2Vycm9yXG59XG5cbmNsYXNzIEN5YmVydXNLZXlFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgcHJpdmF0ZSBfY29kZTogRXJyb3JDb2RlO1xuXG4gIGNvbnN0cnVjdG9yKGNvZGU6IGtleW9mIHR5cGVvZiBFcnJvckNvZGUsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKG1lc3NhZ2UpXG4gICAgdGhpcy5fY29kZSA9IEVycm9yQ29kZVtjb2RlXTtcbiAgfVxuXG4gIGdldCBjb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEVycm9yQ29kZVt0aGlzLl9jb2RlXTtcbiAgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XG4gIH1cbn1cblxuY2xhc3MgVW5rbm93bkVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHtcbiAgY29uc3RydWN0b3IoY29kZToga2V5b2YgdHlwZW9mIEVycm9yQ29kZSA9ICd1bmtub3duX2Vycm9yJywgbWVzc2FnZTogc3RyaW5nID0gJ1Vua25vd24gZXJyb3Igb2NjdXJlZC4nKSB7XG4gICAgc3VwZXIoY29kZSwgbWVzc2FnZSlcbiAgfVxufVxuY2xhc3MgVG9vTWFueUNhbGxzRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3Ige1xuICBjb25zdHJ1Y3Rvcihjb2RlOiBrZXlvZiB0eXBlb2YgRXJyb3JDb2RlID0gJ3Rvb19tYW55X2NhbGxzX2Vycm9yJywgbWVzc2FnZTogc3RyaW5nID0gJ1lvdVxcJ3ZlIGRvbmUgdG9vIG1hbnkgY2FsbHMuJykge1xuICAgIHN1cGVyKGNvZGUsIG1lc3NhZ2UpXG4gIH1cbn1cblxuY2xhc3MgTWlzc2luZ1JlZGlyZWN0VXJpIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ2ludmFsaWRfcmVkaXJlY3RfdXJpJywgJ01pc3NpbmcgcmVkaXJlY3Rpb24gVVJJLicpO1xuICB9XG59XG5cbmNsYXNzIFdyb25nSnNvbkVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxuY2xhc3MgT3BlbkFwaUVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxuY2xhc3MgUmVzb3VyY2VOb3RGb3VuZEVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxuY2xhc3MgT1RQR2VuZXJhdGlvbkVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxuY2xhc3MgSW52YWxpZFJlZGlyZWN0VXJpRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XG5jbGFzcyBJbnZhbGlkQ2xpZW50RXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XG5cbmNvbnN0IE1BUFBJTkcgPSB7XG4gIFtFcnJvckNvZGUudW5kZWZpbmVkXTogVW5rbm93bkVycm9yLFxuICBbRXJyb3JDb2RlLnVua25vd25fZXJyb3JdOiBVbmtub3duRXJyb3IsXG4gIFtFcnJvckNvZGUuc2VydmVyX2Vycm9yXTogVW5rbm93bkVycm9yLFxuICBbRXJyb3JDb2RlLnVuZGVmaW5lZF06IFdyb25nSnNvbkVycm9yLFxuICBbRXJyb3JDb2RlLndyb25nX2pzb25dOiBXcm9uZ0pzb25FcnJvcixcbiAgW0Vycm9yQ29kZS5vcGVuYXBpX2Vycm9yXTogT3BlbkFwaUVycm9yLFxuICBbRXJyb3JDb2RlLnJlc291cmNlX25vdF9mb3VuZF06IFJlc291cmNlTm90Rm91bmRFcnJvcixcbiAgW0Vycm9yQ29kZS5vdHBfZ2VuZXJhdGlvbl9mYWlsdXJlXTogT1RQR2VuZXJhdGlvbkVycm9yLFxuICBbRXJyb3JDb2RlLmludmFsaWRfcmVkaXJlY3RfdXJpXTogSW52YWxpZFJlZGlyZWN0VXJpRXJyb3IsXG4gIFtFcnJvckNvZGUuaW52YWxpZF9jbGllbnRdOiBJbnZhbGlkQ2xpZW50RXJyb3IsXG4gIFtFcnJvckNvZGUudG9vX21hbnlfY2FsbHNfZXJyb3JdOiBUb29NYW55Q2FsbHNFcnJvclxufVxuXG5mdW5jdGlvbiBlcnJvckZhY3RvcnkoY29kZToga2V5b2YgdHlwZW9mIEVycm9yQ29kZSwgbWVzc2FnZTogc3RyaW5nKSB7XG4gIGNvbnN0IGVudW1fdHlwZSA9IEVycm9yQ29kZVtjb2RlXTtcbiAgY29uc3QgRXJyb3JDb25zdHJ1Y3RvciA9IE1BUFBJTkdbZW51bV90eXBlXTtcblxuICByZXR1cm4gbmV3IEVycm9yQ29uc3RydWN0b3IoY29kZSwgbWVzc2FnZSk7XG59XG5cbmV4cG9ydCB7XG4gIGVycm9yRmFjdG9yeSxcbiAgRXJyb3JDb2RlLFxuICBDeWJlcnVzS2V5RXJyb3IsXG4gIFVua25vd25FcnJvcixcbiAgVG9vTWFueUNhbGxzRXJyb3IsXG4gIFdyb25nSnNvbkVycm9yLFxuICBPcGVuQXBpRXJyb3IsXG4gIFJlc291cmNlTm90Rm91bmRFcnJvcixcbiAgT1RQR2VuZXJhdGlvbkVycm9yLFxuICBNaXNzaW5nUmVkaXJlY3RVcmlcbn07XG5cbiIsImltcG9ydCB7IFNvdW5kRW1pdHRlciB9IGZyb20gJy4vZW1pdHRlci9zb3VuZEVtaXR0ZXInO1xuaW1wb3J0IHsgZXJyb3JGYWN0b3J5LCBVbmtub3duRXJyb3IgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBHZW9sb2NhdGlvbiB9IGZyb20gJy4vZ2VvUHJvdmlkZXIvZ2VvJztcbmltcG9ydCB7IEdlb1Byb3ZpZGVyIH0gZnJvbSAnLi9nZW9Qcm92aWRlci9nZW9Qcm92aWRlcic7XG5pbXBvcnQgeyBOYXZpZ2F0b3IgfSBmcm9tICcuL25hdmlnYXRvci9uYXZpZ2F0b3InO1xuaW1wb3J0IHsgT3BlbklkU2NvcGVQYXJzZXIgfSBmcm9tICcuL3Njb3BlUGFyc2VyJztcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICcuL3Nlc3Npb24nO1xuaW1wb3J0IHsgTG9naW5PcHRpb25zIH0gZnJvbSAnLi9sb2dpbk9wdGlvbnMnO1xuXG5cbi8qKlxuICogQ3liZXJ1cyBLZXkgQVBJIHdoaWNoIGFsbG93cyB5b3UgdG8gZG8gYSBkZWxlZ2F0ZSBsb2dpbiB3aXRoIE9wZW5JZCBwcm90b2NvbC5cbiAqXG4gKiBAY2xhc3MgQ3liZXJ1c0tleUFQSVxuICovXG5leHBvcnQgY2xhc3MgQ3liZXJ1c0tleUFQSSB7XG4gIHByaXZhdGUgX2FwaVVybDogVVJMO1xuICBwcml2YXRlIF9nZW9Qcm92aWRlcjogR2VvUHJvdmlkZXI7XG4gIHByaXZhdGUgX2NhY2hlZEdlbzogR2VvbG9jYXRpb247XG4gIHByaXZhdGUgX2RlbGF5TXM6IG51bWJlcjtcblxuICAvKipcbiAgICpDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEN5YmVydXNLZXlBUEkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBob3N0VXJsIEJhc2UgVVJMIG9mIHRoZSBob3N0IHNlcnZlciwgZS5nLiBgaHR0cHM6Ly9wcm9kdWN0aW9uLWFwaS5jeWJlcnVza2V5LmNvbWBcbiAgICogQHBhcmFtIHtHZW9Qcm92aWRlcn0gW2dlb1Byb3ZpZGVyXSBHZW9sb2NhbGl6YXRpb24gcHJvdmlkZXIuIFVzZSBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbiBsaWtlIGBIVE1MNUdlb1Byb3ZpZGVyYC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWxheU1zPTYwMF0gRGVsYXkgKG1zKSBiZXR3ZWVuIG1ha2luZyBhbiBBdXRoZW50aWNhdGlvbiByZXF1ZXN0IGFuZCBhIHNvdW5kIHBsYXlpbmcuXG4gICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihob3N0VXJsOiBzdHJpbmcsIGdlb1Byb3ZpZGVyPzogR2VvUHJvdmlkZXIsIGRlbGF5TXM6IG51bWJlciA9IDYwMCkge1xuICAgIHRoaXMuX2FwaVVybCA9IG5ldyBVUkwoJy9hcGkvdjIvJywgaG9zdFVybCk7XG4gICAgdGhpcy5fZ2VvUHJvdmlkZXIgPSBnZW9Qcm92aWRlcjtcbiAgICB0aGlzLl9kZWxheU1zID0gZGVsYXlNcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBDeWJlcnVzIEtleSBzZXNzaW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50SWQgUHVibGljIGNsaWVudCBJRCBnZW5lcmF0ZWQgZHVyaW5nIGNyZWF0aW5nIHRoZSBhY2NvdW50LlxuICAgKiBAcGFyYW0ge0dlb2xvY2F0aW9ufSBbZ2VvXSBHaXZlIGEgdmFsdWUgaWYgeW91IHdhbnQgdG8gcGFzcyBvcHRpb25hbCBnZW9sb2NhdGlvbiBtZWFzdXJlbWVudC5cbiAgICogICAgSXQgY2FuIGJlIGxhdGVyIHVzZSB0byBjb21wYXJlIGl0IGFnYWluc3QgdGhlIG1vYmlsZSdzIG1lYXN1cmVtZW50IChpZiB5b3UgaGF2ZSBzZXQgYGZhaWxfb25fZ2VvX21pc21hdGNoYCkuXG4gICAqICAgIFRob3NlIG1lYXN1cmVtZW50cyBjYW4gYmUgdXNlZCBhbHNvIHRvIGdlbmVyYWwgaW1wcm92ZW1lbnQgb2YgdGhlIHNlY3VyaXR5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29yaWdpbl0gVGhlIG9yaWdpbiBkb21haW4gb2YgdGhlIHJlcXVlc3QgYmVpbmcgbWFkZS4gSWYgYG51bGxgIHRoZW4gdGhlIFJlZmVyZXIgaGVhZGVyIHdpbGwgYmUgdXNlZC5cbiAgICogQHRocm93cyBXcm9uZ0pzb25FcnJvciwgT3BlbkFwaUVycm9yLCBSZXNvdXJjZU5vdEZvdW5kRXJyb3IsIE9UUEdlbmVyYXRpb25FcnJvciwgVW5rbm93bkVycm9yXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFNlc3Npb24+fSBUaGUgQ3liZXJ1cyBLZXkgc2Vzc2lvbi5cbiAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcbiAgICovXG4gIHB1YmxpYyBhc3luYyBjcmVhdGVTZXNzaW9uKGNsaWVudElkOiBzdHJpbmcsIGdlbz86IEdlb2xvY2F0aW9uLCBvcmlnaW4/OiBzdHJpbmcpOiBQcm9taXNlPFNlc3Npb24+IHtcbiAgICBjb25zdCBkYXRhID0geyBjbGllbnRfaWQ6IGNsaWVudElkIH07XG5cbiAgICBpZiAoZ2VvKSB7XG4gICAgICBkYXRhWydsYXQnXSA9IGdlby5sYXRpdHVkZTtcbiAgICAgIGRhdGFbJ2xuZyddID0gZ2VvLmxvbmdpdHVkZTtcbiAgICB9XG5cbiAgICBpZiAob3JpZ2luKSB7XG4gICAgICBkYXRhWydvcmlnaW4nXSA9IG9yaWdpbjtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuX2dldFVybCgnc2Vzc2lvbnMnKSwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiB0aGlzLl9nZXRVcmxFbmNvZGVkQm9keShkYXRhKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGlmIChyZXNwb25zZS5vayAmJiByZXNwb25zZS5zdGF0dXMgPT09IDIwMSAmJiBqc29uLnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiBuZXcgU2Vzc2lvbihqc29uLmRhdGEpO1xuICAgIH1cblxuICAgIGlmICghanNvbi5lcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFVua25vd25FcnJvcigpXG4gICAgfVxuXG4gICAgdGhyb3cgZXJyb3JGYWN0b3J5KGpzb24uZXJyb3IsIGpzb24uZXJyb3JfZGVzY3JpcHRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBzb25pYyBzb3VuZCB3aXRoIGVtYmVkZGVkIE9UUC5cbiAgICpcbiAgICogQHBhcmFtIHtTZXNzaW9ufSBzZXNzaW9uIEN5YmVydXMgS2V5J3Mgc2Vzc2lvbiBnZW5lcmF0ZWQgYnkgYSB1c2VyIGZvciBhIGxvZ2luLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheUJ1ZmZlcj59IEJ5dGVzIG9mIGEgc291bmQuXG4gICAqIEB0aHJvd3MgUmVzb3VyY2VOb3RGb3VuZEVycm9yXG4gICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZ2V0T1RQU291bmQoc2Vzc2lvbjogU2Vzc2lvbik6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuX2dldFVybChgc2Vzc2lvbnMvJHtzZXNzaW9uLnNlc3Npb25JZH1gKSwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0JzogJ2F1ZGlvL21wZWcnLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nXG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGJ1ZmZlcjogRnVuY3Rpb24gPSByZXNwb25zZS5idWZmZXIgfHwgcmVzcG9uc2UuYXJyYXlCdWZmZXI7XG4gICAgcmV0dXJuIGF3YWl0IGJ1ZmZlci5jYWxsKHJlc3BvbnNlKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdldHMgT3BlbklEJ3MgQXV0aGVudGljYXRpb24gZW5kcG9pbnQgVVJMIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBwcm9jZXNzIHRoZSBhdXRoZW50aWNhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtTZXNzaW9ufSBzZXNzaW9uIEN5YmVydXMgS2V5IHNlc3Npb24uXG4gICAqIEBwYXJhbSB7T3BlbklkU2NvcGVQYXJzZXJ9IHNjb3BlIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLlxuICAgKiAgICBPbmNlIHRoZSB1c2VyIGF1dGhvcml6ZXMgdGhlIHJlcXVlc3RlZCBzY29wZXMsIHRoZSBjbGFpbXMgYXJlIHJldHVybmVkIGluIGFuIElEIFRva2VuLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50SWQgUHVibGljIGNsaWVudCBJRCBnZW5lcmF0ZWQgZHVyaW5nIGNyZWF0aW5nIHRoZSBhY2NvdW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVkaXJlY3RVcmkgUmVkaXJlY3QgVVJJIHRvIHdoaWNoIHRoZSByZXNwb25zZSB3aWxsIGJlIHNlbnQuIElmIHRoZSB2YWx1ZSBpcyBub3Qgd2hpdGVsaXN0ZWQgdGhlbiB0aGUgcmVxdWVzdCB3aWxsIGZhaWwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc3RhdGVdXG4gICAqICAgIFJFQ09NTUVOREVELiBPcGFxdWUgdmFsdWUgdXNlZCB0byBtYWludGFpbiBzdGF0ZSBiZXR3ZWVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgY2FsbGJhY2suIFR5cGljYWxseSwgQ1NSRiwgWFNSRiBtaXRpZ2F0aW9uIGlzIGRvbmUgYnkgY3J5cHRvZ3JhcGhpY2FsbHkgYmluZGluZyB0aGUgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgd2l0aCBhIGJyb3dzZXIgY29va2llLlxuICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIHByZXNlcnZlcyBzb21lIHN0YXRlIG9iamVjdCBzZXQgYnkgdGhlIGNsaWVudCBpbiB0aGUgQXV0aGVudGljYXRpb24gcmVxdWVzdCBhbmQgbWFrZXMgaXQgYXZhaWxhYmxlIHRvIHRoZSBjbGllbnQgaW4gdGhlIHJlc3BvbnNlLlxuICAgKiAgICBJdOKAmXMgdGhhdCB1bmlxdWUgYW5kIG5vbi1ndWVzc2FibGUgdmFsdWUgdGhhdCBhbGxvd3MgeW91IHRvIHByZXZlbnQgdGhlIGF0dGFjayBieSBjb25maXJtaW5nIGlmIHRoZSB2YWx1ZSBjb21pbmcgZnJvbSB0aGUgcmVzcG9uc2UgbWF0Y2hlcyB0aGUgb25lIHlvdSBleHBlY3QgKHRoZSBvbmUgeW91IGdlbmVyYXRlZCB3aGVuIGluaXRpYXRpbmcgdGhlIHJlcXVlc3QpLlxuICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIGlzIGEgc3RyaW5nIHNvIHlvdSBjYW4gZW5jb2RlIGFueSBvdGhlciBpbmZvcm1hdGlvbiBpbiBpdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub25jZV1cbiAgICogICAgU3RyaW5nIHZhbHVlIHVzZWQgdG8gYXNzb2NpYXRlIGEgQ2xpZW50IHNlc3Npb24gd2l0aCBhbiBJRCBUb2tlbiwgYW5kIHRvIG1pdGlnYXRlIHJlcGxheSBhdHRhY2tzLlxuICAgKiAgICBUaGUgdmFsdWUgaXMgcGFzc2VkIHRocm91Z2ggdW5tb2RpZmllZCBmcm9tIHRoZSBBdXRoZW50aWNhdGlvbiBSZXF1ZXN0IHRvIHRoZSBJRCBUb2tlbi5cbiAgICogICAgU3VmZmljaWVudCBlbnRyb3B5IE1VU1QgYmUgcHJlc2VudCBpbiB0aGUgbm9uY2UgdmFsdWVzIHVzZWQgdG8gcHJldmVudCBhdHRhY2tlcnMgZnJvbSBndWVzc2luZyB2YWx1ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbcmVzcG9uc2VUeXBlPSdjb2RlJ10gT3BlbklkIHJlc3BvbnNlIHR5cGUuIFRoZSBkZWZhdWx0IGlzIGBjb2RlYCAoQ29kZSBGbG93LCBpbnZvbHZpbmcgdGhlIGZyb250LWNoYW5uZWwgYW5kIGJhY2tjaGFubmVsKS5cbiAgICogQHJldHVybnMgT3BlbklEJ3MgQXV0aGVudGljYXRpb24gZW5kcG9pbnQgVVJMXG4gICAqIEB0aHJvd3MgSW52YWxpZFJlZGlyZWN0VXJpRXJyb3IsIEludmFsaWRDbGllbnRFcnJvciwgUmVzb3VyY2VOb3RGb3VuZEVycm9yXG4gICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXG4gICAqL1xuICBwdWJsaWMgZ2V0QXV0aGVudGljYXRpb25FbmRwb2ludFVybChzZXNzaW9uOiBTZXNzaW9uLCBzY29wZTogT3BlbklkU2NvcGVQYXJzZXIsIGNsaWVudElkOiBzdHJpbmcsIHJlZGlyZWN0VXJpOiBzdHJpbmcsIHN0YXRlPzogc3RyaW5nLCBub25jZT86IHN0cmluZywgcmVzcG9uc2VUeXBlID0gJ2NvZGUnKTogc3RyaW5nIHtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICBzZXNzaW9uX2lkOiBzZXNzaW9uLnNlc3Npb25JZCxcbiAgICAgIGNsaWVudF9pZDogY2xpZW50SWQsXG4gICAgICBzY29wZTogc2NvcGUuZ2V0VmFsdWUoKSxcbiAgICAgIHJlZGlyZWN0X3VyaTogcmVkaXJlY3RVcmksXG4gICAgICByZXNwb25zZV90eXBlOiByZXNwb25zZVR5cGVcbiAgICB9O1xuXG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBkYXRhWydzdGF0ZSddID0gc3RhdGU7XG4gICAgfVxuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBkYXRhWydub25jZSddID0gbm9uY2U7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCh0aGlzLl9nZXRVcmwoJ2F1dGhlbnRpY2F0ZScpKTtcblxuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKHBhcmFtZXRlck5hbWUpID0+IHtcbiAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKHBhcmFtZXRlck5hbWUsIGRhdGFbcGFyYW1ldGVyTmFtZV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVybC5ocmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGFuIGF1dGhlbnRpY2F0aW9uIHdpdGggQ3liZXJ1cyBLZXkuIFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50SWQgUHVibGljIGNsaWVudCBJRCBnZW5lcmF0ZWQgZHVyaW5nIGNyZWF0aW5nIHRoZSBhY2NvdW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVkaXJlY3RVcmkgUmVkaXJlY3QgVVJJIHRvIHdoaWNoIHRoZSByZXNwb25zZSB3aWxsIGJlIHNlbnQuIElmIHRoZSB2YWx1ZSBpcyBub3Qgd2hpdGVsaXN0ZWQgdGhlbiB0aGUgcmVxdWVzdCB3aWxsIGZhaWwuXG4gICAqIEBwYXJhbSB7T3BlbklkU2NvcGVQYXJzZXJ9IHNjb3BlIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLlxuICAgKiAgICBPbmNlIHRoZSB1c2VyIGF1dGhvcml6ZXMgdGhlIHJlcXVlc3RlZCBzY29wZXMsIHRoZSBjbGFpbXMgYXJlIHJldHVybmVkIGluIGFuIElEIFRva2VuLlxuICAgKiBAcGFyYW0ge1NvdW5kRW1pdHRlcn0gc291bmRFbWl0dGVyIEludGVyZmFjZSB3aGljaCBjYW4gcGxheSBhIHNvdW5kLlxuICAgKiBAcGFyYW0ge05hdmlnYXRvcn0gbmF2aWdhdG9yIENsYXNzIGRlc2NyaWJlcyBhbiBhY3Rpb24gdGhhdCB3aWxsIGJlIGRvbmUgdG8gQXV0aGVudGljYXRpb24gVVJMLiBGb3IgYnJvd3NlcnMgaXQgd2lsbCBiZSBhIHBhZ2UgcmVkaXJlY3Rpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JpZ2luXSBUaGUgb3JpZ2luIGRvbWFpbiBvZiB0aGUgcmVxdWVzdCBiZWluZyBtYWRlLiBJZiBgbnVsbGAgdGhlbiB0aGUgUmVmZXJlciBoZWFkZXIgd2lsbCBiZSB1c2VkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3N0YXRlXVxuICAgKiAgICBSRUNPTU1FTkRFRC4gT3BhcXVlIHZhbHVlIHVzZWQgdG8gbWFpbnRhaW4gc3RhdGUgYmV0d2VlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIGNhbGxiYWNrLiBUeXBpY2FsbHksIENTUkYsIFhTUkYgbWl0aWdhdGlvbiBpcyBkb25lIGJ5IGNyeXB0b2dyYXBoaWNhbGx5IGJpbmRpbmcgdGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIHdpdGggYSBicm93c2VyIGNvb2tpZS5cbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBwcmVzZXJ2ZXMgc29tZSBzdGF0ZSBvYmplY3Qgc2V0IGJ5IHRoZSBjbGllbnQgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgYW5kIG1ha2VzIGl0IGF2YWlsYWJsZSB0byB0aGUgY2xpZW50IGluIHRoZSByZXNwb25zZS5cbiAgICogICAgSXTigJlzIHRoYXQgdW5pcXVlIGFuZCBub24tZ3Vlc3NhYmxlIHZhbHVlIHRoYXQgYWxsb3dzIHlvdSB0byBwcmV2ZW50IHRoZSBhdHRhY2sgYnkgY29uZmlybWluZyBpZiB0aGUgdmFsdWUgY29taW5nIGZyb20gdGhlIHJlc3BvbnNlIG1hdGNoZXMgdGhlIG9uZSB5b3UgZXhwZWN0ICh0aGUgb25lIHlvdSBnZW5lcmF0ZWQgd2hlbiBpbml0aWF0aW5nIHRoZSByZXF1ZXN0KS5cbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBpcyBhIHN0cmluZyBzbyB5b3UgY2FuIGVuY29kZSBhbnkgb3RoZXIgaW5mb3JtYXRpb24gaW4gaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm9uY2VdXG4gICAqICAgIFN0cmluZyB2YWx1ZSB1c2VkIHRvIGFzc29jaWF0ZSBhIENsaWVudCBzZXNzaW9uIHdpdGggYW4gSUQgVG9rZW4sIGFuZCB0byBtaXRpZ2F0ZSByZXBsYXkgYXR0YWNrcy5cbiAgICogICAgVGhlIHZhbHVlIGlzIHBhc3NlZCB0aHJvdWdoIHVubW9kaWZpZWQgZnJvbSB0aGUgQXV0aGVudGljYXRpb24gUmVxdWVzdCB0byB0aGUgSUQgVG9rZW4uXG4gICAqICAgIFN1ZmZpY2llbnQgZW50cm9weSBNVVNUIGJlIHByZXNlbnQgaW4gdGhlIG5vbmNlIHZhbHVlcyB1c2VkIHRvIHByZXZlbnQgYXR0YWNrZXJzIGZyb20gZ3Vlc3NpbmcgdmFsdWVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3Jlc3BvbnNlVHlwZT0nY29kZSddIE9wZW5JZCByZXNwb25zZSB0eXBlLiBUaGUgZGVmYXVsdCBpcyBgY29kZWAgKENvZGUgRmxvdywgaW52b2x2aW5nIHRoZSBmcm9udC1jaGFubmVsIGFuZCBiYWNrY2hhbm5lbCkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxuICAgKi9cbiAgcHVibGljIGFzeW5jIGF1dGhlbnRpY2F0ZShjbGllbnRJZDogc3RyaW5nLCByZWRpcmVjdFVyaTogc3RyaW5nLCBzY29wZTogT3BlbklkU2NvcGVQYXJzZXIsIHNvdW5kRW1pdHRlcjogU291bmRFbWl0dGVyLCBuYXZpZ2F0b3I6IE5hdmlnYXRvciwgb3JpZ2luPzogc3RyaW5nLCBzdGF0ZT86IHN0cmluZywgbm9uY2U/OiBzdHJpbmcsIHJlc3BvbnNlVHlwZSA9ICdjb2RlJyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLl9nZW9Qcm92aWRlciAmJiAhdGhpcy5fY2FjaGVkR2VvKSB7XG4gICAgICB0aGlzLl9jYWNoZWRHZW8gPSBhd2FpdCB0aGlzLl9nZW9Qcm92aWRlci5nZXRHZW8oKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgdGhpcy5jcmVhdGVTZXNzaW9uKGNsaWVudElkLCB0aGlzLl9jYWNoZWRHZW8sIG9yaWdpbik7XG4gICAgY29uc3Qgc291bmQgPSBhd2FpdCB0aGlzLmdldE9UUFNvdW5kKHNlc3Npb24pO1xuXG4gICAgY29uc3QgYXV0aGVudGljYXRlVXJsID0gdGhpcy5nZXRBdXRoZW50aWNhdGlvbkVuZHBvaW50VXJsKHNlc3Npb24sIHNjb3BlLCBjbGllbnRJZCwgcmVkaXJlY3RVcmksIHN0YXRlLCBub25jZSwgcmVzcG9uc2VUeXBlKTtcblxuICAgIGNvbnNvbGUuaW5mbyhgTmF2aWdhdGluZyB0byAke2F1dGhlbnRpY2F0ZVVybH0uYCk7XG5cbiAgICBhd2FpdCBuYXZpZ2F0b3IubmF2aWdhdGUoYXV0aGVudGljYXRlVXJsKTtcblxuICAgIGF3YWl0IHRoaXMuX3RpbWVvdXQoMTAwMCk7XG5cbiAgICBjb25zb2xlLmluZm8oYFNvdW5kIGVtaXR0aW5nLmApXG5cbiAgICBhd2FpdCBzb3VuZEVtaXR0ZXIuZW1pdChzb3VuZCk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGVzIHRvIEF1dGhlbnRpY2F0aW9uIEVuZHBvaW50IGFuZCByZXR1cm5zIGEgc291bmQuIFlvdSBoYXZlIHRvIGVtaXQgaXQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRJZCBQdWJsaWMgY2xpZW50IElEIGdlbmVyYXRlZCBkdXJpbmcgY3JlYXRpbmcgdGhlIGFjY291bnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWRpcmVjdFVyaSBSZWRpcmVjdCBVUkkgdG8gd2hpY2ggdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudC4gSWYgdGhlIHZhbHVlIGlzIG5vdCB3aGl0ZWxpc3RlZCB0aGVuIHRoZSByZXF1ZXN0IHdpbGwgZmFpbC5cbiAgICogQHBhcmFtIHtPcGVuSWRTY29wZVBhcnNlcn0gc2NvcGUgRWFjaCBzY29wZSByZXR1cm5zIGEgc2V0IG9mIHVzZXIgYXR0cmlidXRlcywgd2hpY2ggYXJlIGNhbGxlZCBjbGFpbXMuXG4gICAqICAgIE9uY2UgdGhlIHVzZXIgYXV0aG9yaXplcyB0aGUgcmVxdWVzdGVkIHNjb3BlcywgdGhlIGNsYWltcyBhcmUgcmV0dXJuZWQgaW4gYW4gSUQgVG9rZW4uXG4gICAqIEBwYXJhbSB7TmF2aWdhdG9yfSBuYXZpZ2F0b3IgQ2xhc3MgZGVzY3JpYmVzIGFuIGFjdGlvbiB0aGF0IHdpbGwgYmUgZG9uZSB0byBBdXRoZW50aWNhdGlvbiBVUkwuIEZvciBicm93c2VycyBpdCB3aWxsIGJlIGEgcGFnZSByZWRpcmVjdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmlnaW5dIFRoZSBvcmlnaW4gZG9tYWluIG9mIHRoZSByZXF1ZXN0IGJlaW5nIG1hZGUuIElmIGBudWxsYCB0aGVuIHRoZSBSZWZlcmVyIGhlYWRlciB3aWxsIGJlIHVzZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc3RhdGVdXG4gICAqICAgIFJFQ09NTUVOREVELiBPcGFxdWUgdmFsdWUgdXNlZCB0byBtYWludGFpbiBzdGF0ZSBiZXR3ZWVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgY2FsbGJhY2suIFR5cGljYWxseSwgQ1NSRiwgWFNSRiBtaXRpZ2F0aW9uIGlzIGRvbmUgYnkgY3J5cHRvZ3JhcGhpY2FsbHkgYmluZGluZyB0aGUgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgd2l0aCBhIGJyb3dzZXIgY29va2llLlxuICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIHByZXNlcnZlcyBzb21lIHN0YXRlIG9iamVjdCBzZXQgYnkgdGhlIGNsaWVudCBpbiB0aGUgQXV0aGVudGljYXRpb24gcmVxdWVzdCBhbmQgbWFrZXMgaXQgYXZhaWxhYmxlIHRvIHRoZSBjbGllbnQgaW4gdGhlIHJlc3BvbnNlLlxuICAgKiAgICBJdOKAmXMgdGhhdCB1bmlxdWUgYW5kIG5vbi1ndWVzc2FibGUgdmFsdWUgdGhhdCBhbGxvd3MgeW91IHRvIHByZXZlbnQgdGhlIGF0dGFjayBieSBjb25maXJtaW5nIGlmIHRoZSB2YWx1ZSBjb21pbmcgZnJvbSB0aGUgcmVzcG9uc2UgbWF0Y2hlcyB0aGUgb25lIHlvdSBleHBlY3QgKHRoZSBvbmUgeW91IGdlbmVyYXRlZCB3aGVuIGluaXRpYXRpbmcgdGhlIHJlcXVlc3QpLlxuICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIGlzIGEgc3RyaW5nIHNvIHlvdSBjYW4gZW5jb2RlIGFueSBvdGhlciBpbmZvcm1hdGlvbiBpbiBpdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub25jZV1cbiAgICogICAgU3RyaW5nIHZhbHVlIHVzZWQgdG8gYXNzb2NpYXRlIGEgQ2xpZW50IHNlc3Npb24gd2l0aCBhbiBJRCBUb2tlbiwgYW5kIHRvIG1pdGlnYXRlIHJlcGxheSBhdHRhY2tzLlxuICAgKiAgICBUaGUgdmFsdWUgaXMgcGFzc2VkIHRocm91Z2ggdW5tb2RpZmllZCBmcm9tIHRoZSBBdXRoZW50aWNhdGlvbiBSZXF1ZXN0IHRvIHRoZSBJRCBUb2tlbi5cbiAgICogICAgU3VmZmljaWVudCBlbnRyb3B5IE1VU1QgYmUgcHJlc2VudCBpbiB0aGUgbm9uY2UgdmFsdWVzIHVzZWQgdG8gcHJldmVudCBhdHRhY2tlcnMgZnJvbSBndWVzc2luZyB2YWx1ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbcmVzcG9uc2VUeXBlPSdjb2RlJ10gT3BlbklkIHJlc3BvbnNlIHR5cGUuIFRoZSBkZWZhdWx0IGlzIGBjb2RlYCAoQ29kZSBGbG93LCBpbnZvbHZpbmcgdGhlIGZyb250LWNoYW5uZWwgYW5kIGJhY2tjaGFubmVsKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgbmF2aWdhdGVBbmRHZXRUaGVTb3VuZChjbGllbnRJZDogc3RyaW5nLCByZWRpcmVjdFVyaTogc3RyaW5nLCBzY29wZTogT3BlbklkU2NvcGVQYXJzZXIsIG5hdmlnYXRvcjogTmF2aWdhdG9yLCBvcmlnaW4/OiBzdHJpbmcsIHN0YXRlPzogc3RyaW5nLCBub25jZT86IHN0cmluZywgcmVzcG9uc2VUeXBlID0gJ2NvZGUnKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICAgIGlmICh0aGlzLl9nZW9Qcm92aWRlciAmJiAhdGhpcy5fY2FjaGVkR2VvKSB7XG4gICAgICB0aGlzLl9jYWNoZWRHZW8gPSBhd2FpdCB0aGlzLl9nZW9Qcm92aWRlci5nZXRHZW8oKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgdGhpcy5jcmVhdGVTZXNzaW9uKGNsaWVudElkLCB0aGlzLl9jYWNoZWRHZW8sIG9yaWdpbik7XG4gICAgY29uc3Qgc291bmQgPSBhd2FpdCB0aGlzLmdldE9UUFNvdW5kKHNlc3Npb24pO1xuXG4gICAgY29uc3QgYXV0aGVudGljYXRlVXJsID0gdGhpcy5nZXRBdXRoZW50aWNhdGlvbkVuZHBvaW50VXJsKHNlc3Npb24sIHNjb3BlLCBjbGllbnRJZCwgcmVkaXJlY3RVcmksIHN0YXRlLCBub25jZSwgcmVzcG9uc2VUeXBlKTtcblxuICAgIGNvbnNvbGUuaW5mbyhgTmF2aWdhdGluZyB0byAke2F1dGhlbnRpY2F0ZVVybH0uYCk7XG5cbiAgICBhd2FpdCBuYXZpZ2F0b3IubmF2aWdhdGUoYXV0aGVudGljYXRlVXJsKTtcblxuICAgIGF3YWl0IHRoaXMuX3RpbWVvdXQodGhpcy5fZGVsYXlNcyk7XG5cbiAgICByZXR1cm4gc291bmQ7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgbG9naW5UaHJvdWdoQ3liZXJ1c0tleURhc2hib2FyZChvcHRpb25zOiBMb2dpbk9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICBjbGllbnRfaWQ6IG9wdGlvbnMuY2xpZW50SWQsXG4gICAgICBzY29wZTogb3B0aW9ucy5zY29wZS5nZXRWYWx1ZSgpLFxuICAgICAgcmVkaXJlY3RfdXJpOiBvcHRpb25zLnJlZGlyZWN0VXJpLFxuICAgICAgcmVzcG9uc2VfdHlwZTogb3B0aW9ucy5yZXNwb25zZVR5cGUsXG4gICAgICBzdGF0ZTogb3B0aW9ucy5zdGF0ZSxcbiAgICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgICAgZGlzcGxheTogb3B0aW9ucy5kaXNwbGF5IHx8ICdwYWdlJyxcbiAgICAgIHByb21wdDogb3B0aW9ucy5wcm9tcHQsXG4gICAgICB0aGVtZTogb3B0aW9ucy50aGVtZSxcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMuc3RhdGUpIHtcbiAgICAgIGRhdGFbJ3N0YXRlJ10gPSBvcHRpb25zLnN0YXRlO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm5vbmNlKSB7XG4gICAgICBkYXRhWydub25jZSddID0gb3B0aW9ucy5ub25jZTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHRoaXMuX2dldFVybCgnYXV0aGVudGljYXRlJykpO1xuXG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgocGFyYW1ldGVyTmFtZSkgPT4ge1xuICAgICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQocGFyYW1ldGVyTmFtZSwgZGF0YVtwYXJhbWV0ZXJOYW1lXSk7XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmluZm8oYE5hdmlnYXRpbmcgdG8gJHt1cmwuaHJlZn0uYCk7XG5cbiAgICBhd2FpdCBvcHRpb25zLm5hdmlnYXRvci5uYXZpZ2F0ZSh1cmwuaHJlZik7XG4gIH1cblxuICBwcml2YXRlIF9nZXRVcmwocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKG5ldyBVUkwocGF0aCwgdGhpcy5fYXBpVXJsKSkuaHJlZjtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFVybEVuY29kZWRCb2R5KGRhdGE6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLnJlZHVjZTxzdHJpbmdbXT4oKHJlc3VsdDogc3RyaW5nW10sIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBlbmNvZGVkS2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGtleSk7XG4gICAgICBjb25zdCBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcblxuICAgICAgcmVzdWx0LnB1c2goYCR7ZW5jb2RlZEtleX09JHtlbmNvZGVkVmFsdWV9YCk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwgW10pLmpvaW4oXCImXCIpXG4gIH1cblxuICBwcml2YXRlIF90aW1lb3V0KG1zOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFNlc3Npb25SZXNwb25zZSB7XG4gIHNlc3Npb25faWQ6IHN0cmluZztcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xufVxuXG5cbi8qKlxuICogRGF0YSBjbGFzcyByZXByZXNlbnRpbmcgYSBDeWJlcnVzIEtleSBzZXNzaW9uLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBTZXNzaW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uIHtcbiAgLyoqXG4gICAqIFNlc3Npb24ncyB1bmlxdWUgaWRlbnRpZmllci4gSXQncyB2YWxpZCB1cCB0byAyMHMuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBTZXNzaW9uXG4gICAqL1xuICBwdWJsaWMgc2Vzc2lvbklkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgVVRDIGRhdGUgcmVwcmVzZW50aW5nIGEgZGF0ZSAoYW5kIHRpbWUpIHdoZW4gYSBzZXNzaW9uIGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAqXG4gICAqIEB0eXBlIHtEYXRlfVxuICAgKiBAbWVtYmVyb2YgU2Vzc2lvblxuICAgKi9cbiAgcHVibGljIGNyZWF0ZWRBdDogRGF0ZTtcblxuICBjb25zdHJ1Y3Rvcihqc29uOiBTZXNzaW9uUmVzcG9uc2UpIHtcbiAgICB0aGlzLnNlc3Npb25JZCA9IGpzb24uc2Vzc2lvbl9pZDtcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IG5ldyBEYXRlKGpzb24uY3JlYXRlZF9hdCk7XG4gIH1cbn0iLCIvKipcbiAqIEFuIGFic3RyYWN0aW9uIGZvciBhIHRha2VuIGdlb2xvY2F0aW9uIG1lYXN1cmVtZW50LlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBHZW9sb2NhdGlvblxuICovXG5leHBvcnQgY2xhc3MgR2VvbG9jYXRpb24ge1xuICBwcml2YXRlIF9sYXRpdHVkZTogbnVtYmVyO1xuICBwcml2YXRlIF9sb25naXR1ZGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYWNjdXJhY3k6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihsYXRpdHVkZTogbnVtYmVyLCBsb25naXR1ZGU6IG51bWJlciwgYWNjdXJhY3k/OiBudW1iZXIpIHtcbiAgICB0aGlzLl9sYXRpdHVkZSA9IGxhdGl0dWRlO1xuICAgIHRoaXMuX2xvbmdpdHVkZSA9IGxvbmdpdHVkZTtcbiAgICB0aGlzLl9hY2N1cmFjeSA9IGFjY3VyYWN5O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGxhdGl0dWRlLlxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEdlb2xvY2F0aW9uXG4gICAqL1xuICBnZXQgbGF0aXR1ZGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGF0aXR1ZGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIGxvbmdpdHVkZS5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBHZW9sb2NhdGlvblxuICAgKi9cbiAgZ2V0IGxvbmdpdHVkZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sb25naXR1ZGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhbiBhY2N1cmFjeSBvZiBhIG1lYXN1cmVtZW50LlxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEdlb2xvY2F0aW9uXG4gICAqL1xuICBnZXQgYWNjdXJhY3koKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjdXJhY3k7XG4gIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL3Nkay9hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvZW1pdHRlci9zb3VuZEVtaXR0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvZW1pdHRlci93ZWJBdWRpb1NvdW5kRW1pdHRlcic7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9lcnJvcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvbmF2aWdhdG9yL25hdmlnYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9uYXZpZ2F0b3IvcmVkaXJlY3ROYXZpZ2F0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvc2NvcGVQYXJzZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvc2Vzc2lvbic7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9nZW9Qcm92aWRlci9nZW8nO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvZ2VvUHJvdmlkZXIvZ2VvUHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvZ2VvUHJvdmlkZXIvaHRtbDVHZW9Qcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9sb2dpbk9wdGlvbnMnO1xuXG5pbXBvcnQgeyBDeWJlcnVzS2V5QVBJIH0gZnJvbSAnLi9zZGsvYXBpJztcbmV4cG9ydCBkZWZhdWx0IEN5YmVydXNLZXlBUEk7IiwiaW1wb3J0IHsgU291bmRFbWl0dGVyIH0gZnJvbSAnLi9zb3VuZEVtaXR0ZXInO1xuaW1wb3J0IHsgT1RQR2VuZXJhdGlvbkVycm9yIH0gZnJvbSAnLi4vZXJyb3JzJztcblxuLyoqXG4gKiBDbGFzcyB1c2VzIGEgSFRNTDUncyBBdWRpb0NvbnRleHQgaW50ZXJmYWNlIHRvIHBsYXkgYSBzb3VuZC5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgV2ViQXVkaW9Tb3VuZEVtaXR0ZXJcbiAqIEBpbXBsZW1lbnRzIHtTb3VuZEVtaXR0ZXJ9XG4gKi9cbmV4cG9ydCBjbGFzcyBXZWJBdWRpb1NvdW5kRW1pdHRlciBpbXBsZW1lbnRzIFNvdW5kRW1pdHRlciB7XG5cbiAgLyoqXG4gICAqIEVtaXRzIGEgc291bmQgdGhyb3VnaCBIVE1MNSdzIEF1ZGlvQ29udGV4dCBpbnRlcmZhY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IHNvdW5kIEEgYmluYXJ5IHJlY29yZCBvZiB0aGUgc291bmQgeW91IHdhbnQgdG8gcGxheS5cbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqIEBtZW1iZXJvZiBXZWJBdWRpb1NvdW5kRW1pdHRlclxuICAgKi9cbiAgYXN5bmMgZW1pdChzb3VuZDogQXJyYXlCdWZmZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgY29udGV4dDogQXVkaW9Db250ZXh0O1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnRleHQgPSBuZXcgKHdpbmRvd1snQXVkaW9Db250ZXh0J10gfHwgd2luZG93Wyd3ZWJraXRBdWRpb0NvbnRleHQnXSkoKTtcbiAgICB9IGNhdGNoIHtcblxuICAgICAgdGhyb3cgbmV3IE9UUEdlbmVyYXRpb25FcnJvcignb3RwX2dlbmVyYXRpb25fZmFpbHVyZScsICdBdWRpb0NvbnRleHQgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZSA9IGNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG5cbiAgICBjb250ZXh0LmRlY29kZUF1ZGlvRGF0YShzb3VuZCwgKGRlY29kZWREYXRhKSA9PiB7XG4gICAgICBzb3VyY2UuYnVmZmVyID0gZGVjb2RlZERhdGE7XG4gICAgICBzb3VyY2UuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICAgIHNvdXJjZS5zdGFydCgwKTtcbiAgICB9KTtcblxuICAgIGF3YWl0IChuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc291cmNlLm9uZW5kZWQgPSByZXNvbHZlO1xuICAgIH0pKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBNaXNzaW5nUmVkaXJlY3RVcmkgfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3InO1xuXG5cbi8qKlxuICogQ2xhc3MgZGVzY3JpYmVzIGhvdyBPcGVuSUQncyBBdXRoZW50aWNhdGlvbiBFbmRwb2ludCB3aWxsIGJlIGhhbmRsZWQuXG4gKiBUaGlzIGNsYXNzIGlzIHRoaWdodGVuIHRvIGEgZGVmYXVsdCBicm93c2VyIGJlaGF2aW91ciBmb3IgT3BlbklEIHByb3RvY29sIC0gYSByZWRpcmVjdGlvbi5cbiAqIFdoaWNoIG1lYW5zIHRoYXQgeW91ciBVUkwgd2lsbCBiZSB0ZW1wb3JhcmlseSByZXBsYWNlZCBieSB0aGUgQXV0aGVudGljYXRpb24gRW5kcG9pbnRcbiAqIGFuZCByZXBsYWNlZCBhZ2FpbiBieSBpdHMgcmVzcG9uc2UgLSBIVFRQIDMwMi4gVGhlIG5ldyBsb2NhdGlvbiB3aWxsIGJlIHRoZSBvbmUgeW91IGRlZmluZWQgYXMgeW91ciBgcmVkaXJlY3RfdXJpYC5cbiAqIFxuICogQGV4cG9ydFxuICogQGNsYXNzIFJlZGlyZWN0TmF2aWdhdG9yXG4gKiBAaW1wbGVtZW50cyB7TmF2aWdhdG9yfVxuICovXG5leHBvcnQgY2xhc3MgUmVkaXJlY3ROYXZpZ2F0b3IgaW1wbGVtZW50cyBOYXZpZ2F0b3Ige1xuICAvKipcbiAgICogTmF2aWdhdGVzIHRvIHRoZSBnaXZlbiBVUkwuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgQXV0aGVudGljYXRpb24gRW5kcG9pbnQgVVJMLlxuICAgKiBAdGhyb3dzIE1pc3NpbmdSZWRpcmVjdFVyaVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICogQG1lbWJlcm9mIFJlZGlyZWN0TmF2aWdhdG9yXG4gICAqL1xuICBhc3luYyBuYXZpZ2F0ZSh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdXJsKSB7XG4gICAgICB0aHJvdyBuZXcgTWlzc2luZ1JlZGlyZWN0VXJpKClcbiAgICB9XG5cbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxufSIsIlxuLyoqXG4gKiBIYW5keSBjbGFzcyB0byBkZWZpbmUgYW4gT3BlbklEJ3Mgc2NvcGUuXG4gKiBTY29wZXMgYXJlIHVzZWQgYnkgYW4gYXBwbGljYXRpb24gZHVyaW5nIGF1dGhlbnRpY2F0aW9uIHRvIGF1dGhvcml6ZSBhY2Nlc3MgdG8gYSB1c2VyJ3MgZGV0YWlscyxcbiAqIGxpa2UgbmFtZSBhbmQgcGljdHVyZS4gRWFjaCBzY29wZSByZXR1cm5zIGEgc2V0IG9mIHVzZXIgYXR0cmlidXRlcywgd2hpY2ggYXJlIGNhbGxlZCBjbGFpbXMuIFxuICogXG4gKiBZb3UgY2FuIHVzZSBhZGRpdGlvbmFsIHZhbHVlcyBgZW1haWxgIChhZGQgYSB1c2VyJ3MgZW1haWwgY2xhaW0pIGFuZCBgcHJvZmlsZWAgKGFkZCB1c2VyIGZpcnN0IGFuZCBsYXN0IG5hbWUpLlxuICogXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBjb25zdCBzY29wZVBhcnNlciA9IG5ldyBPcGVuSWRTY29wZVBhcnNlcigpO1xuICogY29uc3Qgc2NvcGUgPSBzY29wZVBhcnNlci5hZGRFbWFpbCgpLmFkZFByb2ZpbGUoKS5nZXRWYWx1ZSgpO1xuICogYGBgXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIE9wZW5JZFNjb3BlUGFyc2VyXG4gKi9cbmV4cG9ydCBjbGFzcyBPcGVuSWRTY29wZVBhcnNlciB7XG4gIHByaXZhdGUgX3Njb3BlOiBBcnJheTxzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3Njb3BlID0gWydvcGVuaWQnXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGBlbWFpbGAgc2NvcGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHt0aGlzfVxuICAgKiBAbWVtYmVyb2YgT3BlbklkU2NvcGVQYXJzZXJcbiAgICovXG4gIHB1YmxpYyBhZGRFbWFpbCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5fc2NvcGUuaW5jbHVkZXMoJ2VtYWlsJykpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX3Njb3BlLnB1c2goJ2VtYWlsJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGBwcm9maWxlYCBzY29wZS5cbiAgICpcbiAgICogQHJldHVybnMge3RoaXN9XG4gICAqIEBtZW1iZXJvZiBPcGVuSWRTY29wZVBhcnNlclxuICAgKi9cbiAgcHVibGljIGFkZFByb2ZpbGUoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuX3Njb3BlLmluY2x1ZGVzKCdwcm9maWxlJykpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX3Njb3BlLnB1c2goJ3Byb2ZpbGUnKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgZm9ybWF0dGVkIHNjb3BlIHZhbHVlLCBlLmcuIGBvcGVuaWQgZW1haWxgLlxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgT3BlbklkU2NvcGVQYXJzZXJcbiAgICovXG4gIHB1YmxpYyBnZXRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zY29wZS5qb2luKCcgJyk7XG4gIH1cbn0iLCJpbXBvcnQgeyBHZW9sb2NhdGlvbiB9IGZyb20gJy4vZ2VvJztcbmltcG9ydCB7IEdlb1Byb3ZpZGVyIH0gZnJvbSAnLi9nZW9Qcm92aWRlcic7XG5cblxuLyoqXG4gKiBDbGFzcyBwcm92aWRlcyBhIGdlb2xvY2FsaXphdGlvbiBtZWFzdXJlbWVudC5cbiAqIEl0IHVzZXMgYSBIVE1MNSdzIGBHZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKWAgbWV0aG9kLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBIVE1MNUdlb1Byb3ZpZGVyXG4gKiBAaW1wbGVtZW50cyB7R2VvUHJvdmlkZXJ9XG4gKi9cbmV4cG9ydCBjbGFzcyBIVE1MNUdlb1Byb3ZpZGVyIGltcGxlbWVudHMgR2VvUHJvdmlkZXIge1xuICBwcml2YXRlIF9lbmFibGVIaWdoQWNjdXJhY3k6IGJvb2xlYW47XG4gIHByaXZhdGUgX25hdmlnYXRvcjogTmF2aWdhdG9yO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEhUTUw1R2VvUHJvdmlkZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VuYWJsZUhpZ2hBY2N1cmFjeT1mYWxzZV0gIEZvcmNlcyBoaWdoIGFjY3VyYWN5IG9mIHRoZSBnZW9sb2NhdGlvbi4gSXQgbWF5IHRha2UgbG9uZ2VyLlxuICAgKiBAcGFyYW0ge05hdmlnYXRvcn0gW25hdmlnYXRvcj13aW5kb3cubmF2aWdhdG9yXVxuICAgKiBAbWVtYmVyb2YgSFRNTDVHZW9Qcm92aWRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoZW5hYmxlSGlnaEFjY3VyYWN5ID0gZmFsc2UsIG5hdmlnYXRvcjogTmF2aWdhdG9yID0gd2luZG93Lm5hdmlnYXRvcikge1xuICAgIHRoaXMuX2VuYWJsZUhpZ2hBY2N1cmFjeSA9IGVuYWJsZUhpZ2hBY2N1cmFjeTtcbiAgICB0aGlzLl9uYXZpZ2F0b3IgPSBuYXZpZ2F0b3I7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIGdlb2xvY2FsaXphdGlvbiBtZWFzdXJlbWVudC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8R2VvbG9jYXRpb24+fSBHZW9sb2NhbGl6YXRpb24gbWVhc3VyZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBIVE1MNUdlb1Byb3ZpZGVyXG4gICAqL1xuICBhc3luYyBnZXRHZW8oKTogUHJvbWlzZTxHZW9sb2NhdGlvbj4ge1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IHRoaXMuX2dldEdlbyh0aGlzLl9lbmFibGVIaWdoQWNjdXJhY3kpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gRS5nLiB1c2VyIGRpZG4ndCBhZ3JlZSBvbiBnZW9saWNhbGl6YXRpb24uXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IGNvb3JkcyB9ID0gcmVzdWx0O1xuXG4gICAgcmV0dXJuIG5ldyBHZW9sb2NhdGlvbihjb29yZHMubGF0aXR1ZGUsIGNvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5hY2N1cmFjeSk7XG4gIH1cblxuICBfZ2V0R2VvKGVuYWJsZUhpZ2hBY2N1cmFjeTogYm9vbGVhbik6IFByb21pc2U8UG9zaXRpb24+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYGVuYWJsZUhpZ2hBY2N1cmFjeTogJHtlbmFibGVIaWdoQWNjdXJhY3l9YCk7XG5cbiAgICAgIHRoaXMuX25hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocmVzb2x2ZSwgcmVqZWN0LCB7IGVuYWJsZUhpZ2hBY2N1cmFjeSB9KVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOYXZpZ2F0b3IgfSBmcm9tICcuL25hdmlnYXRvci9uYXZpZ2F0b3InO1xuaW1wb3J0IHsgT3BlbklkU2NvcGVQYXJzZXIgfSBmcm9tICcuL3Njb3BlUGFyc2VyJztcblxuXG4vKipcbiAqIExvZ2luIG9wdGlvbnMuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIExvZ2luT3B0aW9uc1xuICovXG5leHBvcnQgY2xhc3MgTG9naW5PcHRpb25zIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRJZCBQdWJsaWMgY2xpZW50IElEIGdlbmVyYXRlZCBkdXJpbmcgY3JlYXRpbmcgdGhlIGFjY291bnQuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IGNsaWVudElkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWRpcmVjdFVyaSBSZWRpcmVjdCBVUkkgdG8gd2hpY2ggdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudC4gSWYgdGhlIHZhbHVlIGlzIG5vdCB3aGl0ZWxpc3RlZCB0aGVuIHRoZSByZXF1ZXN0IHdpbGwgZmFpbC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgcmVkaXJlY3RVcmk6IHN0cmluZztcblxuICAvKipcbiAgICogQHBhcmFtIHtPcGVuSWRTY29wZVBhcnNlcn0gc2NvcGUgRWFjaCBzY29wZSByZXR1cm5zIGEgc2V0IG9mIHVzZXIgYXR0cmlidXRlcywgd2hpY2ggYXJlIGNhbGxlZCBjbGFpbXMuXG4gICAqICAgIE9uY2UgdGhlIHVzZXIgYXV0aG9yaXplcyB0aGUgcmVxdWVzdGVkIHNjb3BlcywgdGhlIGNsYWltcyBhcmUgcmV0dXJuZWQgaW4gYW4gSUQgVG9rZW4uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IHNjb3BlOiBPcGVuSWRTY29wZVBhcnNlcjtcblxuICAvKipcbiAgKiBAcGFyYW0ge05hdmlnYXRvcn0gbmF2aWdhdG9yIENsYXNzIGRlc2NyaWJlcyBhbiBhY3Rpb24gdGhhdCB3aWxsIGJlIGRvbmUgdG8gQXV0aGVudGljYXRpb24gVVJMLiBGb3IgYnJvd3NlcnMgaXQgd2lsbCBiZSBhIHBhZ2UgcmVkaXJlY3Rpb24uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IG5hdmlnYXRvcjogTmF2aWdhdG9yO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29yaWdpbl0gVGhlIG9yaWdpbiBkb21haW4gb2YgdGhlIHJlcXVlc3QgYmVpbmcgbWFkZS4gSWYgYG51bGxgIHRoZW4gdGhlIFJlZmVyZXIgaGVhZGVyIHdpbGwgYmUgdXNlZC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgb3JpZ2luOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc3RhdGVdXG4gICAqICAgIFJFQ09NTUVOREVELiBPcGFxdWUgdmFsdWUgdXNlZCB0byBtYWludGFpbiBzdGF0ZSBiZXR3ZWVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgY2FsbGJhY2suIFR5cGljYWxseSwgQ1NSRiwgWFNSRiBtaXRpZ2F0aW9uIGlzIGRvbmUgYnkgY3J5cHRvZ3JhcGhpY2FsbHkgYmluZGluZyB0aGUgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgd2l0aCBhIGJyb3dzZXIgY29va2llLlxuICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIHByZXNlcnZlcyBzb21lIHN0YXRlIG9iamVjdCBzZXQgYnkgdGhlIGNsaWVudCBpbiB0aGUgQXV0aGVudGljYXRpb24gcmVxdWVzdCBhbmQgbWFrZXMgaXQgYXZhaWxhYmxlIHRvIHRoZSBjbGllbnQgaW4gdGhlIHJlc3BvbnNlLlxuICAgKiAgICBJdOKAmXMgdGhhdCB1bmlxdWUgYW5kIG5vbi1ndWVzc2FibGUgdmFsdWUgdGhhdCBhbGxvd3MgeW91IHRvIHByZXZlbnQgdGhlIGF0dGFjayBieSBjb25maXJtaW5nIGlmIHRoZSB2YWx1ZSBjb21pbmcgZnJvbSB0aGUgcmVzcG9uc2UgbWF0Y2hlcyB0aGUgb25lIHlvdSBleHBlY3QgKHRoZSBvbmUgeW91IGdlbmVyYXRlZCB3aGVuIGluaXRpYXRpbmcgdGhlIHJlcXVlc3QpLlxuICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIGlzIGEgc3RyaW5nIHNvIHlvdSBjYW4gZW5jb2RlIGFueSBvdGhlciBpbmZvcm1hdGlvbiBpbiBpdC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgc3RhdGU6IHN0cmluZztcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub25jZV1cbiAgICogICAgU3RyaW5nIHZhbHVlIHVzZWQgdG8gYXNzb2NpYXRlIGEgQ2xpZW50IHNlc3Npb24gd2l0aCBhbiBJRCBUb2tlbiwgYW5kIHRvIG1pdGlnYXRlIHJlcGxheSBhdHRhY2tzLlxuICAgKiAgICBUaGUgdmFsdWUgaXMgcGFzc2VkIHRocm91Z2ggdW5tb2RpZmllZCBmcm9tIHRoZSBBdXRoZW50aWNhdGlvbiBSZXF1ZXN0IHRvIHRoZSBJRCBUb2tlbi5cbiAgICogICAgU3VmZmljaWVudCBlbnRyb3B5IE1VU1QgYmUgcHJlc2VudCBpbiB0aGUgbm9uY2UgdmFsdWVzIHVzZWQgdG8gcHJldmVudCBhdHRhY2tlcnMgZnJvbSBndWVzc2luZyB2YWx1ZXMuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IG5vbmNlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbcmVzcG9uc2VUeXBlPSdjb2RlJ10gT3BlbklkIHJlc3BvbnNlIHR5cGUuIFRoZSBkZWZhdWx0IGlzIGBjb2RlYCAoQ29kZSBGbG93LCBpbnZvbHZpbmcgdGhlIGZyb250LWNoYW5uZWwgYW5kIGJhY2tjaGFubmVsKS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSAnY29kZSc7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5IEl0IHNwZWNpZmllcyBob3cgdGhlIEF1dGhvcml6YXRpb24gU2VydmVyIGRpc3BsYXlzIHRoZSBhdXRoZW50aWNhdGlvbiBhbmQgY29uc2VudCB1c2VyIGludGVyZmFjZSBwYWdlcyB0byB0aGUgRW5kLVVzZXIuXG4gICAqICAgRGVmYXVsdCBhbmQgdGhlIG9ubHkgc3VwcG9ydGVkIHZhbHVlIGlzIGBwYWdlYC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgZGlzcGxheTogc3RyaW5nID0gJ3BhZ2UnXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9tcHQgU3BhY2UgZGVsaW1pdGVkLCBjYXNlIHNlbnNpdGl2ZSBsaXN0IG9mIHN0cmluZyB2YWx1ZXMgdGhhdCBzcGVjaWZpZXMgd2hldGhlciB0aGUgQXV0aG9yaXphdGlvbiBTZXJ2ZXJcbiAgICogICBwcm9tcHRzIHRoZSBFbmQtVXNlciBmb3IgcmVhdXRoZW50aWNhdGlvbiBhbmQgY29uc2VudC4gVGhlIGRlZmluZWQgdmFsdWVzIGFyZTogYGxvZ2luYCwgYG5vbmVgLlxuICAgKiAgIERlZmF1bHQgaXMgYGxvZ2luLG5vbmVgLiBDYW4ndCBiZSBjaGFuZ2VkIGZvciBub3cuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IHByb21wdDogc3RyaW5nID0gJ2xvZ2luLG5vbmUnXG5cbiAgLyoqXG4gICAqIFRoZW1lIG9mIHRoZSBsb2dpbiBwYWdlIG9mIEN5YmVydXMgS2V5IERhc2hib2FyZC4gRGVmYXVsdCBpcyBgZGVmYXVsdGAuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IHRoZW1lOiBzdHJpbmcgPSAnZGVmYXVsdCc7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==