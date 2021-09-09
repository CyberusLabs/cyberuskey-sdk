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
            else if (this._cachedGeo) {
                data['lat'] = this._cachedGeo.latitude;
                data['lng'] = this._cachedGeo.longitude;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2FwaS50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvZXJyb3JzLnRzIiwid2VicGFjazovL2N5YmVydXNrZXktc2RrLy4vc3JjL3Nkay9nZW9Qcm92aWRlci9nZW8udHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL25hdmlnYXRvci9yZWRpcmVjdE5hdmlnYXRvci50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvc2NvcGVQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL3Nlc3Npb24udHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2dlb1Byb3ZpZGVyL2h0bWw1R2VvUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2xvZ2luT3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3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QU0sRUFBRSxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLGtCQUFrQixFQUFFLENBQUMsQ0FBQztZQUV6RCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztRQUN6RixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQTVDRCw0Q0E0Q0M7Ozs7Ozs7Ozs7O0FDcEREOzs7OztHQUtHO0FBQ0gsTUFBYSxZQUFZO0lBQXpCO1FBaUVFOzs7OztXQUtHO1FBQ00saUJBQVksR0FBVyxNQUFNLENBQUM7UUFFdkM7Ozs7OztXQU1HO1FBQ00sWUFBTyxHQUFXLE1BQU07UUFFakM7Ozs7Ozs7V0FPRztRQUNNLFdBQU0sR0FBVyxZQUFZO1FBRXRDOzs7OztXQUtHO1FBQ00sVUFBSyxHQUFXLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0NBQUE7QUFuR0Qsb0NBbUdDIiwiZmlsZSI6InNkay5lczYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImN5YmVydXNrZXktc2RrXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImN5YmVydXNrZXktc2RrXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImN5YmVydXNrZXktc2RrXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQge0dlb2xvY2F0aW9ufSBmcm9tICcuL2dlb1Byb3ZpZGVyL2dlbyc7XG5pbXBvcnQge0dlb1Byb3ZpZGVyfSBmcm9tICcuL2dlb1Byb3ZpZGVyL2dlb1Byb3ZpZGVyJztcbmltcG9ydCB7TmF2aWdhdG9yfSBmcm9tICcuL25hdmlnYXRvci9uYXZpZ2F0b3InO1xuaW1wb3J0IHtPcGVuSWRTY29wZVBhcnNlcn0gZnJvbSAnLi9zY29wZVBhcnNlcic7XG5pbXBvcnQge1Nlc3Npb259IGZyb20gJy4vc2Vzc2lvbic7XG5pbXBvcnQge0xvZ2luT3B0aW9uc30gZnJvbSAnLi9sb2dpbk9wdGlvbnMnO1xuXG5cbi8qKlxuICogQ3liZXJ1cyBLZXkgQVBJIHdoaWNoIGFsbG93cyB5b3UgdG8gZG8gYSBkZWxlZ2F0ZSBsb2dpbiB3aXRoIE9wZW5JZCBwcm90b2NvbC5cbiAqXG4gKiBAY2xhc3MgQ3liZXJ1c0tleUFQSVxuICovXG5leHBvcnQgY2xhc3MgQ3liZXJ1c0tleUFQSSB7XG4gICAgcHJpdmF0ZSBfYXBpVXJsOiBVUkw7XG4gICAgcHJpdmF0ZSBfZ2VvUHJvdmlkZXI6IEdlb1Byb3ZpZGVyO1xuICAgIHByaXZhdGUgX2NhY2hlZEdlbzogR2VvbG9jYXRpb247XG4gICAgcHJpdmF0ZSBfZGVsYXlNczogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICpDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEN5YmVydXNLZXlBUEkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGhvc3RVcmwgQmFzZSBVUkwgb2YgdGhlIGhvc3Qgc2VydmVyLCBlLmcuIGBodHRwczovL2FwaS5jeWJlcnVza2V5LmNvbWBcbiAgICAgKiBAcGFyYW0ge0dlb1Byb3ZpZGVyfSBbZ2VvUHJvdmlkZXJdIEdlb2xvY2FsaXphdGlvbiBwcm92aWRlci4gVXNlIHNwZWNpZmljIGltcGxlbWVudGF0aW9uIGxpa2UgYEhUTUw1R2VvUHJvdmlkZXJgLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXlNcz02MDBdIERlbGF5IChtcykgYmV0d2VlbiBtYWtpbmcgYW4gQXV0aGVudGljYXRpb24gcmVxdWVzdCBhbmQgYSBzb3VuZCBwbGF5aW5nLlxuICAgICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaG9zdFVybDogc3RyaW5nLCBnZW9Qcm92aWRlcj86IEdlb1Byb3ZpZGVyLCBkZWxheU1zOiBudW1iZXIgPSA2MDApIHtcbiAgICAgICAgdGhpcy5fYXBpVXJsID0gbmV3IFVSTCgnL2FwaS92Mi8nLCBob3N0VXJsKTtcbiAgICAgICAgdGhpcy5fZ2VvUHJvdmlkZXIgPSBnZW9Qcm92aWRlcjtcbiAgICAgICAgdGhpcy5fZGVsYXlNcyA9IGRlbGF5TXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgQ3liZXJ1cyBLZXkgc2Vzc2lvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRJZCBQdWJsaWMgY2xpZW50IElEIGdlbmVyYXRlZCBkdXJpbmcgY3JlYXRpbmcgdGhlIGFjY291bnQuXG4gICAgICogQHBhcmFtIHtHZW9sb2NhdGlvbn0gW2dlb10gR2l2ZSBhIHZhbHVlIGlmIHlvdSB3YW50IHRvIHBhc3Mgb3B0aW9uYWwgZ2VvbG9jYXRpb24gbWVhc3VyZW1lbnQuXG4gICAgICogICAgSXQgY2FuIGJlIGxhdGVyIHVzZSB0byBjb21wYXJlIGl0IGFnYWluc3QgdGhlIG1vYmlsZSdzIG1lYXN1cmVtZW50IChpZiB5b3UgaGF2ZSBzZXQgYGZhaWxfb25fZ2VvX21pc21hdGNoYCkuXG4gICAgICogICAgVGhvc2UgbWVhc3VyZW1lbnRzIGNhbiBiZSB1c2VkIGFsc28gdG8gZ2VuZXJhbCBpbXByb3ZlbWVudCBvZiB0aGUgc2VjdXJpdHkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmlnaW5dIFRoZSBvcmlnaW4gZG9tYWluIG9mIHRoZSByZXF1ZXN0IGJlaW5nIG1hZGUuIElmIGBudWxsYCB0aGVuIHRoZSBSZWZlcmVyIGhlYWRlciB3aWxsIGJlIHVzZWQuXG4gICAgICogQHRocm93cyBXcm9uZ0pzb25FcnJvciwgT3BlbkFwaUVycm9yLCBSZXNvdXJjZU5vdEZvdW5kRXJyb3IsIE9UUEdlbmVyYXRpb25FcnJvciwgVW5rbm93bkVycm9yXG4gICAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gVGhlIEN5YmVydXMgS2V5IHNlc3Npb24gaWQuXG4gICAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlU2Vzc2lvbihjbGllbnRJZDogc3RyaW5nLCBvcmlnaW4/OiBzdHJpbmcsIGdlbz86IEdlb2xvY2F0aW9uKTogUHJvbWlzZTxzdHJpbmc+IHtcblxuICAgICAgICBjb25zdCBkYXRhID0ge2NsaWVudF9pZDogY2xpZW50SWR9O1xuXG4gICAgICAgIGlmIChnZW8pIHtcbiAgICAgICAgICAgIGRhdGFbJ2xhdCddID0gZ2VvLmxhdGl0dWRlO1xuICAgICAgICAgICAgZGF0YVsnbG5nJ10gPSBnZW8ubG9uZ2l0dWRlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NhY2hlZEdlbykge1xuICAgICAgICAgICAgZGF0YVsnbGF0J10gPSB0aGlzLl9jYWNoZWRHZW8ubGF0aXR1ZGU7XG4gICAgICAgICAgICBkYXRhWydsbmcnXSA9IHRoaXMuX2NhY2hlZEdlby5sb25naXR1ZGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3JpZ2luKSB7XG4gICAgICAgICAgICBkYXRhWydvcmlnaW4nXSA9IG9yaWdpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogdGhpcy5fZ2V0VXJsRW5jb2RlZEJvZHkoZGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5fZ2V0VXJsKCdzZXNzaW9ucycpLCBwYXJhbXMpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiBqc29uLmRhdGEuc2Vzc2lvbl9pZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGF1dGhlbnRpY2F0aW9uIHNlcnZlciBpcyBhdmFpbGFibGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBmbGFnIGluZGljYXRpbmcgaWYgdGhlIGF1dGhlbnRpY2F0aW9uIHNlcnZlciBpcyBhdmFpbGFibGUuXG4gICAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcbiAgICAgKi9cblxuXG4gICAgcHVibGljIGFzeW5jIGlzT3V0T2ZTZXJ2aWNlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXG4gICAgICAgIGludGVyZmFjZSBWZXJzaW9uUmVzcG9uc2Uge1xuICAgICAgICAgICAgdmVyc2lvbjogc3RyaW5nO1xuICAgICAgICAgICAgbWluTW9iaWxlVmVyc2lvbjogc3RyaW5nO1xuICAgICAgICAgICAgbWF4TW9iaWxlVmVyc2lvbjogc3RyaW5nO1xuICAgICAgICAgICAgb3V0T2ZTZXJ2aWNlOiBib29sZWFuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLl9nZXRVcmwoYHZlcnNpb25gKSwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigodmVyc2lvbkpzb246IFZlcnNpb25SZXNwb25zZSkgPT4gdmVyc2lvbkpzb24ub3V0T2ZTZXJ2aWNlKVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBVUkwgd2l0aCBzb3VuZCB3aXRoIGVtYmVkZGVkIE9UUC4gWW91IGhhdmUgdG8gZW1pdCBpdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U2Vzc2lvbn0gc2Vzc2lvbiBDeWJlcnVzIEtleSdzIHNlc3Npb24gZ2VuZXJhdGVkIGJ5IGEgdXNlciBmb3IgYSBsb2dpbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBzdHJpbmcgd2l0aCB1cmwgdG8gdGhlIHNvdW5kLlxuICAgICAqIEB0aHJvd3MgUmVzb3VyY2VOb3RGb3VuZEVycm9yXG4gICAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcbiAgICAgKi9cblxuXG4gICAgcHVibGljIGdldE9UUFNvdW5kKHNlc3Npb246IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSAnYXVkaW8vbXBlZydcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6IHR5cGUsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLl9nZXRVcmwoYHNlc3Npb25zLyR7c2Vzc2lvbn1gKSwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpXG4gICAgICAgICAgICAudGhlbigoYXJyYXlCdWZmZXIpID0+IG5ldyBCbG9iKFthcnJheUJ1ZmZlcl0sIHt0eXBlOiB0eXBlfSkpXG4gICAgICAgICAgICAudGhlbigoYmxvYikgPT4gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0cyBPcGVuSUQncyBBdXRoZW50aWNhdGlvbiBlbmRwb2ludCBVUkwgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHByb2Nlc3MgdGhlIGF1dGhlbnRpY2F0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNlc3Npb25JZCB1bmlxdWUgaWQgY3JlYXRlZCBmb3IgdGhlIHNwZWNpZmljIGxvZ2luIGFuZCBjb25uZWN0ZWQgdG8gdGhlIHNwZWNpZmljIG90cFxuICAgICAqIEBwYXJhbSB7T3BlbklkU2NvcGVQYXJzZXJ9IHNjb3BlIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLlxuICAgICAqICAgIE9uY2UgdGhlIHVzZXIgYXV0aG9yaXplcyB0aGUgcmVxdWVzdGVkIHNjb3BlcywgdGhlIGNsYWltcyBhcmUgcmV0dXJuZWQgaW4gYW4gSUQgVG9rZW4uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIFB1YmxpYyBjbGllbnQgSUQgZ2VuZXJhdGVkIGR1cmluZyBjcmVhdGluZyB0aGUgYWNjb3VudC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVkaXJlY3RVcmkgUmVkaXJlY3QgVVJJIHRvIHdoaWNoIHRoZSByZXNwb25zZSB3aWxsIGJlIHNlbnQuIElmIHRoZSB2YWx1ZSBpcyBub3Qgd2hpdGVsaXN0ZWQgdGhlbiB0aGUgcmVxdWVzdCB3aWxsIGZhaWwuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0ZV1cbiAgICAgKiAgICBSRUNPTU1FTkRFRC4gT3BhcXVlIHZhbHVlIHVzZWQgdG8gbWFpbnRhaW4gc3RhdGUgYmV0d2VlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIGNhbGxiYWNrLiBUeXBpY2FsbHksIENTUkYsIFhTUkYgbWl0aWdhdGlvbiBpcyBkb25lIGJ5IGNyeXB0b2dyYXBoaWNhbGx5IGJpbmRpbmcgdGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIHdpdGggYSBicm93c2VyIGNvb2tpZS5cbiAgICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIHByZXNlcnZlcyBzb21lIHN0YXRlIG9iamVjdCBzZXQgYnkgdGhlIGNsaWVudCBpbiB0aGUgQXV0aGVudGljYXRpb24gcmVxdWVzdCBhbmQgbWFrZXMgaXQgYXZhaWxhYmxlIHRvIHRoZSBjbGllbnQgaW4gdGhlIHJlc3BvbnNlLlxuICAgICAqICAgIEl04oCZcyB0aGF0IHVuaXF1ZSBhbmQgbm9uLWd1ZXNzYWJsZSB2YWx1ZSB0aGF0IGFsbG93cyB5b3UgdG8gcHJldmVudCB0aGUgYXR0YWNrIGJ5IGNvbmZpcm1pbmcgaWYgdGhlIHZhbHVlIGNvbWluZyBmcm9tIHRoZSByZXNwb25zZSBtYXRjaGVzIHRoZSBvbmUgeW91IGV4cGVjdCAodGhlIG9uZSB5b3UgZ2VuZXJhdGVkIHdoZW4gaW5pdGlhdGluZyB0aGUgcmVxdWVzdCkuXG4gICAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBpcyBhIHN0cmluZyBzbyB5b3UgY2FuIGVuY29kZSBhbnkgb3RoZXIgaW5mb3JtYXRpb24gaW4gaXQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtub25jZV1cbiAgICAgKiAgICBTdHJpbmcgdmFsdWUgdXNlZCB0byBhc3NvY2lhdGUgYSBDbGllbnQgc2Vzc2lvbiB3aXRoIGFuIElEIFRva2VuLCBhbmQgdG8gbWl0aWdhdGUgcmVwbGF5IGF0dGFja3MuXG4gICAgICogICAgVGhlIHZhbHVlIGlzIHBhc3NlZCB0aHJvdWdoIHVubW9kaWZpZWQgZnJvbSB0aGUgQXV0aGVudGljYXRpb24gUmVxdWVzdCB0byB0aGUgSUQgVG9rZW4uXG4gICAgICogICAgU3VmZmljaWVudCBlbnRyb3B5IE1VU1QgYmUgcHJlc2VudCBpbiB0aGUgbm9uY2UgdmFsdWVzIHVzZWQgdG8gcHJldmVudCBhdHRhY2tlcnMgZnJvbSBndWVzc2luZyB2YWx1ZXMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtyZXNwb25zZVR5cGU9J2NvZGUnXSBPcGVuSWQgcmVzcG9uc2UgdHlwZS4gVGhlIGRlZmF1bHQgaXMgYGNvZGVgIChDb2RlIEZsb3csIGludm9sdmluZyB0aGUgZnJvbnQtY2hhbm5lbCBhbmQgYmFja2NoYW5uZWwpLlxuICAgICAqIEByZXR1cm5zIE9wZW5JRCdzIEF1dGhlbnRpY2F0aW9uIGVuZHBvaW50IFVSTFxuICAgICAqIEB0aHJvd3MgSW52YWxpZFJlZGlyZWN0VXJpRXJyb3IsIEludmFsaWRDbGllbnRFcnJvciwgUmVzb3VyY2VOb3RGb3VuZEVycm9yXG4gICAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QXV0aGVudGljYXRpb25FbmRwb2ludFVybChzZXNzaW9uSWQ6IHN0cmluZywgc2NvcGU6IE9wZW5JZFNjb3BlUGFyc2VyLCBjbGllbnRJZDogc3RyaW5nLCByZWRpcmVjdFVyaTogc3RyaW5nLCBzdGF0ZT86IHN0cmluZywgbm9uY2U/OiBzdHJpbmcsIHJlc3BvbnNlVHlwZSA9ICdjb2RlJyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgICAgIHNlc3Npb25faWQ6IHNlc3Npb25JZCxcbiAgICAgICAgICAgIGNsaWVudF9pZDogY2xpZW50SWQsXG4gICAgICAgICAgICBzY29wZTogc2NvcGUuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogcmVkaXJlY3RVcmksXG4gICAgICAgICAgICByZXNwb25zZV90eXBlOiByZXNwb25zZVR5cGVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIGRhdGFbJ3N0YXRlJ10gPSBzdGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICAgIGRhdGFbJ25vbmNlJ10gPSBub25jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodGhpcy5fZ2V0VXJsKCdhdXRoZW50aWNhdGUnKSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgocGFyYW1ldGVyTmFtZSkgPT4ge1xuICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQocGFyYW1ldGVyTmFtZSwgZGF0YVtwYXJhbWV0ZXJOYW1lXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1cmwuaHJlZjtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlcyB0byBBdXRoZW50aWNhdGlvbiBFbmRwb2ludFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIFB1YmxpYyBjbGllbnQgSUQgZ2VuZXJhdGVkIGR1cmluZyBjcmVhdGluZyB0aGUgYWNjb3VudC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVkaXJlY3RVcmkgUmVkaXJlY3QgVVJJIHRvIHdoaWNoIHRoZSByZXNwb25zZSB3aWxsIGJlIHNlbnQuIElmIHRoZSB2YWx1ZSBpcyBub3Qgd2hpdGVsaXN0ZWQgdGhlbiB0aGUgcmVxdWVzdCB3aWxsIGZhaWwuXG4gICAgICogQHBhcmFtIHtPcGVuSWRTY29wZVBhcnNlcn0gc2NvcGUgRWFjaCBzY29wZSByZXR1cm5zIGEgc2V0IG9mIHVzZXIgYXR0cmlidXRlcywgd2hpY2ggYXJlIGNhbGxlZCBjbGFpbXMuXG4gICAgICogICAgT25jZSB0aGUgdXNlciBhdXRob3JpemVzIHRoZSByZXF1ZXN0ZWQgc2NvcGVzLCB0aGUgY2xhaW1zIGFyZSByZXR1cm5lZCBpbiBhbiBJRCBUb2tlbi5cbiAgICAgKiBAcGFyYW0ge05hdmlnYXRvcn0gbmF2aWdhdG9yIENsYXNzIGRlc2NyaWJlcyBhbiBhY3Rpb24gdGhhdCB3aWxsIGJlIGRvbmUgdG8gQXV0aGVudGljYXRpb24gVVJMLiBGb3IgYnJvd3NlcnMgaXQgd2lsbCBiZSBhIHBhZ2UgcmVkaXJlY3Rpb24uXG4gICAgICogQHBhcmFtIHNlc3Npb24gU2Vzc2lvbiBpZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JpZ2luXSBUaGUgb3JpZ2luIGRvbWFpbiBvZiB0aGUgcmVxdWVzdCBiZWluZyBtYWRlLiBJZiBgbnVsbGAgdGhlbiB0aGUgUmVmZXJlciBoZWFkZXIgd2lsbCBiZSB1c2VkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc3RhdGVdXG4gICAgICogICAgUkVDT01NRU5ERUQuIE9wYXF1ZSB2YWx1ZSB1c2VkIHRvIG1haW50YWluIHN0YXRlIGJldHdlZW4gdGhlIHJlcXVlc3QgYW5kIHRoZSBjYWxsYmFjay4gVHlwaWNhbGx5LCBDU1JGLCBYU1JGIG1pdGlnYXRpb24gaXMgZG9uZSBieSBjcnlwdG9ncmFwaGljYWxseSBiaW5kaW5nIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciB3aXRoIGEgYnJvd3NlciBjb29raWUuXG4gICAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBwcmVzZXJ2ZXMgc29tZSBzdGF0ZSBvYmplY3Qgc2V0IGJ5IHRoZSBjbGllbnQgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgYW5kIG1ha2VzIGl0IGF2YWlsYWJsZSB0byB0aGUgY2xpZW50IGluIHRoZSByZXNwb25zZS5cbiAgICAgKiAgICBJdOKAmXMgdGhhdCB1bmlxdWUgYW5kIG5vbi1ndWVzc2FibGUgdmFsdWUgdGhhdCBhbGxvd3MgeW91IHRvIHByZXZlbnQgdGhlIGF0dGFjayBieSBjb25maXJtaW5nIGlmIHRoZSB2YWx1ZSBjb21pbmcgZnJvbSB0aGUgcmVzcG9uc2UgbWF0Y2hlcyB0aGUgb25lIHlvdSBleHBlY3QgKHRoZSBvbmUgeW91IGdlbmVyYXRlZCB3aGVuIGluaXRpYXRpbmcgdGhlIHJlcXVlc3QpLlxuICAgICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgaXMgYSBzdHJpbmcgc28geW91IGNhbiBlbmNvZGUgYW55IG90aGVyIGluZm9ybWF0aW9uIGluIGl0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbm9uY2VdXG4gICAgICogICAgU3RyaW5nIHZhbHVlIHVzZWQgdG8gYXNzb2NpYXRlIGEgQ2xpZW50IHNlc3Npb24gd2l0aCBhbiBJRCBUb2tlbiwgYW5kIHRvIG1pdGlnYXRlIHJlcGxheSBhdHRhY2tzLlxuICAgICAqICAgIFRoZSB2YWx1ZSBpcyBwYXNzZWQgdGhyb3VnaCB1bm1vZGlmaWVkIGZyb20gdGhlIEF1dGhlbnRpY2F0aW9uIFJlcXVlc3QgdG8gdGhlIElEIFRva2VuLlxuICAgICAqICAgIFN1ZmZpY2llbnQgZW50cm9weSBNVVNUIGJlIHByZXNlbnQgaW4gdGhlIG5vbmNlIHZhbHVlcyB1c2VkIHRvIHByZXZlbnQgYXR0YWNrZXJzIGZyb20gZ3Vlc3NpbmcgdmFsdWVzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcmVzcG9uc2VUeXBlPSdjb2RlJ10gT3BlbklkIHJlc3BvbnNlIHR5cGUuIFRoZSBkZWZhdWx0IGlzIGBjb2RlYCAoQ29kZSBGbG93LCBpbnZvbHZpbmcgdGhlIGZyb250LWNoYW5uZWwgYW5kIGJhY2tjaGFubmVsKS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxuICAgICAqL1xuICAgIHB1YmxpYyBuYXZpZ2F0ZUF1dGhlbnRpY2F0aW9uKGNsaWVudElkOiBzdHJpbmcsIHJlZGlyZWN0VXJpOiBzdHJpbmcsIHNjb3BlOiBPcGVuSWRTY29wZVBhcnNlciwgbmF2aWdhdG9yOiBOYXZpZ2F0b3IsIHNlc3Npb246IHN0cmluZywgb3JpZ2luPzogc3RyaW5nLCBzdGF0ZT86IHN0cmluZywgbm9uY2U/OiBzdHJpbmcsIHJlc3BvbnNlVHlwZSA9ICdjb2RlJykge1xuICAgICAgICBjb25zdCBhdXRoZW50aWNhdGVVcmwgPSB0aGlzLmdldEF1dGhlbnRpY2F0aW9uRW5kcG9pbnRVcmwoc2Vzc2lvbiwgc2NvcGUsIGNsaWVudElkLCByZWRpcmVjdFVyaSwgc3RhdGUsIG5vbmNlLCByZXNwb25zZVR5cGUpO1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLm5hdmlnYXRlKGF1dGhlbnRpY2F0ZVVybCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGxvZ2luVGhyb3VnaEN5YmVydXNLZXlEYXNoYm9hcmQob3B0aW9uczogTG9naW5PcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgICAgIGNsaWVudF9pZDogb3B0aW9ucy5jbGllbnRJZCxcbiAgICAgICAgICAgIHNjb3BlOiBvcHRpb25zLnNjb3BlLmdldFZhbHVlKCksXG4gICAgICAgICAgICByZWRpcmVjdF91cmk6IG9wdGlvbnMucmVkaXJlY3RVcmksXG4gICAgICAgICAgICByZXNwb25zZV90eXBlOiBvcHRpb25zLnJlc3BvbnNlVHlwZSxcbiAgICAgICAgICAgIHN0YXRlOiBvcHRpb25zLnN0YXRlLFxuICAgICAgICAgICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAgICAgICAgICBkaXNwbGF5OiBvcHRpb25zLmRpc3BsYXkgfHwgJ3BhZ2UnLFxuICAgICAgICAgICAgcHJvbXB0OiBvcHRpb25zLnByb21wdCxcbiAgICAgICAgICAgIHRoZW1lOiBvcHRpb25zLnRoZW1lLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLnN0YXRlKSB7XG4gICAgICAgICAgICBkYXRhWydzdGF0ZSddID0gb3B0aW9ucy5zdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLm5vbmNlKSB7XG4gICAgICAgICAgICBkYXRhWydub25jZSddID0gb3B0aW9ucy5ub25jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodGhpcy5fZ2V0VXJsKCdhdXRoZW50aWNhdGUnKSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgocGFyYW1ldGVyTmFtZSkgPT4ge1xuICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQocGFyYW1ldGVyTmFtZSwgZGF0YVtwYXJhbWV0ZXJOYW1lXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IG9wdGlvbnMubmF2aWdhdG9yLm5hdmlnYXRlKHVybC5ocmVmKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRVcmwocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIChuZXcgVVJMKHBhdGgsIHRoaXMuX2FwaVVybCkpLmhyZWY7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0VXJsRW5jb2RlZEJvZHkoZGF0YTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLnJlZHVjZTxzdHJpbmdbXT4oKHJlc3VsdDogc3RyaW5nW10sIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbmNvZGVkS2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGtleSk7XG4gICAgICAgICAgICBjb25zdCBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcblxuICAgICAgICAgICAgcmVzdWx0LnB1c2goYCR7ZW5jb2RlZEtleX09JHtlbmNvZGVkVmFsdWV9YCk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIFtdKS5qb2luKFwiJlwiKVxuICAgIH1cblxuICAgIHByaXZhdGUgX3RpbWVvdXQobXM6IG51bWJlcik6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJlbnVtIEVycm9yQ29kZSB7XG4gIHVuZGVmaW5lZCA9IDEsXG4gIHVua25vd25fZXJyb3IsXG4gIHNlcnZlcl9lcnJvcixcbiAgd3JvbmdfanNvbixcbiAgb3BlbmFwaV9lcnJvcixcbiAgcmVzb3VyY2Vfbm90X2ZvdW5kLFxuICBvdHBfZ2VuZXJhdGlvbl9mYWlsdXJlLFxuICBpbnZhbGlkX3JlZGlyZWN0X3VyaSxcbiAgaW52YWxpZF9jbGllbnQsXG4gIHRvb19tYW55X2NhbGxzX2Vycm9yXG59XG5cbmNsYXNzIEN5YmVydXNLZXlFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgcHJpdmF0ZSBfY29kZTogRXJyb3JDb2RlO1xuXG4gIGNvbnN0cnVjdG9yKGNvZGU6IGtleW9mIHR5cGVvZiBFcnJvckNvZGUsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKG1lc3NhZ2UpXG4gICAgdGhpcy5fY29kZSA9IEVycm9yQ29kZVtjb2RlXTtcbiAgfVxuXG4gIGdldCBjb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEVycm9yQ29kZVt0aGlzLl9jb2RlXTtcbiAgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XG4gIH1cbn1cblxuY2xhc3MgVW5rbm93bkVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHtcbiAgY29uc3RydWN0b3IoY29kZToga2V5b2YgdHlwZW9mIEVycm9yQ29kZSA9ICd1bmtub3duX2Vycm9yJywgbWVzc2FnZTogc3RyaW5nID0gJ1Vua25vd24gZXJyb3Igb2NjdXJlZC4nKSB7XG4gICAgc3VwZXIoY29kZSwgbWVzc2FnZSlcbiAgfVxufVxuY2xhc3MgVG9vTWFueUNhbGxzRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3Ige1xuICBjb25zdHJ1Y3Rvcihjb2RlOiBrZXlvZiB0eXBlb2YgRXJyb3JDb2RlID0gJ3Rvb19tYW55X2NhbGxzX2Vycm9yJywgbWVzc2FnZTogc3RyaW5nID0gJ1lvdVxcJ3ZlIGRvbmUgdG9vIG1hbnkgY2FsbHMuJykge1xuICAgIHN1cGVyKGNvZGUsIG1lc3NhZ2UpXG4gIH1cbn1cblxuY2xhc3MgTWlzc2luZ1JlZGlyZWN0VXJpIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ2ludmFsaWRfcmVkaXJlY3RfdXJpJywgJ01pc3NpbmcgcmVkaXJlY3Rpb24gVVJJLicpO1xuICB9XG59XG5cbmNsYXNzIFdyb25nSnNvbkVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxuY2xhc3MgT3BlbkFwaUVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxuY2xhc3MgUmVzb3VyY2VOb3RGb3VuZEVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxuY2xhc3MgT1RQR2VuZXJhdGlvbkVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxuY2xhc3MgSW52YWxpZFJlZGlyZWN0VXJpRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XG5jbGFzcyBJbnZhbGlkQ2xpZW50RXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XG5cbmNvbnN0IE1BUFBJTkcgPSB7XG4gIFtFcnJvckNvZGUudW5kZWZpbmVkXTogVW5rbm93bkVycm9yLFxuICBbRXJyb3JDb2RlLnVua25vd25fZXJyb3JdOiBVbmtub3duRXJyb3IsXG4gIFtFcnJvckNvZGUuc2VydmVyX2Vycm9yXTogVW5rbm93bkVycm9yLFxuICBbRXJyb3JDb2RlLnVuZGVmaW5lZF06IFdyb25nSnNvbkVycm9yLFxuICBbRXJyb3JDb2RlLndyb25nX2pzb25dOiBXcm9uZ0pzb25FcnJvcixcbiAgW0Vycm9yQ29kZS5vcGVuYXBpX2Vycm9yXTogT3BlbkFwaUVycm9yLFxuICBbRXJyb3JDb2RlLnJlc291cmNlX25vdF9mb3VuZF06IFJlc291cmNlTm90Rm91bmRFcnJvcixcbiAgW0Vycm9yQ29kZS5vdHBfZ2VuZXJhdGlvbl9mYWlsdXJlXTogT1RQR2VuZXJhdGlvbkVycm9yLFxuICBbRXJyb3JDb2RlLmludmFsaWRfcmVkaXJlY3RfdXJpXTogSW52YWxpZFJlZGlyZWN0VXJpRXJyb3IsXG4gIFtFcnJvckNvZGUuaW52YWxpZF9jbGllbnRdOiBJbnZhbGlkQ2xpZW50RXJyb3IsXG4gIFtFcnJvckNvZGUudG9vX21hbnlfY2FsbHNfZXJyb3JdOiBUb29NYW55Q2FsbHNFcnJvclxufVxuXG5mdW5jdGlvbiBlcnJvckZhY3RvcnkoY29kZToga2V5b2YgdHlwZW9mIEVycm9yQ29kZSwgbWVzc2FnZTogc3RyaW5nKSB7XG4gIGNvbnN0IGVudW1fdHlwZSA9IEVycm9yQ29kZVtjb2RlXTtcbiAgY29uc3QgRXJyb3JDb25zdHJ1Y3RvciA9IE1BUFBJTkdbZW51bV90eXBlXTtcblxuICByZXR1cm4gbmV3IEVycm9yQ29uc3RydWN0b3IoY29kZSwgbWVzc2FnZSk7XG59XG5cbmV4cG9ydCB7XG4gIGVycm9yRmFjdG9yeSxcbiAgRXJyb3JDb2RlLFxuICBDeWJlcnVzS2V5RXJyb3IsXG4gIFVua25vd25FcnJvcixcbiAgVG9vTWFueUNhbGxzRXJyb3IsXG4gIFdyb25nSnNvbkVycm9yLFxuICBPcGVuQXBpRXJyb3IsXG4gIFJlc291cmNlTm90Rm91bmRFcnJvcixcbiAgT1RQR2VuZXJhdGlvbkVycm9yLFxuICBNaXNzaW5nUmVkaXJlY3RVcmlcbn07XG5cbiIsIi8qKlxuICogQW4gYWJzdHJhY3Rpb24gZm9yIGEgdGFrZW4gZ2VvbG9jYXRpb24gbWVhc3VyZW1lbnQuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEdlb2xvY2F0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBHZW9sb2NhdGlvbiB7XG4gIHByaXZhdGUgX2xhdGl0dWRlOiBudW1iZXI7XG4gIHByaXZhdGUgX2xvbmdpdHVkZTogbnVtYmVyO1xuICBwcml2YXRlIF9hY2N1cmFjeTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGxhdGl0dWRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyLCBhY2N1cmFjeT86IG51bWJlcikge1xuICAgIHRoaXMuX2xhdGl0dWRlID0gbGF0aXR1ZGU7XG4gICAgdGhpcy5fbG9uZ2l0dWRlID0gbG9uZ2l0dWRlO1xuICAgIHRoaXMuX2FjY3VyYWN5ID0gYWNjdXJhY3k7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgbGF0aXR1ZGUuXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgR2VvbG9jYXRpb25cbiAgICovXG4gIGdldCBsYXRpdHVkZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXRpdHVkZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgbG9uZ2l0dWRlLlxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEdlb2xvY2F0aW9uXG4gICAqL1xuICBnZXQgbG9uZ2l0dWRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xvbmdpdHVkZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFuIGFjY3VyYWN5IG9mIGEgbWVhc3VyZW1lbnQuXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgR2VvbG9jYXRpb25cbiAgICovXG4gIGdldCBhY2N1cmFjeSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9hY2N1cmFjeTtcbiAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vc2RrL2FwaSc7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9lcnJvcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvbmF2aWdhdG9yL25hdmlnYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9uYXZpZ2F0b3IvcmVkaXJlY3ROYXZpZ2F0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvc2NvcGVQYXJzZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvc2Vzc2lvbic7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9nZW9Qcm92aWRlci9nZW8nO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvZ2VvUHJvdmlkZXIvZ2VvUHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvZ2VvUHJvdmlkZXIvaHRtbDVHZW9Qcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9sb2dpbk9wdGlvbnMnO1xuXG5pbXBvcnQgeyBDeWJlcnVzS2V5QVBJIH0gZnJvbSAnLi9zZGsvYXBpJztcbmV4cG9ydCBkZWZhdWx0IEN5YmVydXNLZXlBUEk7IiwiaW1wb3J0IHsgTWlzc2luZ1JlZGlyZWN0VXJpIH0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7IE5hdmlnYXRvciB9IGZyb20gJy4vbmF2aWdhdG9yJztcblxuXG4vKipcbiAqIENsYXNzIGRlc2NyaWJlcyBob3cgT3BlbklEJ3MgQXV0aGVudGljYXRpb24gRW5kcG9pbnQgd2lsbCBiZSBoYW5kbGVkLlxuICogVGhpcyBjbGFzcyBpcyB0aGlnaHRlbiB0byBhIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvdXIgZm9yIE9wZW5JRCBwcm90b2NvbCAtIGEgcmVkaXJlY3Rpb24uXG4gKiBXaGljaCBtZWFucyB0aGF0IHlvdXIgVVJMIHdpbGwgYmUgdGVtcG9yYXJpbHkgcmVwbGFjZWQgYnkgdGhlIEF1dGhlbnRpY2F0aW9uIEVuZHBvaW50XG4gKiBhbmQgcmVwbGFjZWQgYWdhaW4gYnkgaXRzIHJlc3BvbnNlIC0gSFRUUCAzMDIuIFRoZSBuZXcgbG9jYXRpb24gd2lsbCBiZSB0aGUgb25lIHlvdSBkZWZpbmVkIGFzIHlvdXIgYHJlZGlyZWN0X3VyaWAuXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBSZWRpcmVjdE5hdmlnYXRvclxuICogQGltcGxlbWVudHMge05hdmlnYXRvcn1cbiAqL1xuZXhwb3J0IGNsYXNzIFJlZGlyZWN0TmF2aWdhdG9yIGltcGxlbWVudHMgTmF2aWdhdG9yIHtcbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIEF1dGhlbnRpY2F0aW9uIEVuZHBvaW50IFVSTC5cbiAgICogQHRocm93cyBNaXNzaW5nUmVkaXJlY3RVcmlcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqIEBtZW1iZXJvZiBSZWRpcmVjdE5hdmlnYXRvclxuICAgKi9cbiAgYXN5bmMgbmF2aWdhdGUodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXVybCkge1xuICAgICAgdGhyb3cgbmV3IE1pc3NpbmdSZWRpcmVjdFVyaSgpXG4gICAgfVxuXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn0iLCJcbi8qKlxuICogSGFuZHkgY2xhc3MgdG8gZGVmaW5lIGFuIE9wZW5JRCdzIHNjb3BlLlxuICogU2NvcGVzIGFyZSB1c2VkIGJ5IGFuIGFwcGxpY2F0aW9uIGR1cmluZyBhdXRoZW50aWNhdGlvbiB0byBhdXRob3JpemUgYWNjZXNzIHRvIGEgdXNlcidzIGRldGFpbHMsXG4gKiBsaWtlIG5hbWUgYW5kIHBpY3R1cmUuIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLiBcbiAqIFxuICogWW91IGNhbiB1c2UgYWRkaXRpb25hbCB2YWx1ZXMgYGVtYWlsYCAoYWRkIGEgdXNlcidzIGVtYWlsIGNsYWltKSBhbmQgYHByb2ZpbGVgIChhZGQgdXNlciBmaXJzdCBhbmQgbGFzdCBuYW1lKS5cbiAqIFxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3Qgc2NvcGVQYXJzZXIgPSBuZXcgT3BlbklkU2NvcGVQYXJzZXIoKTtcbiAqIGNvbnN0IHNjb3BlID0gc2NvcGVQYXJzZXIuYWRkRW1haWwoKS5hZGRQcm9maWxlKCkuZ2V0VmFsdWUoKTtcbiAqIGBgYFxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBPcGVuSWRTY29wZVBhcnNlclxuICovXG5leHBvcnQgY2xhc3MgT3BlbklkU2NvcGVQYXJzZXIge1xuICBwcml2YXRlIF9zY29wZTogQXJyYXk8c3RyaW5nPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9zY29wZSA9IFsnb3BlbmlkJ107XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBgZW1haWxgIHNjb3BlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICogQG1lbWJlcm9mIE9wZW5JZFNjb3BlUGFyc2VyXG4gICAqL1xuICBwdWJsaWMgYWRkRW1haWwoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuX3Njb3BlLmluY2x1ZGVzKCdlbWFpbCcpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9zY29wZS5wdXNoKCdlbWFpbCcpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBgcHJvZmlsZWAgc2NvcGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHt0aGlzfVxuICAgKiBAbWVtYmVyb2YgT3BlbklkU2NvcGVQYXJzZXJcbiAgICovXG4gIHB1YmxpYyBhZGRQcm9maWxlKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9zY29wZS5pbmNsdWRlcygncHJvZmlsZScpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9zY29wZS5wdXNoKCdwcm9maWxlJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGZvcm1hdHRlZCBzY29wZSB2YWx1ZSwgZS5nLiBgb3BlbmlkIGVtYWlsYC5cbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIE9wZW5JZFNjb3BlUGFyc2VyXG4gICAqL1xuICBwdWJsaWMgZ2V0VmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcGUuam9pbignICcpO1xuICB9XG59IiwiZXhwb3J0IGludGVyZmFjZSBTZXNzaW9uUmVzcG9uc2Uge1xuICBzZXNzaW9uX2lkOiBzdHJpbmc7XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbn1cblxuXG4vKipcbiAqIERhdGEgY2xhc3MgcmVwcmVzZW50aW5nIGEgQ3liZXJ1cyBLZXkgc2Vzc2lvbi5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgU2Vzc2lvblxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvbiB7XG4gIC8qKlxuICAgKiBTZXNzaW9uJ3MgdW5pcXVlIGlkZW50aWZpZXIuIEl0J3MgdmFsaWQgdXAgdG8gMjBzLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgU2Vzc2lvblxuICAgKi9cbiAgcHVibGljIHNlc3Npb25JZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIFVUQyBkYXRlIHJlcHJlc2VudGluZyBhIGRhdGUgKGFuZCB0aW1lKSB3aGVuIGEgc2Vzc2lvbiBoYXMgYmVlbiBjcmVhdGVkLlxuICAgKlxuICAgKiBAdHlwZSB7RGF0ZX1cbiAgICogQG1lbWJlcm9mIFNlc3Npb25cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVkQXQ6IERhdGU7XG5cbiAgY29uc3RydWN0b3IoanNvbjogU2Vzc2lvblJlc3BvbnNlKSB7XG4gICAgdGhpcy5zZXNzaW9uSWQgPSBqc29uLnNlc3Npb25faWQ7XG4gICAgdGhpcy5jcmVhdGVkQXQgPSBuZXcgRGF0ZShqc29uLmNyZWF0ZWRfYXQpO1xuICB9XG59IiwiaW1wb3J0IHsgR2VvbG9jYXRpb24gfSBmcm9tICcuL2dlbyc7XG5pbXBvcnQgeyBHZW9Qcm92aWRlciB9IGZyb20gJy4vZ2VvUHJvdmlkZXInO1xuXG5cbi8qKlxuICogQ2xhc3MgcHJvdmlkZXMgYSBnZW9sb2NhbGl6YXRpb24gbWVhc3VyZW1lbnQuXG4gKiBJdCB1c2VzIGEgSFRNTDUncyBgR2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKClgIG1ldGhvZC5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgSFRNTDVHZW9Qcm92aWRlclxuICogQGltcGxlbWVudHMge0dlb1Byb3ZpZGVyfVxuICovXG5leHBvcnQgY2xhc3MgSFRNTDVHZW9Qcm92aWRlciBpbXBsZW1lbnRzIEdlb1Byb3ZpZGVyIHtcbiAgcHJpdmF0ZSBfZW5hYmxlSGlnaEFjY3VyYWN5OiBib29sZWFuO1xuICBwcml2YXRlIF9uYXZpZ2F0b3I6IE5hdmlnYXRvcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBIVE1MNUdlb1Byb3ZpZGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtlbmFibGVIaWdoQWNjdXJhY3k9ZmFsc2VdICBGb3JjZXMgaGlnaCBhY2N1cmFjeSBvZiB0aGUgZ2VvbG9jYXRpb24uIEl0IG1heSB0YWtlIGxvbmdlci5cbiAgICogQHBhcmFtIHtOYXZpZ2F0b3J9IFtuYXZpZ2F0b3I9d2luZG93Lm5hdmlnYXRvcl1cbiAgICogQG1lbWJlcm9mIEhUTUw1R2VvUHJvdmlkZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVuYWJsZUhpZ2hBY2N1cmFjeSA9IGZhbHNlLCBuYXZpZ2F0b3I6IE5hdmlnYXRvciA9IHdpbmRvdy5uYXZpZ2F0b3IpIHtcbiAgICB0aGlzLl9lbmFibGVIaWdoQWNjdXJhY3kgPSBlbmFibGVIaWdoQWNjdXJhY3k7XG4gICAgdGhpcy5fbmF2aWdhdG9yID0gbmF2aWdhdG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBnZW9sb2NhbGl6YXRpb24gbWVhc3VyZW1lbnQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEdlb2xvY2F0aW9uPn0gR2VvbG9jYWxpemF0aW9uIG1lYXN1cmVtZW50LlxuICAgKiBAbWVtYmVyb2YgSFRNTDVHZW9Qcm92aWRlclxuICAgKi9cbiAgYXN5bmMgZ2V0R2VvKCk6IFByb21pc2U8R2VvbG9jYXRpb24+IHtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCB0aGlzLl9nZXRHZW8odGhpcy5fZW5hYmxlSGlnaEFjY3VyYWN5KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIEUuZy4gdXNlciBkaWRuJ3QgYWdyZWUgb24gZ2VvbGljYWxpemF0aW9uLlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb29yZHMgfSA9IHJlc3VsdDtcblxuICAgIHJldHVybiBuZXcgR2VvbG9jYXRpb24oY29vcmRzLmxhdGl0dWRlLCBjb29yZHMubG9uZ2l0dWRlLCBjb29yZHMuYWNjdXJhY3kpO1xuICB9XG5cbiAgX2dldEdlbyhlbmFibGVIaWdoQWNjdXJhY3k6IGJvb2xlYW4pOiBQcm9taXNlPFBvc2l0aW9uPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBlbmFibGVIaWdoQWNjdXJhY3k6ICR7ZW5hYmxlSGlnaEFjY3VyYWN5fWApO1xuXG4gICAgICB0aGlzLl9uYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHJlc29sdmUsIHJlamVjdCwgeyBlbmFibGVIaWdoQWNjdXJhY3kgfSlcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3IvbmF2aWdhdG9yJztcbmltcG9ydCB7IE9wZW5JZFNjb3BlUGFyc2VyIH0gZnJvbSAnLi9zY29wZVBhcnNlcic7XG5cblxuLyoqXG4gKiBMb2dpbiBvcHRpb25zLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBMb2dpbk9wdGlvbnNcbiAqL1xuZXhwb3J0IGNsYXNzIExvZ2luT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50SWQgUHVibGljIGNsaWVudCBJRCBnZW5lcmF0ZWQgZHVyaW5nIGNyZWF0aW5nIHRoZSBhY2NvdW50LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBjbGllbnRJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVkaXJlY3RVcmkgUmVkaXJlY3QgVVJJIHRvIHdoaWNoIHRoZSByZXNwb25zZSB3aWxsIGJlIHNlbnQuIElmIHRoZSB2YWx1ZSBpcyBub3Qgd2hpdGVsaXN0ZWQgdGhlbiB0aGUgcmVxdWVzdCB3aWxsIGZhaWwuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IHJlZGlyZWN0VXJpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T3BlbklkU2NvcGVQYXJzZXJ9IHNjb3BlIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLlxuICAgKiAgICBPbmNlIHRoZSB1c2VyIGF1dGhvcml6ZXMgdGhlIHJlcXVlc3RlZCBzY29wZXMsIHRoZSBjbGFpbXMgYXJlIHJldHVybmVkIGluIGFuIElEIFRva2VuLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBzY29wZTogT3BlbklkU2NvcGVQYXJzZXI7XG5cbiAgLyoqXG4gICogQHBhcmFtIHtOYXZpZ2F0b3J9IG5hdmlnYXRvciBDbGFzcyBkZXNjcmliZXMgYW4gYWN0aW9uIHRoYXQgd2lsbCBiZSBkb25lIHRvIEF1dGhlbnRpY2F0aW9uIFVSTC4gRm9yIGJyb3dzZXJzIGl0IHdpbGwgYmUgYSBwYWdlIHJlZGlyZWN0aW9uLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBuYXZpZ2F0b3I6IE5hdmlnYXRvcjtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmlnaW5dIFRoZSBvcmlnaW4gZG9tYWluIG9mIHRoZSByZXF1ZXN0IGJlaW5nIG1hZGUuIElmIGBudWxsYCB0aGVuIHRoZSBSZWZlcmVyIGhlYWRlciB3aWxsIGJlIHVzZWQuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IG9yaWdpbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3N0YXRlXVxuICAgKiAgICBSRUNPTU1FTkRFRC4gT3BhcXVlIHZhbHVlIHVzZWQgdG8gbWFpbnRhaW4gc3RhdGUgYmV0d2VlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIGNhbGxiYWNrLiBUeXBpY2FsbHksIENTUkYsIFhTUkYgbWl0aWdhdGlvbiBpcyBkb25lIGJ5IGNyeXB0b2dyYXBoaWNhbGx5IGJpbmRpbmcgdGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIHdpdGggYSBicm93c2VyIGNvb2tpZS5cbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBwcmVzZXJ2ZXMgc29tZSBzdGF0ZSBvYmplY3Qgc2V0IGJ5IHRoZSBjbGllbnQgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgYW5kIG1ha2VzIGl0IGF2YWlsYWJsZSB0byB0aGUgY2xpZW50IGluIHRoZSByZXNwb25zZS5cbiAgICogICAgSXTigJlzIHRoYXQgdW5pcXVlIGFuZCBub24tZ3Vlc3NhYmxlIHZhbHVlIHRoYXQgYWxsb3dzIHlvdSB0byBwcmV2ZW50IHRoZSBhdHRhY2sgYnkgY29uZmlybWluZyBpZiB0aGUgdmFsdWUgY29taW5nIGZyb20gdGhlIHJlc3BvbnNlIG1hdGNoZXMgdGhlIG9uZSB5b3UgZXhwZWN0ICh0aGUgb25lIHlvdSBnZW5lcmF0ZWQgd2hlbiBpbml0aWF0aW5nIHRoZSByZXF1ZXN0KS5cbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBpcyBhIHN0cmluZyBzbyB5b3UgY2FuIGVuY29kZSBhbnkgb3RoZXIgaW5mb3JtYXRpb24gaW4gaXQuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IHN0YXRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm9uY2VdXG4gICAqICAgIFN0cmluZyB2YWx1ZSB1c2VkIHRvIGFzc29jaWF0ZSBhIENsaWVudCBzZXNzaW9uIHdpdGggYW4gSUQgVG9rZW4sIGFuZCB0byBtaXRpZ2F0ZSByZXBsYXkgYXR0YWNrcy5cbiAgICogICAgVGhlIHZhbHVlIGlzIHBhc3NlZCB0aHJvdWdoIHVubW9kaWZpZWQgZnJvbSB0aGUgQXV0aGVudGljYXRpb24gUmVxdWVzdCB0byB0aGUgSUQgVG9rZW4uXG4gICAqICAgIFN1ZmZpY2llbnQgZW50cm9weSBNVVNUIGJlIHByZXNlbnQgaW4gdGhlIG5vbmNlIHZhbHVlcyB1c2VkIHRvIHByZXZlbnQgYXR0YWNrZXJzIGZyb20gZ3Vlc3NpbmcgdmFsdWVzLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBub25jZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3Jlc3BvbnNlVHlwZT0nY29kZSddIE9wZW5JZCByZXNwb25zZSB0eXBlLiBUaGUgZGVmYXVsdCBpcyBgY29kZWAgKENvZGUgRmxvdywgaW52b2x2aW5nIHRoZSBmcm9udC1jaGFubmVsIGFuZCBiYWNrY2hhbm5lbCkuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IHJlc3BvbnNlVHlwZTogc3RyaW5nID0gJ2NvZGUnO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheSBJdCBzcGVjaWZpZXMgaG93IHRoZSBBdXRob3JpemF0aW9uIFNlcnZlciBkaXNwbGF5cyB0aGUgYXV0aGVudGljYXRpb24gYW5kIGNvbnNlbnQgdXNlciBpbnRlcmZhY2UgcGFnZXMgdG8gdGhlIEVuZC1Vc2VyLlxuICAgKiAgIERlZmF1bHQgYW5kIHRoZSBvbmx5IHN1cHBvcnRlZCB2YWx1ZSBpcyBgcGFnZWAuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IGRpc3BsYXk6IHN0cmluZyA9ICdwYWdlJ1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvbXB0IFNwYWNlIGRlbGltaXRlZCwgY2FzZSBzZW5zaXRpdmUgbGlzdCBvZiBzdHJpbmcgdmFsdWVzIHRoYXQgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIEF1dGhvcml6YXRpb24gU2VydmVyXG4gICAqICAgcHJvbXB0cyB0aGUgRW5kLVVzZXIgZm9yIHJlYXV0aGVudGljYXRpb24gYW5kIGNvbnNlbnQuIFRoZSBkZWZpbmVkIHZhbHVlcyBhcmU6IGBsb2dpbmAsIGBub25lYC5cbiAgICogICBEZWZhdWx0IGlzIGBsb2dpbixub25lYC4gQ2FuJ3QgYmUgY2hhbmdlZCBmb3Igbm93LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSBwcm9tcHQ6IHN0cmluZyA9ICdsb2dpbixub25lJ1xuXG4gIC8qKlxuICAgKiBUaGVtZSBvZiB0aGUgbG9naW4gcGFnZSBvZiBDeWJlcnVzIEtleSBEYXNoYm9hcmQuIERlZmF1bHQgaXMgYGRlZmF1bHRgLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXG4gICAqL1xuICByZWFkb25seSB0aGVtZTogc3RyaW5nID0gJ2RlZmF1bHQnO1xufSJdLCJzb3VyY2VSb290IjoiIn0=