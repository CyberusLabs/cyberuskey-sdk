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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2Vycm9ycy50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvYXBpLnRzIiwid2VicGFjazovL2N5YmVydXNrZXktc2RrLy4vc3JjL3Nkay9zZXNzaW9uLnRzIiwid2VicGFjazovL2N5YmVydXNrZXktc2RrLy4vc3JjL3Nkay9nZW9Qcm92aWRlci9nZW8udHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2VtaXR0ZXIvd2ViQXVkaW9Tb3VuZEVtaXR0ZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL25hdmlnYXRvci9yZWRpcmVjdE5hdmlnYXRvci50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvc2NvcGVQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2dlb1Byb3ZpZGVyL2h0bWw1R2VvUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2xvZ2luT3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FB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QUFLLEdBQVcsU0FBUyxDQUFDO0lBQ3JDLENBQUM7Q0FBQTtBQW5HRCxvQ0FtR0MiLCJmaWxlIjoic2RrLmVzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiY3liZXJ1c2tleS1zZGtcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3liZXJ1c2tleS1zZGtcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3liZXJ1c2tleS1zZGtcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImVudW0gRXJyb3JDb2RlIHtcbiAgdW5kZWZpbmVkID0gMSxcbiAgdW5rbm93bl9lcnJvcixcbiAgc2VydmVyX2Vycm9yLFxuICB3cm9uZ19qc29uLFxuICBvcGVuYXBpX2Vycm9yLFxuICByZXNvdXJjZV9ub3RfZm91bmQsXG4gIG90cF9nZW5lcmF0aW9uX2ZhaWx1cmUsXG4gIGludmFsaWRfcmVkaXJlY3RfdXJpLFxuICBpbnZhbGlkX2NsaWVudCxcbiAgdG9vX21hbnlfY2FsbHNfZXJyb3Jcbn1cblxuY2xhc3MgQ3liZXJ1c0tleUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBwcml2YXRlIF9jb2RlOiBFcnJvckNvZGU7XG5cbiAgY29uc3RydWN0b3IoY29kZToga2V5b2YgdHlwZW9mIEVycm9yQ29kZSwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobWVzc2FnZSlcbiAgICB0aGlzLl9jb2RlID0gRXJyb3JDb2RlW2NvZGVdO1xuICB9XG5cbiAgZ2V0IGNvZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRXJyb3JDb2RlW3RoaXMuX2NvZGVdO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcbiAgfVxufVxuXG5jbGFzcyBVbmtub3duRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3Ige1xuICBjb25zdHJ1Y3Rvcihjb2RlOiBrZXlvZiB0eXBlb2YgRXJyb3JDb2RlID0gJ3Vua25vd25fZXJyb3InLCBtZXNzYWdlOiBzdHJpbmcgPSAnVW5rbm93biBlcnJvciBvY2N1cmVkLicpIHtcbiAgICBzdXBlcihjb2RlLCBtZXNzYWdlKVxuICB9XG59XG5jbGFzcyBUb29NYW55Q2FsbHNFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGNvZGU6IGtleW9mIHR5cGVvZiBFcnJvckNvZGUgPSAndG9vX21hbnlfY2FsbHNfZXJyb3InLCBtZXNzYWdlOiBzdHJpbmcgPSAnWW91XFwndmUgZG9uZSB0b28gbWFueSBjYWxscy4nKSB7XG4gICAgc3VwZXIoY29kZSwgbWVzc2FnZSlcbiAgfVxufVxuXG5jbGFzcyBNaXNzaW5nUmVkaXJlY3RVcmkgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignaW52YWxpZF9yZWRpcmVjdF91cmknLCAnTWlzc2luZyByZWRpcmVjdGlvbiBVUkkuJyk7XG4gIH1cbn1cblxuY2xhc3MgV3JvbmdKc29uRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XG5jbGFzcyBPcGVuQXBpRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XG5jbGFzcyBSZXNvdXJjZU5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XG5jbGFzcyBPVFBHZW5lcmF0aW9uRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XG5jbGFzcyBJbnZhbGlkUmVkaXJlY3RVcmlFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cbmNsYXNzIEludmFsaWRDbGllbnRFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cblxuY29uc3QgTUFQUElORyA9IHtcbiAgW0Vycm9yQ29kZS51bmRlZmluZWRdOiBVbmtub3duRXJyb3IsXG4gIFtFcnJvckNvZGUudW5rbm93bl9lcnJvcl06IFVua25vd25FcnJvcixcbiAgW0Vycm9yQ29kZS5zZXJ2ZXJfZXJyb3JdOiBVbmtub3duRXJyb3IsXG4gIFtFcnJvckNvZGUudW5kZWZpbmVkXTogV3JvbmdKc29uRXJyb3IsXG4gIFtFcnJvckNvZGUud3JvbmdfanNvbl06IFdyb25nSnNvbkVycm9yLFxuICBbRXJyb3JDb2RlLm9wZW5hcGlfZXJyb3JdOiBPcGVuQXBpRXJyb3IsXG4gIFtFcnJvckNvZGUucmVzb3VyY2Vfbm90X2ZvdW5kXTogUmVzb3VyY2VOb3RGb3VuZEVycm9yLFxuICBbRXJyb3JDb2RlLm90cF9nZW5lcmF0aW9uX2ZhaWx1cmVdOiBPVFBHZW5lcmF0aW9uRXJyb3IsXG4gIFtFcnJvckNvZGUuaW52YWxpZF9yZWRpcmVjdF91cmldOiBJbnZhbGlkUmVkaXJlY3RVcmlFcnJvcixcbiAgW0Vycm9yQ29kZS5pbnZhbGlkX2NsaWVudF06IEludmFsaWRDbGllbnRFcnJvcixcbiAgW0Vycm9yQ29kZS50b29fbWFueV9jYWxsc19lcnJvcl06IFRvb01hbnlDYWxsc0Vycm9yXG59XG5cbmZ1bmN0aW9uIGVycm9yRmFjdG9yeShjb2RlOiBrZXlvZiB0eXBlb2YgRXJyb3JDb2RlLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgY29uc3QgZW51bV90eXBlID0gRXJyb3JDb2RlW2NvZGVdO1xuICBjb25zdCBFcnJvckNvbnN0cnVjdG9yID0gTUFQUElOR1tlbnVtX3R5cGVdO1xuXG4gIHJldHVybiBuZXcgRXJyb3JDb25zdHJ1Y3Rvcihjb2RlLCBtZXNzYWdlKTtcbn1cblxuZXhwb3J0IHtcbiAgZXJyb3JGYWN0b3J5LFxuICBFcnJvckNvZGUsXG4gIEN5YmVydXNLZXlFcnJvcixcbiAgVW5rbm93bkVycm9yLFxuICBUb29NYW55Q2FsbHNFcnJvcixcbiAgV3JvbmdKc29uRXJyb3IsXG4gIE9wZW5BcGlFcnJvcixcbiAgUmVzb3VyY2VOb3RGb3VuZEVycm9yLFxuICBPVFBHZW5lcmF0aW9uRXJyb3IsXG4gIE1pc3NpbmdSZWRpcmVjdFVyaVxufTtcblxuIiwiaW1wb3J0IHsgU291bmRFbWl0dGVyIH0gZnJvbSAnLi9lbWl0dGVyL3NvdW5kRW1pdHRlcic7XG5pbXBvcnQgeyBlcnJvckZhY3RvcnksIFVua25vd25FcnJvciB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IEdlb2xvY2F0aW9uIH0gZnJvbSAnLi9nZW9Qcm92aWRlci9nZW8nO1xuaW1wb3J0IHsgR2VvUHJvdmlkZXIgfSBmcm9tICcuL2dlb1Byb3ZpZGVyL2dlb1Byb3ZpZGVyJztcbmltcG9ydCB7IE5hdmlnYXRvciB9IGZyb20gJy4vbmF2aWdhdG9yL25hdmlnYXRvcic7XG5pbXBvcnQgeyBPcGVuSWRTY29wZVBhcnNlciB9IGZyb20gJy4vc2NvcGVQYXJzZXInO1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gJy4vc2Vzc2lvbic7XG5pbXBvcnQgeyBMb2dpbk9wdGlvbnMgfSBmcm9tICcuL2xvZ2luT3B0aW9ucyc7XG5cblxuLyoqXG4gKiBDeWJlcnVzIEtleSBBUEkgd2hpY2ggYWxsb3dzIHlvdSB0byBkbyBhIGRlbGVnYXRlIGxvZ2luIHdpdGggT3BlbklkIHByb3RvY29sLlxuICpcbiAqIEBjbGFzcyBDeWJlcnVzS2V5QVBJXG4gKi9cbmV4cG9ydCBjbGFzcyBDeWJlcnVzS2V5QVBJIHtcbiAgcHJpdmF0ZSBfYXBpVXJsOiBVUkw7XG4gIHByaXZhdGUgX2dlb1Byb3ZpZGVyOiBHZW9Qcm92aWRlcjtcbiAgcHJpdmF0ZSBfY2FjaGVkR2VvOiBHZW9sb2NhdGlvbjtcbiAgcHJpdmF0ZSBfZGVsYXlNczogbnVtYmVyO1xuXG4gIC8qKlxuICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ3liZXJ1c0tleUFQSS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGhvc3RVcmwgQmFzZSBVUkwgb2YgdGhlIGhvc3Qgc2VydmVyLCBlLmcuIGBodHRwczovL3Byb2R1Y3Rpb24tYXBpLmN5YmVydXNrZXkuY29tYFxuICAgKiBAcGFyYW0ge0dlb1Byb3ZpZGVyfSBbZ2VvUHJvdmlkZXJdIEdlb2xvY2FsaXphdGlvbiBwcm92aWRlci4gVXNlIHNwZWNpZmljIGltcGxlbWVudGF0aW9uIGxpa2UgYEhUTUw1R2VvUHJvdmlkZXJgLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5TXM9NjAwXSBEZWxheSAobXMpIGJldHdlZW4gbWFraW5nIGFuIEF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgYW5kIGEgc291bmQgcGxheWluZy5cbiAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcbiAgICovXG4gIGNvbnN0cnVjdG9yKGhvc3RVcmw6IHN0cmluZywgZ2VvUHJvdmlkZXI/OiBHZW9Qcm92aWRlciwgZGVsYXlNczogbnVtYmVyID0gNjAwKSB7XG4gICAgdGhpcy5fYXBpVXJsID0gbmV3IFVSTCgnL2FwaS92Mi8nLCBob3N0VXJsKTtcbiAgICB0aGlzLl9nZW9Qcm92aWRlciA9IGdlb1Byb3ZpZGVyO1xuICAgIHRoaXMuX2RlbGF5TXMgPSBkZWxheU1zO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIEN5YmVydXMgS2V5IHNlc3Npb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRJZCBQdWJsaWMgY2xpZW50IElEIGdlbmVyYXRlZCBkdXJpbmcgY3JlYXRpbmcgdGhlIGFjY291bnQuXG4gICAqIEBwYXJhbSB7R2VvbG9jYXRpb259IFtnZW9dIEdpdmUgYSB2YWx1ZSBpZiB5b3Ugd2FudCB0byBwYXNzIG9wdGlvbmFsIGdlb2xvY2F0aW9uIG1lYXN1cmVtZW50LlxuICAgKiAgICBJdCBjYW4gYmUgbGF0ZXIgdXNlIHRvIGNvbXBhcmUgaXQgYWdhaW5zdCB0aGUgbW9iaWxlJ3MgbWVhc3VyZW1lbnQgKGlmIHlvdSBoYXZlIHNldCBgZmFpbF9vbl9nZW9fbWlzbWF0Y2hgKS5cbiAgICogICAgVGhvc2UgbWVhc3VyZW1lbnRzIGNhbiBiZSB1c2VkIGFsc28gdG8gZ2VuZXJhbCBpbXByb3ZlbWVudCBvZiB0aGUgc2VjdXJpdHkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JpZ2luXSBUaGUgb3JpZ2luIGRvbWFpbiBvZiB0aGUgcmVxdWVzdCBiZWluZyBtYWRlLiBJZiBgbnVsbGAgdGhlbiB0aGUgUmVmZXJlciBoZWFkZXIgd2lsbCBiZSB1c2VkLlxuICAgKiBAdGhyb3dzIFdyb25nSnNvbkVycm9yLCBPcGVuQXBpRXJyb3IsIFJlc291cmNlTm90Rm91bmRFcnJvciwgT1RQR2VuZXJhdGlvbkVycm9yLCBVbmtub3duRXJyb3JcbiAgICogQHJldHVybnMge1Byb21pc2U8U2Vzc2lvbj59IFRoZSBDeWJlcnVzIEtleSBzZXNzaW9uLlxuICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxuICAgKi9cbiAgcHVibGljIGFzeW5jIGNyZWF0ZVNlc3Npb24oY2xpZW50SWQ6IHN0cmluZywgZ2VvPzogR2VvbG9jYXRpb24sIG9yaWdpbj86IHN0cmluZyk6IFByb21pc2U8U2Vzc2lvbj4ge1xuICAgIGNvbnN0IGRhdGEgPSB7IGNsaWVudF9pZDogY2xpZW50SWQgfTtcblxuICAgIGlmIChnZW8pIHtcbiAgICAgIGRhdGFbJ2xhdCddID0gZ2VvLmxhdGl0dWRlO1xuICAgICAgZGF0YVsnbG5nJ10gPSBnZW8ubG9uZ2l0dWRlO1xuICAgIH1cblxuICAgIGlmIChvcmlnaW4pIHtcbiAgICAgIGRhdGFbJ29yaWdpbiddID0gb3JpZ2luO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5fZ2V0VXJsKCdzZXNzaW9ucycpLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IHRoaXMuX2dldFVybEVuY29kZWRCb2R5KGRhdGEpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKHJlc3BvbnNlLm9rICYmIHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxICYmIGpzb24uc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIG5ldyBTZXNzaW9uKGpzb24uZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKCFqc29uLmVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgVW5rbm93bkVycm9yKClcbiAgICB9XG5cbiAgICB0aHJvdyBlcnJvckZhY3RvcnkoanNvbi5lcnJvciwganNvbi5lcnJvcl9kZXNjcmlwdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIHNvbmljIHNvdW5kIHdpdGggZW1iZWRkZWQgT1RQLlxuICAgKlxuICAgKiBAcGFyYW0ge1Nlc3Npb259IHNlc3Npb24gQ3liZXJ1cyBLZXkncyBzZXNzaW9uIGdlbmVyYXRlZCBieSBhIHVzZXIgZm9yIGEgbG9naW4uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5QnVmZmVyPn0gQnl0ZXMgb2YgYSBzb3VuZC5cbiAgICogQHRocm93cyBSZXNvdXJjZU5vdEZvdW5kRXJyb3JcbiAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcbiAgICovXG4gIHB1YmxpYyBhc3luYyBnZXRPVFBTb3VuZChzZXNzaW9uOiBTZXNzaW9uKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5fZ2V0VXJsKGBzZXNzaW9ucy8ke3Nlc3Npb24uc2Vzc2lvbklkfWApLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBY2NlcHQnOiAnYXVkaW8vbXBlZycsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbidcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgYnVmZmVyOiBGdW5jdGlvbiA9IHJlc3BvbnNlLmJ1ZmZlciB8fCByZXNwb25zZS5hcnJheUJ1ZmZlcjtcbiAgICByZXR1cm4gYXdhaXQgYnVmZmVyLmNhbGwocmVzcG9uc2UpO1xuICB9XG5cblxuICAvKipcbiAgICogR2V0cyBPcGVuSUQncyBBdXRoZW50aWNhdGlvbiBlbmRwb2ludCBVUkwgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHByb2Nlc3MgdGhlIGF1dGhlbnRpY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1Nlc3Npb259IHNlc3Npb24gQ3liZXJ1cyBLZXkgc2Vzc2lvbi5cbiAgICogQHBhcmFtIHtPcGVuSWRTY29wZVBhcnNlcn0gc2NvcGUgRWFjaCBzY29wZSByZXR1cm5zIGEgc2V0IG9mIHVzZXIgYXR0cmlidXRlcywgd2hpY2ggYXJlIGNhbGxlZCBjbGFpbXMuXG4gICAqICAgIE9uY2UgdGhlIHVzZXIgYXV0aG9yaXplcyB0aGUgcmVxdWVzdGVkIHNjb3BlcywgdGhlIGNsYWltcyBhcmUgcmV0dXJuZWQgaW4gYW4gSUQgVG9rZW4uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRJZCBQdWJsaWMgY2xpZW50IElEIGdlbmVyYXRlZCBkdXJpbmcgY3JlYXRpbmcgdGhlIGFjY291bnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWRpcmVjdFVyaSBSZWRpcmVjdCBVUkkgdG8gd2hpY2ggdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudC4gSWYgdGhlIHZhbHVlIGlzIG5vdCB3aGl0ZWxpc3RlZCB0aGVuIHRoZSByZXF1ZXN0IHdpbGwgZmFpbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0ZV1cbiAgICogICAgUkVDT01NRU5ERUQuIE9wYXF1ZSB2YWx1ZSB1c2VkIHRvIG1haW50YWluIHN0YXRlIGJldHdlZW4gdGhlIHJlcXVlc3QgYW5kIHRoZSBjYWxsYmFjay4gVHlwaWNhbGx5LCBDU1JGLCBYU1JGIG1pdGlnYXRpb24gaXMgZG9uZSBieSBjcnlwdG9ncmFwaGljYWxseSBiaW5kaW5nIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciB3aXRoIGEgYnJvd3NlciBjb29raWUuXG4gICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgcHJlc2VydmVzIHNvbWUgc3RhdGUgb2JqZWN0IHNldCBieSB0aGUgY2xpZW50IGluIHRoZSBBdXRoZW50aWNhdGlvbiByZXF1ZXN0IGFuZCBtYWtlcyBpdCBhdmFpbGFibGUgdG8gdGhlIGNsaWVudCBpbiB0aGUgcmVzcG9uc2UuXG4gICAqICAgIEl04oCZcyB0aGF0IHVuaXF1ZSBhbmQgbm9uLWd1ZXNzYWJsZSB2YWx1ZSB0aGF0IGFsbG93cyB5b3UgdG8gcHJldmVudCB0aGUgYXR0YWNrIGJ5IGNvbmZpcm1pbmcgaWYgdGhlIHZhbHVlIGNvbWluZyBmcm9tIHRoZSByZXNwb25zZSBtYXRjaGVzIHRoZSBvbmUgeW91IGV4cGVjdCAodGhlIG9uZSB5b3UgZ2VuZXJhdGVkIHdoZW4gaW5pdGlhdGluZyB0aGUgcmVxdWVzdCkuXG4gICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgaXMgYSBzdHJpbmcgc28geW91IGNhbiBlbmNvZGUgYW55IG90aGVyIGluZm9ybWF0aW9uIGluIGl0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vbmNlXVxuICAgKiAgICBTdHJpbmcgdmFsdWUgdXNlZCB0byBhc3NvY2lhdGUgYSBDbGllbnQgc2Vzc2lvbiB3aXRoIGFuIElEIFRva2VuLCBhbmQgdG8gbWl0aWdhdGUgcmVwbGF5IGF0dGFja3MuXG4gICAqICAgIFRoZSB2YWx1ZSBpcyBwYXNzZWQgdGhyb3VnaCB1bm1vZGlmaWVkIGZyb20gdGhlIEF1dGhlbnRpY2F0aW9uIFJlcXVlc3QgdG8gdGhlIElEIFRva2VuLlxuICAgKiAgICBTdWZmaWNpZW50IGVudHJvcHkgTVVTVCBiZSBwcmVzZW50IGluIHRoZSBub25jZSB2YWx1ZXMgdXNlZCB0byBwcmV2ZW50IGF0dGFja2VycyBmcm9tIGd1ZXNzaW5nIHZhbHVlcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtyZXNwb25zZVR5cGU9J2NvZGUnXSBPcGVuSWQgcmVzcG9uc2UgdHlwZS4gVGhlIGRlZmF1bHQgaXMgYGNvZGVgIChDb2RlIEZsb3csIGludm9sdmluZyB0aGUgZnJvbnQtY2hhbm5lbCBhbmQgYmFja2NoYW5uZWwpLlxuICAgKiBAcmV0dXJucyBPcGVuSUQncyBBdXRoZW50aWNhdGlvbiBlbmRwb2ludCBVUkxcbiAgICogQHRocm93cyBJbnZhbGlkUmVkaXJlY3RVcmlFcnJvciwgSW52YWxpZENsaWVudEVycm9yLCBSZXNvdXJjZU5vdEZvdW5kRXJyb3JcbiAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcbiAgICovXG4gIHB1YmxpYyBnZXRBdXRoZW50aWNhdGlvbkVuZHBvaW50VXJsKHNlc3Npb246IFNlc3Npb24sIHNjb3BlOiBPcGVuSWRTY29wZVBhcnNlciwgY2xpZW50SWQ6IHN0cmluZywgcmVkaXJlY3RVcmk6IHN0cmluZywgc3RhdGU/OiBzdHJpbmcsIG5vbmNlPzogc3RyaW5nLCByZXNwb25zZVR5cGUgPSAnY29kZScpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgIHNlc3Npb25faWQ6IHNlc3Npb24uc2Vzc2lvbklkLFxuICAgICAgY2xpZW50X2lkOiBjbGllbnRJZCxcbiAgICAgIHNjb3BlOiBzY29wZS5nZXRWYWx1ZSgpLFxuICAgICAgcmVkaXJlY3RfdXJpOiByZWRpcmVjdFVyaSxcbiAgICAgIHJlc3BvbnNlX3R5cGU6IHJlc3BvbnNlVHlwZVxuICAgIH07XG5cbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIGRhdGFbJ3N0YXRlJ10gPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGRhdGFbJ25vbmNlJ10gPSBub25jZTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHRoaXMuX2dldFVybCgnYXV0aGVudGljYXRlJykpO1xuXG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgocGFyYW1ldGVyTmFtZSkgPT4ge1xuICAgICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQocGFyYW1ldGVyTmFtZSwgZGF0YVtwYXJhbWV0ZXJOYW1lXSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdXJsLmhyZWY7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgYW4gYXV0aGVudGljYXRpb24gd2l0aCBDeWJlcnVzIEtleS4gXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRJZCBQdWJsaWMgY2xpZW50IElEIGdlbmVyYXRlZCBkdXJpbmcgY3JlYXRpbmcgdGhlIGFjY291bnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWRpcmVjdFVyaSBSZWRpcmVjdCBVUkkgdG8gd2hpY2ggdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudC4gSWYgdGhlIHZhbHVlIGlzIG5vdCB3aGl0ZWxpc3RlZCB0aGVuIHRoZSByZXF1ZXN0IHdpbGwgZmFpbC5cbiAgICogQHBhcmFtIHtPcGVuSWRTY29wZVBhcnNlcn0gc2NvcGUgRWFjaCBzY29wZSByZXR1cm5zIGEgc2V0IG9mIHVzZXIgYXR0cmlidXRlcywgd2hpY2ggYXJlIGNhbGxlZCBjbGFpbXMuXG4gICAqICAgIE9uY2UgdGhlIHVzZXIgYXV0aG9yaXplcyB0aGUgcmVxdWVzdGVkIHNjb3BlcywgdGhlIGNsYWltcyBhcmUgcmV0dXJuZWQgaW4gYW4gSUQgVG9rZW4uXG4gICAqIEBwYXJhbSB7U291bmRFbWl0dGVyfSBzb3VuZEVtaXR0ZXIgSW50ZXJmYWNlIHdoaWNoIGNhbiBwbGF5IGEgc291bmQuXG4gICAqIEBwYXJhbSB7TmF2aWdhdG9yfSBuYXZpZ2F0b3IgQ2xhc3MgZGVzY3JpYmVzIGFuIGFjdGlvbiB0aGF0IHdpbGwgYmUgZG9uZSB0byBBdXRoZW50aWNhdGlvbiBVUkwuIEZvciBicm93c2VycyBpdCB3aWxsIGJlIGEgcGFnZSByZWRpcmVjdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmlnaW5dIFRoZSBvcmlnaW4gZG9tYWluIG9mIHRoZSByZXF1ZXN0IGJlaW5nIG1hZGUuIElmIGBudWxsYCB0aGVuIHRoZSBSZWZlcmVyIGhlYWRlciB3aWxsIGJlIHVzZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc3RhdGVdXG4gICAqICAgIFJFQ09NTUVOREVELiBPcGFxdWUgdmFsdWUgdXNlZCB0byBtYWludGFpbiBzdGF0ZSBiZXR3ZWVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgY2FsbGJhY2suIFR5cGljYWxseSwgQ1NSRiwgWFNSRiBtaXRpZ2F0aW9uIGlzIGRvbmUgYnkgY3J5cHRvZ3JhcGhpY2FsbHkgYmluZGluZyB0aGUgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgd2l0aCBhIGJyb3dzZXIgY29va2llLlxuICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIHByZXNlcnZlcyBzb21lIHN0YXRlIG9iamVjdCBzZXQgYnkgdGhlIGNsaWVudCBpbiB0aGUgQXV0aGVudGljYXRpb24gcmVxdWVzdCBhbmQgbWFrZXMgaXQgYXZhaWxhYmxlIHRvIHRoZSBjbGllbnQgaW4gdGhlIHJlc3BvbnNlLlxuICAgKiAgICBJdOKAmXMgdGhhdCB1bmlxdWUgYW5kIG5vbi1ndWVzc2FibGUgdmFsdWUgdGhhdCBhbGxvd3MgeW91IHRvIHByZXZlbnQgdGhlIGF0dGFjayBieSBjb25maXJtaW5nIGlmIHRoZSB2YWx1ZSBjb21pbmcgZnJvbSB0aGUgcmVzcG9uc2UgbWF0Y2hlcyB0aGUgb25lIHlvdSBleHBlY3QgKHRoZSBvbmUgeW91IGdlbmVyYXRlZCB3aGVuIGluaXRpYXRpbmcgdGhlIHJlcXVlc3QpLlxuICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIGlzIGEgc3RyaW5nIHNvIHlvdSBjYW4gZW5jb2RlIGFueSBvdGhlciBpbmZvcm1hdGlvbiBpbiBpdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub25jZV1cbiAgICogICAgU3RyaW5nIHZhbHVlIHVzZWQgdG8gYXNzb2NpYXRlIGEgQ2xpZW50IHNlc3Npb24gd2l0aCBhbiBJRCBUb2tlbiwgYW5kIHRvIG1pdGlnYXRlIHJlcGxheSBhdHRhY2tzLlxuICAgKiAgICBUaGUgdmFsdWUgaXMgcGFzc2VkIHRocm91Z2ggdW5tb2RpZmllZCBmcm9tIHRoZSBBdXRoZW50aWNhdGlvbiBSZXF1ZXN0IHRvIHRoZSBJRCBUb2tlbi5cbiAgICogICAgU3VmZmljaWVudCBlbnRyb3B5IE1VU1QgYmUgcHJlc2VudCBpbiB0aGUgbm9uY2UgdmFsdWVzIHVzZWQgdG8gcHJldmVudCBhdHRhY2tlcnMgZnJvbSBndWVzc2luZyB2YWx1ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbcmVzcG9uc2VUeXBlPSdjb2RlJ10gT3BlbklkIHJlc3BvbnNlIHR5cGUuIFRoZSBkZWZhdWx0IGlzIGBjb2RlYCAoQ29kZSBGbG93LCBpbnZvbHZpbmcgdGhlIGZyb250LWNoYW5uZWwgYW5kIGJhY2tjaGFubmVsKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgYXV0aGVudGljYXRlKGNsaWVudElkOiBzdHJpbmcsIHJlZGlyZWN0VXJpOiBzdHJpbmcsIHNjb3BlOiBPcGVuSWRTY29wZVBhcnNlciwgc291bmRFbWl0dGVyOiBTb3VuZEVtaXR0ZXIsIG5hdmlnYXRvcjogTmF2aWdhdG9yLCBvcmlnaW4/OiBzdHJpbmcsIHN0YXRlPzogc3RyaW5nLCBub25jZT86IHN0cmluZywgcmVzcG9uc2VUeXBlID0gJ2NvZGUnKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuX2dlb1Byb3ZpZGVyICYmICF0aGlzLl9jYWNoZWRHZW8pIHtcbiAgICAgIHRoaXMuX2NhY2hlZEdlbyA9IGF3YWl0IHRoaXMuX2dlb1Byb3ZpZGVyLmdldEdlbygpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCB0aGlzLmNyZWF0ZVNlc3Npb24oY2xpZW50SWQsIHRoaXMuX2NhY2hlZEdlbywgb3JpZ2luKTtcbiAgICBjb25zdCBzb3VuZCA9IGF3YWl0IHRoaXMuZ2V0T1RQU291bmQoc2Vzc2lvbik7XG5cbiAgICBjb25zdCBhdXRoZW50aWNhdGVVcmwgPSB0aGlzLmdldEF1dGhlbnRpY2F0aW9uRW5kcG9pbnRVcmwoc2Vzc2lvbiwgc2NvcGUsIGNsaWVudElkLCByZWRpcmVjdFVyaSwgc3RhdGUsIG5vbmNlLCByZXNwb25zZVR5cGUpO1xuXG4gICAgY29uc29sZS5pbmZvKGBOYXZpZ2F0aW5nIHRvICR7YXV0aGVudGljYXRlVXJsfS5gKTtcblxuICAgIGF3YWl0IG5hdmlnYXRvci5uYXZpZ2F0ZShhdXRoZW50aWNhdGVVcmwpO1xuXG4gICAgYXdhaXQgdGhpcy5fdGltZW91dCgxMDAwKTtcblxuICAgIGNvbnNvbGUuaW5mbyhgU291bmQgZW1pdHRpbmcuYClcblxuICAgIGF3YWl0IHNvdW5kRW1pdHRlci5lbWl0KHNvdW5kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgdG8gQXV0aGVudGljYXRpb24gRW5kcG9pbnQgYW5kIHJldHVybnMgYSBzb3VuZC4gWW91IGhhdmUgdG8gZW1pdCBpdC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIFB1YmxpYyBjbGllbnQgSUQgZ2VuZXJhdGVkIGR1cmluZyBjcmVhdGluZyB0aGUgYWNjb3VudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlZGlyZWN0VXJpIFJlZGlyZWN0IFVSSSB0byB3aGljaCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSBzZW50LiBJZiB0aGUgdmFsdWUgaXMgbm90IHdoaXRlbGlzdGVkIHRoZW4gdGhlIHJlcXVlc3Qgd2lsbCBmYWlsLlxuICAgKiBAcGFyYW0ge09wZW5JZFNjb3BlUGFyc2VyfSBzY29wZSBFYWNoIHNjb3BlIHJldHVybnMgYSBzZXQgb2YgdXNlciBhdHRyaWJ1dGVzLCB3aGljaCBhcmUgY2FsbGVkIGNsYWltcy5cbiAgICogICAgT25jZSB0aGUgdXNlciBhdXRob3JpemVzIHRoZSByZXF1ZXN0ZWQgc2NvcGVzLCB0aGUgY2xhaW1zIGFyZSByZXR1cm5lZCBpbiBhbiBJRCBUb2tlbi5cbiAgICogQHBhcmFtIHtOYXZpZ2F0b3J9IG5hdmlnYXRvciBDbGFzcyBkZXNjcmliZXMgYW4gYWN0aW9uIHRoYXQgd2lsbCBiZSBkb25lIHRvIEF1dGhlbnRpY2F0aW9uIFVSTC4gRm9yIGJyb3dzZXJzIGl0IHdpbGwgYmUgYSBwYWdlIHJlZGlyZWN0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29yaWdpbl0gVGhlIG9yaWdpbiBkb21haW4gb2YgdGhlIHJlcXVlc3QgYmVpbmcgbWFkZS4gSWYgYG51bGxgIHRoZW4gdGhlIFJlZmVyZXIgaGVhZGVyIHdpbGwgYmUgdXNlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0ZV1cbiAgICogICAgUkVDT01NRU5ERUQuIE9wYXF1ZSB2YWx1ZSB1c2VkIHRvIG1haW50YWluIHN0YXRlIGJldHdlZW4gdGhlIHJlcXVlc3QgYW5kIHRoZSBjYWxsYmFjay4gVHlwaWNhbGx5LCBDU1JGLCBYU1JGIG1pdGlnYXRpb24gaXMgZG9uZSBieSBjcnlwdG9ncmFwaGljYWxseSBiaW5kaW5nIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciB3aXRoIGEgYnJvd3NlciBjb29raWUuXG4gICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgcHJlc2VydmVzIHNvbWUgc3RhdGUgb2JqZWN0IHNldCBieSB0aGUgY2xpZW50IGluIHRoZSBBdXRoZW50aWNhdGlvbiByZXF1ZXN0IGFuZCBtYWtlcyBpdCBhdmFpbGFibGUgdG8gdGhlIGNsaWVudCBpbiB0aGUgcmVzcG9uc2UuXG4gICAqICAgIEl04oCZcyB0aGF0IHVuaXF1ZSBhbmQgbm9uLWd1ZXNzYWJsZSB2YWx1ZSB0aGF0IGFsbG93cyB5b3UgdG8gcHJldmVudCB0aGUgYXR0YWNrIGJ5IGNvbmZpcm1pbmcgaWYgdGhlIHZhbHVlIGNvbWluZyBmcm9tIHRoZSByZXNwb25zZSBtYXRjaGVzIHRoZSBvbmUgeW91IGV4cGVjdCAodGhlIG9uZSB5b3UgZ2VuZXJhdGVkIHdoZW4gaW5pdGlhdGluZyB0aGUgcmVxdWVzdCkuXG4gICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgaXMgYSBzdHJpbmcgc28geW91IGNhbiBlbmNvZGUgYW55IG90aGVyIGluZm9ybWF0aW9uIGluIGl0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vbmNlXVxuICAgKiAgICBTdHJpbmcgdmFsdWUgdXNlZCB0byBhc3NvY2lhdGUgYSBDbGllbnQgc2Vzc2lvbiB3aXRoIGFuIElEIFRva2VuLCBhbmQgdG8gbWl0aWdhdGUgcmVwbGF5IGF0dGFja3MuXG4gICAqICAgIFRoZSB2YWx1ZSBpcyBwYXNzZWQgdGhyb3VnaCB1bm1vZGlmaWVkIGZyb20gdGhlIEF1dGhlbnRpY2F0aW9uIFJlcXVlc3QgdG8gdGhlIElEIFRva2VuLlxuICAgKiAgICBTdWZmaWNpZW50IGVudHJvcHkgTVVTVCBiZSBwcmVzZW50IGluIHRoZSBub25jZSB2YWx1ZXMgdXNlZCB0byBwcmV2ZW50IGF0dGFja2VycyBmcm9tIGd1ZXNzaW5nIHZhbHVlcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtyZXNwb25zZVR5cGU9J2NvZGUnXSBPcGVuSWQgcmVzcG9uc2UgdHlwZS4gVGhlIGRlZmF1bHQgaXMgYGNvZGVgIChDb2RlIEZsb3csIGludm9sdmluZyB0aGUgZnJvbnQtY2hhbm5lbCBhbmQgYmFja2NoYW5uZWwpLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcbiAgICovXG4gIHB1YmxpYyBhc3luYyBuYXZpZ2F0ZUFuZEdldFRoZVNvdW5kKGNsaWVudElkOiBzdHJpbmcsIHJlZGlyZWN0VXJpOiBzdHJpbmcsIHNjb3BlOiBPcGVuSWRTY29wZVBhcnNlciwgbmF2aWdhdG9yOiBOYXZpZ2F0b3IsIG9yaWdpbj86IHN0cmluZywgc3RhdGU/OiBzdHJpbmcsIG5vbmNlPzogc3RyaW5nLCByZXNwb25zZVR5cGUgPSAnY29kZScpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XG4gICAgaWYgKHRoaXMuX2dlb1Byb3ZpZGVyICYmICF0aGlzLl9jYWNoZWRHZW8pIHtcbiAgICAgIHRoaXMuX2NhY2hlZEdlbyA9IGF3YWl0IHRoaXMuX2dlb1Byb3ZpZGVyLmdldEdlbygpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCB0aGlzLmNyZWF0ZVNlc3Npb24oY2xpZW50SWQsIHRoaXMuX2NhY2hlZEdlbywgb3JpZ2luKTtcbiAgICBjb25zdCBzb3VuZCA9IGF3YWl0IHRoaXMuZ2V0T1RQU291bmQoc2Vzc2lvbik7XG5cbiAgICBjb25zdCBhdXRoZW50aWNhdGVVcmwgPSB0aGlzLmdldEF1dGhlbnRpY2F0aW9uRW5kcG9pbnRVcmwoc2Vzc2lvbiwgc2NvcGUsIGNsaWVudElkLCByZWRpcmVjdFVyaSwgc3RhdGUsIG5vbmNlLCByZXNwb25zZVR5cGUpO1xuXG4gICAgY29uc29sZS5pbmZvKGBOYXZpZ2F0aW5nIHRvICR7YXV0aGVudGljYXRlVXJsfS5gKTtcblxuICAgIGF3YWl0IG5hdmlnYXRvci5uYXZpZ2F0ZShhdXRoZW50aWNhdGVVcmwpO1xuXG4gICAgYXdhaXQgdGhpcy5fdGltZW91dCh0aGlzLl9kZWxheU1zKTtcblxuICAgIHJldHVybiBzb3VuZDtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBsb2dpblRocm91Z2hDeWJlcnVzS2V5RGFzaGJvYXJkKG9wdGlvbnM6IExvZ2luT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgIGNsaWVudF9pZDogb3B0aW9ucy5jbGllbnRJZCxcbiAgICAgIHNjb3BlOiBvcHRpb25zLnNjb3BlLmdldFZhbHVlKCksXG4gICAgICByZWRpcmVjdF91cmk6IG9wdGlvbnMucmVkaXJlY3RVcmksXG4gICAgICByZXNwb25zZV90eXBlOiBvcHRpb25zLnJlc3BvbnNlVHlwZSxcbiAgICAgIHN0YXRlOiBvcHRpb25zLnN0YXRlLFxuICAgICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAgICBkaXNwbGF5OiBvcHRpb25zLmRpc3BsYXksXG4gICAgICBwcm9tcHQ6IG9wdGlvbnMucHJvbXB0LFxuICAgICAgdGhlbWU6IG9wdGlvbnMudGhlbWUsXG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zLnN0YXRlKSB7XG4gICAgICBkYXRhWydzdGF0ZSddID0gb3B0aW9ucy5zdGF0ZTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5ub25jZSkge1xuICAgICAgZGF0YVsnbm9uY2UnXSA9IG9wdGlvbnMubm9uY2U7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCh0aGlzLl9nZXRVcmwoJ2F1dGhvcml6ZScpKTtcblxuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKHBhcmFtZXRlck5hbWUpID0+IHtcbiAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKHBhcmFtZXRlck5hbWUsIGRhdGFbcGFyYW1ldGVyTmFtZV0pO1xuICAgIH0pO1xuXG4gICAgY29uc29sZS5pbmZvKGBOYXZpZ2F0aW5nIHRvICR7dXJsLmhyZWZ9LmApO1xuXG4gICAgYXdhaXQgb3B0aW9ucy5uYXZpZ2F0b3IubmF2aWdhdGUodXJsLmhyZWYpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VXJsKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChuZXcgVVJMKHBhdGgsIHRoaXMuX2FwaVVybCkpLmhyZWY7XG4gIH1cblxuICBwcml2YXRlIF9nZXRVcmxFbmNvZGVkQm9keShkYXRhOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5yZWR1Y2U8c3RyaW5nW10+KChyZXN1bHQ6IHN0cmluZ1tdLCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZW5jb2RlZEtleSA9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpO1xuICAgICAgY29uc3QgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XG5cbiAgICAgIHJlc3VsdC5wdXNoKGAke2VuY29kZWRLZXl9PSR7ZW5jb2RlZFZhbHVlfWApO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIFtdKS5qb2luKFwiJlwiKVxuICB9XG5cbiAgcHJpdmF0ZSBfdGltZW91dChtczogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBTZXNzaW9uUmVzcG9uc2Uge1xuICBzZXNzaW9uX2lkOiBzdHJpbmc7XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbn1cblxuXG4vKipcbiAqIERhdGEgY2xhc3MgcmVwcmVzZW50aW5nIGEgQ3liZXJ1cyBLZXkgc2Vzc2lvbi5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgU2Vzc2lvblxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvbiB7XG4gIC8qKlxuICAgKiBTZXNzaW9uJ3MgdW5pcXVlIGlkZW50aWZpZXIuIEl0J3MgdmFsaWQgdXAgdG8gMjBzLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgU2Vzc2lvblxuICAgKi9cbiAgcHVibGljIHNlc3Npb25JZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIFVUQyBkYXRlIHJlcHJlc2VudGluZyBhIGRhdGUgKGFuZCB0aW1lKSB3aGVuIGEgc2Vzc2lvbiBoYXMgYmVlbiBjcmVhdGVkLlxuICAgKlxuICAgKiBAdHlwZSB7RGF0ZX1cbiAgICogQG1lbWJlcm9mIFNlc3Npb25cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVkQXQ6IERhdGU7XG5cbiAgY29uc3RydWN0b3IoanNvbjogU2Vzc2lvblJlc3BvbnNlKSB7XG4gICAgdGhpcy5zZXNzaW9uSWQgPSBqc29uLnNlc3Npb25faWQ7XG4gICAgdGhpcy5jcmVhdGVkQXQgPSBuZXcgRGF0ZShqc29uLmNyZWF0ZWRfYXQpO1xuICB9XG59IiwiLyoqXG4gKiBBbiBhYnN0cmFjdGlvbiBmb3IgYSB0YWtlbiBnZW9sb2NhdGlvbiBtZWFzdXJlbWVudC5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgR2VvbG9jYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEdlb2xvY2F0aW9uIHtcbiAgcHJpdmF0ZSBfbGF0aXR1ZGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbG9uZ2l0dWRlOiBudW1iZXI7XG4gIHByaXZhdGUgX2FjY3VyYWN5OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IobGF0aXR1ZGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIsIGFjY3VyYWN5PzogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGF0aXR1ZGUgPSBsYXRpdHVkZTtcbiAgICB0aGlzLl9sb25naXR1ZGUgPSBsb25naXR1ZGU7XG4gICAgdGhpcy5fYWNjdXJhY3kgPSBhY2N1cmFjeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBsYXRpdHVkZS5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBHZW9sb2NhdGlvblxuICAgKi9cbiAgZ2V0IGxhdGl0dWRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdGl0dWRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBsb25naXR1ZGUuXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgR2VvbG9jYXRpb25cbiAgICovXG4gIGdldCBsb25naXR1ZGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbG9uZ2l0dWRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYW4gYWNjdXJhY3kgb2YgYSBtZWFzdXJlbWVudC5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBHZW9sb2NhdGlvblxuICAgKi9cbiAgZ2V0IGFjY3VyYWN5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY3VyYWN5O1xuICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9zZGsvYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2VtaXR0ZXIvc291bmRFbWl0dGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2VtaXR0ZXIvd2ViQXVkaW9Tb3VuZEVtaXR0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvZXJyb3JzJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL25hdmlnYXRvci9uYXZpZ2F0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvbmF2aWdhdG9yL3JlZGlyZWN0TmF2aWdhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL3Njb3BlUGFyc2VyJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL3Nlc3Npb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvZ2VvUHJvdmlkZXIvZ2VvJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2dlb1Byb3ZpZGVyL2dlb1Byb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2dlb1Byb3ZpZGVyL2h0bWw1R2VvUHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvbG9naW5PcHRpb25zJztcblxuaW1wb3J0IHsgQ3liZXJ1c0tleUFQSSB9IGZyb20gJy4vc2RrL2FwaSc7XG5leHBvcnQgZGVmYXVsdCBDeWJlcnVzS2V5QVBJOyIsImltcG9ydCB7IFNvdW5kRW1pdHRlciB9IGZyb20gJy4vc291bmRFbWl0dGVyJztcbmltcG9ydCB7IE9UUEdlbmVyYXRpb25FcnJvciB9IGZyb20gJy4uL2Vycm9ycyc7XG5cbi8qKlxuICogQ2xhc3MgdXNlcyBhIEhUTUw1J3MgQXVkaW9Db250ZXh0IGludGVyZmFjZSB0byBwbGF5IGEgc291bmQuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIFdlYkF1ZGlvU291bmRFbWl0dGVyXG4gKiBAaW1wbGVtZW50cyB7U291bmRFbWl0dGVyfVxuICovXG5leHBvcnQgY2xhc3MgV2ViQXVkaW9Tb3VuZEVtaXR0ZXIgaW1wbGVtZW50cyBTb3VuZEVtaXR0ZXIge1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhIHNvdW5kIHRocm91Z2ggSFRNTDUncyBBdWRpb0NvbnRleHQgaW50ZXJmYWNlLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBzb3VuZCBBIGJpbmFyeSByZWNvcmQgb2YgdGhlIHNvdW5kIHlvdSB3YW50IHRvIHBsYXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKiBAbWVtYmVyb2YgV2ViQXVkaW9Tb3VuZEVtaXR0ZXJcbiAgICovXG4gIGFzeW5jIGVtaXQoc291bmQ6IEFycmF5QnVmZmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IGNvbnRleHQ6IEF1ZGlvQ29udGV4dDtcblxuICAgIHRyeSB7XG4gICAgICBjb250ZXh0ID0gbmV3ICh3aW5kb3dbJ0F1ZGlvQ29udGV4dCddIHx8IHdpbmRvd1snd2Via2l0QXVkaW9Db250ZXh0J10pKCk7XG4gICAgfSBjYXRjaCB7XG5cbiAgICAgIHRocm93IG5ldyBPVFBHZW5lcmF0aW9uRXJyb3IoJ290cF9nZW5lcmF0aW9uX2ZhaWx1cmUnLCAnQXVkaW9Db250ZXh0IGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2UgPSBjb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuXG4gICAgY29udGV4dC5kZWNvZGVBdWRpb0RhdGEoc291bmQsIChkZWNvZGVkRGF0YSkgPT4ge1xuICAgICAgc291cmNlLmJ1ZmZlciA9IGRlY29kZWREYXRhO1xuICAgICAgc291cmNlLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgICBzb3VyY2Uuc3RhcnQoMCk7XG4gICAgfSk7XG5cbiAgICBhd2FpdCAobmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHNvdXJjZS5vbmVuZGVkID0gcmVzb2x2ZTtcbiAgICB9KSk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgTWlzc2luZ1JlZGlyZWN0VXJpIH0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7IE5hdmlnYXRvciB9IGZyb20gJy4vbmF2aWdhdG9yJztcblxuXG4vKipcbiAqIENsYXNzIGRlc2NyaWJlcyBob3cgT3BlbklEJ3MgQXV0aGVudGljYXRpb24gRW5kcG9pbnQgd2lsbCBiZSBoYW5kbGVkLlxuICogVGhpcyBjbGFzcyBpcyB0aGlnaHRlbiB0byBhIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvdXIgZm9yIE9wZW5JRCBwcm90b2NvbCAtIGEgcmVkaXJlY3Rpb24uXG4gKiBXaGljaCBtZWFucyB0aGF0IHlvdXIgVVJMIHdpbGwgYmUgdGVtcG9yYXJpbHkgcmVwbGFjZWQgYnkgdGhlIEF1dGhlbnRpY2F0aW9uIEVuZHBvaW50XG4gKiBhbmQgcmVwbGFjZWQgYWdhaW4gYnkgaXRzIHJlc3BvbnNlIC0gSFRUUCAzMDIuIFRoZSBuZXcgbG9jYXRpb24gd2lsbCBiZSB0aGUgb25lIHlvdSBkZWZpbmVkIGFzIHlvdXIgYHJlZGlyZWN0X3VyaWAuXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBSZWRpcmVjdE5hdmlnYXRvclxuICogQGltcGxlbWVudHMge05hdmlnYXRvcn1cbiAqL1xuZXhwb3J0IGNsYXNzIFJlZGlyZWN0TmF2aWdhdG9yIGltcGxlbWVudHMgTmF2aWdhdG9yIHtcbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIEF1dGhlbnRpY2F0aW9uIEVuZHBvaW50IFVSTC5cbiAgICogQHRocm93cyBNaXNzaW5nUmVkaXJlY3RVcmlcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqIEBtZW1iZXJvZiBSZWRpcmVjdE5hdmlnYXRvclxuICAgKi9cbiAgYXN5bmMgbmF2aWdhdGUodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXVybCkge1xuICAgICAgdGhyb3cgbmV3IE1pc3NpbmdSZWRpcmVjdFVyaSgpXG4gICAgfVxuXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn0iLCJcbi8qKlxuICogSGFuZHkgY2xhc3MgdG8gZGVmaW5lIGFuIE9wZW5JRCdzIHNjb3BlLlxuICogU2NvcGVzIGFyZSB1c2VkIGJ5IGFuIGFwcGxpY2F0aW9uIGR1cmluZyBhdXRoZW50aWNhdGlvbiB0byBhdXRob3JpemUgYWNjZXNzIHRvIGEgdXNlcidzIGRldGFpbHMsXG4gKiBsaWtlIG5hbWUgYW5kIHBpY3R1cmUuIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLiBcbiAqIFxuICogWW91IGNhbiB1c2UgYWRkaXRpb25hbCB2YWx1ZXMgYGVtYWlsYCAoYWRkIGEgdXNlcidzIGVtYWlsIGNsYWltKSBhbmQgYHByb2ZpbGVgIChhZGQgdXNlciBmaXJzdCBhbmQgbGFzdCBuYW1lKS5cbiAqIFxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3Qgc2NvcGVQYXJzZXIgPSBuZXcgT3BlbklkU2NvcGVQYXJzZXIoKTtcbiAqIGNvbnN0IHNjb3BlID0gc2NvcGVQYXJzZXIuYWRkRW1haWwoKS5hZGRQcm9maWxlKCkuZ2V0VmFsdWUoKTtcbiAqIGBgYFxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBPcGVuSWRTY29wZVBhcnNlclxuICovXG5leHBvcnQgY2xhc3MgT3BlbklkU2NvcGVQYXJzZXIge1xuICBwcml2YXRlIF9zY29wZTogQXJyYXk8c3RyaW5nPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9zY29wZSA9IFsnb3BlbmlkJ107XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBgZW1haWxgIHNjb3BlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICogQG1lbWJlcm9mIE9wZW5JZFNjb3BlUGFyc2VyXG4gICAqL1xuICBwdWJsaWMgYWRkRW1haWwoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuX3Njb3BlLmluY2x1ZGVzKCdlbWFpbCcpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9zY29wZS5wdXNoKCdlbWFpbCcpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBgcHJvZmlsZWAgc2NvcGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHt0aGlzfVxuICAgKiBAbWVtYmVyb2YgT3BlbklkU2NvcGVQYXJzZXJcbiAgICovXG4gIHB1YmxpYyBhZGRQcm9maWxlKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9zY29wZS5pbmNsdWRlcygncHJvZmlsZScpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9zY29wZS5wdXNoKCdwcm9maWxlJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGZvcm1hdHRlZCBzY29wZSB2YWx1ZSwgZS5nLiBgb3BlbmlkIGVtYWlsYC5cbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIE9wZW5JZFNjb3BlUGFyc2VyXG4gICAqL1xuICBwdWJsaWMgZ2V0VmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcGUuam9pbignICcpO1xuICB9XG59IiwiaW1wb3J0IHsgR2VvbG9jYXRpb24gfSBmcm9tICcuL2dlbyc7XG5pbXBvcnQgeyBHZW9Qcm92aWRlciB9IGZyb20gJy4vZ2VvUHJvdmlkZXInO1xuXG5cbi8qKlxuICogQ2xhc3MgcHJvdmlkZXMgYSBnZW9sb2NhbGl6YXRpb24gbWVhc3VyZW1lbnQuXG4gKiBJdCB1c2VzIGEgSFRNTDUncyBgR2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKClgIG1ldGhvZC5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgSFRNTDVHZW9Qcm92aWRlclxuICogQGltcGxlbWVudHMge0dlb1Byb3ZpZGVyfVxuICovXG5leHBvcnQgY2xhc3MgSFRNTDVHZW9Qcm92aWRlciBpbXBsZW1lbnRzIEdlb1Byb3ZpZGVyIHtcbiAgcHJpdmF0ZSBfZW5hYmxlSGlnaEFjY3VyYWN5OiBib29sZWFuO1xuICBwcml2YXRlIF9uYXZpZ2F0b3I6IE5hdmlnYXRvcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBIVE1MNUdlb1Byb3ZpZGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtlbmFibGVIaWdoQWNjdXJhY3k9ZmFsc2VdICBGb3JjZXMgaGlnaCBhY2N1cmFjeSBvZiB0aGUgZ2VvbG9jYXRpb24uIEl0IG1heSB0YWtlIGxvbmdlci5cbiAgICogQHBhcmFtIHtOYXZpZ2F0b3J9IFtuYXZpZ2F0b3I9d2luZG93Lm5hdmlnYXRvcl1cbiAgICogQG1lbWJlcm9mIEhUTUw1R2VvUHJvdmlkZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVuYWJsZUhpZ2hBY2N1cmFjeSA9IGZhbHNlLCBuYXZpZ2F0b3I6IE5hdmlnYXRvciA9IHdpbmRvdy5uYXZpZ2F0b3IpIHtcbiAgICB0aGlzLl9lbmFibGVIaWdoQWNjdXJhY3kgPSBlbmFibGVIaWdoQWNjdXJhY3k7XG4gICAgdGhpcy5fbmF2aWdhdG9yID0gbmF2aWdhdG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBnZW9sb2NhbGl6YXRpb24gbWVhc3VyZW1lbnQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEdlb2xvY2F0aW9uPn0gR2VvbG9jYWxpemF0aW9uIG1lYXN1cmVtZW50LlxuICAgKiBAbWVtYmVyb2YgSFRNTDVHZW9Qcm92aWRlclxuICAgKi9cbiAgYXN5bmMgZ2V0R2VvKCk6IFByb21pc2U8R2VvbG9jYXRpb24+IHtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCB0aGlzLl9nZXRHZW8odGhpcy5fZW5hYmxlSGlnaEFjY3VyYWN5KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIEUuZy4gdXNlciBkaWRuJ3QgYWdyZWUgb24gZ2VvbGljYWxpemF0aW9uLlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb29yZHMgfSA9IHJlc3VsdDtcblxuICAgIHJldHVybiBuZXcgR2VvbG9jYXRpb24oY29vcmRzLmxhdGl0dWRlLCBjb29yZHMubG9uZ2l0dWRlLCBjb29yZHMuYWNjdXJhY3kpO1xuICB9XG5cbiAgX2dldEdlbyhlbmFibGVIaWdoQWNjdXJhY3k6IGJvb2xlYW4pOiBQcm9taXNlPFBvc2l0aW9uPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBlbmFibGVIaWdoQWNjdXJhY3k6ICR7ZW5hYmxlSGlnaEFjY3VyYWN5fWApO1xuXG4gICAgICB0aGlzLl9uYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHJlc29sdmUsIHJlamVjdCwgeyBlbmFibGVIaWdoQWNjdXJhY3kgfSlcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3IvbmF2aWdhdG9yJztcbmltcG9ydCB7IE9wZW5JZFNjb3BlUGFyc2VyIH0gZnJvbSAnLi9zY29wZVBhcnNlcic7XG5cblxuLyoqXG4gKiBMb2dpbiBvcHRpb25zLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBMb2dpbk9wdGlvbnNcbiAqL1xuZXhwb3J0IGNsYXNzIExvZ2luT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50SWQgUHVibGljIGNsaWVudCBJRCBnZW5lcmF0ZWQgZHVyaW5nIGNyZWF0aW5nIHRoZSBhY2NvdW50LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBjbGllbnRJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVkaXJlY3RVcmkgUmVkaXJlY3QgVVJJIHRvIHdoaWNoIHRoZSByZXNwb25zZSB3aWxsIGJlIHNlbnQuIElmIHRoZSB2YWx1ZSBpcyBub3Qgd2hpdGVsaXN0ZWQgdGhlbiB0aGUgcmVxdWVzdCB3aWxsIGZhaWwuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IHJlZGlyZWN0VXJpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T3BlbklkU2NvcGVQYXJzZXJ9IHNjb3BlIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLlxuICAgKiAgICBPbmNlIHRoZSB1c2VyIGF1dGhvcml6ZXMgdGhlIHJlcXVlc3RlZCBzY29wZXMsIHRoZSBjbGFpbXMgYXJlIHJldHVybmVkIGluIGFuIElEIFRva2VuLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBzY29wZTogT3BlbklkU2NvcGVQYXJzZXI7XG5cbiAgLyoqXG4gICogQHBhcmFtIHtOYXZpZ2F0b3J9IG5hdmlnYXRvciBDbGFzcyBkZXNjcmliZXMgYW4gYWN0aW9uIHRoYXQgd2lsbCBiZSBkb25lIHRvIEF1dGhlbnRpY2F0aW9uIFVSTC4gRm9yIGJyb3dzZXJzIGl0IHdpbGwgYmUgYSBwYWdlIHJlZGlyZWN0aW9uLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBuYXZpZ2F0b3I6IE5hdmlnYXRvcjtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmlnaW5dIFRoZSBvcmlnaW4gZG9tYWluIG9mIHRoZSByZXF1ZXN0IGJlaW5nIG1hZGUuIElmIGBudWxsYCB0aGVuIHRoZSBSZWZlcmVyIGhlYWRlciB3aWxsIGJlIHVzZWQuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IG9yaWdpbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3N0YXRlXVxuICAgKiAgICBSRUNPTU1FTkRFRC4gT3BhcXVlIHZhbHVlIHVzZWQgdG8gbWFpbnRhaW4gc3RhdGUgYmV0d2VlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIGNhbGxiYWNrLiBUeXBpY2FsbHksIENTUkYsIFhTUkYgbWl0aWdhdGlvbiBpcyBkb25lIGJ5IGNyeXB0b2dyYXBoaWNhbGx5IGJpbmRpbmcgdGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIHdpdGggYSBicm93c2VyIGNvb2tpZS5cbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBwcmVzZXJ2ZXMgc29tZSBzdGF0ZSBvYmplY3Qgc2V0IGJ5IHRoZSBjbGllbnQgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgYW5kIG1ha2VzIGl0IGF2YWlsYWJsZSB0byB0aGUgY2xpZW50IGluIHRoZSByZXNwb25zZS5cbiAgICogICAgSXTigJlzIHRoYXQgdW5pcXVlIGFuZCBub24tZ3Vlc3NhYmxlIHZhbHVlIHRoYXQgYWxsb3dzIHlvdSB0byBwcmV2ZW50IHRoZSBhdHRhY2sgYnkgY29uZmlybWluZyBpZiB0aGUgdmFsdWUgY29taW5nIGZyb20gdGhlIHJlc3BvbnNlIG1hdGNoZXMgdGhlIG9uZSB5b3UgZXhwZWN0ICh0aGUgb25lIHlvdSBnZW5lcmF0ZWQgd2hlbiBpbml0aWF0aW5nIHRoZSByZXF1ZXN0KS5cbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBpcyBhIHN0cmluZyBzbyB5b3UgY2FuIGVuY29kZSBhbnkgb3RoZXIgaW5mb3JtYXRpb24gaW4gaXQuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IHN0YXRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm9uY2VdXG4gICAqICAgIFN0cmluZyB2YWx1ZSB1c2VkIHRvIGFzc29jaWF0ZSBhIENsaWVudCBzZXNzaW9uIHdpdGggYW4gSUQgVG9rZW4sIGFuZCB0byBtaXRpZ2F0ZSByZXBsYXkgYXR0YWNrcy5cbiAgICogICAgVGhlIHZhbHVlIGlzIHBhc3NlZCB0aHJvdWdoIHVubW9kaWZpZWQgZnJvbSB0aGUgQXV0aGVudGljYXRpb24gUmVxdWVzdCB0byB0aGUgSUQgVG9rZW4uXG4gICAqICAgIFN1ZmZpY2llbnQgZW50cm9weSBNVVNUIGJlIHByZXNlbnQgaW4gdGhlIG5vbmNlIHZhbHVlcyB1c2VkIHRvIHByZXZlbnQgYXR0YWNrZXJzIGZyb20gZ3Vlc3NpbmcgdmFsdWVzLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBub25jZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3Jlc3BvbnNlVHlwZT0nY29kZSddIE9wZW5JZCByZXNwb25zZSB0eXBlLiBUaGUgZGVmYXVsdCBpcyBgY29kZWAgKENvZGUgRmxvdywgaW52b2x2aW5nIHRoZSBmcm9udC1jaGFubmVsIGFuZCBiYWNrY2hhbm5lbCkuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IHJlc3BvbnNlVHlwZTogc3RyaW5nID0gJ2NvZGUnO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheSBJdCBzcGVjaWZpZXMgaG93IHRoZSBBdXRob3JpemF0aW9uIFNlcnZlciBkaXNwbGF5cyB0aGUgYXV0aGVudGljYXRpb24gYW5kIGNvbnNlbnQgdXNlciBpbnRlcmZhY2UgcGFnZXMgdG8gdGhlIEVuZC1Vc2VyLlxuICAgKiAgIERlZmF1bHQgYW5kIHRoZSBvbmx5IHN1cHBvcnRlZCB2YWx1ZSBpcyBgcGFnZWAuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IGRpc3BsYXk6IHN0cmluZyA9ICdwYWdlJ1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvbXB0IFNwYWNlIGRlbGltaXRlZCwgY2FzZSBzZW5zaXRpdmUgbGlzdCBvZiBzdHJpbmcgdmFsdWVzIHRoYXQgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIEF1dGhvcml6YXRpb24gU2VydmVyXG4gICAqICAgcHJvbXB0cyB0aGUgRW5kLVVzZXIgZm9yIHJlYXV0aGVudGljYXRpb24gYW5kIGNvbnNlbnQuIFRoZSBkZWZpbmVkIHZhbHVlcyBhcmU6IGBsb2dpbmAsIGBub25lYC5cbiAgICogICBEZWZhdWx0IGlzIGBsb2dpbixub25lYC4gQ2FuJ3QgYmUgY2hhbmdlZCBmb3Igbm93LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBwcm9tcHQ6IHN0cmluZyA9ICdsb2dpbixub25lJ1xuXG4gIC8qKlxuICAgKiBUaGVtZSBvZiB0aGUgbG9naW4gcGFnZSBvZiBDeWJlcnVzIEtleSBEYXNoYm9hcmQuIERlZmF1bHQgaXMgYGRlZmF1bHRgLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSB0aGVtZTogc3RyaW5nID0gJ2RlZmF1bHQnO1xufSJdLCJzb3VyY2VSb290IjoiIn0=