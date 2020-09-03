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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2FwaS50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvZXJyb3JzLnRzIiwid2VicGFjazovL2N5YmVydXNrZXktc2RrLy4vc3JjL3Nkay9nZW9Qcm92aWRlci9nZW8udHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL25hdmlnYXRvci9yZWRpcmVjdE5hdmlnYXRvci50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvc2NvcGVQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL3Nlc3Npb24udHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2dlb1Byb3ZpZGVyL2h0bWw1R2VvUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2xvZ2luT3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3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LFVBQUssR0FBVyxTQUFTLENBQUM7SUFDckMsQ0FBQztDQUFBO0FBbkdELG9DQW1HQyIsImZpbGUiOiJzZGsuZXM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjeWJlcnVza2V5LXNka1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjeWJlcnVza2V5LXNka1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjeWJlcnVza2V5LXNka1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IHtHZW9sb2NhdGlvbn0gZnJvbSAnLi9nZW9Qcm92aWRlci9nZW8nO1xuaW1wb3J0IHtHZW9Qcm92aWRlcn0gZnJvbSAnLi9nZW9Qcm92aWRlci9nZW9Qcm92aWRlcic7XG5pbXBvcnQge05hdmlnYXRvcn0gZnJvbSAnLi9uYXZpZ2F0b3IvbmF2aWdhdG9yJztcbmltcG9ydCB7T3BlbklkU2NvcGVQYXJzZXJ9IGZyb20gJy4vc2NvcGVQYXJzZXInO1xuaW1wb3J0IHtTZXNzaW9ufSBmcm9tICcuL3Nlc3Npb24nO1xuaW1wb3J0IHtMb2dpbk9wdGlvbnN9IGZyb20gJy4vbG9naW5PcHRpb25zJztcblxuXG4vKipcbiAqIEN5YmVydXMgS2V5IEFQSSB3aGljaCBhbGxvd3MgeW91IHRvIGRvIGEgZGVsZWdhdGUgbG9naW4gd2l0aCBPcGVuSWQgcHJvdG9jb2wuXG4gKlxuICogQGNsYXNzIEN5YmVydXNLZXlBUElcbiAqL1xuZXhwb3J0IGNsYXNzIEN5YmVydXNLZXlBUEkge1xuICBwcml2YXRlIF9hcGlVcmw6IFVSTDtcbiAgcHJpdmF0ZSBfZ2VvUHJvdmlkZXI6IEdlb1Byb3ZpZGVyO1xuICBwcml2YXRlIF9jYWNoZWRHZW86IEdlb2xvY2F0aW9uO1xuICBwcml2YXRlIF9kZWxheU1zOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDeWJlcnVzS2V5QVBJLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaG9zdFVybCBCYXNlIFVSTCBvZiB0aGUgaG9zdCBzZXJ2ZXIsIGUuZy4gYGh0dHBzOi8vcHJvZHVjdGlvbi1hcGkuY3liZXJ1c2tleS5jb21gXG4gICAqIEBwYXJhbSB7R2VvUHJvdmlkZXJ9IFtnZW9Qcm92aWRlcl0gR2VvbG9jYWxpemF0aW9uIHByb3ZpZGVyLiBVc2Ugc3BlY2lmaWMgaW1wbGVtZW50YXRpb24gbGlrZSBgSFRNTDVHZW9Qcm92aWRlcmAuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXlNcz02MDBdIERlbGF5IChtcykgYmV0d2VlbiBtYWtpbmcgYW4gQXV0aGVudGljYXRpb24gcmVxdWVzdCBhbmQgYSBzb3VuZCBwbGF5aW5nLlxuICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxuICAgKi9cbiAgY29uc3RydWN0b3IoaG9zdFVybDogc3RyaW5nLCBnZW9Qcm92aWRlcj86IEdlb1Byb3ZpZGVyLCBkZWxheU1zOiBudW1iZXIgPSA2MDApIHtcbiAgICB0aGlzLl9hcGlVcmwgPSBuZXcgVVJMKCcvYXBpL3YyLycsIGhvc3RVcmwpO1xuICAgIHRoaXMuX2dlb1Byb3ZpZGVyID0gZ2VvUHJvdmlkZXI7XG4gICAgdGhpcy5fZGVsYXlNcyA9IGRlbGF5TXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgQ3liZXJ1cyBLZXkgc2Vzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIFB1YmxpYyBjbGllbnQgSUQgZ2VuZXJhdGVkIGR1cmluZyBjcmVhdGluZyB0aGUgYWNjb3VudC5cbiAgICogQHBhcmFtIHtHZW9sb2NhdGlvbn0gW2dlb10gR2l2ZSBhIHZhbHVlIGlmIHlvdSB3YW50IHRvIHBhc3Mgb3B0aW9uYWwgZ2VvbG9jYXRpb24gbWVhc3VyZW1lbnQuXG4gICAqICAgIEl0IGNhbiBiZSBsYXRlciB1c2UgdG8gY29tcGFyZSBpdCBhZ2FpbnN0IHRoZSBtb2JpbGUncyBtZWFzdXJlbWVudCAoaWYgeW91IGhhdmUgc2V0IGBmYWlsX29uX2dlb19taXNtYXRjaGApLlxuICAgKiAgICBUaG9zZSBtZWFzdXJlbWVudHMgY2FuIGJlIHVzZWQgYWxzbyB0byBnZW5lcmFsIGltcHJvdmVtZW50IG9mIHRoZSBzZWN1cml0eS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmlnaW5dIFRoZSBvcmlnaW4gZG9tYWluIG9mIHRoZSByZXF1ZXN0IGJlaW5nIG1hZGUuIElmIGBudWxsYCB0aGVuIHRoZSBSZWZlcmVyIGhlYWRlciB3aWxsIGJlIHVzZWQuXG4gICAqIEB0aHJvd3MgV3JvbmdKc29uRXJyb3IsIE9wZW5BcGlFcnJvciwgUmVzb3VyY2VOb3RGb3VuZEVycm9yLCBPVFBHZW5lcmF0aW9uRXJyb3IsIFVua25vd25FcnJvclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBUaGUgQ3liZXJ1cyBLZXkgc2Vzc2lvbiBpZC5cbiAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcbiAgICovXG4gIHB1YmxpYyBhc3luYyBjcmVhdGVTZXNzaW9uKGNsaWVudElkOiBzdHJpbmcsIG9yaWdpbj86IHN0cmluZyxnZW8/OiBHZW9sb2NhdGlvbik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgZGF0YSA9IHsgY2xpZW50X2lkOiBjbGllbnRJZCB9O1xuXG4gICAgaWYgKGdlbykge1xuICAgICAgICBkYXRhWydsYXQnXSA9IGdlby5sYXRpdHVkZTtcbiAgICAgICAgZGF0YVsnbG5nJ10gPSBnZW8ubG9uZ2l0dWRlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fY2FjaGVkR2VvKSB7XG4gICAgICAgIGRhdGFbJ2xhdCddID0gdGhpcy5fY2FjaGVkR2VvLmxhdGl0dWRlO1xuICAgICAgICBkYXRhWydsbmcnXSA9IHRoaXMuX2NhY2hlZEdlby5sb25naXR1ZGU7XG4gICAgfVxuXG4gICAgaWYgKG9yaWdpbikge1xuICAgICAgZGF0YVsnb3JpZ2luJ10gPSBvcmlnaW47XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogdGhpcy5fZ2V0VXJsRW5jb2RlZEJvZHkoZGF0YSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZldGNoKHRoaXMuX2dldFVybCgnc2Vzc2lvbnMnKSwgcGFyYW1zKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGpzb24pID0+IGpzb24uZGF0YS5zZXNzaW9uX2lkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgVVJMIHdpdGggc291bmQgd2l0aCBlbWJlZGRlZCBPVFAuIFlvdSBoYXZlIHRvIGVtaXQgaXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Nlc3Npb259IHNlc3Npb24gQ3liZXJ1cyBLZXkncyBzZXNzaW9uIGdlbmVyYXRlZCBieSBhIHVzZXIgZm9yIGEgbG9naW4uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gc3RyaW5nIHdpdGggdXJsIHRvIHRoZSBzb3VuZC5cbiAgICAgKiBAdGhyb3dzIFJlc291cmNlTm90Rm91bmRFcnJvclxuICAgICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXG4gICAgICovXG5cblxuICAgIHB1YmxpYyBnZXRPVFBTb3VuZChzZXNzaW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCB0eXBlID0gJ2F1ZGlvL21wZWcnXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiB0eXBlLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5fZ2V0VXJsKGBzZXNzaW9ucy8ke3Nlc3Npb259YCksIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgICAgICAgLnRoZW4oKGFycmF5QnVmZmVyKSA9PiBuZXcgQmxvYihbYXJyYXlCdWZmZXJdLCB7dHlwZTogdHlwZX0pKVxuICAgICAgICAgICAgLnRoZW4oKGJsb2IpID0+IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIE9wZW5JRCdzIEF1dGhlbnRpY2F0aW9uIGVuZHBvaW50IFVSTCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gcHJvY2VzcyB0aGUgYXV0aGVudGljYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2Vzc2lvbklkIHVuaXF1ZSBpZCBjcmVhdGVkIGZvciB0aGUgc3BlY2lmaWMgbG9naW4gYW5kIGNvbm5lY3RlZCB0byB0aGUgc3BlY2lmaWMgb3RwXG4gICAgICogQHBhcmFtIHtPcGVuSWRTY29wZVBhcnNlcn0gc2NvcGUgRWFjaCBzY29wZSByZXR1cm5zIGEgc2V0IG9mIHVzZXIgYXR0cmlidXRlcywgd2hpY2ggYXJlIGNhbGxlZCBjbGFpbXMuXG4gICAgICogICAgT25jZSB0aGUgdXNlciBhdXRob3JpemVzIHRoZSByZXF1ZXN0ZWQgc2NvcGVzLCB0aGUgY2xhaW1zIGFyZSByZXR1cm5lZCBpbiBhbiBJRCBUb2tlbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50SWQgUHVibGljIGNsaWVudCBJRCBnZW5lcmF0ZWQgZHVyaW5nIGNyZWF0aW5nIHRoZSBhY2NvdW50LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWRpcmVjdFVyaSBSZWRpcmVjdCBVUkkgdG8gd2hpY2ggdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudC4gSWYgdGhlIHZhbHVlIGlzIG5vdCB3aGl0ZWxpc3RlZCB0aGVuIHRoZSByZXF1ZXN0IHdpbGwgZmFpbC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3N0YXRlXVxuICAgICAqICAgIFJFQ09NTUVOREVELiBPcGFxdWUgdmFsdWUgdXNlZCB0byBtYWludGFpbiBzdGF0ZSBiZXR3ZWVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgY2FsbGJhY2suIFR5cGljYWxseSwgQ1NSRiwgWFNSRiBtaXRpZ2F0aW9uIGlzIGRvbmUgYnkgY3J5cHRvZ3JhcGhpY2FsbHkgYmluZGluZyB0aGUgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgd2l0aCBhIGJyb3dzZXIgY29va2llLlxuICAgICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgcHJlc2VydmVzIHNvbWUgc3RhdGUgb2JqZWN0IHNldCBieSB0aGUgY2xpZW50IGluIHRoZSBBdXRoZW50aWNhdGlvbiByZXF1ZXN0IGFuZCBtYWtlcyBpdCBhdmFpbGFibGUgdG8gdGhlIGNsaWVudCBpbiB0aGUgcmVzcG9uc2UuXG4gICAgICogICAgSXTigJlzIHRoYXQgdW5pcXVlIGFuZCBub24tZ3Vlc3NhYmxlIHZhbHVlIHRoYXQgYWxsb3dzIHlvdSB0byBwcmV2ZW50IHRoZSBhdHRhY2sgYnkgY29uZmlybWluZyBpZiB0aGUgdmFsdWUgY29taW5nIGZyb20gdGhlIHJlc3BvbnNlIG1hdGNoZXMgdGhlIG9uZSB5b3UgZXhwZWN0ICh0aGUgb25lIHlvdSBnZW5lcmF0ZWQgd2hlbiBpbml0aWF0aW5nIHRoZSByZXF1ZXN0KS5cbiAgICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIGlzIGEgc3RyaW5nIHNvIHlvdSBjYW4gZW5jb2RlIGFueSBvdGhlciBpbmZvcm1hdGlvbiBpbiBpdC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW25vbmNlXVxuICAgICAqICAgIFN0cmluZyB2YWx1ZSB1c2VkIHRvIGFzc29jaWF0ZSBhIENsaWVudCBzZXNzaW9uIHdpdGggYW4gSUQgVG9rZW4sIGFuZCB0byBtaXRpZ2F0ZSByZXBsYXkgYXR0YWNrcy5cbiAgICAgKiAgICBUaGUgdmFsdWUgaXMgcGFzc2VkIHRocm91Z2ggdW5tb2RpZmllZCBmcm9tIHRoZSBBdXRoZW50aWNhdGlvbiBSZXF1ZXN0IHRvIHRoZSBJRCBUb2tlbi5cbiAgICAgKiAgICBTdWZmaWNpZW50IGVudHJvcHkgTVVTVCBiZSBwcmVzZW50IGluIHRoZSBub25jZSB2YWx1ZXMgdXNlZCB0byBwcmV2ZW50IGF0dGFja2VycyBmcm9tIGd1ZXNzaW5nIHZhbHVlcy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Jlc3BvbnNlVHlwZT0nY29kZSddIE9wZW5JZCByZXNwb25zZSB0eXBlLiBUaGUgZGVmYXVsdCBpcyBgY29kZWAgKENvZGUgRmxvdywgaW52b2x2aW5nIHRoZSBmcm9udC1jaGFubmVsIGFuZCBiYWNrY2hhbm5lbCkuXG4gICAgICogQHJldHVybnMgT3BlbklEJ3MgQXV0aGVudGljYXRpb24gZW5kcG9pbnQgVVJMXG4gICAgICogQHRocm93cyBJbnZhbGlkUmVkaXJlY3RVcmlFcnJvciwgSW52YWxpZENsaWVudEVycm9yLCBSZXNvdXJjZU5vdEZvdW5kRXJyb3JcbiAgICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBdXRoZW50aWNhdGlvbkVuZHBvaW50VXJsKHNlc3Npb25JZDogc3RyaW5nLCBzY29wZTogT3BlbklkU2NvcGVQYXJzZXIsIGNsaWVudElkOiBzdHJpbmcsIHJlZGlyZWN0VXJpOiBzdHJpbmcsIHN0YXRlPzogc3RyaW5nLCBub25jZT86IHN0cmluZywgcmVzcG9uc2VUeXBlID0gJ2NvZGUnKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgICAgICAgc2Vzc2lvbl9pZDogc2Vzc2lvbklkLFxuICAgICAgICAgICAgY2xpZW50X2lkOiBjbGllbnRJZCxcbiAgICAgICAgICAgIHNjb3BlOiBzY29wZS5nZXRWYWx1ZSgpLFxuICAgICAgICAgICAgcmVkaXJlY3RfdXJpOiByZWRpcmVjdFVyaSxcbiAgICAgICAgICAgIHJlc3BvbnNlX3R5cGU6IHJlc3BvbnNlVHlwZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgZGF0YVsnc3RhdGUnXSA9IHN0YXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgICAgZGF0YVsnbm9uY2UnXSA9IG5vbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh0aGlzLl9nZXRVcmwoJ2F1dGhlbnRpY2F0ZScpKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChwYXJhbWV0ZXJOYW1lKSA9PiB7XG4gICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChwYXJhbWV0ZXJOYW1lLCBkYXRhW3BhcmFtZXRlck5hbWVdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHVybC5ocmVmO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTmF2aWdhdGVzIHRvIEF1dGhlbnRpY2F0aW9uIEVuZHBvaW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50SWQgUHVibGljIGNsaWVudCBJRCBnZW5lcmF0ZWQgZHVyaW5nIGNyZWF0aW5nIHRoZSBhY2NvdW50LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWRpcmVjdFVyaSBSZWRpcmVjdCBVUkkgdG8gd2hpY2ggdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudC4gSWYgdGhlIHZhbHVlIGlzIG5vdCB3aGl0ZWxpc3RlZCB0aGVuIHRoZSByZXF1ZXN0IHdpbGwgZmFpbC5cbiAgICAgKiBAcGFyYW0ge09wZW5JZFNjb3BlUGFyc2VyfSBzY29wZSBFYWNoIHNjb3BlIHJldHVybnMgYSBzZXQgb2YgdXNlciBhdHRyaWJ1dGVzLCB3aGljaCBhcmUgY2FsbGVkIGNsYWltcy5cbiAgICAgKiAgICBPbmNlIHRoZSB1c2VyIGF1dGhvcml6ZXMgdGhlIHJlcXVlc3RlZCBzY29wZXMsIHRoZSBjbGFpbXMgYXJlIHJldHVybmVkIGluIGFuIElEIFRva2VuLlxuICAgICAqIEBwYXJhbSB7TmF2aWdhdG9yfSBuYXZpZ2F0b3IgQ2xhc3MgZGVzY3JpYmVzIGFuIGFjdGlvbiB0aGF0IHdpbGwgYmUgZG9uZSB0byBBdXRoZW50aWNhdGlvbiBVUkwuIEZvciBicm93c2VycyBpdCB3aWxsIGJlIGEgcGFnZSByZWRpcmVjdGlvbi5cbiAgICAgKiBAcGFyYW0gc2Vzc2lvbiBTZXNzaW9uIGlkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmlnaW5dIFRoZSBvcmlnaW4gZG9tYWluIG9mIHRoZSByZXF1ZXN0IGJlaW5nIG1hZGUuIElmIGBudWxsYCB0aGVuIHRoZSBSZWZlcmVyIGhlYWRlciB3aWxsIGJlIHVzZWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0ZV1cbiAgICAgKiAgICBSRUNPTU1FTkRFRC4gT3BhcXVlIHZhbHVlIHVzZWQgdG8gbWFpbnRhaW4gc3RhdGUgYmV0d2VlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIGNhbGxiYWNrLiBUeXBpY2FsbHksIENTUkYsIFhTUkYgbWl0aWdhdGlvbiBpcyBkb25lIGJ5IGNyeXB0b2dyYXBoaWNhbGx5IGJpbmRpbmcgdGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIHdpdGggYSBicm93c2VyIGNvb2tpZS5cbiAgICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIHByZXNlcnZlcyBzb21lIHN0YXRlIG9iamVjdCBzZXQgYnkgdGhlIGNsaWVudCBpbiB0aGUgQXV0aGVudGljYXRpb24gcmVxdWVzdCBhbmQgbWFrZXMgaXQgYXZhaWxhYmxlIHRvIHRoZSBjbGllbnQgaW4gdGhlIHJlc3BvbnNlLlxuICAgICAqICAgIEl04oCZcyB0aGF0IHVuaXF1ZSBhbmQgbm9uLWd1ZXNzYWJsZSB2YWx1ZSB0aGF0IGFsbG93cyB5b3UgdG8gcHJldmVudCB0aGUgYXR0YWNrIGJ5IGNvbmZpcm1pbmcgaWYgdGhlIHZhbHVlIGNvbWluZyBmcm9tIHRoZSByZXNwb25zZSBtYXRjaGVzIHRoZSBvbmUgeW91IGV4cGVjdCAodGhlIG9uZSB5b3UgZ2VuZXJhdGVkIHdoZW4gaW5pdGlhdGluZyB0aGUgcmVxdWVzdCkuXG4gICAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBpcyBhIHN0cmluZyBzbyB5b3UgY2FuIGVuY29kZSBhbnkgb3RoZXIgaW5mb3JtYXRpb24gaW4gaXQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtub25jZV1cbiAgICAgKiAgICBTdHJpbmcgdmFsdWUgdXNlZCB0byBhc3NvY2lhdGUgYSBDbGllbnQgc2Vzc2lvbiB3aXRoIGFuIElEIFRva2VuLCBhbmQgdG8gbWl0aWdhdGUgcmVwbGF5IGF0dGFja3MuXG4gICAgICogICAgVGhlIHZhbHVlIGlzIHBhc3NlZCB0aHJvdWdoIHVubW9kaWZpZWQgZnJvbSB0aGUgQXV0aGVudGljYXRpb24gUmVxdWVzdCB0byB0aGUgSUQgVG9rZW4uXG4gICAgICogICAgU3VmZmljaWVudCBlbnRyb3B5IE1VU1QgYmUgcHJlc2VudCBpbiB0aGUgbm9uY2UgdmFsdWVzIHVzZWQgdG8gcHJldmVudCBhdHRhY2tlcnMgZnJvbSBndWVzc2luZyB2YWx1ZXMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtyZXNwb25zZVR5cGU9J2NvZGUnXSBPcGVuSWQgcmVzcG9uc2UgdHlwZS4gVGhlIGRlZmF1bHQgaXMgYGNvZGVgIChDb2RlIEZsb3csIGludm9sdmluZyB0aGUgZnJvbnQtY2hhbm5lbCBhbmQgYmFja2NoYW5uZWwpLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXG4gICAgICovXG4gICAgcHVibGljIG5hdmlnYXRlQXV0aGVudGljYXRpb24oY2xpZW50SWQ6IHN0cmluZywgcmVkaXJlY3RVcmk6IHN0cmluZywgc2NvcGU6IE9wZW5JZFNjb3BlUGFyc2VyLCBuYXZpZ2F0b3I6IE5hdmlnYXRvciwgc2Vzc2lvbjogc3RyaW5nLCBvcmlnaW4/OiBzdHJpbmcsIHN0YXRlPzogc3RyaW5nLCBub25jZT86IHN0cmluZywgcmVzcG9uc2VUeXBlID0gJ2NvZGUnKSB7XG4gICAgICAgIGNvbnN0IGF1dGhlbnRpY2F0ZVVybCA9IHRoaXMuZ2V0QXV0aGVudGljYXRpb25FbmRwb2ludFVybChzZXNzaW9uLCBzY29wZSwgY2xpZW50SWQsIHJlZGlyZWN0VXJpLCBzdGF0ZSwgbm9uY2UsIHJlc3BvbnNlVHlwZSk7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubmF2aWdhdGUoYXV0aGVudGljYXRlVXJsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgbG9naW5UaHJvdWdoQ3liZXJ1c0tleURhc2hib2FyZChvcHRpb25zOiBMb2dpbk9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgICAgICAgY2xpZW50X2lkOiBvcHRpb25zLmNsaWVudElkLFxuICAgICAgICAgICAgc2NvcGU6IG9wdGlvbnMuc2NvcGUuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogb3B0aW9ucy5yZWRpcmVjdFVyaSxcbiAgICAgICAgICAgIHJlc3BvbnNlX3R5cGU6IG9wdGlvbnMucmVzcG9uc2VUeXBlLFxuICAgICAgICAgICAgc3RhdGU6IG9wdGlvbnMuc3RhdGUsXG4gICAgICAgICAgICBub25jZTogb3B0aW9ucy5ub25jZSxcbiAgICAgICAgICAgIGRpc3BsYXk6IG9wdGlvbnMuZGlzcGxheSB8fCAncGFnZScsXG4gICAgICAgICAgICBwcm9tcHQ6IG9wdGlvbnMucHJvbXB0LFxuICAgICAgICAgICAgdGhlbWU6IG9wdGlvbnMudGhlbWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhdGUpIHtcbiAgICAgICAgICAgIGRhdGFbJ3N0YXRlJ10gPSBvcHRpb25zLnN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubm9uY2UpIHtcbiAgICAgICAgICAgIGRhdGFbJ25vbmNlJ10gPSBvcHRpb25zLm5vbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh0aGlzLl9nZXRVcmwoJ2F1dGhlbnRpY2F0ZScpKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChwYXJhbWV0ZXJOYW1lKSA9PiB7XG4gICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChwYXJhbWV0ZXJOYW1lLCBkYXRhW3BhcmFtZXRlck5hbWVdKTtcbiAgICAgICAgfSk7XG5cbiAgICBhd2FpdCBvcHRpb25zLm5hdmlnYXRvci5uYXZpZ2F0ZSh1cmwuaHJlZik7XG4gICAgfVxuXG4gIHByaXZhdGUgX2dldFVybChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAobmV3IFVSTChwYXRoLCB0aGlzLl9hcGlVcmwpKS5ocmVmO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VXJsRW5jb2RlZEJvZHkoZGF0YTogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkucmVkdWNlPHN0cmluZ1tdPigocmVzdWx0OiBzdHJpbmdbXSwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGVuY29kZWRLZXkgPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgICAgIGNvbnN0IGVuY29kZWRWYWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pO1xuXG4gICAgICByZXN1bHQucHVzaChgJHtlbmNvZGVkS2V5fT0ke2VuY29kZWRWYWx1ZX1gKTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCBbXSkuam9pbihcIiZcIilcbiAgfVxuXG4gIHByaXZhdGUgX3RpbWVvdXQobXM6IG51bWJlcik6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImVudW0gRXJyb3JDb2RlIHtcbiAgdW5kZWZpbmVkID0gMSxcbiAgdW5rbm93bl9lcnJvcixcbiAgc2VydmVyX2Vycm9yLFxuICB3cm9uZ19qc29uLFxuICBvcGVuYXBpX2Vycm9yLFxuICByZXNvdXJjZV9ub3RfZm91bmQsXG4gIG90cF9nZW5lcmF0aW9uX2ZhaWx1cmUsXG4gIGludmFsaWRfcmVkaXJlY3RfdXJpLFxuICBpbnZhbGlkX2NsaWVudCxcbiAgdG9vX21hbnlfY2FsbHNfZXJyb3Jcbn1cblxuY2xhc3MgQ3liZXJ1c0tleUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBwcml2YXRlIF9jb2RlOiBFcnJvckNvZGU7XG5cbiAgY29uc3RydWN0b3IoY29kZToga2V5b2YgdHlwZW9mIEVycm9yQ29kZSwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobWVzc2FnZSlcbiAgICB0aGlzLl9jb2RlID0gRXJyb3JDb2RlW2NvZGVdO1xuICB9XG5cbiAgZ2V0IGNvZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRXJyb3JDb2RlW3RoaXMuX2NvZGVdO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcbiAgfVxufVxuXG5jbGFzcyBVbmtub3duRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3Ige1xuICBjb25zdHJ1Y3Rvcihjb2RlOiBrZXlvZiB0eXBlb2YgRXJyb3JDb2RlID0gJ3Vua25vd25fZXJyb3InLCBtZXNzYWdlOiBzdHJpbmcgPSAnVW5rbm93biBlcnJvciBvY2N1cmVkLicpIHtcbiAgICBzdXBlcihjb2RlLCBtZXNzYWdlKVxuICB9XG59XG5jbGFzcyBUb29NYW55Q2FsbHNFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGNvZGU6IGtleW9mIHR5cGVvZiBFcnJvckNvZGUgPSAndG9vX21hbnlfY2FsbHNfZXJyb3InLCBtZXNzYWdlOiBzdHJpbmcgPSAnWW91XFwndmUgZG9uZSB0b28gbWFueSBjYWxscy4nKSB7XG4gICAgc3VwZXIoY29kZSwgbWVzc2FnZSlcbiAgfVxufVxuXG5jbGFzcyBNaXNzaW5nUmVkaXJlY3RVcmkgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignaW52YWxpZF9yZWRpcmVjdF91cmknLCAnTWlzc2luZyByZWRpcmVjdGlvbiBVUkkuJyk7XG4gIH1cbn1cblxuY2xhc3MgV3JvbmdKc29uRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XG5jbGFzcyBPcGVuQXBpRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XG5jbGFzcyBSZXNvdXJjZU5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XG5jbGFzcyBPVFBHZW5lcmF0aW9uRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XG5jbGFzcyBJbnZhbGlkUmVkaXJlY3RVcmlFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cbmNsYXNzIEludmFsaWRDbGllbnRFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cblxuY29uc3QgTUFQUElORyA9IHtcbiAgW0Vycm9yQ29kZS51bmRlZmluZWRdOiBVbmtub3duRXJyb3IsXG4gIFtFcnJvckNvZGUudW5rbm93bl9lcnJvcl06IFVua25vd25FcnJvcixcbiAgW0Vycm9yQ29kZS5zZXJ2ZXJfZXJyb3JdOiBVbmtub3duRXJyb3IsXG4gIFtFcnJvckNvZGUudW5kZWZpbmVkXTogV3JvbmdKc29uRXJyb3IsXG4gIFtFcnJvckNvZGUud3JvbmdfanNvbl06IFdyb25nSnNvbkVycm9yLFxuICBbRXJyb3JDb2RlLm9wZW5hcGlfZXJyb3JdOiBPcGVuQXBpRXJyb3IsXG4gIFtFcnJvckNvZGUucmVzb3VyY2Vfbm90X2ZvdW5kXTogUmVzb3VyY2VOb3RGb3VuZEVycm9yLFxuICBbRXJyb3JDb2RlLm90cF9nZW5lcmF0aW9uX2ZhaWx1cmVdOiBPVFBHZW5lcmF0aW9uRXJyb3IsXG4gIFtFcnJvckNvZGUuaW52YWxpZF9yZWRpcmVjdF91cmldOiBJbnZhbGlkUmVkaXJlY3RVcmlFcnJvcixcbiAgW0Vycm9yQ29kZS5pbnZhbGlkX2NsaWVudF06IEludmFsaWRDbGllbnRFcnJvcixcbiAgW0Vycm9yQ29kZS50b29fbWFueV9jYWxsc19lcnJvcl06IFRvb01hbnlDYWxsc0Vycm9yXG59XG5cbmZ1bmN0aW9uIGVycm9yRmFjdG9yeShjb2RlOiBrZXlvZiB0eXBlb2YgRXJyb3JDb2RlLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgY29uc3QgZW51bV90eXBlID0gRXJyb3JDb2RlW2NvZGVdO1xuICBjb25zdCBFcnJvckNvbnN0cnVjdG9yID0gTUFQUElOR1tlbnVtX3R5cGVdO1xuXG4gIHJldHVybiBuZXcgRXJyb3JDb25zdHJ1Y3Rvcihjb2RlLCBtZXNzYWdlKTtcbn1cblxuZXhwb3J0IHtcbiAgZXJyb3JGYWN0b3J5LFxuICBFcnJvckNvZGUsXG4gIEN5YmVydXNLZXlFcnJvcixcbiAgVW5rbm93bkVycm9yLFxuICBUb29NYW55Q2FsbHNFcnJvcixcbiAgV3JvbmdKc29uRXJyb3IsXG4gIE9wZW5BcGlFcnJvcixcbiAgUmVzb3VyY2VOb3RGb3VuZEVycm9yLFxuICBPVFBHZW5lcmF0aW9uRXJyb3IsXG4gIE1pc3NpbmdSZWRpcmVjdFVyaVxufTtcblxuIiwiLyoqXG4gKiBBbiBhYnN0cmFjdGlvbiBmb3IgYSB0YWtlbiBnZW9sb2NhdGlvbiBtZWFzdXJlbWVudC5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgR2VvbG9jYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEdlb2xvY2F0aW9uIHtcbiAgcHJpdmF0ZSBfbGF0aXR1ZGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbG9uZ2l0dWRlOiBudW1iZXI7XG4gIHByaXZhdGUgX2FjY3VyYWN5OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IobGF0aXR1ZGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIsIGFjY3VyYWN5PzogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGF0aXR1ZGUgPSBsYXRpdHVkZTtcbiAgICB0aGlzLl9sb25naXR1ZGUgPSBsb25naXR1ZGU7XG4gICAgdGhpcy5fYWNjdXJhY3kgPSBhY2N1cmFjeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBsYXRpdHVkZS5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBHZW9sb2NhdGlvblxuICAgKi9cbiAgZ2V0IGxhdGl0dWRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdGl0dWRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBsb25naXR1ZGUuXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgR2VvbG9jYXRpb25cbiAgICovXG4gIGdldCBsb25naXR1ZGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbG9uZ2l0dWRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYW4gYWNjdXJhY3kgb2YgYSBtZWFzdXJlbWVudC5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBHZW9sb2NhdGlvblxuICAgKi9cbiAgZ2V0IGFjY3VyYWN5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY3VyYWN5O1xuICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9zZGsvYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2Vycm9ycyc7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9uYXZpZ2F0b3IvbmF2aWdhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL25hdmlnYXRvci9yZWRpcmVjdE5hdmlnYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9zY29wZVBhcnNlcic7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9zZXNzaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2dlb1Byb3ZpZGVyL2dlbyc7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9nZW9Qcm92aWRlci9nZW9Qcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9nZW9Qcm92aWRlci9odG1sNUdlb1Byb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2xvZ2luT3B0aW9ucyc7XG5cbmltcG9ydCB7IEN5YmVydXNLZXlBUEkgfSBmcm9tICcuL3Nkay9hcGknO1xuZXhwb3J0IGRlZmF1bHQgQ3liZXJ1c0tleUFQSTsiLCJpbXBvcnQgeyBNaXNzaW5nUmVkaXJlY3RVcmkgfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3InO1xuXG5cbi8qKlxuICogQ2xhc3MgZGVzY3JpYmVzIGhvdyBPcGVuSUQncyBBdXRoZW50aWNhdGlvbiBFbmRwb2ludCB3aWxsIGJlIGhhbmRsZWQuXG4gKiBUaGlzIGNsYXNzIGlzIHRoaWdodGVuIHRvIGEgZGVmYXVsdCBicm93c2VyIGJlaGF2aW91ciBmb3IgT3BlbklEIHByb3RvY29sIC0gYSByZWRpcmVjdGlvbi5cbiAqIFdoaWNoIG1lYW5zIHRoYXQgeW91ciBVUkwgd2lsbCBiZSB0ZW1wb3JhcmlseSByZXBsYWNlZCBieSB0aGUgQXV0aGVudGljYXRpb24gRW5kcG9pbnRcbiAqIGFuZCByZXBsYWNlZCBhZ2FpbiBieSBpdHMgcmVzcG9uc2UgLSBIVFRQIDMwMi4gVGhlIG5ldyBsb2NhdGlvbiB3aWxsIGJlIHRoZSBvbmUgeW91IGRlZmluZWQgYXMgeW91ciBgcmVkaXJlY3RfdXJpYC5cbiAqIFxuICogQGV4cG9ydFxuICogQGNsYXNzIFJlZGlyZWN0TmF2aWdhdG9yXG4gKiBAaW1wbGVtZW50cyB7TmF2aWdhdG9yfVxuICovXG5leHBvcnQgY2xhc3MgUmVkaXJlY3ROYXZpZ2F0b3IgaW1wbGVtZW50cyBOYXZpZ2F0b3Ige1xuICAvKipcbiAgICogTmF2aWdhdGVzIHRvIHRoZSBnaXZlbiBVUkwuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgQXV0aGVudGljYXRpb24gRW5kcG9pbnQgVVJMLlxuICAgKiBAdGhyb3dzIE1pc3NpbmdSZWRpcmVjdFVyaVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICogQG1lbWJlcm9mIFJlZGlyZWN0TmF2aWdhdG9yXG4gICAqL1xuICBhc3luYyBuYXZpZ2F0ZSh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdXJsKSB7XG4gICAgICB0aHJvdyBuZXcgTWlzc2luZ1JlZGlyZWN0VXJpKClcbiAgICB9XG5cbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxufSIsIlxuLyoqXG4gKiBIYW5keSBjbGFzcyB0byBkZWZpbmUgYW4gT3BlbklEJ3Mgc2NvcGUuXG4gKiBTY29wZXMgYXJlIHVzZWQgYnkgYW4gYXBwbGljYXRpb24gZHVyaW5nIGF1dGhlbnRpY2F0aW9uIHRvIGF1dGhvcml6ZSBhY2Nlc3MgdG8gYSB1c2VyJ3MgZGV0YWlscyxcbiAqIGxpa2UgbmFtZSBhbmQgcGljdHVyZS4gRWFjaCBzY29wZSByZXR1cm5zIGEgc2V0IG9mIHVzZXIgYXR0cmlidXRlcywgd2hpY2ggYXJlIGNhbGxlZCBjbGFpbXMuIFxuICogXG4gKiBZb3UgY2FuIHVzZSBhZGRpdGlvbmFsIHZhbHVlcyBgZW1haWxgIChhZGQgYSB1c2VyJ3MgZW1haWwgY2xhaW0pIGFuZCBgcHJvZmlsZWAgKGFkZCB1c2VyIGZpcnN0IGFuZCBsYXN0IG5hbWUpLlxuICogXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBjb25zdCBzY29wZVBhcnNlciA9IG5ldyBPcGVuSWRTY29wZVBhcnNlcigpO1xuICogY29uc3Qgc2NvcGUgPSBzY29wZVBhcnNlci5hZGRFbWFpbCgpLmFkZFByb2ZpbGUoKS5nZXRWYWx1ZSgpO1xuICogYGBgXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIE9wZW5JZFNjb3BlUGFyc2VyXG4gKi9cbmV4cG9ydCBjbGFzcyBPcGVuSWRTY29wZVBhcnNlciB7XG4gIHByaXZhdGUgX3Njb3BlOiBBcnJheTxzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3Njb3BlID0gWydvcGVuaWQnXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGBlbWFpbGAgc2NvcGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHt0aGlzfVxuICAgKiBAbWVtYmVyb2YgT3BlbklkU2NvcGVQYXJzZXJcbiAgICovXG4gIHB1YmxpYyBhZGRFbWFpbCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5fc2NvcGUuaW5jbHVkZXMoJ2VtYWlsJykpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX3Njb3BlLnB1c2goJ2VtYWlsJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGBwcm9maWxlYCBzY29wZS5cbiAgICpcbiAgICogQHJldHVybnMge3RoaXN9XG4gICAqIEBtZW1iZXJvZiBPcGVuSWRTY29wZVBhcnNlclxuICAgKi9cbiAgcHVibGljIGFkZFByb2ZpbGUoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuX3Njb3BlLmluY2x1ZGVzKCdwcm9maWxlJykpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX3Njb3BlLnB1c2goJ3Byb2ZpbGUnKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgZm9ybWF0dGVkIHNjb3BlIHZhbHVlLCBlLmcuIGBvcGVuaWQgZW1haWxgLlxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgT3BlbklkU2NvcGVQYXJzZXJcbiAgICovXG4gIHB1YmxpYyBnZXRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zY29wZS5qb2luKCcgJyk7XG4gIH1cbn0iLCJleHBvcnQgaW50ZXJmYWNlIFNlc3Npb25SZXNwb25zZSB7XG4gIHNlc3Npb25faWQ6IHN0cmluZztcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xufVxuXG5cbi8qKlxuICogRGF0YSBjbGFzcyByZXByZXNlbnRpbmcgYSBDeWJlcnVzIEtleSBzZXNzaW9uLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBTZXNzaW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uIHtcbiAgLyoqXG4gICAqIFNlc3Npb24ncyB1bmlxdWUgaWRlbnRpZmllci4gSXQncyB2YWxpZCB1cCB0byAyMHMuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBTZXNzaW9uXG4gICAqL1xuICBwdWJsaWMgc2Vzc2lvbklkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgVVRDIGRhdGUgcmVwcmVzZW50aW5nIGEgZGF0ZSAoYW5kIHRpbWUpIHdoZW4gYSBzZXNzaW9uIGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAqXG4gICAqIEB0eXBlIHtEYXRlfVxuICAgKiBAbWVtYmVyb2YgU2Vzc2lvblxuICAgKi9cbiAgcHVibGljIGNyZWF0ZWRBdDogRGF0ZTtcblxuICBjb25zdHJ1Y3Rvcihqc29uOiBTZXNzaW9uUmVzcG9uc2UpIHtcbiAgICB0aGlzLnNlc3Npb25JZCA9IGpzb24uc2Vzc2lvbl9pZDtcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IG5ldyBEYXRlKGpzb24uY3JlYXRlZF9hdCk7XG4gIH1cbn0iLCJpbXBvcnQgeyBHZW9sb2NhdGlvbiB9IGZyb20gJy4vZ2VvJztcbmltcG9ydCB7IEdlb1Byb3ZpZGVyIH0gZnJvbSAnLi9nZW9Qcm92aWRlcic7XG5cblxuLyoqXG4gKiBDbGFzcyBwcm92aWRlcyBhIGdlb2xvY2FsaXphdGlvbiBtZWFzdXJlbWVudC5cbiAqIEl0IHVzZXMgYSBIVE1MNSdzIGBHZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKWAgbWV0aG9kLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBIVE1MNUdlb1Byb3ZpZGVyXG4gKiBAaW1wbGVtZW50cyB7R2VvUHJvdmlkZXJ9XG4gKi9cbmV4cG9ydCBjbGFzcyBIVE1MNUdlb1Byb3ZpZGVyIGltcGxlbWVudHMgR2VvUHJvdmlkZXIge1xuICBwcml2YXRlIF9lbmFibGVIaWdoQWNjdXJhY3k6IGJvb2xlYW47XG4gIHByaXZhdGUgX25hdmlnYXRvcjogTmF2aWdhdG9yO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEhUTUw1R2VvUHJvdmlkZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VuYWJsZUhpZ2hBY2N1cmFjeT1mYWxzZV0gIEZvcmNlcyBoaWdoIGFjY3VyYWN5IG9mIHRoZSBnZW9sb2NhdGlvbi4gSXQgbWF5IHRha2UgbG9uZ2VyLlxuICAgKiBAcGFyYW0ge05hdmlnYXRvcn0gW25hdmlnYXRvcj13aW5kb3cubmF2aWdhdG9yXVxuICAgKiBAbWVtYmVyb2YgSFRNTDVHZW9Qcm92aWRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoZW5hYmxlSGlnaEFjY3VyYWN5ID0gZmFsc2UsIG5hdmlnYXRvcjogTmF2aWdhdG9yID0gd2luZG93Lm5hdmlnYXRvcikge1xuICAgIHRoaXMuX2VuYWJsZUhpZ2hBY2N1cmFjeSA9IGVuYWJsZUhpZ2hBY2N1cmFjeTtcbiAgICB0aGlzLl9uYXZpZ2F0b3IgPSBuYXZpZ2F0b3I7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIGdlb2xvY2FsaXphdGlvbiBtZWFzdXJlbWVudC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8R2VvbG9jYXRpb24+fSBHZW9sb2NhbGl6YXRpb24gbWVhc3VyZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBIVE1MNUdlb1Byb3ZpZGVyXG4gICAqL1xuICBhc3luYyBnZXRHZW8oKTogUHJvbWlzZTxHZW9sb2NhdGlvbj4ge1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IHRoaXMuX2dldEdlbyh0aGlzLl9lbmFibGVIaWdoQWNjdXJhY3kpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gRS5nLiB1c2VyIGRpZG4ndCBhZ3JlZSBvbiBnZW9saWNhbGl6YXRpb24uXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IGNvb3JkcyB9ID0gcmVzdWx0O1xuXG4gICAgcmV0dXJuIG5ldyBHZW9sb2NhdGlvbihjb29yZHMubGF0aXR1ZGUsIGNvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5hY2N1cmFjeSk7XG4gIH1cblxuICBfZ2V0R2VvKGVuYWJsZUhpZ2hBY2N1cmFjeTogYm9vbGVhbik6IFByb21pc2U8UG9zaXRpb24+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYGVuYWJsZUhpZ2hBY2N1cmFjeTogJHtlbmFibGVIaWdoQWNjdXJhY3l9YCk7XG5cbiAgICAgIHRoaXMuX25hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocmVzb2x2ZSwgcmVqZWN0LCB7IGVuYWJsZUhpZ2hBY2N1cmFjeSB9KVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOYXZpZ2F0b3IgfSBmcm9tICcuL25hdmlnYXRvci9uYXZpZ2F0b3InO1xuaW1wb3J0IHsgT3BlbklkU2NvcGVQYXJzZXIgfSBmcm9tICcuL3Njb3BlUGFyc2VyJztcblxuXG4vKipcbiAqIExvZ2luIG9wdGlvbnMuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIExvZ2luT3B0aW9uc1xuICovXG5leHBvcnQgY2xhc3MgTG9naW5PcHRpb25zIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRJZCBQdWJsaWMgY2xpZW50IElEIGdlbmVyYXRlZCBkdXJpbmcgY3JlYXRpbmcgdGhlIGFjY291bnQuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IGNsaWVudElkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWRpcmVjdFVyaSBSZWRpcmVjdCBVUkkgdG8gd2hpY2ggdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudC4gSWYgdGhlIHZhbHVlIGlzIG5vdCB3aGl0ZWxpc3RlZCB0aGVuIHRoZSByZXF1ZXN0IHdpbGwgZmFpbC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgcmVkaXJlY3RVcmk6IHN0cmluZztcblxuICAvKipcbiAgICogQHBhcmFtIHtPcGVuSWRTY29wZVBhcnNlcn0gc2NvcGUgRWFjaCBzY29wZSByZXR1cm5zIGEgc2V0IG9mIHVzZXIgYXR0cmlidXRlcywgd2hpY2ggYXJlIGNhbGxlZCBjbGFpbXMuXG4gICAqICAgIE9uY2UgdGhlIHVzZXIgYXV0aG9yaXplcyB0aGUgcmVxdWVzdGVkIHNjb3BlcywgdGhlIGNsYWltcyBhcmUgcmV0dXJuZWQgaW4gYW4gSUQgVG9rZW4uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IHNjb3BlOiBPcGVuSWRTY29wZVBhcnNlcjtcblxuICAvKipcbiAgKiBAcGFyYW0ge05hdmlnYXRvcn0gbmF2aWdhdG9yIENsYXNzIGRlc2NyaWJlcyBhbiBhY3Rpb24gdGhhdCB3aWxsIGJlIGRvbmUgdG8gQXV0aGVudGljYXRpb24gVVJMLiBGb3IgYnJvd3NlcnMgaXQgd2lsbCBiZSBhIHBhZ2UgcmVkaXJlY3Rpb24uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IG5hdmlnYXRvcjogTmF2aWdhdG9yO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29yaWdpbl0gVGhlIG9yaWdpbiBkb21haW4gb2YgdGhlIHJlcXVlc3QgYmVpbmcgbWFkZS4gSWYgYG51bGxgIHRoZW4gdGhlIFJlZmVyZXIgaGVhZGVyIHdpbGwgYmUgdXNlZC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgb3JpZ2luOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc3RhdGVdXG4gICAqICAgIFJFQ09NTUVOREVELiBPcGFxdWUgdmFsdWUgdXNlZCB0byBtYWludGFpbiBzdGF0ZSBiZXR3ZWVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgY2FsbGJhY2suIFR5cGljYWxseSwgQ1NSRiwgWFNSRiBtaXRpZ2F0aW9uIGlzIGRvbmUgYnkgY3J5cHRvZ3JhcGhpY2FsbHkgYmluZGluZyB0aGUgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgd2l0aCBhIGJyb3dzZXIgY29va2llLlxuICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIHByZXNlcnZlcyBzb21lIHN0YXRlIG9iamVjdCBzZXQgYnkgdGhlIGNsaWVudCBpbiB0aGUgQXV0aGVudGljYXRpb24gcmVxdWVzdCBhbmQgbWFrZXMgaXQgYXZhaWxhYmxlIHRvIHRoZSBjbGllbnQgaW4gdGhlIHJlc3BvbnNlLlxuICAgKiAgICBJdOKAmXMgdGhhdCB1bmlxdWUgYW5kIG5vbi1ndWVzc2FibGUgdmFsdWUgdGhhdCBhbGxvd3MgeW91IHRvIHByZXZlbnQgdGhlIGF0dGFjayBieSBjb25maXJtaW5nIGlmIHRoZSB2YWx1ZSBjb21pbmcgZnJvbSB0aGUgcmVzcG9uc2UgbWF0Y2hlcyB0aGUgb25lIHlvdSBleHBlY3QgKHRoZSBvbmUgeW91IGdlbmVyYXRlZCB3aGVuIGluaXRpYXRpbmcgdGhlIHJlcXVlc3QpLlxuICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIGlzIGEgc3RyaW5nIHNvIHlvdSBjYW4gZW5jb2RlIGFueSBvdGhlciBpbmZvcm1hdGlvbiBpbiBpdC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgc3RhdGU6IHN0cmluZztcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub25jZV1cbiAgICogICAgU3RyaW5nIHZhbHVlIHVzZWQgdG8gYXNzb2NpYXRlIGEgQ2xpZW50IHNlc3Npb24gd2l0aCBhbiBJRCBUb2tlbiwgYW5kIHRvIG1pdGlnYXRlIHJlcGxheSBhdHRhY2tzLlxuICAgKiAgICBUaGUgdmFsdWUgaXMgcGFzc2VkIHRocm91Z2ggdW5tb2RpZmllZCBmcm9tIHRoZSBBdXRoZW50aWNhdGlvbiBSZXF1ZXN0IHRvIHRoZSBJRCBUb2tlbi5cbiAgICogICAgU3VmZmljaWVudCBlbnRyb3B5IE1VU1QgYmUgcHJlc2VudCBpbiB0aGUgbm9uY2UgdmFsdWVzIHVzZWQgdG8gcHJldmVudCBhdHRhY2tlcnMgZnJvbSBndWVzc2luZyB2YWx1ZXMuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IG5vbmNlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbcmVzcG9uc2VUeXBlPSdjb2RlJ10gT3BlbklkIHJlc3BvbnNlIHR5cGUuIFRoZSBkZWZhdWx0IGlzIGBjb2RlYCAoQ29kZSBGbG93LCBpbnZvbHZpbmcgdGhlIGZyb250LWNoYW5uZWwgYW5kIGJhY2tjaGFubmVsKS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSAnY29kZSc7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5IEl0IHNwZWNpZmllcyBob3cgdGhlIEF1dGhvcml6YXRpb24gU2VydmVyIGRpc3BsYXlzIHRoZSBhdXRoZW50aWNhdGlvbiBhbmQgY29uc2VudCB1c2VyIGludGVyZmFjZSBwYWdlcyB0byB0aGUgRW5kLVVzZXIuXG4gICAqICAgRGVmYXVsdCBhbmQgdGhlIG9ubHkgc3VwcG9ydGVkIHZhbHVlIGlzIGBwYWdlYC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgZGlzcGxheTogc3RyaW5nID0gJ3BhZ2UnXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9tcHQgU3BhY2UgZGVsaW1pdGVkLCBjYXNlIHNlbnNpdGl2ZSBsaXN0IG9mIHN0cmluZyB2YWx1ZXMgdGhhdCBzcGVjaWZpZXMgd2hldGhlciB0aGUgQXV0aG9yaXphdGlvbiBTZXJ2ZXJcbiAgICogICBwcm9tcHRzIHRoZSBFbmQtVXNlciBmb3IgcmVhdXRoZW50aWNhdGlvbiBhbmQgY29uc2VudC4gVGhlIGRlZmluZWQgdmFsdWVzIGFyZTogYGxvZ2luYCwgYG5vbmVgLlxuICAgKiAgIERlZmF1bHQgaXMgYGxvZ2luLG5vbmVgLiBDYW4ndCBiZSBjaGFuZ2VkIGZvciBub3cuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IHByb21wdDogc3RyaW5nID0gJ2xvZ2luLG5vbmUnXG5cbiAgLyoqXG4gICAqIFRoZW1lIG9mIHRoZSBsb2dpbiBwYWdlIG9mIEN5YmVydXMgS2V5IERhc2hib2FyZC4gRGVmYXVsdCBpcyBgZGVmYXVsdGAuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IHRoZW1lOiBzdHJpbmcgPSAnZGVmYXVsdCc7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==