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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2FwaS50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvZXJyb3JzLnRzIiwid2VicGFjazovL2N5YmVydXNrZXktc2RrLy4vc3JjL3Nkay9nZW9Qcm92aWRlci9nZW8udHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL25hdmlnYXRvci9yZWRpcmVjdE5hdmlnYXRvci50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvc2NvcGVQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL3Nlc3Npb24udHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2dlb1Byb3ZpZGVyL2h0bWw1R2VvUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2xvZ2luT3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3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QzdFLENBQUM7S0FBQTtJQUVELE9BQU8sQ0FBQyxrQkFBMkI7UUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztRQUN6RixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQTFDRCw0Q0EwQ0M7Ozs7Ozs7Ozs7O0FDbEREOzs7OztHQUtHO0FBQ0gsTUFBYSxZQUFZO0lBQXpCO1FBaUVFOzs7OztXQUtHO1FBQ00saUJBQVksR0FBVyxNQUFNLENBQUM7UUFFdkM7Ozs7OztXQU1HO1FBQ00sWUFBTyxHQUFXLE1BQU07UUFFakM7Ozs7Ozs7V0FPRztRQUNNLFdBQU0sR0FBVyxZQUFZO1FBRXRDOzs7OztXQUtHO1FBQ00sVUFBSyxHQUFXLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0NBQUE7QUFuR0Qsb0NBbUdDIiwiZmlsZSI6InNkay5lczYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImN5YmVydXNrZXktc2RrXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImN5YmVydXNrZXktc2RrXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImN5YmVydXNrZXktc2RrXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQge0dlb2xvY2F0aW9ufSBmcm9tICcuL2dlb1Byb3ZpZGVyL2dlbyc7XHJcbmltcG9ydCB7R2VvUHJvdmlkZXJ9IGZyb20gJy4vZ2VvUHJvdmlkZXIvZ2VvUHJvdmlkZXInO1xyXG5pbXBvcnQge05hdmlnYXRvcn0gZnJvbSAnLi9uYXZpZ2F0b3IvbmF2aWdhdG9yJztcclxuaW1wb3J0IHtPcGVuSWRTY29wZVBhcnNlcn0gZnJvbSAnLi9zY29wZVBhcnNlcic7XHJcbmltcG9ydCB7U2Vzc2lvbn0gZnJvbSAnLi9zZXNzaW9uJztcclxuaW1wb3J0IHtMb2dpbk9wdGlvbnN9IGZyb20gJy4vbG9naW5PcHRpb25zJztcclxuXHJcblxyXG4vKipcclxuICogQ3liZXJ1cyBLZXkgQVBJIHdoaWNoIGFsbG93cyB5b3UgdG8gZG8gYSBkZWxlZ2F0ZSBsb2dpbiB3aXRoIE9wZW5JZCBwcm90b2NvbC5cclxuICpcclxuICogQGNsYXNzIEN5YmVydXNLZXlBUElcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDeWJlcnVzS2V5QVBJIHtcclxuICAgIHByaXZhdGUgX2FwaVVybDogVVJMO1xyXG4gICAgcHJpdmF0ZSBfZ2VvUHJvdmlkZXI6IEdlb1Byb3ZpZGVyO1xyXG4gICAgcHJpdmF0ZSBfZGVsYXlNczogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEN5YmVydXNLZXlBUEkuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaG9zdFVybCBCYXNlIFVSTCBvZiB0aGUgaG9zdCBzZXJ2ZXIsIGUuZy4gYGh0dHBzOi8vYXBpLmN5YmVydXNrZXkuY29tYFxyXG4gICAgICogQHBhcmFtIHtHZW9Qcm92aWRlcn0gW2dlb1Byb3ZpZGVyXSBHZW9sb2NhbGl6YXRpb24gcHJvdmlkZXIuIFVzZSBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbiBsaWtlIGBIVE1MNUdlb1Byb3ZpZGVyYC5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXlNcz02MDBdIERlbGF5IChtcykgYmV0d2VlbiBtYWtpbmcgYW4gQXV0aGVudGljYXRpb24gcmVxdWVzdCBhbmQgYSBzb3VuZCBwbGF5aW5nLlxyXG4gICAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaG9zdFVybDogc3RyaW5nLCBnZW9Qcm92aWRlcj86IEdlb1Byb3ZpZGVyLCBkZWxheU1zOiBudW1iZXIgPSA2MDApIHtcclxuICAgICAgICB0aGlzLl9hcGlVcmwgPSBuZXcgVVJMKCcvYXBpL3YyLycsIGhvc3RVcmwpO1xyXG4gICAgICAgIHRoaXMuX2dlb1Byb3ZpZGVyID0gZ2VvUHJvdmlkZXI7XHJcbiAgICAgICAgdGhpcy5fZGVsYXlNcyA9IGRlbGF5TXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBDeWJlcnVzIEtleSBzZXNzaW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRJZCBQdWJsaWMgY2xpZW50IElEIGdlbmVyYXRlZCBkdXJpbmcgY3JlYXRpbmcgdGhlIGFjY291bnQuXHJcbiAgICAgKiBAcGFyYW0ge0dlb2xvY2F0aW9ufSBbZ2VvXSBHaXZlIGEgdmFsdWUgaWYgeW91IHdhbnQgdG8gcGFzcyBvcHRpb25hbCBnZW9sb2NhdGlvbiBtZWFzdXJlbWVudC5cclxuICAgICAqICAgIEl0IGNhbiBiZSBsYXRlciB1c2UgdG8gY29tcGFyZSBpdCBhZ2FpbnN0IHRoZSBtb2JpbGUncyBtZWFzdXJlbWVudCAoaWYgeW91IGhhdmUgc2V0IGBmYWlsX29uX2dlb19taXNtYXRjaGApLlxyXG4gICAgICogICAgVGhvc2UgbWVhc3VyZW1lbnRzIGNhbiBiZSB1c2VkIGFsc28gdG8gZ2VuZXJhbCBpbXByb3ZlbWVudCBvZiB0aGUgc2VjdXJpdHkuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29yaWdpbl0gVGhlIG9yaWdpbiBkb21haW4gb2YgdGhlIHJlcXVlc3QgYmVpbmcgbWFkZS4gSWYgYG51bGxgIHRoZW4gdGhlIFJlZmVyZXIgaGVhZGVyIHdpbGwgYmUgdXNlZC5cclxuICAgICAqIEB0aHJvd3MgV3JvbmdKc29uRXJyb3IsIE9wZW5BcGlFcnJvciwgUmVzb3VyY2VOb3RGb3VuZEVycm9yLCBPVFBHZW5lcmF0aW9uRXJyb3IsIFVua25vd25FcnJvclxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gVGhlIEN5YmVydXMgS2V5IHNlc3Npb24gaWQuXHJcbiAgICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlU2Vzc2lvbihjbGllbnRJZDogc3RyaW5nLCBvcmlnaW4/OiBzdHJpbmcsIGdlbz86IEdlb2xvY2F0aW9uKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtjbGllbnRfaWQ6IGNsaWVudElkfTtcclxuXHJcbiAgICAgICAgaWYgKGdlbykge1xyXG4gICAgICAgICAgICBkYXRhWydsYXQnXSA9IGdlby5sYXRpdHVkZTtcclxuICAgICAgICAgICAgZGF0YVsnbG5nJ10gPSBnZW8ubG9uZ2l0dWRlO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLl9nZW9Qcm92aWRlcil7XHJcbiAgICAgICAgICAgIGNvbnN0IGdwcyA9IGF3YWl0IHRoaXMuX2dlb1Byb3ZpZGVyLmdldEdlbygpO1xyXG4gICAgICAgICAgICBpZiAoZ3BzKXtcclxuICAgICAgICAgICAgICAgIGRhdGFbJ2xhdCddID0gZ3BzLmxhdGl0dWRlO1xyXG4gICAgICAgICAgICAgICAgZGF0YVsnbG5nJ10gPSBncHMubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3JpZ2luKSB7XHJcbiAgICAgICAgICAgIGRhdGFbJ29yaWdpbiddID0gb3JpZ2luO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogdGhpcy5fZ2V0VXJsRW5jb2RlZEJvZHkoZGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX2dldFVybCgnc2Vzc2lvbnMnKSwgcGFyYW1zKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGpzb24pID0+IGpzb24uZGF0YS5zZXNzaW9uX2lkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBpZiBhdXRoZW50aWNhdGlvbiBzZXJ2ZXIgaXMgYXZhaWxhYmxlXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IGZsYWcgaW5kaWNhdGluZyBpZiB0aGUgYXV0aGVudGljYXRpb24gc2VydmVyIGlzIGF2YWlsYWJsZS5cclxuICAgICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXHJcbiAgICAgKi9cclxuXHJcblxyXG4gICAgcHVibGljIGFzeW5jIGlzT3V0T2ZTZXJ2aWNlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG5cclxuICAgICAgICBpbnRlcmZhY2UgVmVyc2lvblJlc3BvbnNlIHtcclxuICAgICAgICAgICAgdmVyc2lvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBtaW5Nb2JpbGVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIG1heE1vYmlsZVZlcnNpb246IHN0cmluZztcclxuICAgICAgICAgICAgb3V0T2ZTZXJ2aWNlOiBib29sZWFuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLl9nZXRVcmwoYHZlcnNpb25gKSwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKHZlcnNpb25Kc29uOiBWZXJzaW9uUmVzcG9uc2UpID0+IHZlcnNpb25Kc29uLm91dE9mU2VydmljZSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgVVJMIHdpdGggc291bmQgd2l0aCBlbWJlZGRlZCBPVFAuIFlvdSBoYXZlIHRvIGVtaXQgaXQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTZXNzaW9ufSBzZXNzaW9uIEN5YmVydXMgS2V5J3Mgc2Vzc2lvbiBnZW5lcmF0ZWQgYnkgYSB1c2VyIGZvciBhIGxvZ2luLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gc3RyaW5nIHdpdGggdXJsIHRvIHRoZSBzb3VuZC5cclxuICAgICAqIEB0aHJvd3MgUmVzb3VyY2VOb3RGb3VuZEVycm9yXHJcbiAgICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxyXG4gICAgICovXHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRPVFBTb3VuZChzZXNzaW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSAnYXVkaW8vbXBlZyc7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX2dldFVybChgc2Vzc2lvbnMvJHtzZXNzaW9ufWApLCByZXF1ZXN0T3B0aW9ucylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxyXG4gICAgICAgICAgICAudGhlbigoYXJyYXlCdWZmZXIpID0+IG5ldyBCbG9iKFthcnJheUJ1ZmZlcl0sIHt0eXBlOiB0eXBlfSkpXHJcbiAgICAgICAgICAgIC50aGVuKChibG9iKSA9PiB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIE9wZW5JRCdzIEF1dGhlbnRpY2F0aW9uIGVuZHBvaW50IFVSTCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gcHJvY2VzcyB0aGUgYXV0aGVudGljYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHNlc3Npb25JZCB1bmlxdWUgaWQgY3JlYXRlZCBmb3IgdGhlIHNwZWNpZmljIGxvZ2luIGFuZCBjb25uZWN0ZWQgdG8gdGhlIHNwZWNpZmljIG90cFxyXG4gICAgICogQHBhcmFtIHtPcGVuSWRTY29wZVBhcnNlcn0gc2NvcGUgRWFjaCBzY29wZSByZXR1cm5zIGEgc2V0IG9mIHVzZXIgYXR0cmlidXRlcywgd2hpY2ggYXJlIGNhbGxlZCBjbGFpbXMuXHJcbiAgICAgKiAgICBPbmNlIHRoZSB1c2VyIGF1dGhvcml6ZXMgdGhlIHJlcXVlc3RlZCBzY29wZXMsIHRoZSBjbGFpbXMgYXJlIHJldHVybmVkIGluIGFuIElEIFRva2VuLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIFB1YmxpYyBjbGllbnQgSUQgZ2VuZXJhdGVkIGR1cmluZyBjcmVhdGluZyB0aGUgYWNjb3VudC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWRpcmVjdFVyaSBSZWRpcmVjdCBVUkkgdG8gd2hpY2ggdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudC4gSWYgdGhlIHZhbHVlIGlzIG5vdCB3aGl0ZWxpc3RlZCB0aGVuIHRoZSByZXF1ZXN0IHdpbGwgZmFpbC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc3RhdGVdXHJcbiAgICAgKiAgICBSRUNPTU1FTkRFRC4gT3BhcXVlIHZhbHVlIHVzZWQgdG8gbWFpbnRhaW4gc3RhdGUgYmV0d2VlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIGNhbGxiYWNrLiBUeXBpY2FsbHksIENTUkYsIFhTUkYgbWl0aWdhdGlvbiBpcyBkb25lIGJ5IGNyeXB0b2dyYXBoaWNhbGx5IGJpbmRpbmcgdGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIHdpdGggYSBicm93c2VyIGNvb2tpZS5cclxuICAgICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgcHJlc2VydmVzIHNvbWUgc3RhdGUgb2JqZWN0IHNldCBieSB0aGUgY2xpZW50IGluIHRoZSBBdXRoZW50aWNhdGlvbiByZXF1ZXN0IGFuZCBtYWtlcyBpdCBhdmFpbGFibGUgdG8gdGhlIGNsaWVudCBpbiB0aGUgcmVzcG9uc2UuXHJcbiAgICAgKiAgICBJdOKAmXMgdGhhdCB1bmlxdWUgYW5kIG5vbi1ndWVzc2FibGUgdmFsdWUgdGhhdCBhbGxvd3MgeW91IHRvIHByZXZlbnQgdGhlIGF0dGFjayBieSBjb25maXJtaW5nIGlmIHRoZSB2YWx1ZSBjb21pbmcgZnJvbSB0aGUgcmVzcG9uc2UgbWF0Y2hlcyB0aGUgb25lIHlvdSBleHBlY3QgKHRoZSBvbmUgeW91IGdlbmVyYXRlZCB3aGVuIGluaXRpYXRpbmcgdGhlIHJlcXVlc3QpLlxyXG4gICAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBpcyBhIHN0cmluZyBzbyB5b3UgY2FuIGVuY29kZSBhbnkgb3RoZXIgaW5mb3JtYXRpb24gaW4gaXQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW25vbmNlXVxyXG4gICAgICogICAgU3RyaW5nIHZhbHVlIHVzZWQgdG8gYXNzb2NpYXRlIGEgQ2xpZW50IHNlc3Npb24gd2l0aCBhbiBJRCBUb2tlbiwgYW5kIHRvIG1pdGlnYXRlIHJlcGxheSBhdHRhY2tzLlxyXG4gICAgICogICAgVGhlIHZhbHVlIGlzIHBhc3NlZCB0aHJvdWdoIHVubW9kaWZpZWQgZnJvbSB0aGUgQXV0aGVudGljYXRpb24gUmVxdWVzdCB0byB0aGUgSUQgVG9rZW4uXHJcbiAgICAgKiAgICBTdWZmaWNpZW50IGVudHJvcHkgTVVTVCBiZSBwcmVzZW50IGluIHRoZSBub25jZSB2YWx1ZXMgdXNlZCB0byBwcmV2ZW50IGF0dGFja2VycyBmcm9tIGd1ZXNzaW5nIHZhbHVlcy5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcmVzcG9uc2VUeXBlPSdjb2RlJ10gT3BlbklkIHJlc3BvbnNlIHR5cGUuIFRoZSBkZWZhdWx0IGlzIGBjb2RlYCAoQ29kZSBGbG93LCBpbnZvbHZpbmcgdGhlIGZyb250LWNoYW5uZWwgYW5kIGJhY2tjaGFubmVsKS5cclxuICAgICAqIEByZXR1cm5zIE9wZW5JRCdzIEF1dGhlbnRpY2F0aW9uIGVuZHBvaW50IFVSTFxyXG4gICAgICogQHRocm93cyBJbnZhbGlkUmVkaXJlY3RVcmlFcnJvciwgSW52YWxpZENsaWVudEVycm9yLCBSZXNvdXJjZU5vdEZvdW5kRXJyb3JcclxuICAgICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRBdXRoZW50aWNhdGlvbkVuZHBvaW50VXJsKHNlc3Npb25JZDogc3RyaW5nLCBzY29wZTogT3BlbklkU2NvcGVQYXJzZXIsIGNsaWVudElkOiBzdHJpbmcsIHJlZGlyZWN0VXJpOiBzdHJpbmcsIHN0YXRlPzogc3RyaW5nLCBub25jZT86IHN0cmluZywgcmVzcG9uc2VUeXBlID0gJ2NvZGUnKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25faWQ6IHNlc3Npb25JZCxcclxuICAgICAgICAgICAgY2xpZW50X2lkOiBjbGllbnRJZCxcclxuICAgICAgICAgICAgc2NvcGU6IHNjb3BlLmdldFZhbHVlKCksXHJcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogcmVkaXJlY3RVcmksXHJcbiAgICAgICAgICAgIHJlc3BvbnNlX3R5cGU6IHJlc3BvbnNlVHlwZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICBkYXRhWydzdGF0ZSddID0gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub25jZSkge1xyXG4gICAgICAgICAgICBkYXRhWydub25jZSddID0gbm9uY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHRoaXMuX2dldFVybCgnYXV0aGVudGljYXRlJykpO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChwYXJhbWV0ZXJOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKHBhcmFtZXRlck5hbWUsIGRhdGFbcGFyYW1ldGVyTmFtZV0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdXJsLmhyZWY7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmF2aWdhdGVzIHRvIEF1dGhlbnRpY2F0aW9uIEVuZHBvaW50XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIFB1YmxpYyBjbGllbnQgSUQgZ2VuZXJhdGVkIGR1cmluZyBjcmVhdGluZyB0aGUgYWNjb3VudC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWRpcmVjdFVyaSBSZWRpcmVjdCBVUkkgdG8gd2hpY2ggdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudC4gSWYgdGhlIHZhbHVlIGlzIG5vdCB3aGl0ZWxpc3RlZCB0aGVuIHRoZSByZXF1ZXN0IHdpbGwgZmFpbC5cclxuICAgICAqIEBwYXJhbSB7T3BlbklkU2NvcGVQYXJzZXJ9IHNjb3BlIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLlxyXG4gICAgICogICAgT25jZSB0aGUgdXNlciBhdXRob3JpemVzIHRoZSByZXF1ZXN0ZWQgc2NvcGVzLCB0aGUgY2xhaW1zIGFyZSByZXR1cm5lZCBpbiBhbiBJRCBUb2tlbi5cclxuICAgICAqIEBwYXJhbSB7TmF2aWdhdG9yfSBuYXZpZ2F0b3IgQ2xhc3MgZGVzY3JpYmVzIGFuIGFjdGlvbiB0aGF0IHdpbGwgYmUgZG9uZSB0byBBdXRoZW50aWNhdGlvbiBVUkwuIEZvciBicm93c2VycyBpdCB3aWxsIGJlIGEgcGFnZSByZWRpcmVjdGlvbi5cclxuICAgICAqIEBwYXJhbSBzZXNzaW9uIFNlc3Npb24gaWRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JpZ2luXSBUaGUgb3JpZ2luIGRvbWFpbiBvZiB0aGUgcmVxdWVzdCBiZWluZyBtYWRlLiBJZiBgbnVsbGAgdGhlbiB0aGUgUmVmZXJlciBoZWFkZXIgd2lsbCBiZSB1c2VkLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0ZV1cclxuICAgICAqICAgIFJFQ09NTUVOREVELiBPcGFxdWUgdmFsdWUgdXNlZCB0byBtYWludGFpbiBzdGF0ZSBiZXR3ZWVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgY2FsbGJhY2suIFR5cGljYWxseSwgQ1NSRiwgWFNSRiBtaXRpZ2F0aW9uIGlzIGRvbmUgYnkgY3J5cHRvZ3JhcGhpY2FsbHkgYmluZGluZyB0aGUgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgd2l0aCBhIGJyb3dzZXIgY29va2llLlxyXG4gICAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBwcmVzZXJ2ZXMgc29tZSBzdGF0ZSBvYmplY3Qgc2V0IGJ5IHRoZSBjbGllbnQgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgYW5kIG1ha2VzIGl0IGF2YWlsYWJsZSB0byB0aGUgY2xpZW50IGluIHRoZSByZXNwb25zZS5cclxuICAgICAqICAgIEl04oCZcyB0aGF0IHVuaXF1ZSBhbmQgbm9uLWd1ZXNzYWJsZSB2YWx1ZSB0aGF0IGFsbG93cyB5b3UgdG8gcHJldmVudCB0aGUgYXR0YWNrIGJ5IGNvbmZpcm1pbmcgaWYgdGhlIHZhbHVlIGNvbWluZyBmcm9tIHRoZSByZXNwb25zZSBtYXRjaGVzIHRoZSBvbmUgeW91IGV4cGVjdCAodGhlIG9uZSB5b3UgZ2VuZXJhdGVkIHdoZW4gaW5pdGlhdGluZyB0aGUgcmVxdWVzdCkuXHJcbiAgICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIGlzIGEgc3RyaW5nIHNvIHlvdSBjYW4gZW5jb2RlIGFueSBvdGhlciBpbmZvcm1hdGlvbiBpbiBpdC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbm9uY2VdXHJcbiAgICAgKiAgICBTdHJpbmcgdmFsdWUgdXNlZCB0byBhc3NvY2lhdGUgYSBDbGllbnQgc2Vzc2lvbiB3aXRoIGFuIElEIFRva2VuLCBhbmQgdG8gbWl0aWdhdGUgcmVwbGF5IGF0dGFja3MuXHJcbiAgICAgKiAgICBUaGUgdmFsdWUgaXMgcGFzc2VkIHRocm91Z2ggdW5tb2RpZmllZCBmcm9tIHRoZSBBdXRoZW50aWNhdGlvbiBSZXF1ZXN0IHRvIHRoZSBJRCBUb2tlbi5cclxuICAgICAqICAgIFN1ZmZpY2llbnQgZW50cm9weSBNVVNUIGJlIHByZXNlbnQgaW4gdGhlIG5vbmNlIHZhbHVlcyB1c2VkIHRvIHByZXZlbnQgYXR0YWNrZXJzIGZyb20gZ3Vlc3NpbmcgdmFsdWVzLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtyZXNwb25zZVR5cGU9J2NvZGUnXSBPcGVuSWQgcmVzcG9uc2UgdHlwZS4gVGhlIGRlZmF1bHQgaXMgYGNvZGVgIChDb2RlIEZsb3csIGludm9sdmluZyB0aGUgZnJvbnQtY2hhbm5lbCBhbmQgYmFja2NoYW5uZWwpLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbmF2aWdhdGVBdXRoZW50aWNhdGlvbihjbGllbnRJZDogc3RyaW5nLCByZWRpcmVjdFVyaTogc3RyaW5nLCBzY29wZTogT3BlbklkU2NvcGVQYXJzZXIsIG5hdmlnYXRvcjogTmF2aWdhdG9yLCBzZXNzaW9uOiBzdHJpbmcsIG9yaWdpbj86IHN0cmluZywgc3RhdGU/OiBzdHJpbmcsIG5vbmNlPzogc3RyaW5nLCByZXNwb25zZVR5cGUgPSAnY29kZScpIHtcclxuICAgICAgICBjb25zdCBhdXRoZW50aWNhdGVVcmwgPSB0aGlzLmdldEF1dGhlbnRpY2F0aW9uRW5kcG9pbnRVcmwoc2Vzc2lvbiwgc2NvcGUsIGNsaWVudElkLCByZWRpcmVjdFVyaSwgc3RhdGUsIG5vbmNlLCByZXNwb25zZVR5cGUpO1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubmF2aWdhdGUoYXV0aGVudGljYXRlVXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbG9naW5UaHJvdWdoQ3liZXJ1c0tleURhc2hib2FyZChvcHRpb25zOiBMb2dpbk9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIGNsaWVudF9pZDogb3B0aW9ucy5jbGllbnRJZCxcclxuICAgICAgICAgICAgc2NvcGU6IG9wdGlvbnMuc2NvcGUuZ2V0VmFsdWUoKSxcclxuICAgICAgICAgICAgcmVkaXJlY3RfdXJpOiBvcHRpb25zLnJlZGlyZWN0VXJpLFxyXG4gICAgICAgICAgICByZXNwb25zZV90eXBlOiBvcHRpb25zLnJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgc3RhdGU6IG9wdGlvbnMuc3RhdGUsXHJcbiAgICAgICAgICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBvcHRpb25zLmRpc3BsYXkgfHwgJ3BhZ2UnLFxyXG4gICAgICAgICAgICBwcm9tcHQ6IG9wdGlvbnMucHJvbXB0LFxyXG4gICAgICAgICAgICB0aGVtZTogb3B0aW9ucy50aGVtZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBkYXRhWydzdGF0ZSddID0gb3B0aW9ucy5zdGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLm5vbmNlKSB7XHJcbiAgICAgICAgICAgIGRhdGFbJ25vbmNlJ10gPSBvcHRpb25zLm5vbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh0aGlzLl9nZXRVcmwoJ2F1dGhlbnRpY2F0ZScpKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgocGFyYW1ldGVyTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChwYXJhbWV0ZXJOYW1lLCBkYXRhW3BhcmFtZXRlck5hbWVdKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgb3B0aW9ucy5uYXZpZ2F0b3IubmF2aWdhdGUodXJsLmhyZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldFVybChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAobmV3IFVSTChwYXRoLCB0aGlzLl9hcGlVcmwpKS5ocmVmO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldFVybEVuY29kZWRCb2R5KGRhdGE6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLnJlZHVjZTxzdHJpbmdbXT4oKHJlc3VsdDogc3RyaW5nW10sIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuY29kZWRLZXkgPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KTtcclxuICAgICAgICAgICAgY29uc3QgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XHJcblxyXG4gICAgICAgICAgICByZXN1bHQucHVzaChgJHtlbmNvZGVkS2V5fT0ke2VuY29kZWRWYWx1ZX1gKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSwgW10pLmpvaW4oXCImXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdGltZW91dChtczogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImVudW0gRXJyb3JDb2RlIHtcclxuICB1bmRlZmluZWQgPSAxLFxyXG4gIHVua25vd25fZXJyb3IsXHJcbiAgc2VydmVyX2Vycm9yLFxyXG4gIHdyb25nX2pzb24sXHJcbiAgb3BlbmFwaV9lcnJvcixcclxuICByZXNvdXJjZV9ub3RfZm91bmQsXHJcbiAgb3RwX2dlbmVyYXRpb25fZmFpbHVyZSxcclxuICBpbnZhbGlkX3JlZGlyZWN0X3VyaSxcclxuICBpbnZhbGlkX2NsaWVudCxcclxuICB0b29fbWFueV9jYWxsc19lcnJvclxyXG59XHJcblxyXG5jbGFzcyBDeWJlcnVzS2V5RXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgcHJpdmF0ZSBfY29kZTogRXJyb3JDb2RlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2RlOiBrZXlvZiB0eXBlb2YgRXJyb3JDb2RlLCBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpXHJcbiAgICB0aGlzLl9jb2RlID0gRXJyb3JDb2RlW2NvZGVdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvZGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBFcnJvckNvZGVbdGhpcy5fY29kZV07XHJcbiAgfVxyXG5cclxuICBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBVbmtub3duRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKGNvZGU6IGtleW9mIHR5cGVvZiBFcnJvckNvZGUgPSAndW5rbm93bl9lcnJvcicsIG1lc3NhZ2U6IHN0cmluZyA9ICdVbmtub3duIGVycm9yIG9jY3VyZWQuJykge1xyXG4gICAgc3VwZXIoY29kZSwgbWVzc2FnZSlcclxuICB9XHJcbn1cclxuY2xhc3MgVG9vTWFueUNhbGxzRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKGNvZGU6IGtleW9mIHR5cGVvZiBFcnJvckNvZGUgPSAndG9vX21hbnlfY2FsbHNfZXJyb3InLCBtZXNzYWdlOiBzdHJpbmcgPSAnWW91XFwndmUgZG9uZSB0b28gbWFueSBjYWxscy4nKSB7XHJcbiAgICBzdXBlcihjb2RlLCBtZXNzYWdlKVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgTWlzc2luZ1JlZGlyZWN0VXJpIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdpbnZhbGlkX3JlZGlyZWN0X3VyaScsICdNaXNzaW5nIHJlZGlyZWN0aW9uIFVSSS4nKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFdyb25nSnNvbkVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxyXG5jbGFzcyBPcGVuQXBpRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XHJcbmNsYXNzIFJlc291cmNlTm90Rm91bmRFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cclxuY2xhc3MgT1RQR2VuZXJhdGlvbkVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxyXG5jbGFzcyBJbnZhbGlkUmVkaXJlY3RVcmlFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cclxuY2xhc3MgSW52YWxpZENsaWVudEVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxyXG5cclxuY29uc3QgTUFQUElORyA9IHtcclxuICBbRXJyb3JDb2RlLnVuZGVmaW5lZF06IFVua25vd25FcnJvcixcclxuICBbRXJyb3JDb2RlLnVua25vd25fZXJyb3JdOiBVbmtub3duRXJyb3IsXHJcbiAgW0Vycm9yQ29kZS5zZXJ2ZXJfZXJyb3JdOiBVbmtub3duRXJyb3IsXHJcbiAgW0Vycm9yQ29kZS51bmRlZmluZWRdOiBXcm9uZ0pzb25FcnJvcixcclxuICBbRXJyb3JDb2RlLndyb25nX2pzb25dOiBXcm9uZ0pzb25FcnJvcixcclxuICBbRXJyb3JDb2RlLm9wZW5hcGlfZXJyb3JdOiBPcGVuQXBpRXJyb3IsXHJcbiAgW0Vycm9yQ29kZS5yZXNvdXJjZV9ub3RfZm91bmRdOiBSZXNvdXJjZU5vdEZvdW5kRXJyb3IsXHJcbiAgW0Vycm9yQ29kZS5vdHBfZ2VuZXJhdGlvbl9mYWlsdXJlXTogT1RQR2VuZXJhdGlvbkVycm9yLFxyXG4gIFtFcnJvckNvZGUuaW52YWxpZF9yZWRpcmVjdF91cmldOiBJbnZhbGlkUmVkaXJlY3RVcmlFcnJvcixcclxuICBbRXJyb3JDb2RlLmludmFsaWRfY2xpZW50XTogSW52YWxpZENsaWVudEVycm9yLFxyXG4gIFtFcnJvckNvZGUudG9vX21hbnlfY2FsbHNfZXJyb3JdOiBUb29NYW55Q2FsbHNFcnJvclxyXG59XHJcblxyXG5mdW5jdGlvbiBlcnJvckZhY3RvcnkoY29kZToga2V5b2YgdHlwZW9mIEVycm9yQ29kZSwgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgY29uc3QgZW51bV90eXBlID0gRXJyb3JDb2RlW2NvZGVdO1xyXG4gIGNvbnN0IEVycm9yQ29uc3RydWN0b3IgPSBNQVBQSU5HW2VudW1fdHlwZV07XHJcblxyXG4gIHJldHVybiBuZXcgRXJyb3JDb25zdHJ1Y3Rvcihjb2RlLCBtZXNzYWdlKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBlcnJvckZhY3RvcnksXHJcbiAgRXJyb3JDb2RlLFxyXG4gIEN5YmVydXNLZXlFcnJvcixcclxuICBVbmtub3duRXJyb3IsXHJcbiAgVG9vTWFueUNhbGxzRXJyb3IsXHJcbiAgV3JvbmdKc29uRXJyb3IsXHJcbiAgT3BlbkFwaUVycm9yLFxyXG4gIFJlc291cmNlTm90Rm91bmRFcnJvcixcclxuICBPVFBHZW5lcmF0aW9uRXJyb3IsXHJcbiAgTWlzc2luZ1JlZGlyZWN0VXJpXHJcbn07XHJcblxyXG4iLCIvKipcclxuICogQW4gYWJzdHJhY3Rpb24gZm9yIGEgdGFrZW4gZ2VvbG9jYXRpb24gbWVhc3VyZW1lbnQuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIEdlb2xvY2F0aW9uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR2VvbG9jYXRpb24ge1xyXG4gIHByaXZhdGUgX2xhdGl0dWRlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfbG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfYWNjdXJhY3k6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IobGF0aXR1ZGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIsIGFjY3VyYWN5PzogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9sYXRpdHVkZSA9IGxhdGl0dWRlO1xyXG4gICAgdGhpcy5fbG9uZ2l0dWRlID0gbG9uZ2l0dWRlO1xyXG4gICAgdGhpcy5fYWNjdXJhY3kgPSBhY2N1cmFjeTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIGxhdGl0dWRlLlxyXG4gICAqXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgR2VvbG9jYXRpb25cclxuICAgKi9cclxuICBnZXQgbGF0aXR1ZGUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9sYXRpdHVkZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgYSBsb25naXR1ZGUuXHJcbiAgICpcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBHZW9sb2NhdGlvblxyXG4gICAqL1xyXG4gIGdldCBsb25naXR1ZGUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9sb25naXR1ZGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIGFuIGFjY3VyYWN5IG9mIGEgbWVhc3VyZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBHZW9sb2NhdGlvblxyXG4gICAqL1xyXG4gIGdldCBhY2N1cmFjeSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjY3VyYWN5O1xyXG4gIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vc2RrL2FwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2Vycm9ycyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2RrL25hdmlnYXRvci9uYXZpZ2F0b3InO1xyXG5leHBvcnQgKiBmcm9tICcuL3Nkay9uYXZpZ2F0b3IvcmVkaXJlY3ROYXZpZ2F0b3InO1xyXG5leHBvcnQgKiBmcm9tICcuL3Nkay9zY29wZVBhcnNlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2RrL3Nlc3Npb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL3Nkay9nZW9Qcm92aWRlci9nZW8nO1xyXG5leHBvcnQgKiBmcm9tICcuL3Nkay9nZW9Qcm92aWRlci9nZW9Qcm92aWRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2dlb1Byb3ZpZGVyL2h0bWw1R2VvUHJvdmlkZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3Nkay9sb2dpbk9wdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgQ3liZXJ1c0tleUFQSSB9IGZyb20gJy4vc2RrL2FwaSc7XHJcbmV4cG9ydCBkZWZhdWx0IEN5YmVydXNLZXlBUEk7IiwiaW1wb3J0IHsgTWlzc2luZ1JlZGlyZWN0VXJpIH0gZnJvbSAnLi4vZXJyb3JzJztcclxuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3InO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBkZXNjcmliZXMgaG93IE9wZW5JRCdzIEF1dGhlbnRpY2F0aW9uIEVuZHBvaW50IHdpbGwgYmUgaGFuZGxlZC5cclxuICogVGhpcyBjbGFzcyBpcyB0aGlnaHRlbiB0byBhIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvdXIgZm9yIE9wZW5JRCBwcm90b2NvbCAtIGEgcmVkaXJlY3Rpb24uXHJcbiAqIFdoaWNoIG1lYW5zIHRoYXQgeW91ciBVUkwgd2lsbCBiZSB0ZW1wb3JhcmlseSByZXBsYWNlZCBieSB0aGUgQXV0aGVudGljYXRpb24gRW5kcG9pbnRcclxuICogYW5kIHJlcGxhY2VkIGFnYWluIGJ5IGl0cyByZXNwb25zZSAtIEhUVFAgMzAyLiBUaGUgbmV3IGxvY2F0aW9uIHdpbGwgYmUgdGhlIG9uZSB5b3UgZGVmaW5lZCBhcyB5b3VyIGByZWRpcmVjdF91cmlgLlxyXG4gKiBcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgUmVkaXJlY3ROYXZpZ2F0b3JcclxuICogQGltcGxlbWVudHMge05hdmlnYXRvcn1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWRpcmVjdE5hdmlnYXRvciBpbXBsZW1lbnRzIE5hdmlnYXRvciB7XHJcbiAgLyoqXHJcbiAgICogTmF2aWdhdGVzIHRvIHRoZSBnaXZlbiBVUkwuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIEF1dGhlbnRpY2F0aW9uIEVuZHBvaW50IFVSTC5cclxuICAgKiBAdGhyb3dzIE1pc3NpbmdSZWRpcmVjdFVyaVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAqIEBtZW1iZXJvZiBSZWRpcmVjdE5hdmlnYXRvclxyXG4gICAqL1xyXG4gIGFzeW5jIG5hdmlnYXRlKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICB0aHJvdyBuZXcgTWlzc2luZ1JlZGlyZWN0VXJpKClcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG59IiwiXHJcbi8qKlxyXG4gKiBIYW5keSBjbGFzcyB0byBkZWZpbmUgYW4gT3BlbklEJ3Mgc2NvcGUuXHJcbiAqIFNjb3BlcyBhcmUgdXNlZCBieSBhbiBhcHBsaWNhdGlvbiBkdXJpbmcgYXV0aGVudGljYXRpb24gdG8gYXV0aG9yaXplIGFjY2VzcyB0byBhIHVzZXIncyBkZXRhaWxzLFxyXG4gKiBsaWtlIG5hbWUgYW5kIHBpY3R1cmUuIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLiBcclxuICogXHJcbiAqIFlvdSBjYW4gdXNlIGFkZGl0aW9uYWwgdmFsdWVzIGBlbWFpbGAgKGFkZCBhIHVzZXIncyBlbWFpbCBjbGFpbSkgYW5kIGBwcm9maWxlYCAoYWRkIHVzZXIgZmlyc3QgYW5kIGxhc3QgbmFtZSkuXHJcbiAqIFxyXG4gKiBgYGBqYXZhc2NyaXB0XHJcbiAqIGNvbnN0IHNjb3BlUGFyc2VyID0gbmV3IE9wZW5JZFNjb3BlUGFyc2VyKCk7XHJcbiAqIGNvbnN0IHNjb3BlID0gc2NvcGVQYXJzZXIuYWRkRW1haWwoKS5hZGRQcm9maWxlKCkuZ2V0VmFsdWUoKTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIE9wZW5JZFNjb3BlUGFyc2VyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgT3BlbklkU2NvcGVQYXJzZXIge1xyXG4gIHByaXZhdGUgX3Njb3BlOiBBcnJheTxzdHJpbmc+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3Njb3BlID0gWydvcGVuaWQnXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYGVtYWlsYCBzY29wZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAqIEBtZW1iZXJvZiBPcGVuSWRTY29wZVBhcnNlclxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRFbWFpbCgpOiB0aGlzIHtcclxuICAgIGlmICh0aGlzLl9zY29wZS5pbmNsdWRlcygnZW1haWwnKSkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9zY29wZS5wdXNoKCdlbWFpbCcpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBgcHJvZmlsZWAgc2NvcGUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgKiBAbWVtYmVyb2YgT3BlbklkU2NvcGVQYXJzZXJcclxuICAgKi9cclxuICBwdWJsaWMgYWRkUHJvZmlsZSgpOiB0aGlzIHtcclxuICAgIGlmICh0aGlzLl9zY29wZS5pbmNsdWRlcygncHJvZmlsZScpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3Njb3BlLnB1c2goJ3Byb2ZpbGUnKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgZm9ybWF0dGVkIHNjb3BlIHZhbHVlLCBlLmcuIGBvcGVuaWQgZW1haWxgLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgT3BlbklkU2NvcGVQYXJzZXJcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zY29wZS5qb2luKCcgJyk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGludGVyZmFjZSBTZXNzaW9uUmVzcG9uc2Uge1xyXG4gIHNlc3Npb25faWQ6IHN0cmluZztcclxuICBjcmVhdGVkX2F0OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogRGF0YSBjbGFzcyByZXByZXNlbnRpbmcgYSBDeWJlcnVzIEtleSBzZXNzaW9uLlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBTZXNzaW9uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2Vzc2lvbiB7XHJcbiAgLyoqXHJcbiAgICogU2Vzc2lvbidzIHVuaXF1ZSBpZGVudGlmaWVyLiBJdCdzIHZhbGlkIHVwIHRvIDIwcy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIFNlc3Npb25cclxuICAgKi9cclxuICBwdWJsaWMgc2Vzc2lvbklkOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgVVRDIGRhdGUgcmVwcmVzZW50aW5nIGEgZGF0ZSAoYW5kIHRpbWUpIHdoZW4gYSBzZXNzaW9uIGhhcyBiZWVuIGNyZWF0ZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RGF0ZX1cclxuICAgKiBAbWVtYmVyb2YgU2Vzc2lvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBjcmVhdGVkQXQ6IERhdGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGpzb246IFNlc3Npb25SZXNwb25zZSkge1xyXG4gICAgdGhpcy5zZXNzaW9uSWQgPSBqc29uLnNlc3Npb25faWQ7XHJcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IG5ldyBEYXRlKGpzb24uY3JlYXRlZF9hdCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgR2VvbG9jYXRpb24gfSBmcm9tICcuL2dlbyc7XHJcbmltcG9ydCB7IEdlb1Byb3ZpZGVyIH0gZnJvbSAnLi9nZW9Qcm92aWRlcic7XHJcblxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHByb3ZpZGVzIGEgZ2VvbG9jYWxpemF0aW9uIG1lYXN1cmVtZW50LlxyXG4gKiBJdCB1c2VzIGEgSFRNTDUncyBgR2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKClgIG1ldGhvZC5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgSFRNTDVHZW9Qcm92aWRlclxyXG4gKiBAaW1wbGVtZW50cyB7R2VvUHJvdmlkZXJ9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSFRNTDVHZW9Qcm92aWRlciBpbXBsZW1lbnRzIEdlb1Byb3ZpZGVyIHtcclxuICBwcml2YXRlIF9lbmFibGVIaWdoQWNjdXJhY3k6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfbmF2aWdhdG9yOiBOYXZpZ2F0b3I7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgSFRNTDVHZW9Qcm92aWRlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VuYWJsZUhpZ2hBY2N1cmFjeT1mYWxzZV0gIEZvcmNlcyBoaWdoIGFjY3VyYWN5IG9mIHRoZSBnZW9sb2NhdGlvbi4gSXQgbWF5IHRha2UgbG9uZ2VyLlxyXG4gICAqIEBwYXJhbSB7TmF2aWdhdG9yfSBbbmF2aWdhdG9yPXdpbmRvdy5uYXZpZ2F0b3JdXHJcbiAgICogQG1lbWJlcm9mIEhUTUw1R2VvUHJvdmlkZXJcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbmFibGVIaWdoQWNjdXJhY3kgPSBmYWxzZSwgbmF2aWdhdG9yOiBOYXZpZ2F0b3IgPSB3aW5kb3cubmF2aWdhdG9yKSB7XHJcbiAgICB0aGlzLl9lbmFibGVIaWdoQWNjdXJhY3kgPSBlbmFibGVIaWdoQWNjdXJhY3k7XHJcbiAgICB0aGlzLl9uYXZpZ2F0b3IgPSBuYXZpZ2F0b3I7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIGEgZ2VvbG9jYWxpemF0aW9uIG1lYXN1cmVtZW50LlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8R2VvbG9jYXRpb24+fSBHZW9sb2NhbGl6YXRpb24gbWVhc3VyZW1lbnQuXHJcbiAgICogQG1lbWJlcm9mIEhUTUw1R2VvUHJvdmlkZXJcclxuICAgKi9cclxuICBhc3luYyBnZXRHZW8oKTogUHJvbWlzZTxHZW9sb2NhdGlvbj4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgcmVzdWx0ID0gYXdhaXQgdGhpcy5fZ2V0R2VvKHRoaXMuX2VuYWJsZUhpZ2hBY2N1cmFjeSk7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgLy8gRS5nLiB1c2VyIGRpZG4ndCBhZ3JlZSBvbiBnZW9saWNhbGl6YXRpb24uXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgY29vcmRzIH0gPSByZXN1bHQ7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBHZW9sb2NhdGlvbihjb29yZHMubGF0aXR1ZGUsIGNvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5hY2N1cmFjeSk7XHJcbiAgfVxyXG5cclxuICBfZ2V0R2VvKGVuYWJsZUhpZ2hBY2N1cmFjeTogYm9vbGVhbik6IFByb21pc2U8UG9zaXRpb24+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocmVzb2x2ZSwgcmVqZWN0LCB7IGVuYWJsZUhpZ2hBY2N1cmFjeSB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5hdmlnYXRvciB9IGZyb20gJy4vbmF2aWdhdG9yL25hdmlnYXRvcic7XHJcbmltcG9ydCB7IE9wZW5JZFNjb3BlUGFyc2VyIH0gZnJvbSAnLi9zY29wZVBhcnNlcic7XHJcblxyXG5cclxuLyoqXHJcbiAqIExvZ2luIG9wdGlvbnMuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIExvZ2luT3B0aW9uc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExvZ2luT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIFB1YmxpYyBjbGllbnQgSUQgZ2VuZXJhdGVkIGR1cmluZyBjcmVhdGluZyB0aGUgYWNjb3VudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xyXG4gICAqL1xyXG4gIHJlYWRvbmx5IGNsaWVudElkOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWRpcmVjdFVyaSBSZWRpcmVjdCBVUkkgdG8gd2hpY2ggdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudC4gSWYgdGhlIHZhbHVlIGlzIG5vdCB3aGl0ZWxpc3RlZCB0aGVuIHRoZSByZXF1ZXN0IHdpbGwgZmFpbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xyXG4gICAqL1xyXG4gIHJlYWRvbmx5IHJlZGlyZWN0VXJpOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T3BlbklkU2NvcGVQYXJzZXJ9IHNjb3BlIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLlxyXG4gICAqICAgIE9uY2UgdGhlIHVzZXIgYXV0aG9yaXplcyB0aGUgcmVxdWVzdGVkIHNjb3BlcywgdGhlIGNsYWltcyBhcmUgcmV0dXJuZWQgaW4gYW4gSUQgVG9rZW4uXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcclxuICAgKi9cclxuICByZWFkb25seSBzY29wZTogT3BlbklkU2NvcGVQYXJzZXI7XHJcblxyXG4gIC8qKlxyXG4gICogQHBhcmFtIHtOYXZpZ2F0b3J9IG5hdmlnYXRvciBDbGFzcyBkZXNjcmliZXMgYW4gYWN0aW9uIHRoYXQgd2lsbCBiZSBkb25lIHRvIEF1dGhlbnRpY2F0aW9uIFVSTC4gRm9yIGJyb3dzZXJzIGl0IHdpbGwgYmUgYSBwYWdlIHJlZGlyZWN0aW9uLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgbmF2aWdhdG9yOiBOYXZpZ2F0b3I7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JpZ2luXSBUaGUgb3JpZ2luIGRvbWFpbiBvZiB0aGUgcmVxdWVzdCBiZWluZyBtYWRlLiBJZiBgbnVsbGAgdGhlbiB0aGUgUmVmZXJlciBoZWFkZXIgd2lsbCBiZSB1c2VkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgb3JpZ2luOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc3RhdGVdXHJcbiAgICogICAgUkVDT01NRU5ERUQuIE9wYXF1ZSB2YWx1ZSB1c2VkIHRvIG1haW50YWluIHN0YXRlIGJldHdlZW4gdGhlIHJlcXVlc3QgYW5kIHRoZSBjYWxsYmFjay4gVHlwaWNhbGx5LCBDU1JGLCBYU1JGIG1pdGlnYXRpb24gaXMgZG9uZSBieSBjcnlwdG9ncmFwaGljYWxseSBiaW5kaW5nIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciB3aXRoIGEgYnJvd3NlciBjb29raWUuXHJcbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBwcmVzZXJ2ZXMgc29tZSBzdGF0ZSBvYmplY3Qgc2V0IGJ5IHRoZSBjbGllbnQgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgYW5kIG1ha2VzIGl0IGF2YWlsYWJsZSB0byB0aGUgY2xpZW50IGluIHRoZSByZXNwb25zZS5cclxuICAgKiAgICBJdOKAmXMgdGhhdCB1bmlxdWUgYW5kIG5vbi1ndWVzc2FibGUgdmFsdWUgdGhhdCBhbGxvd3MgeW91IHRvIHByZXZlbnQgdGhlIGF0dGFjayBieSBjb25maXJtaW5nIGlmIHRoZSB2YWx1ZSBjb21pbmcgZnJvbSB0aGUgcmVzcG9uc2UgbWF0Y2hlcyB0aGUgb25lIHlvdSBleHBlY3QgKHRoZSBvbmUgeW91IGdlbmVyYXRlZCB3aGVuIGluaXRpYXRpbmcgdGhlIHJlcXVlc3QpLlxyXG4gICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgaXMgYSBzdHJpbmcgc28geW91IGNhbiBlbmNvZGUgYW55IG90aGVyIGluZm9ybWF0aW9uIGluIGl0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgc3RhdGU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub25jZV1cclxuICAgKiAgICBTdHJpbmcgdmFsdWUgdXNlZCB0byBhc3NvY2lhdGUgYSBDbGllbnQgc2Vzc2lvbiB3aXRoIGFuIElEIFRva2VuLCBhbmQgdG8gbWl0aWdhdGUgcmVwbGF5IGF0dGFja3MuXHJcbiAgICogICAgVGhlIHZhbHVlIGlzIHBhc3NlZCB0aHJvdWdoIHVubW9kaWZpZWQgZnJvbSB0aGUgQXV0aGVudGljYXRpb24gUmVxdWVzdCB0byB0aGUgSUQgVG9rZW4uXHJcbiAgICogICAgU3VmZmljaWVudCBlbnRyb3B5IE1VU1QgYmUgcHJlc2VudCBpbiB0aGUgbm9uY2UgdmFsdWVzIHVzZWQgdG8gcHJldmVudCBhdHRhY2tlcnMgZnJvbSBndWVzc2luZyB2YWx1ZXMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcclxuICAgKi9cclxuICByZWFkb25seSBub25jZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3Jlc3BvbnNlVHlwZT0nY29kZSddIE9wZW5JZCByZXNwb25zZSB0eXBlLiBUaGUgZGVmYXVsdCBpcyBgY29kZWAgKENvZGUgRmxvdywgaW52b2x2aW5nIHRoZSBmcm9udC1jaGFubmVsIGFuZCBiYWNrY2hhbm5lbCkuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcclxuICAgKi9cclxuICByZWFkb25seSByZXNwb25zZVR5cGU6IHN0cmluZyA9ICdjb2RlJztcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXkgSXQgc3BlY2lmaWVzIGhvdyB0aGUgQXV0aG9yaXphdGlvbiBTZXJ2ZXIgZGlzcGxheXMgdGhlIGF1dGhlbnRpY2F0aW9uIGFuZCBjb25zZW50IHVzZXIgaW50ZXJmYWNlIHBhZ2VzIHRvIHRoZSBFbmQtVXNlci5cclxuICAgKiAgIERlZmF1bHQgYW5kIHRoZSBvbmx5IHN1cHBvcnRlZCB2YWx1ZSBpcyBgcGFnZWAuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcclxuICAgKi9cclxuICByZWFkb25seSBkaXNwbGF5OiBzdHJpbmcgPSAncGFnZSdcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb21wdCBTcGFjZSBkZWxpbWl0ZWQsIGNhc2Ugc2Vuc2l0aXZlIGxpc3Qgb2Ygc3RyaW5nIHZhbHVlcyB0aGF0IHNwZWNpZmllcyB3aGV0aGVyIHRoZSBBdXRob3JpemF0aW9uIFNlcnZlclxyXG4gICAqICAgcHJvbXB0cyB0aGUgRW5kLVVzZXIgZm9yIHJlYXV0aGVudGljYXRpb24gYW5kIGNvbnNlbnQuIFRoZSBkZWZpbmVkIHZhbHVlcyBhcmU6IGBsb2dpbmAsIGBub25lYC5cclxuICAgKiAgIERlZmF1bHQgaXMgYGxvZ2luLG5vbmVgLiBDYW4ndCBiZSBjaGFuZ2VkIGZvciBub3cuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcclxuICAgKi9cclxuICByZWFkb25seSBwcm9tcHQ6IHN0cmluZyA9ICdsb2dpbixub25lJ1xyXG5cclxuICAvKipcclxuICAgKiBUaGVtZSBvZiB0aGUgbG9naW4gcGFnZSBvZiBDeWJlcnVzIEtleSBEYXNoYm9hcmQuIERlZmF1bHQgaXMgYGRlZmF1bHRgLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgdGhlbWU6IHN0cmluZyA9ICdkZWZhdWx0JztcclxufSJdLCJzb3VyY2VSb290IjoiIn0=