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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2FwaS50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvZXJyb3JzLnRzIiwid2VicGFjazovL2N5YmVydXNrZXktc2RrLy4vc3JjL3Nkay9nZW9Qcm92aWRlci9nZW8udHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL25hdmlnYXRvci9yZWRpcmVjdE5hdmlnYXRvci50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvc2NvcGVQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL3Nlc3Npb24udHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2dlb1Byb3ZpZGVyL2h0bWw1R2VvUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2xvZ2luT3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3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Q3JGRDs7Ozs7R0FLRztBQUNILE1BQWEsWUFBWTtJQUF6QjtRQWlFRTs7Ozs7V0FLRztRQUNNLGlCQUFZLEdBQVcsTUFBTSxDQUFDO1FBRXZDOzs7Ozs7V0FNRztRQUNNLFlBQU8sR0FBVyxNQUFNO1FBRWpDOzs7Ozs7O1dBT0c7UUFDTSxXQUFNLEdBQVcsWUFBWTtRQUV0Qzs7Ozs7V0FLRztRQUNNLFVBQUssR0FBVyxTQUFTLENBQUM7SUFDckMsQ0FBQztDQUFBO0FBbkdELG9DQW1HQyIsImZpbGUiOiJzZGsuZXM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjeWJlcnVza2V5LXNka1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjeWJlcnVza2V5LXNka1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjeWJlcnVza2V5LXNka1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IHtHZW9sb2NhdGlvbn0gZnJvbSAnLi9nZW9Qcm92aWRlci9nZW8nO1xyXG5pbXBvcnQge0dlb1Byb3ZpZGVyfSBmcm9tICcuL2dlb1Byb3ZpZGVyL2dlb1Byb3ZpZGVyJztcclxuaW1wb3J0IHtOYXZpZ2F0b3J9IGZyb20gJy4vbmF2aWdhdG9yL25hdmlnYXRvcic7XHJcbmltcG9ydCB7T3BlbklkU2NvcGVQYXJzZXJ9IGZyb20gJy4vc2NvcGVQYXJzZXInO1xyXG5pbXBvcnQge1Nlc3Npb259IGZyb20gJy4vc2Vzc2lvbic7XHJcbmltcG9ydCB7TG9naW5PcHRpb25zfSBmcm9tICcuL2xvZ2luT3B0aW9ucyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEN5YmVydXMgS2V5IEFQSSB3aGljaCBhbGxvd3MgeW91IHRvIGRvIGEgZGVsZWdhdGUgbG9naW4gd2l0aCBPcGVuSWQgcHJvdG9jb2wuXHJcbiAqXHJcbiAqIEBjbGFzcyBDeWJlcnVzS2V5QVBJXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3liZXJ1c0tleUFQSSB7XHJcbiAgICBwcml2YXRlIF9hcGlVcmw6IFVSTDtcclxuICAgIHByaXZhdGUgX2dlb1Byb3ZpZGVyOiBHZW9Qcm92aWRlcjtcclxuICAgIHByaXZhdGUgX2RlbGF5TXM6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDeWJlcnVzS2V5QVBJLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGhvc3RVcmwgQmFzZSBVUkwgb2YgdGhlIGhvc3Qgc2VydmVyLCBlLmcuIGBodHRwczovL2FwaS5jeWJlcnVza2V5LmNvbWBcclxuICAgICAqIEBwYXJhbSB7R2VvUHJvdmlkZXJ9IFtnZW9Qcm92aWRlcl0gR2VvbG9jYWxpemF0aW9uIHByb3ZpZGVyLiBVc2Ugc3BlY2lmaWMgaW1wbGVtZW50YXRpb24gbGlrZSBgSFRNTDVHZW9Qcm92aWRlcmAuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5TXM9NjAwXSBEZWxheSAobXMpIGJldHdlZW4gbWFraW5nIGFuIEF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgYW5kIGEgc291bmQgcGxheWluZy5cclxuICAgICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGhvc3RVcmw6IHN0cmluZywgZ2VvUHJvdmlkZXI/OiBHZW9Qcm92aWRlciwgZGVsYXlNczogbnVtYmVyID0gNjAwKSB7XHJcbiAgICAgICAgdGhpcy5fYXBpVXJsID0gbmV3IFVSTCgnL2FwaS92Mi8nLCBob3N0VXJsKTtcclxuICAgICAgICB0aGlzLl9nZW9Qcm92aWRlciA9IGdlb1Byb3ZpZGVyO1xyXG4gICAgICAgIHRoaXMuX2RlbGF5TXMgPSBkZWxheU1zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgQ3liZXJ1cyBLZXkgc2Vzc2lvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50SWQgUHVibGljIGNsaWVudCBJRCBnZW5lcmF0ZWQgZHVyaW5nIGNyZWF0aW5nIHRoZSBhY2NvdW50LlxyXG4gICAgICogQHBhcmFtIHtHZW9sb2NhdGlvbn0gW2dlb10gR2l2ZSBhIHZhbHVlIGlmIHlvdSB3YW50IHRvIHBhc3Mgb3B0aW9uYWwgZ2VvbG9jYXRpb24gbWVhc3VyZW1lbnQuXHJcbiAgICAgKiAgICBJdCBjYW4gYmUgbGF0ZXIgdXNlIHRvIGNvbXBhcmUgaXQgYWdhaW5zdCB0aGUgbW9iaWxlJ3MgbWVhc3VyZW1lbnQgKGlmIHlvdSBoYXZlIHNldCBgZmFpbF9vbl9nZW9fbWlzbWF0Y2hgKS5cclxuICAgICAqICAgIFRob3NlIG1lYXN1cmVtZW50cyBjYW4gYmUgdXNlZCBhbHNvIHRvIGdlbmVyYWwgaW1wcm92ZW1lbnQgb2YgdGhlIHNlY3VyaXR5LlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmlnaW5dIFRoZSBvcmlnaW4gZG9tYWluIG9mIHRoZSByZXF1ZXN0IGJlaW5nIG1hZGUuIElmIGBudWxsYCB0aGVuIHRoZSBSZWZlcmVyIGhlYWRlciB3aWxsIGJlIHVzZWQuXHJcbiAgICAgKiBAdGhyb3dzIFdyb25nSnNvbkVycm9yLCBPcGVuQXBpRXJyb3IsIFJlc291cmNlTm90Rm91bmRFcnJvciwgT1RQR2VuZXJhdGlvbkVycm9yLCBVbmtub3duRXJyb3JcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFRoZSBDeWJlcnVzIEtleSBzZXNzaW9uIGlkLlxyXG4gICAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZVNlc3Npb24oY2xpZW50SWQ6IHN0cmluZywgb3JpZ2luPzogc3RyaW5nLCBnZW8/OiBHZW9sb2NhdGlvbik6IFByb21pc2U8c3RyaW5nPiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7Y2xpZW50X2lkOiBjbGllbnRJZH07XHJcblxyXG4gICAgICAgIGlmIChnZW8pIHtcclxuICAgICAgICAgICAgZGF0YVsnbGF0J10gPSBnZW8ubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgIGRhdGFbJ2xuZyddID0gZ2VvLmxvbmdpdHVkZTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5fZ2VvUHJvdmlkZXIpe1xyXG4gICAgICAgICAgICBjb25zdCBncHMgPSBhd2FpdCB0aGlzLl9nZW9Qcm92aWRlci5nZXRHZW8oKTtcclxuICAgICAgICAgICAgaWYgKGdwcyl7XHJcbiAgICAgICAgICAgICAgICBkYXRhWydsYXQnXSA9IGdwcy5sYXRpdHVkZTtcclxuICAgICAgICAgICAgICAgIGRhdGFbJ2xuZyddID0gZ3BzLmxvbmdpdHVkZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9yaWdpbikge1xyXG4gICAgICAgICAgICBkYXRhWydvcmlnaW4nXSA9IG9yaWdpbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IHRoaXMuX2dldFVybEVuY29kZWRCb2R5KGRhdGEpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLl9nZXRVcmwoJ3Nlc3Npb25zJyksIHBhcmFtcylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiBqc29uLmRhdGEuc2Vzc2lvbl9pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgYXV0aGVudGljYXRpb24gc2VydmVyIGlzIGF2YWlsYWJsZVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBmbGFnIGluZGljYXRpbmcgaWYgdGhlIGF1dGhlbnRpY2F0aW9uIHNlcnZlciBpcyBhdmFpbGFibGUuXHJcbiAgICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxyXG4gICAgICovXHJcblxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBpc091dE9mU2VydmljZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuXHJcblxyXG4gICAgICAgIGxldCBlcnJQYWdlTXNnID0gKG5ldyBVUkwoZG9jdW1lbnQubG9jYXRpb24uaHJlZikpLnNlYXJjaFBhcmFtcy5nZXQoXCJlcnJvclwiKTtcclxuXHJcbiAgICAgICAgaWYgKGVyclBhZ2VNc2cgIT1udWxsICYmIGVyclBhZ2VNc2cgPT0gXCJvdHBfdGltZW91dF9lcnJvclwiKXtcclxuICAgICAgICAgICAgbGV0IGF1dGhBY3RpdmUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYXV0aF9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGlmIChhdXRoQWN0aXZlICE9bnVsbCAmJiBhdXRoQWN0aXZlID09PSBcInRydWVcIil7XHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aF9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXV0aENvdW50ZXIgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYXV0aF9jb3VudGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGF1dGhDb3VudGVyIT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXV0aENvdW50ZXJWYWx1ZSA9IHBhcnNlSW50KGF1dGhDb3VudGVyLCAxMClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKGF1dGhDb3VudGVyVmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImF1dGhfY291bnRlclwiLCAoYXV0aENvdW50ZXJWYWx1ZSArIDEpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJhdXRoX2NvdW50ZXJcIiwgXCIxXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoX2NvdW50ZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaW50ZXJmYWNlIFZlcnNpb25SZXNwb25zZSB7XHJcbiAgICAgICAgICAgIHZlcnNpb246IHN0cmluZztcclxuICAgICAgICAgICAgbWluTW9iaWxlVmVyc2lvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBtYXhNb2JpbGVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIG91dE9mU2VydmljZTogYm9vbGVhbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5fZ2V0VXJsKGB2ZXJzaW9uYCksIHJlcXVlc3RPcHRpb25zKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKCh2ZXJzaW9uSnNvbjogVmVyc2lvblJlc3BvbnNlKSA9PiB2ZXJzaW9uSnNvbi5vdXRPZlNlcnZpY2UpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIFVSTCB3aXRoIHNvdW5kIHdpdGggZW1iZWRkZWQgT1RQLiBZb3UgaGF2ZSB0byBlbWl0IGl0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U2Vzc2lvbn0gc2Vzc2lvbiBDeWJlcnVzIEtleSdzIHNlc3Npb24gZ2VuZXJhdGVkIGJ5IGEgdXNlciBmb3IgYSBsb2dpbi5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IHN0cmluZyB3aXRoIHVybCB0byB0aGUgc291bmQuXHJcbiAgICAgKiBAdGhyb3dzIFJlc291cmNlTm90Rm91bmRFcnJvclxyXG4gICAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcclxuICAgICAqL1xyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0T1RQU291bmQoc2Vzc2lvbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBjb25zdCB0eXBlID0gJ2F1ZGlvL21wZWcnO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogdHlwZSxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLl9nZXRVcmwoYHNlc3Npb25zLyR7c2Vzc2lvbn1gKSwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSlcclxuICAgICAgICAgICAgLnRoZW4oKGFycmF5QnVmZmVyKSA9PiBuZXcgQmxvYihbYXJyYXlCdWZmZXJdLCB7dHlwZTogdHlwZX0pKVxyXG4gICAgICAgICAgICAudGhlbigoYmxvYikgPT4gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBPcGVuSUQncyBBdXRoZW50aWNhdGlvbiBlbmRwb2ludCBVUkwgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHByb2Nlc3MgdGhlIGF1dGhlbnRpY2F0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBzZXNzaW9uSWQgdW5pcXVlIGlkIGNyZWF0ZWQgZm9yIHRoZSBzcGVjaWZpYyBsb2dpbiBhbmQgY29ubmVjdGVkIHRvIHRoZSBzcGVjaWZpYyBvdHBcclxuICAgICAqIEBwYXJhbSB7T3BlbklkU2NvcGVQYXJzZXJ9IHNjb3BlIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLlxyXG4gICAgICogICAgT25jZSB0aGUgdXNlciBhdXRob3JpemVzIHRoZSByZXF1ZXN0ZWQgc2NvcGVzLCB0aGUgY2xhaW1zIGFyZSByZXR1cm5lZCBpbiBhbiBJRCBUb2tlbi5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRJZCBQdWJsaWMgY2xpZW50IElEIGdlbmVyYXRlZCBkdXJpbmcgY3JlYXRpbmcgdGhlIGFjY291bnQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVkaXJlY3RVcmkgUmVkaXJlY3QgVVJJIHRvIHdoaWNoIHRoZSByZXNwb25zZSB3aWxsIGJlIHNlbnQuIElmIHRoZSB2YWx1ZSBpcyBub3Qgd2hpdGVsaXN0ZWQgdGhlbiB0aGUgcmVxdWVzdCB3aWxsIGZhaWwuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3N0YXRlXVxyXG4gICAgICogICAgUkVDT01NRU5ERUQuIE9wYXF1ZSB2YWx1ZSB1c2VkIHRvIG1haW50YWluIHN0YXRlIGJldHdlZW4gdGhlIHJlcXVlc3QgYW5kIHRoZSBjYWxsYmFjay4gVHlwaWNhbGx5LCBDU1JGLCBYU1JGIG1pdGlnYXRpb24gaXMgZG9uZSBieSBjcnlwdG9ncmFwaGljYWxseSBiaW5kaW5nIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciB3aXRoIGEgYnJvd3NlciBjb29raWUuXHJcbiAgICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIHByZXNlcnZlcyBzb21lIHN0YXRlIG9iamVjdCBzZXQgYnkgdGhlIGNsaWVudCBpbiB0aGUgQXV0aGVudGljYXRpb24gcmVxdWVzdCBhbmQgbWFrZXMgaXQgYXZhaWxhYmxlIHRvIHRoZSBjbGllbnQgaW4gdGhlIHJlc3BvbnNlLlxyXG4gICAgICogICAgSXTigJlzIHRoYXQgdW5pcXVlIGFuZCBub24tZ3Vlc3NhYmxlIHZhbHVlIHRoYXQgYWxsb3dzIHlvdSB0byBwcmV2ZW50IHRoZSBhdHRhY2sgYnkgY29uZmlybWluZyBpZiB0aGUgdmFsdWUgY29taW5nIGZyb20gdGhlIHJlc3BvbnNlIG1hdGNoZXMgdGhlIG9uZSB5b3UgZXhwZWN0ICh0aGUgb25lIHlvdSBnZW5lcmF0ZWQgd2hlbiBpbml0aWF0aW5nIHRoZSByZXF1ZXN0KS5cclxuICAgICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgaXMgYSBzdHJpbmcgc28geW91IGNhbiBlbmNvZGUgYW55IG90aGVyIGluZm9ybWF0aW9uIGluIGl0LlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtub25jZV1cclxuICAgICAqICAgIFN0cmluZyB2YWx1ZSB1c2VkIHRvIGFzc29jaWF0ZSBhIENsaWVudCBzZXNzaW9uIHdpdGggYW4gSUQgVG9rZW4sIGFuZCB0byBtaXRpZ2F0ZSByZXBsYXkgYXR0YWNrcy5cclxuICAgICAqICAgIFRoZSB2YWx1ZSBpcyBwYXNzZWQgdGhyb3VnaCB1bm1vZGlmaWVkIGZyb20gdGhlIEF1dGhlbnRpY2F0aW9uIFJlcXVlc3QgdG8gdGhlIElEIFRva2VuLlxyXG4gICAgICogICAgU3VmZmljaWVudCBlbnRyb3B5IE1VU1QgYmUgcHJlc2VudCBpbiB0aGUgbm9uY2UgdmFsdWVzIHVzZWQgdG8gcHJldmVudCBhdHRhY2tlcnMgZnJvbSBndWVzc2luZyB2YWx1ZXMuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Jlc3BvbnNlVHlwZT0nY29kZSddIE9wZW5JZCByZXNwb25zZSB0eXBlLiBUaGUgZGVmYXVsdCBpcyBgY29kZWAgKENvZGUgRmxvdywgaW52b2x2aW5nIHRoZSBmcm9udC1jaGFubmVsIGFuZCBiYWNrY2hhbm5lbCkuXHJcbiAgICAgKiBAcmV0dXJucyBPcGVuSUQncyBBdXRoZW50aWNhdGlvbiBlbmRwb2ludCBVUkxcclxuICAgICAqIEB0aHJvd3MgSW52YWxpZFJlZGlyZWN0VXJpRXJyb3IsIEludmFsaWRDbGllbnRFcnJvciwgUmVzb3VyY2VOb3RGb3VuZEVycm9yXHJcbiAgICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QXV0aGVudGljYXRpb25FbmRwb2ludFVybChzZXNzaW9uSWQ6IHN0cmluZywgc2NvcGU6IE9wZW5JZFNjb3BlUGFyc2VyLCBjbGllbnRJZDogc3RyaW5nLCByZWRpcmVjdFVyaTogc3RyaW5nLCBzdGF0ZT86IHN0cmluZywgbm9uY2U/OiBzdHJpbmcsIHJlc3BvbnNlVHlwZSA9ICdjb2RlJyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgZGF0YTogYW55ID0ge1xyXG4gICAgICAgICAgICBzZXNzaW9uX2lkOiBzZXNzaW9uSWQsXHJcbiAgICAgICAgICAgIGNsaWVudF9pZDogY2xpZW50SWQsXHJcbiAgICAgICAgICAgIHNjb3BlOiBzY29wZS5nZXRWYWx1ZSgpLFxyXG4gICAgICAgICAgICByZWRpcmVjdF91cmk6IHJlZGlyZWN0VXJpLFxyXG4gICAgICAgICAgICByZXNwb25zZV90eXBlOiByZXNwb25zZVR5cGVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgZGF0YVsnc3RhdGUnXSA9IHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9uY2UpIHtcclxuICAgICAgICAgICAgZGF0YVsnbm9uY2UnXSA9IG5vbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh0aGlzLl9nZXRVcmwoJ2F1dGhlbnRpY2F0ZScpKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgocGFyYW1ldGVyTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChwYXJhbWV0ZXJOYW1lLCBkYXRhW3BhcmFtZXRlck5hbWVdKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVybC5ocmVmO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5hdmlnYXRlcyB0byBBdXRoZW50aWNhdGlvbiBFbmRwb2ludFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRJZCBQdWJsaWMgY2xpZW50IElEIGdlbmVyYXRlZCBkdXJpbmcgY3JlYXRpbmcgdGhlIGFjY291bnQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVkaXJlY3RVcmkgUmVkaXJlY3QgVVJJIHRvIHdoaWNoIHRoZSByZXNwb25zZSB3aWxsIGJlIHNlbnQuIElmIHRoZSB2YWx1ZSBpcyBub3Qgd2hpdGVsaXN0ZWQgdGhlbiB0aGUgcmVxdWVzdCB3aWxsIGZhaWwuXHJcbiAgICAgKiBAcGFyYW0ge09wZW5JZFNjb3BlUGFyc2VyfSBzY29wZSBFYWNoIHNjb3BlIHJldHVybnMgYSBzZXQgb2YgdXNlciBhdHRyaWJ1dGVzLCB3aGljaCBhcmUgY2FsbGVkIGNsYWltcy5cclxuICAgICAqICAgIE9uY2UgdGhlIHVzZXIgYXV0aG9yaXplcyB0aGUgcmVxdWVzdGVkIHNjb3BlcywgdGhlIGNsYWltcyBhcmUgcmV0dXJuZWQgaW4gYW4gSUQgVG9rZW4uXHJcbiAgICAgKiBAcGFyYW0ge05hdmlnYXRvcn0gbmF2aWdhdG9yIENsYXNzIGRlc2NyaWJlcyBhbiBhY3Rpb24gdGhhdCB3aWxsIGJlIGRvbmUgdG8gQXV0aGVudGljYXRpb24gVVJMLiBGb3IgYnJvd3NlcnMgaXQgd2lsbCBiZSBhIHBhZ2UgcmVkaXJlY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gc2Vzc2lvbiBTZXNzaW9uIGlkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29yaWdpbl0gVGhlIG9yaWdpbiBkb21haW4gb2YgdGhlIHJlcXVlc3QgYmVpbmcgbWFkZS4gSWYgYG51bGxgIHRoZW4gdGhlIFJlZmVyZXIgaGVhZGVyIHdpbGwgYmUgdXNlZC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc3RhdGVdXHJcbiAgICAgKiAgICBSRUNPTU1FTkRFRC4gT3BhcXVlIHZhbHVlIHVzZWQgdG8gbWFpbnRhaW4gc3RhdGUgYmV0d2VlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIGNhbGxiYWNrLiBUeXBpY2FsbHksIENTUkYsIFhTUkYgbWl0aWdhdGlvbiBpcyBkb25lIGJ5IGNyeXB0b2dyYXBoaWNhbGx5IGJpbmRpbmcgdGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIHdpdGggYSBicm93c2VyIGNvb2tpZS5cclxuICAgICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgcHJlc2VydmVzIHNvbWUgc3RhdGUgb2JqZWN0IHNldCBieSB0aGUgY2xpZW50IGluIHRoZSBBdXRoZW50aWNhdGlvbiByZXF1ZXN0IGFuZCBtYWtlcyBpdCBhdmFpbGFibGUgdG8gdGhlIGNsaWVudCBpbiB0aGUgcmVzcG9uc2UuXHJcbiAgICAgKiAgICBJdOKAmXMgdGhhdCB1bmlxdWUgYW5kIG5vbi1ndWVzc2FibGUgdmFsdWUgdGhhdCBhbGxvd3MgeW91IHRvIHByZXZlbnQgdGhlIGF0dGFjayBieSBjb25maXJtaW5nIGlmIHRoZSB2YWx1ZSBjb21pbmcgZnJvbSB0aGUgcmVzcG9uc2UgbWF0Y2hlcyB0aGUgb25lIHlvdSBleHBlY3QgKHRoZSBvbmUgeW91IGdlbmVyYXRlZCB3aGVuIGluaXRpYXRpbmcgdGhlIHJlcXVlc3QpLlxyXG4gICAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBpcyBhIHN0cmluZyBzbyB5b3UgY2FuIGVuY29kZSBhbnkgb3RoZXIgaW5mb3JtYXRpb24gaW4gaXQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW25vbmNlXVxyXG4gICAgICogICAgU3RyaW5nIHZhbHVlIHVzZWQgdG8gYXNzb2NpYXRlIGEgQ2xpZW50IHNlc3Npb24gd2l0aCBhbiBJRCBUb2tlbiwgYW5kIHRvIG1pdGlnYXRlIHJlcGxheSBhdHRhY2tzLlxyXG4gICAgICogICAgVGhlIHZhbHVlIGlzIHBhc3NlZCB0aHJvdWdoIHVubW9kaWZpZWQgZnJvbSB0aGUgQXV0aGVudGljYXRpb24gUmVxdWVzdCB0byB0aGUgSUQgVG9rZW4uXHJcbiAgICAgKiAgICBTdWZmaWNpZW50IGVudHJvcHkgTVVTVCBiZSBwcmVzZW50IGluIHRoZSBub25jZSB2YWx1ZXMgdXNlZCB0byBwcmV2ZW50IGF0dGFja2VycyBmcm9tIGd1ZXNzaW5nIHZhbHVlcy5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcmVzcG9uc2VUeXBlPSdjb2RlJ10gT3BlbklkIHJlc3BvbnNlIHR5cGUuIFRoZSBkZWZhdWx0IGlzIGBjb2RlYCAoQ29kZSBGbG93LCBpbnZvbHZpbmcgdGhlIGZyb250LWNoYW5uZWwgYW5kIGJhY2tjaGFubmVsKS5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcclxuICAgICAqL1xyXG4gICAgcHVibGljIG5hdmlnYXRlQXV0aGVudGljYXRpb24oY2xpZW50SWQ6IHN0cmluZywgcmVkaXJlY3RVcmk6IHN0cmluZywgc2NvcGU6IE9wZW5JZFNjb3BlUGFyc2VyLCBuYXZpZ2F0b3I6IE5hdmlnYXRvciwgc2Vzc2lvbjogc3RyaW5nLCBvcmlnaW4/OiBzdHJpbmcsIHN0YXRlPzogc3RyaW5nLCBub25jZT86IHN0cmluZywgcmVzcG9uc2VUeXBlID0gJ2NvZGUnKSB7XHJcbiAgICAgICAgY29uc3QgYXV0aGVudGljYXRlVXJsID0gdGhpcy5nZXRBdXRoZW50aWNhdGlvbkVuZHBvaW50VXJsKHNlc3Npb24sIHNjb3BlLCBjbGllbnRJZCwgcmVkaXJlY3RVcmksIHN0YXRlLCBub25jZSwgcmVzcG9uc2VUeXBlKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYXV0aF9hY3RpdmVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubmF2aWdhdGUoYXV0aGVudGljYXRlVXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbG9naW5UaHJvdWdoQ3liZXJ1c0tleURhc2hib2FyZChvcHRpb25zOiBMb2dpbk9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIGNsaWVudF9pZDogb3B0aW9ucy5jbGllbnRJZCxcclxuICAgICAgICAgICAgc2NvcGU6IG9wdGlvbnMuc2NvcGUuZ2V0VmFsdWUoKSxcclxuICAgICAgICAgICAgcmVkaXJlY3RfdXJpOiBvcHRpb25zLnJlZGlyZWN0VXJpLFxyXG4gICAgICAgICAgICByZXNwb25zZV90eXBlOiBvcHRpb25zLnJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgc3RhdGU6IG9wdGlvbnMuc3RhdGUsXHJcbiAgICAgICAgICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBvcHRpb25zLmRpc3BsYXkgfHwgJ3BhZ2UnLFxyXG4gICAgICAgICAgICBwcm9tcHQ6IG9wdGlvbnMucHJvbXB0LFxyXG4gICAgICAgICAgICB0aGVtZTogb3B0aW9ucy50aGVtZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBkYXRhWydzdGF0ZSddID0gb3B0aW9ucy5zdGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLm5vbmNlKSB7XHJcbiAgICAgICAgICAgIGRhdGFbJ25vbmNlJ10gPSBvcHRpb25zLm5vbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh0aGlzLl9nZXRVcmwoJ2F1dGhlbnRpY2F0ZScpKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgocGFyYW1ldGVyTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChwYXJhbWV0ZXJOYW1lLCBkYXRhW3BhcmFtZXRlck5hbWVdKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgb3B0aW9ucy5uYXZpZ2F0b3IubmF2aWdhdGUodXJsLmhyZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldFVybChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAobmV3IFVSTChwYXRoLCB0aGlzLl9hcGlVcmwpKS5ocmVmO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldFVybEVuY29kZWRCb2R5KGRhdGE6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLnJlZHVjZTxzdHJpbmdbXT4oKHJlc3VsdDogc3RyaW5nW10sIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuY29kZWRLZXkgPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KTtcclxuICAgICAgICAgICAgY29uc3QgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XHJcblxyXG4gICAgICAgICAgICByZXN1bHQucHVzaChgJHtlbmNvZGVkS2V5fT0ke2VuY29kZWRWYWx1ZX1gKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSwgW10pLmpvaW4oXCImXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdGltZW91dChtczogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImVudW0gRXJyb3JDb2RlIHtcclxuICB1bmRlZmluZWQgPSAxLFxyXG4gIHVua25vd25fZXJyb3IsXHJcbiAgc2VydmVyX2Vycm9yLFxyXG4gIHdyb25nX2pzb24sXHJcbiAgb3BlbmFwaV9lcnJvcixcclxuICByZXNvdXJjZV9ub3RfZm91bmQsXHJcbiAgb3RwX2dlbmVyYXRpb25fZmFpbHVyZSxcclxuICBpbnZhbGlkX3JlZGlyZWN0X3VyaSxcclxuICBpbnZhbGlkX2NsaWVudCxcclxuICB0b29fbWFueV9jYWxsc19lcnJvclxyXG59XHJcblxyXG5jbGFzcyBDeWJlcnVzS2V5RXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgcHJpdmF0ZSBfY29kZTogRXJyb3JDb2RlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2RlOiBrZXlvZiB0eXBlb2YgRXJyb3JDb2RlLCBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpXHJcbiAgICB0aGlzLl9jb2RlID0gRXJyb3JDb2RlW2NvZGVdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvZGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBFcnJvckNvZGVbdGhpcy5fY29kZV07XHJcbiAgfVxyXG5cclxuICBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBVbmtub3duRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKGNvZGU6IGtleW9mIHR5cGVvZiBFcnJvckNvZGUgPSAndW5rbm93bl9lcnJvcicsIG1lc3NhZ2U6IHN0cmluZyA9ICdVbmtub3duIGVycm9yIG9jY3VyZWQuJykge1xyXG4gICAgc3VwZXIoY29kZSwgbWVzc2FnZSlcclxuICB9XHJcbn1cclxuY2xhc3MgVG9vTWFueUNhbGxzRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKGNvZGU6IGtleW9mIHR5cGVvZiBFcnJvckNvZGUgPSAndG9vX21hbnlfY2FsbHNfZXJyb3InLCBtZXNzYWdlOiBzdHJpbmcgPSAnWW91XFwndmUgZG9uZSB0b28gbWFueSBjYWxscy4nKSB7XHJcbiAgICBzdXBlcihjb2RlLCBtZXNzYWdlKVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgTWlzc2luZ1JlZGlyZWN0VXJpIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdpbnZhbGlkX3JlZGlyZWN0X3VyaScsICdNaXNzaW5nIHJlZGlyZWN0aW9uIFVSSS4nKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFdyb25nSnNvbkVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxyXG5jbGFzcyBPcGVuQXBpRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XHJcbmNsYXNzIFJlc291cmNlTm90Rm91bmRFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cclxuY2xhc3MgT1RQR2VuZXJhdGlvbkVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxyXG5jbGFzcyBJbnZhbGlkUmVkaXJlY3RVcmlFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cclxuY2xhc3MgSW52YWxpZENsaWVudEVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxyXG5cclxuY29uc3QgTUFQUElORyA9IHtcclxuICBbRXJyb3JDb2RlLnVuZGVmaW5lZF06IFVua25vd25FcnJvcixcclxuICBbRXJyb3JDb2RlLnVua25vd25fZXJyb3JdOiBVbmtub3duRXJyb3IsXHJcbiAgW0Vycm9yQ29kZS5zZXJ2ZXJfZXJyb3JdOiBVbmtub3duRXJyb3IsXHJcbiAgW0Vycm9yQ29kZS51bmRlZmluZWRdOiBXcm9uZ0pzb25FcnJvcixcclxuICBbRXJyb3JDb2RlLndyb25nX2pzb25dOiBXcm9uZ0pzb25FcnJvcixcclxuICBbRXJyb3JDb2RlLm9wZW5hcGlfZXJyb3JdOiBPcGVuQXBpRXJyb3IsXHJcbiAgW0Vycm9yQ29kZS5yZXNvdXJjZV9ub3RfZm91bmRdOiBSZXNvdXJjZU5vdEZvdW5kRXJyb3IsXHJcbiAgW0Vycm9yQ29kZS5vdHBfZ2VuZXJhdGlvbl9mYWlsdXJlXTogT1RQR2VuZXJhdGlvbkVycm9yLFxyXG4gIFtFcnJvckNvZGUuaW52YWxpZF9yZWRpcmVjdF91cmldOiBJbnZhbGlkUmVkaXJlY3RVcmlFcnJvcixcclxuICBbRXJyb3JDb2RlLmludmFsaWRfY2xpZW50XTogSW52YWxpZENsaWVudEVycm9yLFxyXG4gIFtFcnJvckNvZGUudG9vX21hbnlfY2FsbHNfZXJyb3JdOiBUb29NYW55Q2FsbHNFcnJvclxyXG59XHJcblxyXG5mdW5jdGlvbiBlcnJvckZhY3RvcnkoY29kZToga2V5b2YgdHlwZW9mIEVycm9yQ29kZSwgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgY29uc3QgZW51bV90eXBlID0gRXJyb3JDb2RlW2NvZGVdO1xyXG4gIGNvbnN0IEVycm9yQ29uc3RydWN0b3IgPSBNQVBQSU5HW2VudW1fdHlwZV07XHJcblxyXG4gIHJldHVybiBuZXcgRXJyb3JDb25zdHJ1Y3Rvcihjb2RlLCBtZXNzYWdlKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBlcnJvckZhY3RvcnksXHJcbiAgRXJyb3JDb2RlLFxyXG4gIEN5YmVydXNLZXlFcnJvcixcclxuICBVbmtub3duRXJyb3IsXHJcbiAgVG9vTWFueUNhbGxzRXJyb3IsXHJcbiAgV3JvbmdKc29uRXJyb3IsXHJcbiAgT3BlbkFwaUVycm9yLFxyXG4gIFJlc291cmNlTm90Rm91bmRFcnJvcixcclxuICBPVFBHZW5lcmF0aW9uRXJyb3IsXHJcbiAgTWlzc2luZ1JlZGlyZWN0VXJpXHJcbn07XHJcblxyXG4iLCIvKipcclxuICogQW4gYWJzdHJhY3Rpb24gZm9yIGEgdGFrZW4gZ2VvbG9jYXRpb24gbWVhc3VyZW1lbnQuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIEdlb2xvY2F0aW9uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR2VvbG9jYXRpb24ge1xyXG4gIHByaXZhdGUgX2xhdGl0dWRlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfbG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfYWNjdXJhY3k6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IobGF0aXR1ZGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIsIGFjY3VyYWN5PzogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9sYXRpdHVkZSA9IGxhdGl0dWRlO1xyXG4gICAgdGhpcy5fbG9uZ2l0dWRlID0gbG9uZ2l0dWRlO1xyXG4gICAgdGhpcy5fYWNjdXJhY3kgPSBhY2N1cmFjeTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIGxhdGl0dWRlLlxyXG4gICAqXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgR2VvbG9jYXRpb25cclxuICAgKi9cclxuICBnZXQgbGF0aXR1ZGUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9sYXRpdHVkZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgYSBsb25naXR1ZGUuXHJcbiAgICpcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBHZW9sb2NhdGlvblxyXG4gICAqL1xyXG4gIGdldCBsb25naXR1ZGUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9sb25naXR1ZGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIGFuIGFjY3VyYWN5IG9mIGEgbWVhc3VyZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBHZW9sb2NhdGlvblxyXG4gICAqL1xyXG4gIGdldCBhY2N1cmFjeSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjY3VyYWN5O1xyXG4gIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vc2RrL2FwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2Vycm9ycyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2RrL25hdmlnYXRvci9uYXZpZ2F0b3InO1xyXG5leHBvcnQgKiBmcm9tICcuL3Nkay9uYXZpZ2F0b3IvcmVkaXJlY3ROYXZpZ2F0b3InO1xyXG5leHBvcnQgKiBmcm9tICcuL3Nkay9zY29wZVBhcnNlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2RrL3Nlc3Npb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL3Nkay9nZW9Qcm92aWRlci9nZW8nO1xyXG5leHBvcnQgKiBmcm9tICcuL3Nkay9nZW9Qcm92aWRlci9nZW9Qcm92aWRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2dlb1Byb3ZpZGVyL2h0bWw1R2VvUHJvdmlkZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3Nkay9sb2dpbk9wdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgQ3liZXJ1c0tleUFQSSB9IGZyb20gJy4vc2RrL2FwaSc7XHJcbmV4cG9ydCBkZWZhdWx0IEN5YmVydXNLZXlBUEk7IiwiaW1wb3J0IHsgTWlzc2luZ1JlZGlyZWN0VXJpIH0gZnJvbSAnLi4vZXJyb3JzJztcclxuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3InO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBkZXNjcmliZXMgaG93IE9wZW5JRCdzIEF1dGhlbnRpY2F0aW9uIEVuZHBvaW50IHdpbGwgYmUgaGFuZGxlZC5cclxuICogVGhpcyBjbGFzcyBpcyB0aGlnaHRlbiB0byBhIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvdXIgZm9yIE9wZW5JRCBwcm90b2NvbCAtIGEgcmVkaXJlY3Rpb24uXHJcbiAqIFdoaWNoIG1lYW5zIHRoYXQgeW91ciBVUkwgd2lsbCBiZSB0ZW1wb3JhcmlseSByZXBsYWNlZCBieSB0aGUgQXV0aGVudGljYXRpb24gRW5kcG9pbnRcclxuICogYW5kIHJlcGxhY2VkIGFnYWluIGJ5IGl0cyByZXNwb25zZSAtIEhUVFAgMzAyLiBUaGUgbmV3IGxvY2F0aW9uIHdpbGwgYmUgdGhlIG9uZSB5b3UgZGVmaW5lZCBhcyB5b3VyIGByZWRpcmVjdF91cmlgLlxyXG4gKiBcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgUmVkaXJlY3ROYXZpZ2F0b3JcclxuICogQGltcGxlbWVudHMge05hdmlnYXRvcn1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWRpcmVjdE5hdmlnYXRvciBpbXBsZW1lbnRzIE5hdmlnYXRvciB7XHJcbiAgLyoqXHJcbiAgICogTmF2aWdhdGVzIHRvIHRoZSBnaXZlbiBVUkwuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIEF1dGhlbnRpY2F0aW9uIEVuZHBvaW50IFVSTC5cclxuICAgKiBAdGhyb3dzIE1pc3NpbmdSZWRpcmVjdFVyaVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAqIEBtZW1iZXJvZiBSZWRpcmVjdE5hdmlnYXRvclxyXG4gICAqL1xyXG4gIGFzeW5jIG5hdmlnYXRlKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICB0aHJvdyBuZXcgTWlzc2luZ1JlZGlyZWN0VXJpKClcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG59IiwiXHJcbi8qKlxyXG4gKiBIYW5keSBjbGFzcyB0byBkZWZpbmUgYW4gT3BlbklEJ3Mgc2NvcGUuXHJcbiAqIFNjb3BlcyBhcmUgdXNlZCBieSBhbiBhcHBsaWNhdGlvbiBkdXJpbmcgYXV0aGVudGljYXRpb24gdG8gYXV0aG9yaXplIGFjY2VzcyB0byBhIHVzZXIncyBkZXRhaWxzLFxyXG4gKiBsaWtlIG5hbWUgYW5kIHBpY3R1cmUuIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLiBcclxuICogXHJcbiAqIFlvdSBjYW4gdXNlIGFkZGl0aW9uYWwgdmFsdWVzIGBlbWFpbGAgKGFkZCBhIHVzZXIncyBlbWFpbCBjbGFpbSkgYW5kIGBwcm9maWxlYCAoYWRkIHVzZXIgZmlyc3QgYW5kIGxhc3QgbmFtZSkuXHJcbiAqIFxyXG4gKiBgYGBqYXZhc2NyaXB0XHJcbiAqIGNvbnN0IHNjb3BlUGFyc2VyID0gbmV3IE9wZW5JZFNjb3BlUGFyc2VyKCk7XHJcbiAqIGNvbnN0IHNjb3BlID0gc2NvcGVQYXJzZXIuYWRkRW1haWwoKS5hZGRQcm9maWxlKCkuZ2V0VmFsdWUoKTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIE9wZW5JZFNjb3BlUGFyc2VyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgT3BlbklkU2NvcGVQYXJzZXIge1xyXG4gIHByaXZhdGUgX3Njb3BlOiBBcnJheTxzdHJpbmc+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3Njb3BlID0gWydvcGVuaWQnXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYGVtYWlsYCBzY29wZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAqIEBtZW1iZXJvZiBPcGVuSWRTY29wZVBhcnNlclxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRFbWFpbCgpOiB0aGlzIHtcclxuICAgIGlmICh0aGlzLl9zY29wZS5pbmNsdWRlcygnZW1haWwnKSkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9zY29wZS5wdXNoKCdlbWFpbCcpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBgcHJvZmlsZWAgc2NvcGUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgKiBAbWVtYmVyb2YgT3BlbklkU2NvcGVQYXJzZXJcclxuICAgKi9cclxuICBwdWJsaWMgYWRkUHJvZmlsZSgpOiB0aGlzIHtcclxuICAgIGlmICh0aGlzLl9zY29wZS5pbmNsdWRlcygncHJvZmlsZScpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3Njb3BlLnB1c2goJ3Byb2ZpbGUnKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgZm9ybWF0dGVkIHNjb3BlIHZhbHVlLCBlLmcuIGBvcGVuaWQgZW1haWxgLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgT3BlbklkU2NvcGVQYXJzZXJcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zY29wZS5qb2luKCcgJyk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGludGVyZmFjZSBTZXNzaW9uUmVzcG9uc2Uge1xyXG4gIHNlc3Npb25faWQ6IHN0cmluZztcclxuICBjcmVhdGVkX2F0OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogRGF0YSBjbGFzcyByZXByZXNlbnRpbmcgYSBDeWJlcnVzIEtleSBzZXNzaW9uLlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBTZXNzaW9uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2Vzc2lvbiB7XHJcbiAgLyoqXHJcbiAgICogU2Vzc2lvbidzIHVuaXF1ZSBpZGVudGlmaWVyLiBJdCdzIHZhbGlkIHVwIHRvIDIwcy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIFNlc3Npb25cclxuICAgKi9cclxuICBwdWJsaWMgc2Vzc2lvbklkOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgVVRDIGRhdGUgcmVwcmVzZW50aW5nIGEgZGF0ZSAoYW5kIHRpbWUpIHdoZW4gYSBzZXNzaW9uIGhhcyBiZWVuIGNyZWF0ZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RGF0ZX1cclxuICAgKiBAbWVtYmVyb2YgU2Vzc2lvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBjcmVhdGVkQXQ6IERhdGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGpzb246IFNlc3Npb25SZXNwb25zZSkge1xyXG4gICAgdGhpcy5zZXNzaW9uSWQgPSBqc29uLnNlc3Npb25faWQ7XHJcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IG5ldyBEYXRlKGpzb24uY3JlYXRlZF9hdCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgR2VvbG9jYXRpb24gfSBmcm9tICcuL2dlbyc7XHJcbmltcG9ydCB7IEdlb1Byb3ZpZGVyIH0gZnJvbSAnLi9nZW9Qcm92aWRlcic7XHJcblxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHByb3ZpZGVzIGEgZ2VvbG9jYWxpemF0aW9uIG1lYXN1cmVtZW50LlxyXG4gKiBJdCB1c2VzIGEgSFRNTDUncyBgR2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKClgIG1ldGhvZC5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgSFRNTDVHZW9Qcm92aWRlclxyXG4gKiBAaW1wbGVtZW50cyB7R2VvUHJvdmlkZXJ9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSFRNTDVHZW9Qcm92aWRlciBpbXBsZW1lbnRzIEdlb1Byb3ZpZGVyIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9lbmFibGVIaWdoQWNjdXJhY3k6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfbmF2aWdhdG9yOiBOYXZpZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfbnVtT2ZUcmllc0JlZm9yZUdwc0FjdGl2YXRlczogbnVtYmVyID0gMjtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9vblBlcm1pc3Npb25EaWFsb2c/OiBGdW5jdGlvbjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGRlZmF1bHRNZXNzYWdlID0gXCJDeWJlcnVzIEtleSB3aWRnZXQgd291bGQgbGlrZSB0byBhY2Nlc3MgeW91ciBsb2NhdGlvblwiICtcclxuICAgICAgXCIgdG8gdXNlIGdlb2xvY2F0aW9uIHRyYWNraW5nIHRvIGFzc2VydCBzdWNjZXNzZnVsIGF1dGhlbnRpY2F0aW9uLlwiXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBIVE1MNUdlb1Byb3ZpZGVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbZW5hYmxlSGlnaEFjY3VyYWN5PWZhbHNlXSAgRm9yY2VzIGhpZ2ggYWNjdXJhY3kgb2YgdGhlIGdlb2xvY2F0aW9uLiBJdCBtYXkgdGFrZSBsb25nZXIuXHJcbiAgICogQHBhcmFtIHtOYXZpZ2F0b3J9IFtuYXZpZ2F0b3I9d2luZG93Lm5hdmlnYXRvcl1cclxuICAgKiBAcGFyYW0gbnVtT2ZUcmllc0JlZm9yZUdwc0FjdGl2YXRlcyBUaGUgR1BTIGxvY2FsaXphdGlvbiB3aWxsIGJlIHVzZWQgb25seSBhZnRlciBuIHVuc3VjY2Vzc2Z1bCB0cmllcy5cclxuICAgKiBCeSB1bnN1Y2Nlc3NmdWwgdHJ5IHdlIGRlZmluZSB0aGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBhdXRoZW50aWNhdGlvbiByZXN1bHRlZCBpbiBzZXNzaW9uIG5vdCBmb3VuZCBlcnJvci5cclxuICAgKiBAcGFyYW0gb25QZXJtaXNzaW9uRGlhbG9nIExlYXZlIGFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGRpYWxvZyB0byBhcHBlYXIgYmVmb3JlIHNpdGVcclxuICAgKiBhc2tzIGZvciBsb2NhbGl6YXRpb24gcGVybWlzc2lvbiBmb3IgdGhlIGNhbGxlciB0byBoYW5kbGUuIEl0IHRha2VzIGEgZnVuY3Rpb24gd2l0aCBkZWZhdWx0IG1lc3NhZ2UgYXMgcGFyYW1ldGVyXHJcbiAgICogQG1lbWJlcm9mIEhUTUw1R2VvUHJvdmlkZXJcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbmFibGVIaWdoQWNjdXJhY3kgPSBmYWxzZSwgb25QZXJtaXNzaW9uRGlhbG9nOkZ1bmN0aW9uID0gbnVsbCwgbnVtT2ZUcmllc0JlZm9yZUdwc0FjdGl2YXRlczogbnVtYmVyID0gMiwgbmF2aWdhdG9yOiBOYXZpZ2F0b3IgPSB3aW5kb3cubmF2aWdhdG9yKSB7XHJcbiAgICB0aGlzLl9lbmFibGVIaWdoQWNjdXJhY3kgPSBlbmFibGVIaWdoQWNjdXJhY3k7XHJcbiAgICB0aGlzLl9uYXZpZ2F0b3IgPSBuYXZpZ2F0b3I7XHJcbiAgICB0aGlzLl9udW1PZlRyaWVzQmVmb3JlR3BzQWN0aXZhdGVzID0gbnVtT2ZUcmllc0JlZm9yZUdwc0FjdGl2YXRlcztcclxuICAgIHRoaXMuX29uUGVybWlzc2lvbkRpYWxvZyA9IG9uUGVybWlzc2lvbkRpYWxvZztcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIGEgZ2VvbG9jYWxpemF0aW9uIG1lYXN1cmVtZW50LlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8R2VvbG9jYXRpb24+fSBHZW9sb2NhbGl6YXRpb24gbWVhc3VyZW1lbnQuXHJcbiAgICogQG1lbWJlcm9mIEhUTUw1R2VvUHJvdmlkZXJcclxuICAgKi9cclxuICBhc3luYyBnZXRHZW8oKTogUHJvbWlzZTxHZW9sb2NhdGlvbj4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcblxyXG5cclxuXHJcbiAgICBsZXQgZGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJhdXRoX2NvdW50ZXJcIik7XHJcbiAgICBpZiAoZGF0YSA9PW51bGwpXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KGRhdGEsIDEwKVxyXG5cclxuICAgIGlmKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA8IHRoaXMuX251bU9mVHJpZXNCZWZvcmVHcHNBY3RpdmF0ZXMpXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHBlcm1pc3Npb25EaWFsb2cgPSB0aGlzLl9vblBlcm1pc3Npb25EaWFsb2c7XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRNZXNzYWdlID0gdGhpcy5kZWZhdWx0TWVzc2FnZTtcclxuXHJcbiAgICAgIG5hdmlnYXRvci5wZXJtaXNzaW9ucyAmJiBuYXZpZ2F0b3IucGVybWlzc2lvbnMucXVlcnkoe25hbWU6ICdnZW9sb2NhdGlvbid9KVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24oUGVybWlzc2lvblN0YXR1cykge1xyXG4gICAgICAgICAgICBpZiAoUGVybWlzc2lvblN0YXR1cy5zdGF0ZSA9PSAncHJvbXB0Jykge1xyXG4gICAgICAgICAgICAgIGlmKHBlcm1pc3Npb25EaWFsb2cpXHJcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uRGlhbG9nKGRlZmF1bHRNZXNzYWdlKVxyXG4gICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGRlZmF1bHRNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICByZXN1bHQgPSBhd2FpdCB0aGlzLl9nZXRHZW8odGhpcy5fZW5hYmxlSGlnaEFjY3VyYWN5KTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAvLyBFLmcuIHVzZXIgZGlkbid0IGFncmVlIG9uIGdlb2xpY2FsaXphdGlvbi5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBjb29yZHMgfSA9IHJlc3VsdDtcclxuXHJcbiAgICByZXR1cm4gbmV3IEdlb2xvY2F0aW9uKGNvb3Jkcy5sYXRpdHVkZSwgY29vcmRzLmxvbmdpdHVkZSwgY29vcmRzLmFjY3VyYWN5KTtcclxuICB9XHJcblxyXG4gIF9nZXRHZW8oZW5hYmxlSGlnaEFjY3VyYWN5OiBib29sZWFuKTogUHJvbWlzZTxQb3NpdGlvbj4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5fbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihyZXNvbHZlLCByZWplY3QsIHsgZW5hYmxlSGlnaEFjY3VyYWN5IH0pXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3IvbmF2aWdhdG9yJztcclxuaW1wb3J0IHsgT3BlbklkU2NvcGVQYXJzZXIgfSBmcm9tICcuL3Njb3BlUGFyc2VyJztcclxuXHJcblxyXG4vKipcclxuICogTG9naW4gb3B0aW9ucy5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgTG9naW5PcHRpb25zXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTG9naW5PcHRpb25zIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50SWQgUHVibGljIGNsaWVudCBJRCBnZW5lcmF0ZWQgZHVyaW5nIGNyZWF0aW5nIHRoZSBhY2NvdW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgY2xpZW50SWQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlZGlyZWN0VXJpIFJlZGlyZWN0IFVSSSB0byB3aGljaCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSBzZW50LiBJZiB0aGUgdmFsdWUgaXMgbm90IHdoaXRlbGlzdGVkIHRoZW4gdGhlIHJlcXVlc3Qgd2lsbCBmYWlsLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgcmVkaXJlY3RVcmk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPcGVuSWRTY29wZVBhcnNlcn0gc2NvcGUgRWFjaCBzY29wZSByZXR1cm5zIGEgc2V0IG9mIHVzZXIgYXR0cmlidXRlcywgd2hpY2ggYXJlIGNhbGxlZCBjbGFpbXMuXHJcbiAgICogICAgT25jZSB0aGUgdXNlciBhdXRob3JpemVzIHRoZSByZXF1ZXN0ZWQgc2NvcGVzLCB0aGUgY2xhaW1zIGFyZSByZXR1cm5lZCBpbiBhbiBJRCBUb2tlbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xyXG4gICAqL1xyXG4gIHJlYWRvbmx5IHNjb3BlOiBPcGVuSWRTY29wZVBhcnNlcjtcclxuXHJcbiAgLyoqXHJcbiAgKiBAcGFyYW0ge05hdmlnYXRvcn0gbmF2aWdhdG9yIENsYXNzIGRlc2NyaWJlcyBhbiBhY3Rpb24gdGhhdCB3aWxsIGJlIGRvbmUgdG8gQXV0aGVudGljYXRpb24gVVJMLiBGb3IgYnJvd3NlcnMgaXQgd2lsbCBiZSBhIHBhZ2UgcmVkaXJlY3Rpb24uXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcclxuICAgKi9cclxuICByZWFkb25seSBuYXZpZ2F0b3I6IE5hdmlnYXRvcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmlnaW5dIFRoZSBvcmlnaW4gZG9tYWluIG9mIHRoZSByZXF1ZXN0IGJlaW5nIG1hZGUuIElmIGBudWxsYCB0aGVuIHRoZSBSZWZlcmVyIGhlYWRlciB3aWxsIGJlIHVzZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcclxuICAgKi9cclxuICByZWFkb25seSBvcmlnaW46IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0ZV1cclxuICAgKiAgICBSRUNPTU1FTkRFRC4gT3BhcXVlIHZhbHVlIHVzZWQgdG8gbWFpbnRhaW4gc3RhdGUgYmV0d2VlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIGNhbGxiYWNrLiBUeXBpY2FsbHksIENTUkYsIFhTUkYgbWl0aWdhdGlvbiBpcyBkb25lIGJ5IGNyeXB0b2dyYXBoaWNhbGx5IGJpbmRpbmcgdGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIHdpdGggYSBicm93c2VyIGNvb2tpZS5cclxuICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIHByZXNlcnZlcyBzb21lIHN0YXRlIG9iamVjdCBzZXQgYnkgdGhlIGNsaWVudCBpbiB0aGUgQXV0aGVudGljYXRpb24gcmVxdWVzdCBhbmQgbWFrZXMgaXQgYXZhaWxhYmxlIHRvIHRoZSBjbGllbnQgaW4gdGhlIHJlc3BvbnNlLlxyXG4gICAqICAgIEl04oCZcyB0aGF0IHVuaXF1ZSBhbmQgbm9uLWd1ZXNzYWJsZSB2YWx1ZSB0aGF0IGFsbG93cyB5b3UgdG8gcHJldmVudCB0aGUgYXR0YWNrIGJ5IGNvbmZpcm1pbmcgaWYgdGhlIHZhbHVlIGNvbWluZyBmcm9tIHRoZSByZXNwb25zZSBtYXRjaGVzIHRoZSBvbmUgeW91IGV4cGVjdCAodGhlIG9uZSB5b3UgZ2VuZXJhdGVkIHdoZW4gaW5pdGlhdGluZyB0aGUgcmVxdWVzdCkuXHJcbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBpcyBhIHN0cmluZyBzbyB5b3UgY2FuIGVuY29kZSBhbnkgb3RoZXIgaW5mb3JtYXRpb24gaW4gaXQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcclxuICAgKi9cclxuICByZWFkb25seSBzdGF0ZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vbmNlXVxyXG4gICAqICAgIFN0cmluZyB2YWx1ZSB1c2VkIHRvIGFzc29jaWF0ZSBhIENsaWVudCBzZXNzaW9uIHdpdGggYW4gSUQgVG9rZW4sIGFuZCB0byBtaXRpZ2F0ZSByZXBsYXkgYXR0YWNrcy5cclxuICAgKiAgICBUaGUgdmFsdWUgaXMgcGFzc2VkIHRocm91Z2ggdW5tb2RpZmllZCBmcm9tIHRoZSBBdXRoZW50aWNhdGlvbiBSZXF1ZXN0IHRvIHRoZSBJRCBUb2tlbi5cclxuICAgKiAgICBTdWZmaWNpZW50IGVudHJvcHkgTVVTVCBiZSBwcmVzZW50IGluIHRoZSBub25jZSB2YWx1ZXMgdXNlZCB0byBwcmV2ZW50IGF0dGFja2VycyBmcm9tIGd1ZXNzaW5nIHZhbHVlcy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xyXG4gICAqL1xyXG4gIHJlYWRvbmx5IG5vbmNlOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbcmVzcG9uc2VUeXBlPSdjb2RlJ10gT3BlbklkIHJlc3BvbnNlIHR5cGUuIFRoZSBkZWZhdWx0IGlzIGBjb2RlYCAoQ29kZSBGbG93LCBpbnZvbHZpbmcgdGhlIGZyb250LWNoYW5uZWwgYW5kIGJhY2tjaGFubmVsKS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xyXG4gICAqL1xyXG4gIHJlYWRvbmx5IHJlc3BvbnNlVHlwZTogc3RyaW5nID0gJ2NvZGUnO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheSBJdCBzcGVjaWZpZXMgaG93IHRoZSBBdXRob3JpemF0aW9uIFNlcnZlciBkaXNwbGF5cyB0aGUgYXV0aGVudGljYXRpb24gYW5kIGNvbnNlbnQgdXNlciBpbnRlcmZhY2UgcGFnZXMgdG8gdGhlIEVuZC1Vc2VyLlxyXG4gICAqICAgRGVmYXVsdCBhbmQgdGhlIG9ubHkgc3VwcG9ydGVkIHZhbHVlIGlzIGBwYWdlYC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xyXG4gICAqL1xyXG4gIHJlYWRvbmx5IGRpc3BsYXk6IHN0cmluZyA9ICdwYWdlJ1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvbXB0IFNwYWNlIGRlbGltaXRlZCwgY2FzZSBzZW5zaXRpdmUgbGlzdCBvZiBzdHJpbmcgdmFsdWVzIHRoYXQgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIEF1dGhvcml6YXRpb24gU2VydmVyXHJcbiAgICogICBwcm9tcHRzIHRoZSBFbmQtVXNlciBmb3IgcmVhdXRoZW50aWNhdGlvbiBhbmQgY29uc2VudC4gVGhlIGRlZmluZWQgdmFsdWVzIGFyZTogYGxvZ2luYCwgYG5vbmVgLlxyXG4gICAqICAgRGVmYXVsdCBpcyBgbG9naW4sbm9uZWAuIENhbid0IGJlIGNoYW5nZWQgZm9yIG5vdy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xyXG4gICAqL1xyXG4gIHJlYWRvbmx5IHByb21wdDogc3RyaW5nID0gJ2xvZ2luLG5vbmUnXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZW1lIG9mIHRoZSBsb2dpbiBwYWdlIG9mIEN5YmVydXMgS2V5IERhc2hib2FyZC4gRGVmYXVsdCBpcyBgZGVmYXVsdGAuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcclxuICAgKi9cclxuICByZWFkb25seSB0aGVtZTogc3RyaW5nID0gJ2RlZmF1bHQnO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==