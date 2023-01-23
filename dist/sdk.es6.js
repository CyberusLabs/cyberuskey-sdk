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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2FwaS50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvZXJyb3JzLnRzIiwid2VicGFjazovL2N5YmVydXNrZXktc2RrLy4vc3JjL3Nkay9nZW9Qcm92aWRlci9nZW8udHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL25hdmlnYXRvci9yZWRpcmVjdE5hdmlnYXRvci50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvc2NvcGVQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL3Nlc3Npb24udHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2dlb1Byb3ZpZGVyL2h0bWw1R2VvUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2xvZ2luT3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3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QUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUvRSxDQUFDO0tBQUE7Q0FDSjtBQXBGRCw0Q0FvRkM7Ozs7Ozs7Ozs7O0FDNUZEOzs7OztHQUtHO0FBQ0gsTUFBYSxZQUFZO0lBQXpCO1FBaUVFOzs7OztXQUtHO1FBQ00saUJBQVksR0FBVyxNQUFNLENBQUM7UUFFdkM7Ozs7OztXQU1HO1FBQ00sWUFBTyxHQUFXLE1BQU07UUFFakM7Ozs7Ozs7V0FPRztRQUNNLFdBQU0sR0FBVyxZQUFZO1FBRXRDOzs7OztXQUtHO1FBQ00sVUFBSyxHQUFXLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0NBQUE7QUFuR0Qsb0NBbUdDIiwiZmlsZSI6InNkay5lczYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImN5YmVydXNrZXktc2RrXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImN5YmVydXNrZXktc2RrXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImN5YmVydXNrZXktc2RrXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQge0dlb2xvY2F0aW9ufSBmcm9tICcuL2dlb1Byb3ZpZGVyL2dlbyc7XHJcbmltcG9ydCB7R2VvUHJvdmlkZXJ9IGZyb20gJy4vZ2VvUHJvdmlkZXIvZ2VvUHJvdmlkZXInO1xyXG5pbXBvcnQge05hdmlnYXRvcn0gZnJvbSAnLi9uYXZpZ2F0b3IvbmF2aWdhdG9yJztcclxuaW1wb3J0IHtPcGVuSWRTY29wZVBhcnNlcn0gZnJvbSAnLi9zY29wZVBhcnNlcic7XHJcbmltcG9ydCB7U2Vzc2lvbn0gZnJvbSAnLi9zZXNzaW9uJztcclxuaW1wb3J0IHtMb2dpbk9wdGlvbnN9IGZyb20gJy4vbG9naW5PcHRpb25zJztcclxuXHJcblxyXG4vKipcclxuICogQ3liZXJ1cyBLZXkgQVBJIHdoaWNoIGFsbG93cyB5b3UgdG8gZG8gYSBkZWxlZ2F0ZSBsb2dpbiB3aXRoIE9wZW5JZCBwcm90b2NvbC5cclxuICpcclxuICogQGNsYXNzIEN5YmVydXNLZXlBUElcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDeWJlcnVzS2V5QVBJIHtcclxuICAgIHByaXZhdGUgX2FwaVVybDogVVJMO1xyXG4gICAgcHJpdmF0ZSBfZ2VvUHJvdmlkZXI6IEdlb1Byb3ZpZGVyO1xyXG4gICAgcHJpdmF0ZSBfZGVsYXlNczogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEN5YmVydXNLZXlBUEkuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaG9zdFVybCBCYXNlIFVSTCBvZiB0aGUgaG9zdCBzZXJ2ZXIsIGUuZy4gYGh0dHBzOi8vYXBpLmN5YmVydXNrZXkuY29tYFxyXG4gICAgICogQHBhcmFtIHtHZW9Qcm92aWRlcn0gW2dlb1Byb3ZpZGVyXSBHZW9sb2NhbGl6YXRpb24gcHJvdmlkZXIuIFVzZSBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbiBsaWtlIGBIVE1MNUdlb1Byb3ZpZGVyYC5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXlNcz02MDBdIERlbGF5IChtcykgYmV0d2VlbiBtYWtpbmcgYW4gQXV0aGVudGljYXRpb24gcmVxdWVzdCBhbmQgYSBzb3VuZCBwbGF5aW5nLlxyXG4gICAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaG9zdFVybDogc3RyaW5nLCBnZW9Qcm92aWRlcj86IEdlb1Byb3ZpZGVyLCBkZWxheU1zOiBudW1iZXIgPSA2MDApIHtcclxuICAgICAgICB0aGlzLl9hcGlVcmwgPSBuZXcgVVJMKCcvYXBpL3YyLycsIGhvc3RVcmwpO1xyXG4gICAgICAgIHRoaXMuX2dlb1Byb3ZpZGVyID0gZ2VvUHJvdmlkZXI7XHJcbiAgICAgICAgdGhpcy5fZGVsYXlNcyA9IGRlbGF5TXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBDeWJlcnVzIEtleSBzZXNzaW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRJZCBQdWJsaWMgY2xpZW50IElEIGdlbmVyYXRlZCBkdXJpbmcgY3JlYXRpbmcgdGhlIGFjY291bnQuXHJcbiAgICAgKiBAcGFyYW0ge0dlb2xvY2F0aW9ufSBbZ2VvXSBHaXZlIGEgdmFsdWUgaWYgeW91IHdhbnQgdG8gcGFzcyBvcHRpb25hbCBnZW9sb2NhdGlvbiBtZWFzdXJlbWVudC5cclxuICAgICAqICAgIEl0IGNhbiBiZSBsYXRlciB1c2UgdG8gY29tcGFyZSBpdCBhZ2FpbnN0IHRoZSBtb2JpbGUncyBtZWFzdXJlbWVudCAoaWYgeW91IGhhdmUgc2V0IGBmYWlsX29uX2dlb19taXNtYXRjaGApLlxyXG4gICAgICogICAgVGhvc2UgbWVhc3VyZW1lbnRzIGNhbiBiZSB1c2VkIGFsc28gdG8gZ2VuZXJhbCBpbXByb3ZlbWVudCBvZiB0aGUgc2VjdXJpdHkuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29yaWdpbl0gVGhlIG9yaWdpbiBkb21haW4gb2YgdGhlIHJlcXVlc3QgYmVpbmcgbWFkZS4gSWYgYG51bGxgIHRoZW4gdGhlIFJlZmVyZXIgaGVhZGVyIHdpbGwgYmUgdXNlZC5cclxuICAgICAqIEB0aHJvd3MgV3JvbmdKc29uRXJyb3IsIE9wZW5BcGlFcnJvciwgUmVzb3VyY2VOb3RGb3VuZEVycm9yLCBPVFBHZW5lcmF0aW9uRXJyb3IsIFVua25vd25FcnJvclxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gVGhlIEN5YmVydXMgS2V5IHNlc3Npb24gaWQuXHJcbiAgICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlU2Vzc2lvbihjbGllbnRJZDogc3RyaW5nLCBvcmlnaW4/OiBzdHJpbmcsIGdlbz86IEdlb2xvY2F0aW9uKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtjbGllbnRfaWQ6IGNsaWVudElkfTtcclxuXHJcbiAgICAgICAgaWYgKGdlbykge1xyXG4gICAgICAgICAgICBkYXRhWydsYXQnXSA9IGdlby5sYXRpdHVkZTtcclxuICAgICAgICAgICAgZGF0YVsnbG5nJ10gPSBnZW8ubG9uZ2l0dWRlO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLl9nZW9Qcm92aWRlcil7XHJcbiAgICAgICAgICAgIGNvbnN0IGdwcyA9IGF3YWl0IHRoaXMuX2dlb1Byb3ZpZGVyLmdldEdlbygpO1xyXG4gICAgICAgICAgICBpZiAoZ3BzKXtcclxuICAgICAgICAgICAgICAgIGRhdGFbJ2xhdCddID0gZ3BzLmxhdGl0dWRlO1xyXG4gICAgICAgICAgICAgICAgZGF0YVsnbG5nJ10gPSBncHMubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3JpZ2luKSB7XHJcbiAgICAgICAgICAgIGRhdGFbJ29yaWdpbiddID0gb3JpZ2luO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogdGhpcy5fZ2V0VXJsRW5jb2RlZEJvZHkoZGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX2dldFVybCgnc2Vzc2lvbnMnKSwgcGFyYW1zKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGpzb24pID0+IGpzb24uZGF0YS5zZXNzaW9uX2lkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBpZiBhdXRoZW50aWNhdGlvbiBzZXJ2ZXIgaXMgYXZhaWxhYmxlXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IGZsYWcgaW5kaWNhdGluZyBpZiB0aGUgYXV0aGVudGljYXRpb24gc2VydmVyIGlzIGF2YWlsYWJsZS5cclxuICAgICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXHJcbiAgICAgKi9cclxuXHJcblxyXG4gICAgcHVibGljIGFzeW5jIGlzT3V0T2ZTZXJ2aWNlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGVyclBhZ2VNc2cgPSAobmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbi5ocmVmKSkuc2VhcmNoUGFyYW1zLmdldChcImVycm9yXCIpO1xyXG5cclxuICAgICAgICBpZiAoZXJyUGFnZU1zZyAhPW51bGwgJiYgZXJyUGFnZU1zZyA9PSBcIm90cF90aW1lb3V0X2Vycm9yXCIpe1xyXG4gICAgICAgICAgICBsZXQgYXV0aEFjdGl2ZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJhdXRoX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgaWYgKGF1dGhBY3RpdmUgIT1udWxsICYmIGF1dGhBY3RpdmUgPT09IFwidHJ1ZVwiKXtcclxuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBhdXRoQ291bnRlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJhdXRoX2NvdW50ZXJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXV0aENvdW50ZXIhPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhdXRoQ291bnRlclZhbHVlID0gcGFyc2VJbnQoYXV0aENvdW50ZXIsIDEwKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4oYXV0aENvdW50ZXJWYWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYXV0aF9jb3VudGVyXCIsIChhdXRoQ291bnRlclZhbHVlICsgMSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImF1dGhfY291bnRlclwiLCBcIjFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhfY291bnRlclwiKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpbnRlcmZhY2UgVmVyc2lvblJlc3BvbnNlIHtcclxuICAgICAgICAgICAgdmVyc2lvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBtaW5Nb2JpbGVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIG1heE1vYmlsZVZlcnNpb246IHN0cmluZztcclxuICAgICAgICAgICAgb3V0T2ZTZXJ2aWNlOiBib29sZWFuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLl9nZXRVcmwoYHZlcnNpb25gKSwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKHZlcnNpb25Kc29uOiBWZXJzaW9uUmVzcG9uc2UpID0+IHZlcnNpb25Kc29uLm91dE9mU2VydmljZSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgVVJMIHdpdGggc291bmQgd2l0aCBlbWJlZGRlZCBPVFAuIFlvdSBoYXZlIHRvIGVtaXQgaXQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTZXNzaW9ufSBzZXNzaW9uIEN5YmVydXMgS2V5J3Mgc2Vzc2lvbiBnZW5lcmF0ZWQgYnkgYSB1c2VyIGZvciBhIGxvZ2luLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gc3RyaW5nIHdpdGggdXJsIHRvIHRoZSBzb3VuZC5cclxuICAgICAqIEB0aHJvd3MgUmVzb3VyY2VOb3RGb3VuZEVycm9yXHJcbiAgICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxyXG4gICAgICovXHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRPVFBTb3VuZChzZXNzaW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSAnYXVkaW8vbXBlZyc7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX2dldFVybChgc2Vzc2lvbnMvJHtzZXNzaW9ufWApLCByZXF1ZXN0T3B0aW9ucylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxyXG4gICAgICAgICAgICAudGhlbigoYXJyYXlCdWZmZXIpID0+IG5ldyBCbG9iKFthcnJheUJ1ZmZlcl0sIHt0eXBlOiB0eXBlfSkpXHJcbiAgICAgICAgICAgIC50aGVuKChibG9iKSA9PiB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIE9wZW5JRCdzIEF1dGhlbnRpY2F0aW9uIGVuZHBvaW50IFVSTCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gcHJvY2VzcyB0aGUgYXV0aGVudGljYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHNlc3Npb25JZCB1bmlxdWUgaWQgY3JlYXRlZCBmb3IgdGhlIHNwZWNpZmljIGxvZ2luIGFuZCBjb25uZWN0ZWQgdG8gdGhlIHNwZWNpZmljIG90cFxyXG4gICAgICogQHBhcmFtIHtPcGVuSWRTY29wZVBhcnNlcn0gc2NvcGUgRWFjaCBzY29wZSByZXR1cm5zIGEgc2V0IG9mIHVzZXIgYXR0cmlidXRlcywgd2hpY2ggYXJlIGNhbGxlZCBjbGFpbXMuXHJcbiAgICAgKiAgICBPbmNlIHRoZSB1c2VyIGF1dGhvcml6ZXMgdGhlIHJlcXVlc3RlZCBzY29wZXMsIHRoZSBjbGFpbXMgYXJlIHJldHVybmVkIGluIGFuIElEIFRva2VuLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIFB1YmxpYyBjbGllbnQgSUQgZ2VuZXJhdGVkIGR1cmluZyBjcmVhdGluZyB0aGUgYWNjb3VudC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWRpcmVjdFVyaSBSZWRpcmVjdCBVUkkgdG8gd2hpY2ggdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudC4gSWYgdGhlIHZhbHVlIGlzIG5vdCB3aGl0ZWxpc3RlZCB0aGVuIHRoZSByZXF1ZXN0IHdpbGwgZmFpbC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc3RhdGVdXHJcbiAgICAgKiAgICBSRUNPTU1FTkRFRC4gT3BhcXVlIHZhbHVlIHVzZWQgdG8gbWFpbnRhaW4gc3RhdGUgYmV0d2VlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIGNhbGxiYWNrLiBUeXBpY2FsbHksIENTUkYsIFhTUkYgbWl0aWdhdGlvbiBpcyBkb25lIGJ5IGNyeXB0b2dyYXBoaWNhbGx5IGJpbmRpbmcgdGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIHdpdGggYSBicm93c2VyIGNvb2tpZS5cclxuICAgICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgcHJlc2VydmVzIHNvbWUgc3RhdGUgb2JqZWN0IHNldCBieSB0aGUgY2xpZW50IGluIHRoZSBBdXRoZW50aWNhdGlvbiByZXF1ZXN0IGFuZCBtYWtlcyBpdCBhdmFpbGFibGUgdG8gdGhlIGNsaWVudCBpbiB0aGUgcmVzcG9uc2UuXHJcbiAgICAgKiAgICBJdOKAmXMgdGhhdCB1bmlxdWUgYW5kIG5vbi1ndWVzc2FibGUgdmFsdWUgdGhhdCBhbGxvd3MgeW91IHRvIHByZXZlbnQgdGhlIGF0dGFjayBieSBjb25maXJtaW5nIGlmIHRoZSB2YWx1ZSBjb21pbmcgZnJvbSB0aGUgcmVzcG9uc2UgbWF0Y2hlcyB0aGUgb25lIHlvdSBleHBlY3QgKHRoZSBvbmUgeW91IGdlbmVyYXRlZCB3aGVuIGluaXRpYXRpbmcgdGhlIHJlcXVlc3QpLlxyXG4gICAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBpcyBhIHN0cmluZyBzbyB5b3UgY2FuIGVuY29kZSBhbnkgb3RoZXIgaW5mb3JtYXRpb24gaW4gaXQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW25vbmNlXVxyXG4gICAgICogICAgU3RyaW5nIHZhbHVlIHVzZWQgdG8gYXNzb2NpYXRlIGEgQ2xpZW50IHNlc3Npb24gd2l0aCBhbiBJRCBUb2tlbiwgYW5kIHRvIG1pdGlnYXRlIHJlcGxheSBhdHRhY2tzLlxyXG4gICAgICogICAgVGhlIHZhbHVlIGlzIHBhc3NlZCB0aHJvdWdoIHVubW9kaWZpZWQgZnJvbSB0aGUgQXV0aGVudGljYXRpb24gUmVxdWVzdCB0byB0aGUgSUQgVG9rZW4uXHJcbiAgICAgKiAgICBTdWZmaWNpZW50IGVudHJvcHkgTVVTVCBiZSBwcmVzZW50IGluIHRoZSBub25jZSB2YWx1ZXMgdXNlZCB0byBwcmV2ZW50IGF0dGFja2VycyBmcm9tIGd1ZXNzaW5nIHZhbHVlcy5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcmVzcG9uc2VUeXBlPSdjb2RlJ10gT3BlbklkIHJlc3BvbnNlIHR5cGUuIFRoZSBkZWZhdWx0IGlzIGBjb2RlYCAoQ29kZSBGbG93LCBpbnZvbHZpbmcgdGhlIGZyb250LWNoYW5uZWwgYW5kIGJhY2tjaGFubmVsKS5cclxuICAgICAqIEByZXR1cm5zIE9wZW5JRCdzIEF1dGhlbnRpY2F0aW9uIGVuZHBvaW50IFVSTFxyXG4gICAgICogQHRocm93cyBJbnZhbGlkUmVkaXJlY3RVcmlFcnJvciwgSW52YWxpZENsaWVudEVycm9yLCBSZXNvdXJjZU5vdEZvdW5kRXJyb3JcclxuICAgICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRBdXRoZW50aWNhdGlvbkVuZHBvaW50VXJsKHNlc3Npb25JZDogc3RyaW5nLCBzY29wZTogT3BlbklkU2NvcGVQYXJzZXIsIGNsaWVudElkOiBzdHJpbmcsIHJlZGlyZWN0VXJpOiBzdHJpbmcsIHN0YXRlPzogc3RyaW5nLCBub25jZT86IHN0cmluZywgcmVzcG9uc2VUeXBlID0gJ2NvZGUnKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25faWQ6IHNlc3Npb25JZCxcclxuICAgICAgICAgICAgY2xpZW50X2lkOiBjbGllbnRJZCxcclxuICAgICAgICAgICAgc2NvcGU6IHNjb3BlLmdldFZhbHVlKCksXHJcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogcmVkaXJlY3RVcmksXHJcbiAgICAgICAgICAgIHJlc3BvbnNlX3R5cGU6IHJlc3BvbnNlVHlwZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICBkYXRhWydzdGF0ZSddID0gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub25jZSkge1xyXG4gICAgICAgICAgICBkYXRhWydub25jZSddID0gbm9uY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHRoaXMuX2dldFVybCgnYXV0aGVudGljYXRlJykpO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChwYXJhbWV0ZXJOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKHBhcmFtZXRlck5hbWUsIGRhdGFbcGFyYW1ldGVyTmFtZV0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdXJsLmhyZWY7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmF2aWdhdGVzIHRvIEF1dGhlbnRpY2F0aW9uIEVuZHBvaW50XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIFB1YmxpYyBjbGllbnQgSUQgZ2VuZXJhdGVkIGR1cmluZyBjcmVhdGluZyB0aGUgYWNjb3VudC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWRpcmVjdFVyaSBSZWRpcmVjdCBVUkkgdG8gd2hpY2ggdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudC4gSWYgdGhlIHZhbHVlIGlzIG5vdCB3aGl0ZWxpc3RlZCB0aGVuIHRoZSByZXF1ZXN0IHdpbGwgZmFpbC5cclxuICAgICAqIEBwYXJhbSB7T3BlbklkU2NvcGVQYXJzZXJ9IHNjb3BlIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLlxyXG4gICAgICogICAgT25jZSB0aGUgdXNlciBhdXRob3JpemVzIHRoZSByZXF1ZXN0ZWQgc2NvcGVzLCB0aGUgY2xhaW1zIGFyZSByZXR1cm5lZCBpbiBhbiBJRCBUb2tlbi5cclxuICAgICAqIEBwYXJhbSB7TmF2aWdhdG9yfSBuYXZpZ2F0b3IgQ2xhc3MgZGVzY3JpYmVzIGFuIGFjdGlvbiB0aGF0IHdpbGwgYmUgZG9uZSB0byBBdXRoZW50aWNhdGlvbiBVUkwuIEZvciBicm93c2VycyBpdCB3aWxsIGJlIGEgcGFnZSByZWRpcmVjdGlvbi5cclxuICAgICAqIEBwYXJhbSBzZXNzaW9uIFNlc3Npb24gaWRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JpZ2luXSBUaGUgb3JpZ2luIGRvbWFpbiBvZiB0aGUgcmVxdWVzdCBiZWluZyBtYWRlLiBJZiBgbnVsbGAgdGhlbiB0aGUgUmVmZXJlciBoZWFkZXIgd2lsbCBiZSB1c2VkLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0ZV1cclxuICAgICAqICAgIFJFQ09NTUVOREVELiBPcGFxdWUgdmFsdWUgdXNlZCB0byBtYWludGFpbiBzdGF0ZSBiZXR3ZWVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgY2FsbGJhY2suIFR5cGljYWxseSwgQ1NSRiwgWFNSRiBtaXRpZ2F0aW9uIGlzIGRvbmUgYnkgY3J5cHRvZ3JhcGhpY2FsbHkgYmluZGluZyB0aGUgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgd2l0aCBhIGJyb3dzZXIgY29va2llLlxyXG4gICAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBwcmVzZXJ2ZXMgc29tZSBzdGF0ZSBvYmplY3Qgc2V0IGJ5IHRoZSBjbGllbnQgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgYW5kIG1ha2VzIGl0IGF2YWlsYWJsZSB0byB0aGUgY2xpZW50IGluIHRoZSByZXNwb25zZS5cclxuICAgICAqICAgIEl04oCZcyB0aGF0IHVuaXF1ZSBhbmQgbm9uLWd1ZXNzYWJsZSB2YWx1ZSB0aGF0IGFsbG93cyB5b3UgdG8gcHJldmVudCB0aGUgYXR0YWNrIGJ5IGNvbmZpcm1pbmcgaWYgdGhlIHZhbHVlIGNvbWluZyBmcm9tIHRoZSByZXNwb25zZSBtYXRjaGVzIHRoZSBvbmUgeW91IGV4cGVjdCAodGhlIG9uZSB5b3UgZ2VuZXJhdGVkIHdoZW4gaW5pdGlhdGluZyB0aGUgcmVxdWVzdCkuXHJcbiAgICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIGlzIGEgc3RyaW5nIHNvIHlvdSBjYW4gZW5jb2RlIGFueSBvdGhlciBpbmZvcm1hdGlvbiBpbiBpdC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbm9uY2VdXHJcbiAgICAgKiAgICBTdHJpbmcgdmFsdWUgdXNlZCB0byBhc3NvY2lhdGUgYSBDbGllbnQgc2Vzc2lvbiB3aXRoIGFuIElEIFRva2VuLCBhbmQgdG8gbWl0aWdhdGUgcmVwbGF5IGF0dGFja3MuXHJcbiAgICAgKiAgICBUaGUgdmFsdWUgaXMgcGFzc2VkIHRocm91Z2ggdW5tb2RpZmllZCBmcm9tIHRoZSBBdXRoZW50aWNhdGlvbiBSZXF1ZXN0IHRvIHRoZSBJRCBUb2tlbi5cclxuICAgICAqICAgIFN1ZmZpY2llbnQgZW50cm9weSBNVVNUIGJlIHByZXNlbnQgaW4gdGhlIG5vbmNlIHZhbHVlcyB1c2VkIHRvIHByZXZlbnQgYXR0YWNrZXJzIGZyb20gZ3Vlc3NpbmcgdmFsdWVzLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtyZXNwb25zZVR5cGU9J2NvZGUnXSBPcGVuSWQgcmVzcG9uc2UgdHlwZS4gVGhlIGRlZmF1bHQgaXMgYGNvZGVgIChDb2RlIEZsb3csIGludm9sdmluZyB0aGUgZnJvbnQtY2hhbm5lbCBhbmQgYmFja2NoYW5uZWwpLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbmF2aWdhdGVBdXRoZW50aWNhdGlvbihjbGllbnRJZDogc3RyaW5nLCByZWRpcmVjdFVyaTogc3RyaW5nLCBzY29wZTogT3BlbklkU2NvcGVQYXJzZXIsIG5hdmlnYXRvcjogTmF2aWdhdG9yLCBzZXNzaW9uOiBzdHJpbmcsIG9yaWdpbj86IHN0cmluZywgc3RhdGU/OiBzdHJpbmcsIG5vbmNlPzogc3RyaW5nLCByZXNwb25zZVR5cGUgPSAnY29kZScpIHtcclxuICAgICAgICBjb25zdCBhdXRoZW50aWNhdGVVcmwgPSB0aGlzLmdldEF1dGhlbnRpY2F0aW9uRW5kcG9pbnRVcmwoc2Vzc2lvbiwgc2NvcGUsIGNsaWVudElkLCByZWRpcmVjdFVyaSwgc3RhdGUsIG5vbmNlLCByZXNwb25zZVR5cGUpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJhdXRoX2FjdGl2ZVwiLCBcInRydWVcIik7XHJcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5uYXZpZ2F0ZShhdXRoZW50aWNhdGVVcmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBsb2dpblRocm91Z2hDeWJlcnVzS2V5RGFzaGJvYXJkKG9wdGlvbnM6IExvZ2luT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcclxuICAgICAgICAgICAgY2xpZW50X2lkOiBvcHRpb25zLmNsaWVudElkLFxyXG4gICAgICAgICAgICBzY29wZTogb3B0aW9ucy5zY29wZS5nZXRWYWx1ZSgpLFxyXG4gICAgICAgICAgICByZWRpcmVjdF91cmk6IG9wdGlvbnMucmVkaXJlY3RVcmksXHJcbiAgICAgICAgICAgIHJlc3BvbnNlX3R5cGU6IG9wdGlvbnMucmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICBzdGF0ZTogb3B0aW9ucy5zdGF0ZSxcclxuICAgICAgICAgICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG9wdGlvbnMuZGlzcGxheSB8fCAncGFnZScsXHJcbiAgICAgICAgICAgIHByb21wdDogb3B0aW9ucy5wcm9tcHQsXHJcbiAgICAgICAgICAgIHRoZW1lOiBvcHRpb25zLnRoZW1lLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGRhdGFbJ3N0YXRlJ10gPSBvcHRpb25zLnN0YXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMubm9uY2UpIHtcclxuICAgICAgICAgICAgZGF0YVsnbm9uY2UnXSA9IG9wdGlvbnMubm9uY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHRoaXMuX2dldFVybCgnYXV0aGVudGljYXRlJykpO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChwYXJhbWV0ZXJOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKHBhcmFtZXRlck5hbWUsIGRhdGFbcGFyYW1ldGVyTmFtZV0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhd2FpdCBvcHRpb25zLm5hdmlnYXRvci5uYXZpZ2F0ZSh1cmwuaHJlZik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0VXJsKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIChuZXcgVVJMKHBhdGgsIHRoaXMuX2FwaVVybCkpLmhyZWY7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0VXJsRW5jb2RlZEJvZHkoZGF0YTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkucmVkdWNlPHN0cmluZ1tdPigocmVzdWx0OiBzdHJpbmdbXSwga2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZW5jb2RlZEtleSA9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpO1xyXG4gICAgICAgICAgICBjb25zdCBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcclxuXHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGAke2VuY29kZWRLZXl9PSR7ZW5jb2RlZFZhbHVlfWApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9LCBbXSkuam9pbihcIiZcIilcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF90aW1lb3V0KG1zOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZW51bSBFcnJvckNvZGUge1xyXG4gIHVuZGVmaW5lZCA9IDEsXHJcbiAgdW5rbm93bl9lcnJvcixcclxuICBzZXJ2ZXJfZXJyb3IsXHJcbiAgd3JvbmdfanNvbixcclxuICBvcGVuYXBpX2Vycm9yLFxyXG4gIHJlc291cmNlX25vdF9mb3VuZCxcclxuICBvdHBfZ2VuZXJhdGlvbl9mYWlsdXJlLFxyXG4gIGludmFsaWRfcmVkaXJlY3RfdXJpLFxyXG4gIGludmFsaWRfY2xpZW50LFxyXG4gIHRvb19tYW55X2NhbGxzX2Vycm9yXHJcbn1cclxuXHJcbmNsYXNzIEN5YmVydXNLZXlFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBwcml2YXRlIF9jb2RlOiBFcnJvckNvZGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvZGU6IGtleW9mIHR5cGVvZiBFcnJvckNvZGUsIG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIobWVzc2FnZSlcclxuICAgIHRoaXMuX2NvZGUgPSBFcnJvckNvZGVbY29kZV07XHJcbiAgfVxyXG5cclxuICBnZXQgY29kZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIEVycm9yQ29kZVt0aGlzLl9jb2RlXTtcclxuICB9XHJcblxyXG4gIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFVua25vd25FcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7XHJcbiAgY29uc3RydWN0b3IoY29kZToga2V5b2YgdHlwZW9mIEVycm9yQ29kZSA9ICd1bmtub3duX2Vycm9yJywgbWVzc2FnZTogc3RyaW5nID0gJ1Vua25vd24gZXJyb3Igb2NjdXJlZC4nKSB7XHJcbiAgICBzdXBlcihjb2RlLCBtZXNzYWdlKVxyXG4gIH1cclxufVxyXG5jbGFzcyBUb29NYW55Q2FsbHNFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7XHJcbiAgY29uc3RydWN0b3IoY29kZToga2V5b2YgdHlwZW9mIEVycm9yQ29kZSA9ICd0b29fbWFueV9jYWxsc19lcnJvcicsIG1lc3NhZ2U6IHN0cmluZyA9ICdZb3VcXCd2ZSBkb25lIHRvbyBtYW55IGNhbGxzLicpIHtcclxuICAgIHN1cGVyKGNvZGUsIG1lc3NhZ2UpXHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBNaXNzaW5nUmVkaXJlY3RVcmkgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ2ludmFsaWRfcmVkaXJlY3RfdXJpJywgJ01pc3NpbmcgcmVkaXJlY3Rpb24gVVJJLicpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgV3JvbmdKc29uRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XHJcbmNsYXNzIE9wZW5BcGlFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cclxuY2xhc3MgUmVzb3VyY2VOb3RGb3VuZEVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxyXG5jbGFzcyBPVFBHZW5lcmF0aW9uRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XHJcbmNsYXNzIEludmFsaWRSZWRpcmVjdFVyaUVycm9yIGV4dGVuZHMgQ3liZXJ1c0tleUVycm9yIHsgfVxyXG5jbGFzcyBJbnZhbGlkQ2xpZW50RXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XHJcblxyXG5jb25zdCBNQVBQSU5HID0ge1xyXG4gIFtFcnJvckNvZGUudW5kZWZpbmVkXTogVW5rbm93bkVycm9yLFxyXG4gIFtFcnJvckNvZGUudW5rbm93bl9lcnJvcl06IFVua25vd25FcnJvcixcclxuICBbRXJyb3JDb2RlLnNlcnZlcl9lcnJvcl06IFVua25vd25FcnJvcixcclxuICBbRXJyb3JDb2RlLnVuZGVmaW5lZF06IFdyb25nSnNvbkVycm9yLFxyXG4gIFtFcnJvckNvZGUud3JvbmdfanNvbl06IFdyb25nSnNvbkVycm9yLFxyXG4gIFtFcnJvckNvZGUub3BlbmFwaV9lcnJvcl06IE9wZW5BcGlFcnJvcixcclxuICBbRXJyb3JDb2RlLnJlc291cmNlX25vdF9mb3VuZF06IFJlc291cmNlTm90Rm91bmRFcnJvcixcclxuICBbRXJyb3JDb2RlLm90cF9nZW5lcmF0aW9uX2ZhaWx1cmVdOiBPVFBHZW5lcmF0aW9uRXJyb3IsXHJcbiAgW0Vycm9yQ29kZS5pbnZhbGlkX3JlZGlyZWN0X3VyaV06IEludmFsaWRSZWRpcmVjdFVyaUVycm9yLFxyXG4gIFtFcnJvckNvZGUuaW52YWxpZF9jbGllbnRdOiBJbnZhbGlkQ2xpZW50RXJyb3IsXHJcbiAgW0Vycm9yQ29kZS50b29fbWFueV9jYWxsc19lcnJvcl06IFRvb01hbnlDYWxsc0Vycm9yXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVycm9yRmFjdG9yeShjb2RlOiBrZXlvZiB0eXBlb2YgRXJyb3JDb2RlLCBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICBjb25zdCBlbnVtX3R5cGUgPSBFcnJvckNvZGVbY29kZV07XHJcbiAgY29uc3QgRXJyb3JDb25zdHJ1Y3RvciA9IE1BUFBJTkdbZW51bV90eXBlXTtcclxuXHJcbiAgcmV0dXJuIG5ldyBFcnJvckNvbnN0cnVjdG9yKGNvZGUsIG1lc3NhZ2UpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGVycm9yRmFjdG9yeSxcclxuICBFcnJvckNvZGUsXHJcbiAgQ3liZXJ1c0tleUVycm9yLFxyXG4gIFVua25vd25FcnJvcixcclxuICBUb29NYW55Q2FsbHNFcnJvcixcclxuICBXcm9uZ0pzb25FcnJvcixcclxuICBPcGVuQXBpRXJyb3IsXHJcbiAgUmVzb3VyY2VOb3RGb3VuZEVycm9yLFxyXG4gIE9UUEdlbmVyYXRpb25FcnJvcixcclxuICBNaXNzaW5nUmVkaXJlY3RVcmlcclxufTtcclxuXHJcbiIsIi8qKlxyXG4gKiBBbiBhYnN0cmFjdGlvbiBmb3IgYSB0YWtlbiBnZW9sb2NhdGlvbiBtZWFzdXJlbWVudC5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgR2VvbG9jYXRpb25cclxuICovXHJcbmV4cG9ydCBjbGFzcyBHZW9sb2NhdGlvbiB7XHJcbiAgcHJpdmF0ZSBfbGF0aXR1ZGU6IG51bWJlcjtcclxuICBwcml2YXRlIF9sb25naXR1ZGU6IG51bWJlcjtcclxuICBwcml2YXRlIF9hY2N1cmFjeTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsYXRpdHVkZTogbnVtYmVyLCBsb25naXR1ZGU6IG51bWJlciwgYWNjdXJhY3k/OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2xhdGl0dWRlID0gbGF0aXR1ZGU7XHJcbiAgICB0aGlzLl9sb25naXR1ZGUgPSBsb25naXR1ZGU7XHJcbiAgICB0aGlzLl9hY2N1cmFjeSA9IGFjY3VyYWN5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgbGF0aXR1ZGUuXHJcbiAgICpcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBHZW9sb2NhdGlvblxyXG4gICAqL1xyXG4gIGdldCBsYXRpdHVkZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xhdGl0dWRlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBhIGxvbmdpdHVkZS5cclxuICAgKlxyXG4gICAqIEByZWFkb25seVxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIEdlb2xvY2F0aW9uXHJcbiAgICovXHJcbiAgZ2V0IGxvbmdpdHVkZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvbmdpdHVkZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgYW4gYWNjdXJhY3kgb2YgYSBtZWFzdXJlbWVudC5cclxuICAgKlxyXG4gICAqIEByZWFkb25seVxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIEdlb2xvY2F0aW9uXHJcbiAgICovXHJcbiAgZ2V0IGFjY3VyYWN5KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWNjdXJhY3k7XHJcbiAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9zZGsvYXBpJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZGsvZXJyb3JzJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZGsvbmF2aWdhdG9yL25hdmlnYXRvcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2RrL25hdmlnYXRvci9yZWRpcmVjdE5hdmlnYXRvcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2RrL3Njb3BlUGFyc2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZGsvc2Vzc2lvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2dlb1Byb3ZpZGVyL2dlbyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2dlb1Byb3ZpZGVyL2dlb1Byb3ZpZGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZGsvZ2VvUHJvdmlkZXIvaHRtbDVHZW9Qcm92aWRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2RrL2xvZ2luT3B0aW9ucyc7XHJcblxyXG5pbXBvcnQgeyBDeWJlcnVzS2V5QVBJIH0gZnJvbSAnLi9zZGsvYXBpJztcclxuZXhwb3J0IGRlZmF1bHQgQ3liZXJ1c0tleUFQSTsiLCJpbXBvcnQgeyBNaXNzaW5nUmVkaXJlY3RVcmkgfSBmcm9tICcuLi9lcnJvcnMnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0b3IgfSBmcm9tICcuL25hdmlnYXRvcic7XHJcblxyXG5cclxuLyoqXHJcbiAqIENsYXNzIGRlc2NyaWJlcyBob3cgT3BlbklEJ3MgQXV0aGVudGljYXRpb24gRW5kcG9pbnQgd2lsbCBiZSBoYW5kbGVkLlxyXG4gKiBUaGlzIGNsYXNzIGlzIHRoaWdodGVuIHRvIGEgZGVmYXVsdCBicm93c2VyIGJlaGF2aW91ciBmb3IgT3BlbklEIHByb3RvY29sIC0gYSByZWRpcmVjdGlvbi5cclxuICogV2hpY2ggbWVhbnMgdGhhdCB5b3VyIFVSTCB3aWxsIGJlIHRlbXBvcmFyaWx5IHJlcGxhY2VkIGJ5IHRoZSBBdXRoZW50aWNhdGlvbiBFbmRwb2ludFxyXG4gKiBhbmQgcmVwbGFjZWQgYWdhaW4gYnkgaXRzIHJlc3BvbnNlIC0gSFRUUCAzMDIuIFRoZSBuZXcgbG9jYXRpb24gd2lsbCBiZSB0aGUgb25lIHlvdSBkZWZpbmVkIGFzIHlvdXIgYHJlZGlyZWN0X3VyaWAuXHJcbiAqIFxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBSZWRpcmVjdE5hdmlnYXRvclxyXG4gKiBAaW1wbGVtZW50cyB7TmF2aWdhdG9yfVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlZGlyZWN0TmF2aWdhdG9yIGltcGxlbWVudHMgTmF2aWdhdG9yIHtcclxuICAvKipcclxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIGdpdmVuIFVSTC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgQXV0aGVudGljYXRpb24gRW5kcG9pbnQgVVJMLlxyXG4gICAqIEB0aHJvd3MgTWlzc2luZ1JlZGlyZWN0VXJpXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICogQG1lbWJlcm9mIFJlZGlyZWN0TmF2aWdhdG9yXHJcbiAgICovXHJcbiAgYXN5bmMgbmF2aWdhdGUodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgIHRocm93IG5ldyBNaXNzaW5nUmVkaXJlY3RVcmkoKVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcbn0iLCJcclxuLyoqXHJcbiAqIEhhbmR5IGNsYXNzIHRvIGRlZmluZSBhbiBPcGVuSUQncyBzY29wZS5cclxuICogU2NvcGVzIGFyZSB1c2VkIGJ5IGFuIGFwcGxpY2F0aW9uIGR1cmluZyBhdXRoZW50aWNhdGlvbiB0byBhdXRob3JpemUgYWNjZXNzIHRvIGEgdXNlcidzIGRldGFpbHMsXHJcbiAqIGxpa2UgbmFtZSBhbmQgcGljdHVyZS4gRWFjaCBzY29wZSByZXR1cm5zIGEgc2V0IG9mIHVzZXIgYXR0cmlidXRlcywgd2hpY2ggYXJlIGNhbGxlZCBjbGFpbXMuIFxyXG4gKiBcclxuICogWW91IGNhbiB1c2UgYWRkaXRpb25hbCB2YWx1ZXMgYGVtYWlsYCAoYWRkIGEgdXNlcidzIGVtYWlsIGNsYWltKSBhbmQgYHByb2ZpbGVgIChhZGQgdXNlciBmaXJzdCBhbmQgbGFzdCBuYW1lKS5cclxuICogXHJcbiAqIGBgYGphdmFzY3JpcHRcclxuICogY29uc3Qgc2NvcGVQYXJzZXIgPSBuZXcgT3BlbklkU2NvcGVQYXJzZXIoKTtcclxuICogY29uc3Qgc2NvcGUgPSBzY29wZVBhcnNlci5hZGRFbWFpbCgpLmFkZFByb2ZpbGUoKS5nZXRWYWx1ZSgpO1xyXG4gKiBgYGBcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgT3BlbklkU2NvcGVQYXJzZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBPcGVuSWRTY29wZVBhcnNlciB7XHJcbiAgcHJpdmF0ZSBfc2NvcGU6IEFycmF5PHN0cmluZz47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fc2NvcGUgPSBbJ29wZW5pZCddO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBgZW1haWxgIHNjb3BlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge3RoaXN9XHJcbiAgICogQG1lbWJlcm9mIE9wZW5JZFNjb3BlUGFyc2VyXHJcbiAgICovXHJcbiAgcHVibGljIGFkZEVtYWlsKCk6IHRoaXMge1xyXG4gICAgaWYgKHRoaXMuX3Njb3BlLmluY2x1ZGVzKCdlbWFpbCcpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3Njb3BlLnB1c2goJ2VtYWlsJyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGBwcm9maWxlYCBzY29wZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAqIEBtZW1iZXJvZiBPcGVuSWRTY29wZVBhcnNlclxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRQcm9maWxlKCk6IHRoaXMge1xyXG4gICAgaWYgKHRoaXMuX3Njb3BlLmluY2x1ZGVzKCdwcm9maWxlJykpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fc2NvcGUucHVzaCgncHJvZmlsZScpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBmb3JtYXR0ZWQgc2NvcGUgdmFsdWUsIGUuZy4gYG9wZW5pZCBlbWFpbGAuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBPcGVuSWRTY29wZVBhcnNlclxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Njb3BlLmpvaW4oJyAnKTtcclxuICB9XHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIFNlc3Npb25SZXNwb25zZSB7XHJcbiAgc2Vzc2lvbl9pZDogc3RyaW5nO1xyXG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBEYXRhIGNsYXNzIHJlcHJlc2VudGluZyBhIEN5YmVydXMgS2V5IHNlc3Npb24uXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIFNlc3Npb25cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTZXNzaW9uIHtcclxuICAvKipcclxuICAgKiBTZXNzaW9uJ3MgdW5pcXVlIGlkZW50aWZpZXIuIEl0J3MgdmFsaWQgdXAgdG8gMjBzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgU2Vzc2lvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXNzaW9uSWQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQSBVVEMgZGF0ZSByZXByZXNlbnRpbmcgYSBkYXRlIChhbmQgdGltZSkgd2hlbiBhIHNlc3Npb24gaGFzIGJlZW4gY3JlYXRlZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtEYXRlfVxyXG4gICAqIEBtZW1iZXJvZiBTZXNzaW9uXHJcbiAgICovXHJcbiAgcHVibGljIGNyZWF0ZWRBdDogRGF0ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoanNvbjogU2Vzc2lvblJlc3BvbnNlKSB7XHJcbiAgICB0aGlzLnNlc3Npb25JZCA9IGpzb24uc2Vzc2lvbl9pZDtcclxuICAgIHRoaXMuY3JlYXRlZEF0ID0gbmV3IERhdGUoanNvbi5jcmVhdGVkX2F0KTtcclxuICB9XHJcbn0iLCJpbXBvcnQge0dlb2xvY2F0aW9ufSBmcm9tICcuL2dlbyc7XHJcbmltcG9ydCB7R2VvUHJvdmlkZXJ9IGZyb20gJy4vZ2VvUHJvdmlkZXInO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBwcm92aWRlcyBhIGdlb2xvY2FsaXphdGlvbiBtZWFzdXJlbWVudC5cclxuICogSXQgdXNlcyBhIEhUTUw1J3MgYEdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigpYCBtZXRob2QuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIEhUTUw1R2VvUHJvdmlkZXJcclxuICogQGltcGxlbWVudHMge0dlb1Byb3ZpZGVyfVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEhUTUw1R2VvUHJvdmlkZXIgaW1wbGVtZW50cyBHZW9Qcm92aWRlciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9lbmFibGVIaWdoQWNjdXJhY3k6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9uYXZpZ2F0b3I6IE5hdmlnYXRvcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX251bU9mVHJpZXNCZWZvcmVHcHNBY3RpdmF0ZXM6IG51bWJlciA9IDI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9vblBlcm1pc3Npb25EaWFsb2c/OiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVmYXVsdE1lc3NhZ2UgPSBcIkN5YmVydXMgS2V5IHdpZGdldCB3b3VsZCBsaWtlIHRvIGFjY2VzcyB5b3VyIGxvY2F0aW9uXCIgK1xyXG4gICAgICAgIFwiIHRvIHVzZSBnZW9sb2NhdGlvbiB0cmFja2luZyB0byBhc3NlcnQgc3VjY2Vzc2Z1bCBhdXRoZW50aWNhdGlvbi5cIlxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBIVE1MNUdlb1Byb3ZpZGVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VuYWJsZUhpZ2hBY2N1cmFjeT1mYWxzZV0gIEZvcmNlcyBoaWdoIGFjY3VyYWN5IG9mIHRoZSBnZW9sb2NhdGlvbi4gSXQgbWF5IHRha2UgbG9uZ2VyLlxyXG4gICAgICogQHBhcmFtIHtOYXZpZ2F0b3J9IFtuYXZpZ2F0b3I9d2luZG93Lm5hdmlnYXRvcl1cclxuICAgICAqIEBwYXJhbSBudW1PZlRyaWVzQmVmb3JlR3BzQWN0aXZhdGVzIFRoZSBHUFMgbG9jYWxpemF0aW9uIHdpbGwgYmUgdXNlZCBvbmx5IGFmdGVyIG4gdW5zdWNjZXNzZnVsIHRyaWVzLlxyXG4gICAgICogQnkgdW5zdWNjZXNzZnVsIHRyeSB3ZSBkZWZpbmUgdGhlIG51bWJlciBvZiB0aW1lcyB0aGUgYXV0aGVudGljYXRpb24gcmVzdWx0ZWQgaW4gc2Vzc2lvbiBub3QgZm91bmQgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gb25QZXJtaXNzaW9uRGlhbG9nIExlYXZlIGFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGRpYWxvZyB0byBhcHBlYXIgYmVmb3JlIHNpdGVcclxuICAgICAqIGFza3MgZm9yIGxvY2FsaXphdGlvbiBwZXJtaXNzaW9uIGZvciB0aGUgY2FsbGVyIHRvIGhhbmRsZS4gSXQgdGFrZXMgYSBmdW5jdGlvbiB3aXRoIGRlZmF1bHQgbWVzc2FnZSBhcyBwYXJhbWV0ZXJcclxuICAgICAqIEBtZW1iZXJvZiBIVE1MNUdlb1Byb3ZpZGVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGVuYWJsZUhpZ2hBY2N1cmFjeSA9IGZhbHNlLCBvblBlcm1pc3Npb25EaWFsb2c6IEZ1bmN0aW9uID0gbnVsbCwgbnVtT2ZUcmllc0JlZm9yZUdwc0FjdGl2YXRlczogbnVtYmVyID0gMiwgbmF2aWdhdG9yOiBOYXZpZ2F0b3IgPSB3aW5kb3cubmF2aWdhdG9yKSB7XHJcbiAgICAgICAgdGhpcy5fZW5hYmxlSGlnaEFjY3VyYWN5ID0gZW5hYmxlSGlnaEFjY3VyYWN5O1xyXG4gICAgICAgIHRoaXMuX25hdmlnYXRvciA9IG5hdmlnYXRvcjtcclxuICAgICAgICB0aGlzLl9udW1PZlRyaWVzQmVmb3JlR3BzQWN0aXZhdGVzID0gbnVtT2ZUcmllc0JlZm9yZUdwc0FjdGl2YXRlcztcclxuICAgICAgICB0aGlzLl9vblBlcm1pc3Npb25EaWFsb2cgPSBvblBlcm1pc3Npb25EaWFsb2c7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIGdlb2xvY2FsaXphdGlvbiBtZWFzdXJlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxHZW9sb2NhdGlvbj59IEdlb2xvY2FsaXphdGlvbiBtZWFzdXJlbWVudC5cclxuICAgICAqIEBtZW1iZXJvZiBIVE1MNUdlb1Byb3ZpZGVyXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGdldEdlbygpOiBQcm9taXNlPEdlb2xvY2F0aW9uPiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBlcm1pc3Npb25TdGF0dXMgPSBhd2FpdCBuYXZpZ2F0b3IucGVybWlzc2lvbnMucXVlcnkoe1xyXG4gICAgICAgICAgICBuYW1lOiAnZ2VvbG9jYXRpb24nXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChwZXJtaXNzaW9uU3RhdHVzLnN0YXRlID09IFwiZ3JhbnRlZFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2dldEdlbyh0aGlzLl9lbmFibGVIaWdoQWNjdXJhY3kpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBlcm1pc3Npb25TdGF0dXMuc3RhdGUgPT0gXCJkZW5pZWRcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBlcm1pc3Npb25TdGF0dXMuc3RhdGUgPT0gXCJwcm9tcHRcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9kb0lTaG93Q3VzdG9tUHJvbXB0KCkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29uUGVybWlzc2lvbkRpYWxvZylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vblBlcm1pc3Npb25EaWFsb2codGhpcy5kZWZhdWx0TWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCh0aGlzLmRlZmF1bHRNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fZ2V0R2VvKHRoaXMuX2VuYWJsZUhpZ2hBY2N1cmFjeSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIF9kb0lTaG93Q3VzdG9tUHJvbXB0KCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhfY291bnRlclwiKTtcclxuICAgICAgICBpZiAoZGF0YSA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KGRhdGEsIDEwKVxyXG5cclxuICAgICAgICByZXR1cm4gIWlzTmFOKHZhbHVlKSAmJiB2YWx1ZSA+PSB0aGlzLl9udW1PZlRyaWVzQmVmb3JlR3BzQWN0aXZhdGVzO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgX2dldEdlbyhlbmFibGVIaWdoQWNjdXJhY3k6IGJvb2xlYW4pOiBQcm9taXNlPEdlb2xvY2F0aW9uPiB7XHJcbiAgICAgICAgY29uc3Qge2Nvb3Jkc30gPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX25hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocmVzb2x2ZSwgcmVqZWN0LCB7ZW5hYmxlSGlnaEFjY3VyYWN5fSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBHZW9sb2NhdGlvbihjb29yZHMubGF0aXR1ZGUsIGNvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5hY2N1cmFjeSk7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5hdmlnYXRvciB9IGZyb20gJy4vbmF2aWdhdG9yL25hdmlnYXRvcic7XHJcbmltcG9ydCB7IE9wZW5JZFNjb3BlUGFyc2VyIH0gZnJvbSAnLi9zY29wZVBhcnNlcic7XHJcblxyXG5cclxuLyoqXHJcbiAqIExvZ2luIG9wdGlvbnMuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIExvZ2luT3B0aW9uc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExvZ2luT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIFB1YmxpYyBjbGllbnQgSUQgZ2VuZXJhdGVkIGR1cmluZyBjcmVhdGluZyB0aGUgYWNjb3VudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xyXG4gICAqL1xyXG4gIHJlYWRvbmx5IGNsaWVudElkOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWRpcmVjdFVyaSBSZWRpcmVjdCBVUkkgdG8gd2hpY2ggdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudC4gSWYgdGhlIHZhbHVlIGlzIG5vdCB3aGl0ZWxpc3RlZCB0aGVuIHRoZSByZXF1ZXN0IHdpbGwgZmFpbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIExvZ2luT3B0aW9uc1xyXG4gICAqL1xyXG4gIHJlYWRvbmx5IHJlZGlyZWN0VXJpOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T3BlbklkU2NvcGVQYXJzZXJ9IHNjb3BlIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLlxyXG4gICAqICAgIE9uY2UgdGhlIHVzZXIgYXV0aG9yaXplcyB0aGUgcmVxdWVzdGVkIHNjb3BlcywgdGhlIGNsYWltcyBhcmUgcmV0dXJuZWQgaW4gYW4gSUQgVG9rZW4uXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcclxuICAgKi9cclxuICByZWFkb25seSBzY29wZTogT3BlbklkU2NvcGVQYXJzZXI7XHJcblxyXG4gIC8qKlxyXG4gICogQHBhcmFtIHtOYXZpZ2F0b3J9IG5hdmlnYXRvciBDbGFzcyBkZXNjcmliZXMgYW4gYWN0aW9uIHRoYXQgd2lsbCBiZSBkb25lIHRvIEF1dGhlbnRpY2F0aW9uIFVSTC4gRm9yIGJyb3dzZXJzIGl0IHdpbGwgYmUgYSBwYWdlIHJlZGlyZWN0aW9uLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgbmF2aWdhdG9yOiBOYXZpZ2F0b3I7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JpZ2luXSBUaGUgb3JpZ2luIGRvbWFpbiBvZiB0aGUgcmVxdWVzdCBiZWluZyBtYWRlLiBJZiBgbnVsbGAgdGhlbiB0aGUgUmVmZXJlciBoZWFkZXIgd2lsbCBiZSB1c2VkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgb3JpZ2luOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc3RhdGVdXHJcbiAgICogICAgUkVDT01NRU5ERUQuIE9wYXF1ZSB2YWx1ZSB1c2VkIHRvIG1haW50YWluIHN0YXRlIGJldHdlZW4gdGhlIHJlcXVlc3QgYW5kIHRoZSBjYWxsYmFjay4gVHlwaWNhbGx5LCBDU1JGLCBYU1JGIG1pdGlnYXRpb24gaXMgZG9uZSBieSBjcnlwdG9ncmFwaGljYWxseSBiaW5kaW5nIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciB3aXRoIGEgYnJvd3NlciBjb29raWUuXHJcbiAgICogICAgVGhlIHN0YXRlIHBhcmFtZXRlciBwcmVzZXJ2ZXMgc29tZSBzdGF0ZSBvYmplY3Qgc2V0IGJ5IHRoZSBjbGllbnQgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgYW5kIG1ha2VzIGl0IGF2YWlsYWJsZSB0byB0aGUgY2xpZW50IGluIHRoZSByZXNwb25zZS5cclxuICAgKiAgICBJdOKAmXMgdGhhdCB1bmlxdWUgYW5kIG5vbi1ndWVzc2FibGUgdmFsdWUgdGhhdCBhbGxvd3MgeW91IHRvIHByZXZlbnQgdGhlIGF0dGFjayBieSBjb25maXJtaW5nIGlmIHRoZSB2YWx1ZSBjb21pbmcgZnJvbSB0aGUgcmVzcG9uc2UgbWF0Y2hlcyB0aGUgb25lIHlvdSBleHBlY3QgKHRoZSBvbmUgeW91IGdlbmVyYXRlZCB3aGVuIGluaXRpYXRpbmcgdGhlIHJlcXVlc3QpLlxyXG4gICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgaXMgYSBzdHJpbmcgc28geW91IGNhbiBlbmNvZGUgYW55IG90aGVyIGluZm9ybWF0aW9uIGluIGl0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgc3RhdGU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub25jZV1cclxuICAgKiAgICBTdHJpbmcgdmFsdWUgdXNlZCB0byBhc3NvY2lhdGUgYSBDbGllbnQgc2Vzc2lvbiB3aXRoIGFuIElEIFRva2VuLCBhbmQgdG8gbWl0aWdhdGUgcmVwbGF5IGF0dGFja3MuXHJcbiAgICogICAgVGhlIHZhbHVlIGlzIHBhc3NlZCB0aHJvdWdoIHVubW9kaWZpZWQgZnJvbSB0aGUgQXV0aGVudGljYXRpb24gUmVxdWVzdCB0byB0aGUgSUQgVG9rZW4uXHJcbiAgICogICAgU3VmZmljaWVudCBlbnRyb3B5IE1VU1QgYmUgcHJlc2VudCBpbiB0aGUgbm9uY2UgdmFsdWVzIHVzZWQgdG8gcHJldmVudCBhdHRhY2tlcnMgZnJvbSBndWVzc2luZyB2YWx1ZXMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcclxuICAgKi9cclxuICByZWFkb25seSBub25jZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3Jlc3BvbnNlVHlwZT0nY29kZSddIE9wZW5JZCByZXNwb25zZSB0eXBlLiBUaGUgZGVmYXVsdCBpcyBgY29kZWAgKENvZGUgRmxvdywgaW52b2x2aW5nIHRoZSBmcm9udC1jaGFubmVsIGFuZCBiYWNrY2hhbm5lbCkuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcclxuICAgKi9cclxuICByZWFkb25seSByZXNwb25zZVR5cGU6IHN0cmluZyA9ICdjb2RlJztcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXkgSXQgc3BlY2lmaWVzIGhvdyB0aGUgQXV0aG9yaXphdGlvbiBTZXJ2ZXIgZGlzcGxheXMgdGhlIGF1dGhlbnRpY2F0aW9uIGFuZCBjb25zZW50IHVzZXIgaW50ZXJmYWNlIHBhZ2VzIHRvIHRoZSBFbmQtVXNlci5cclxuICAgKiAgIERlZmF1bHQgYW5kIHRoZSBvbmx5IHN1cHBvcnRlZCB2YWx1ZSBpcyBgcGFnZWAuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcclxuICAgKi9cclxuICByZWFkb25seSBkaXNwbGF5OiBzdHJpbmcgPSAncGFnZSdcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb21wdCBTcGFjZSBkZWxpbWl0ZWQsIGNhc2Ugc2Vuc2l0aXZlIGxpc3Qgb2Ygc3RyaW5nIHZhbHVlcyB0aGF0IHNwZWNpZmllcyB3aGV0aGVyIHRoZSBBdXRob3JpemF0aW9uIFNlcnZlclxyXG4gICAqICAgcHJvbXB0cyB0aGUgRW5kLVVzZXIgZm9yIHJlYXV0aGVudGljYXRpb24gYW5kIGNvbnNlbnQuIFRoZSBkZWZpbmVkIHZhbHVlcyBhcmU6IGBsb2dpbmAsIGBub25lYC5cclxuICAgKiAgIERlZmF1bHQgaXMgYGxvZ2luLG5vbmVgLiBDYW4ndCBiZSBjaGFuZ2VkIGZvciBub3cuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBMb2dpbk9wdGlvbnNcclxuICAgKi9cclxuICByZWFkb25seSBwcm9tcHQ6IHN0cmluZyA9ICdsb2dpbixub25lJ1xyXG5cclxuICAvKipcclxuICAgKiBUaGVtZSBvZiB0aGUgbG9naW4gcGFnZSBvZiBDeWJlcnVzIEtleSBEYXNoYm9hcmQuIERlZmF1bHQgaXMgYGRlZmF1bHRgLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTG9naW5PcHRpb25zXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgdGhlbWU6IHN0cmluZyA9ICdkZWZhdWx0JztcclxufSJdLCJzb3VyY2VSb290IjoiIn0=