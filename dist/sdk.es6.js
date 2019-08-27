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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __webpack_require__(0);
const session_1 = __webpack_require__(2);
let createSessionLastTimestamp = null;
/**
 * Cyberus Key API which allows you to do a delegate login with OpenId protocol.
 *
 * @class CyberusKeyAPI
 */
class CyberusKeyAPI {
    /**
     * Creates an instance of CyberusKeyAPI.
     * @param {string} hostUrl Base URL of the host server, e.g. `https://auth-server-demo.cyberuslabs.net`
     * @memberof CyberusKeyAPI
     */
    constructor(hostUrl) {
        this._apiUrl = new URL('/api/v2/', hostUrl);
    }
    /**
     * Creates the Cyberus Key session.
     *
     * @param {string} clientId Public client ID generated during creating the account.
     * @param {boolean} [useGeolocation=false] Set `true` if you want to pass optional geolocation measurements.
     *    They can be later use to compare them against the mobile's measurements (if you have set `fail_on_geo_mismatch`).
     *    Those measurements can be used also to general improvement of the security.
     * @throws WrongJsonError, OpenApiError, ResourceNotFoundError, OTPGenerationError, UnknownError
     * @returns {Promise<Session>} The Cyberus Key session.
     * @memberof CyberusKeyAPI
     */
    createSession(clientId, useGeolocation = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this._raiseWhenCalledTooManyTimes(createSessionLastTimestamp);
            const data = { client_id: clientId };
            const response = yield fetch(this._getUrl('sessions'), {
                method: 'POST',
                body: this._getUrlEncodedBody(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            const json = yield response.json();
            createSessionLastTimestamp = this._timestamp();
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
     * @returns OpenID's Authentication endpoint URL
     * @throws InvalidRedirectUriError, InvalidClientError, ResourceNotFoundError
     * @memberof CyberusKeyAPI
     */
    getAuthenticationEndpointUrl(session, scope, clientId, redirectUri, state, nonce) {
        const data = {
            session_id: session.sessionId,
            client_id: clientId,
            scope: scope.getValue(),
            redirect_uri: redirectUri,
            response_type: 'code'
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
     * @param {string} [state]
     *    RECOMMENDED. Opaque value used to maintain state between the request and the callback. Typically, CSRF, XSRF mitigation is done by cryptographically binding the value of this parameter with a browser cookie.
     *    The state parameter preserves some state object set by the client in the Authentication request and makes it available to the client in the response.
     *    It’s that unique and non-guessable value that allows you to prevent the attack by confirming if the value coming from the response matches the one you expect (the one you generated when initiating the request).
     *    The state parameter is a string so you can encode any other information in it.
     * @param {string} [nonce]
     *    String value used to associate a Client session with an ID Token, and to mitigate replay attacks.
     *    The value is passed through unmodified from the Authentication Request to the ID Token.
     *    Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.
     * @memberof CyberusKeyAPI
     */
    authenticate(clientId, redirectUri, scope, soundEmitter, navigator, state, nonce) {
        return __awaiter(this, void 0, void 0, function* () {
            const session = yield this.createSession(clientId);
            const sound = yield this.getOTPSound(session);
            const authenticateUrl = this.getAuthenticationEndpointUrl(session, scope, clientId, redirectUri, state, nonce);
            console.info(`Navigating to ${authenticateUrl}.`);
            yield navigator.navigate(authenticateUrl);
            yield this._timeout(1000);
            console.info(`Sound emitting.`);
            yield soundEmitter.emit(sound);
        });
    }
    _getUrl(path) {
        return (new URL(path, this._apiUrl)).href;
    }
    _timestamp() {
        return (new Date()).getTime();
    }
    _raiseWhenCalledTooManyTimes(lastTimestamp) {
        if (!lastTimestamp) {
            return;
        }
        if (this._timestamp() - lastTimestamp < 1000 * 10) {
            throw new errors_1.TooManyCallsError();
        }
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

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(1));
__export(__webpack_require__(4));
__export(__webpack_require__(0));
__export(__webpack_require__(5));
__export(__webpack_require__(6));
__export(__webpack_require__(2));
const api_1 = __webpack_require__(1);
exports.default = api_1.CyberusKeyAPI;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class WebAudioSoundEmitter {
    emit(sound) {
        return __awaiter(this, void 0, void 0, function* () {
            let context;
            try {
                context = new AudioContext();
            }
            catch (e) {
                console.error('AudioContext is not supported.');
                throw e;
            }
            const audioBuffer = yield context.decodeAudioData(sound);
            const source = context.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(context.destination);
            yield (new Promise((resolve) => {
                source.onended = resolve;
                source.start(0);
            }));
        });
    }
}
exports.WebAudioSoundEmitter = WebAudioSoundEmitter;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __webpack_require__(0);
class RedirectNavigator {
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
class OpenIdScopeParser {
    constructor() {
        this._scope = ['openid'];
    }
    addEmail() {
        if (this._scope.includes('email')) {
            return this;
        }
        this._scope.push('email');
        return this;
    }
    addProfile() {
        if (this._scope.includes('profile')) {
            return this;
        }
        this._scope.push('profile');
        return this;
    }
    getValue() {
        return this._scope.join(' ');
    }
}
exports.OpenIdScopeParser = OpenIdScopeParser;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL2Vycm9ycy50cyIsIndlYnBhY2s6Ly9jeWJlcnVza2V5LXNkay8uL3NyYy9zZGsvYXBpLnRzIiwid2VicGFjazovL2N5YmVydXNrZXktc2RrLy4vc3JjL3Nkay9zZXNzaW9uLnRzIiwid2VicGFjazovL2N5YmVydXNrZXktc2RrLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2N5YmVydXNrZXktc2RrLy4vc3JjL3Nkay9lbWl0dGVyL3dlYkF1ZGlvU291bmRFbWl0dGVyLnRzIiwid2VicGFjazovL2N5YmVydXNrZXktc2RrLy4vc3JjL3Nkay9uYXZpZ2F0b3IvcmVkaXJlY3ROYXZpZ2F0b3IudHMiLCJ3ZWJwYWNrOi8vY3liZXJ1c2tleS1zZGsvLi9zcmMvc2RrL3Njb3BlUGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNB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SUFDdEIsUUFBUSxDQUFDLEdBQVc7O1lBQ3hCLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1IsTUFBTSxJQUFJLDJCQUFrQixFQUFFO2FBQy9CO1lBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBRTNCLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNCLENBQUM7S0FBQTtDQUNGO0FBVkQsOENBVUM7Ozs7Ozs7Ozs7QUNkRCxNQUFhLGlCQUFpQjtJQUc1QjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLFVBQVU7UUFDZixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU1QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7QUE5QkQsOENBOEJDIiwiZmlsZSI6InNkay5lczYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImN5YmVydXNrZXktc2RrXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImN5YmVydXNrZXktc2RrXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImN5YmVydXNrZXktc2RrXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJlbnVtIEVycm9yQ29kZSB7XG4gIHVuZGVmaW5lZCA9IDEsXG4gIHVua25vd25fZXJyb3IsXG4gIHNlcnZlcl9lcnJvcixcbiAgd3JvbmdfanNvbixcbiAgb3BlbmFwaV9lcnJvcixcbiAgcmVzb3VyY2Vfbm90X2ZvdW5kLFxuICBvdHBfZ2VuZXJhdGlvbl9mYWlsdXJlLFxuICBpbnZhbGlkX3JlZGlyZWN0X3VyaSxcbiAgaW52YWxpZF9jbGllbnQsXG4gIHRvb19tYW55X2NhbGxzX2Vycm9yXG59XG5cbmNsYXNzIEN5YmVydXNLZXlFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgcHJpdmF0ZSBfY29kZTogRXJyb3JDb2RlO1xuXG4gIGNvbnN0cnVjdG9yKGNvZGU6IGtleW9mIHR5cGVvZiBFcnJvckNvZGUsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKG1lc3NhZ2UpXG4gICAgdGhpcy5fY29kZSA9IEVycm9yQ29kZVtjb2RlXTtcbiAgfVxufVxuXG5jbGFzcyBVbmtub3duRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3Ige1xuICBjb25zdHJ1Y3Rvcihjb2RlOiBrZXlvZiB0eXBlb2YgRXJyb3JDb2RlID0gJ3Vua25vd25fZXJyb3InLCBtZXNzYWdlOiBzdHJpbmcgPSAnVW5rbm93biBlcnJvciBvY2N1cmVkLicpIHtcbiAgICBzdXBlcihjb2RlLCBtZXNzYWdlKVxuICB9XG59XG5jbGFzcyBUb29NYW55Q2FsbHNFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGNvZGU6IGtleW9mIHR5cGVvZiBFcnJvckNvZGUgPSAndG9vX21hbnlfY2FsbHNfZXJyb3InLCBtZXNzYWdlOiBzdHJpbmcgPSAnWW91XFwndmUgZG9uZSB0b28gbWFueSBjYWxscy4nKSB7XG4gICAgc3VwZXIoY29kZSwgbWVzc2FnZSlcbiAgfVxufVxuXG5jbGFzcyBNaXNzaW5nUmVkaXJlY3RVcmkgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignaW52YWxpZF9yZWRpcmVjdF91cmknLCAnTWlzc2luZyByZWRpcmVjdGlvbiBVUkkuJyk7XG4gIH1cbn1cblxuY2xhc3MgV3JvbmdKc29uRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XG5jbGFzcyBPcGVuQXBpRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XG5jbGFzcyBSZXNvdXJjZU5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XG5jbGFzcyBPVFBHZW5lcmF0aW9uRXJyb3IgZXh0ZW5kcyBDeWJlcnVzS2V5RXJyb3IgeyB9XG5jbGFzcyBJbnZhbGlkUmVkaXJlY3RVcmlFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cbmNsYXNzIEludmFsaWRDbGllbnRFcnJvciBleHRlbmRzIEN5YmVydXNLZXlFcnJvciB7IH1cblxuY29uc3QgTUFQUElORyA9IHtcbiAgW0Vycm9yQ29kZS51bmRlZmluZWRdOiBVbmtub3duRXJyb3IsXG4gIFtFcnJvckNvZGUudW5rbm93bl9lcnJvcl06IFVua25vd25FcnJvcixcbiAgW0Vycm9yQ29kZS5zZXJ2ZXJfZXJyb3JdOiBVbmtub3duRXJyb3IsXG4gIFtFcnJvckNvZGUudW5kZWZpbmVkXTogV3JvbmdKc29uRXJyb3IsXG4gIFtFcnJvckNvZGUud3JvbmdfanNvbl06IFdyb25nSnNvbkVycm9yLFxuICBbRXJyb3JDb2RlLm9wZW5hcGlfZXJyb3JdOiBPcGVuQXBpRXJyb3IsXG4gIFtFcnJvckNvZGUucmVzb3VyY2Vfbm90X2ZvdW5kXTogUmVzb3VyY2VOb3RGb3VuZEVycm9yLFxuICBbRXJyb3JDb2RlLm90cF9nZW5lcmF0aW9uX2ZhaWx1cmVdOiBPVFBHZW5lcmF0aW9uRXJyb3IsXG4gIFtFcnJvckNvZGUuaW52YWxpZF9yZWRpcmVjdF91cmldOiBJbnZhbGlkUmVkaXJlY3RVcmlFcnJvcixcbiAgW0Vycm9yQ29kZS5pbnZhbGlkX2NsaWVudF06IEludmFsaWRDbGllbnRFcnJvcixcbiAgW0Vycm9yQ29kZS50b29fbWFueV9jYWxsc19lcnJvcl06IFRvb01hbnlDYWxsc0Vycm9yXG59XG5cbmZ1bmN0aW9uIGVycm9yRmFjdG9yeShjb2RlOiBrZXlvZiB0eXBlb2YgRXJyb3JDb2RlLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgY29uc3QgZW51bV90eXBlID0gRXJyb3JDb2RlW2NvZGVdO1xuICBjb25zdCBFcnJvckNvbnN0cnVjdG9yID0gTUFQUElOR1tlbnVtX3R5cGVdO1xuXG4gIHJldHVybiBuZXcgRXJyb3JDb25zdHJ1Y3Rvcihjb2RlLCBtZXNzYWdlKTtcbn1cblxuZXhwb3J0IHtcbiAgZXJyb3JGYWN0b3J5LFxuICBFcnJvckNvZGUsXG4gIEN5YmVydXNLZXlFcnJvcixcbiAgVW5rbm93bkVycm9yLFxuICBUb29NYW55Q2FsbHNFcnJvcixcbiAgV3JvbmdKc29uRXJyb3IsXG4gIE9wZW5BcGlFcnJvcixcbiAgUmVzb3VyY2VOb3RGb3VuZEVycm9yLFxuICBPVFBHZW5lcmF0aW9uRXJyb3IsXG4gIE1pc3NpbmdSZWRpcmVjdFVyaVxufTtcblxuIiwiaW1wb3J0IHsgU291bmRFbWl0dGVyIH0gZnJvbSAnLi9lbWl0dGVyL3NvdW5kRW1pdHRlcic7XG5pbXBvcnQgeyBlcnJvckZhY3RvcnksIFRvb01hbnlDYWxsc0Vycm9yLCBVbmtub3duRXJyb3IgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBOYXZpZ2F0b3IgfSBmcm9tICcuL25hdmlnYXRvci9uYXZpZ2F0b3InO1xuaW1wb3J0IHsgT3BlbklkU2NvcGVQYXJzZXIgfSBmcm9tICcuL3Njb3BlUGFyc2VyJztcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICcuL3Nlc3Npb24nO1xuXG5sZXQgY3JlYXRlU2Vzc2lvbkxhc3RUaW1lc3RhbXA6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4vKipcbiAqIEN5YmVydXMgS2V5IEFQSSB3aGljaCBhbGxvd3MgeW91IHRvIGRvIGEgZGVsZWdhdGUgbG9naW4gd2l0aCBPcGVuSWQgcHJvdG9jb2wuXG4gKlxuICogQGNsYXNzIEN5YmVydXNLZXlBUElcbiAqL1xuZXhwb3J0IGNsYXNzIEN5YmVydXNLZXlBUEkge1xuICBwcml2YXRlIF9hcGlVcmw6IFVSTDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDeWJlcnVzS2V5QVBJLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaG9zdFVybCBCYXNlIFVSTCBvZiB0aGUgaG9zdCBzZXJ2ZXIsIGUuZy4gYGh0dHBzOi8vYXV0aC1zZXJ2ZXItZGVtby5jeWJlcnVzbGFicy5uZXRgXG4gICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihob3N0VXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcGlVcmwgPSBuZXcgVVJMKCcvYXBpL3YyLycsIGhvc3RVcmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIEN5YmVydXMgS2V5IHNlc3Npb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRJZCBQdWJsaWMgY2xpZW50IElEIGdlbmVyYXRlZCBkdXJpbmcgY3JlYXRpbmcgdGhlIGFjY291bnQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VzZUdlb2xvY2F0aW9uPWZhbHNlXSBTZXQgYHRydWVgIGlmIHlvdSB3YW50IHRvIHBhc3Mgb3B0aW9uYWwgZ2VvbG9jYXRpb24gbWVhc3VyZW1lbnRzLlxuICAgKiAgICBUaGV5IGNhbiBiZSBsYXRlciB1c2UgdG8gY29tcGFyZSB0aGVtIGFnYWluc3QgdGhlIG1vYmlsZSdzIG1lYXN1cmVtZW50cyAoaWYgeW91IGhhdmUgc2V0IGBmYWlsX29uX2dlb19taXNtYXRjaGApLlxuICAgKiAgICBUaG9zZSBtZWFzdXJlbWVudHMgY2FuIGJlIHVzZWQgYWxzbyB0byBnZW5lcmFsIGltcHJvdmVtZW50IG9mIHRoZSBzZWN1cml0eS5cbiAgICogQHRocm93cyBXcm9uZ0pzb25FcnJvciwgT3BlbkFwaUVycm9yLCBSZXNvdXJjZU5vdEZvdW5kRXJyb3IsIE9UUEdlbmVyYXRpb25FcnJvciwgVW5rbm93bkVycm9yXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFNlc3Npb24+fSBUaGUgQ3liZXJ1cyBLZXkgc2Vzc2lvbi5cbiAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcbiAgICovXG4gIHB1YmxpYyBhc3luYyBjcmVhdGVTZXNzaW9uKGNsaWVudElkOiBzdHJpbmcsIHVzZUdlb2xvY2F0aW9uOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPFNlc3Npb24+IHtcbiAgICB0aGlzLl9yYWlzZVdoZW5DYWxsZWRUb29NYW55VGltZXMoY3JlYXRlU2Vzc2lvbkxhc3RUaW1lc3RhbXApO1xuXG4gICAgY29uc3QgZGF0YSA9IHsgY2xpZW50X2lkOiBjbGllbnRJZCB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5fZ2V0VXJsKCdzZXNzaW9ucycpLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IHRoaXMuX2dldFVybEVuY29kZWRCb2R5KGRhdGEpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY3JlYXRlU2Vzc2lvbkxhc3RUaW1lc3RhbXAgPSB0aGlzLl90aW1lc3RhbXAoKTtcblxuICAgIGlmIChyZXNwb25zZS5vayAmJiByZXNwb25zZS5zdGF0dXMgPT09IDIwMSAmJiBqc29uLnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiBuZXcgU2Vzc2lvbihqc29uLmRhdGEpO1xuICAgIH1cblxuICAgIGlmICghanNvbi5lcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFVua25vd25FcnJvcigpXG4gICAgfVxuXG4gICAgdGhyb3cgZXJyb3JGYWN0b3J5KGpzb24uZXJyb3IsIGpzb24uZXJyb3JfZGVzY3JpcHRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBzb25pYyBzb3VuZCB3aXRoIGVtYmVkZGVkIE9UUC5cbiAgICpcbiAgICogQHBhcmFtIHtTZXNzaW9ufSBzZXNzaW9uIEN5YmVydXMgS2V5J3Mgc2Vzc2lvbiBnZW5lcmF0ZWQgYnkgYSB1c2VyIGZvciBhIGxvZ2luLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheUJ1ZmZlcj59IEJ5dGVzIG9mIGEgc291bmQuXG4gICAqIEB0aHJvd3MgUmVzb3VyY2VOb3RGb3VuZEVycm9yXG4gICAqIEBtZW1iZXJvZiBDeWJlcnVzS2V5QVBJXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZ2V0T1RQU291bmQoc2Vzc2lvbjogU2Vzc2lvbik6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuX2dldFVybChgc2Vzc2lvbnMvJHtzZXNzaW9uLnNlc3Npb25JZH1gKSwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0JzogJ2F1ZGlvL21wZWcnLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nXG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGJ1ZmZlcjogRnVuY3Rpb24gPSByZXNwb25zZS5idWZmZXIgfHwgcmVzcG9uc2UuYXJyYXlCdWZmZXI7XG4gICAgcmV0dXJuIGF3YWl0IGJ1ZmZlci5jYWxsKHJlc3BvbnNlKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdldHMgT3BlbklEJ3MgQXV0aGVudGljYXRpb24gZW5kcG9pbnQgVVJMIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBwcm9jZXNzIHRoZSBhdXRoZW50aWNhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtTZXNzaW9ufSBzZXNzaW9uIEN5YmVydXMgS2V5IHNlc3Npb24uXG4gICAqIEBwYXJhbSB7T3BlbklkU2NvcGVQYXJzZXJ9IHNjb3BlIEVhY2ggc2NvcGUgcmV0dXJucyBhIHNldCBvZiB1c2VyIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBjYWxsZWQgY2xhaW1zLlxuICAgKiAgICBPbmNlIHRoZSB1c2VyIGF1dGhvcml6ZXMgdGhlIHJlcXVlc3RlZCBzY29wZXMsIHRoZSBjbGFpbXMgYXJlIHJldHVybmVkIGluIGFuIElEIFRva2VuLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50SWQgUHVibGljIGNsaWVudCBJRCBnZW5lcmF0ZWQgZHVyaW5nIGNyZWF0aW5nIHRoZSBhY2NvdW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVkaXJlY3RVcmkgUmVkaXJlY3QgVVJJIHRvIHdoaWNoIHRoZSByZXNwb25zZSB3aWxsIGJlIHNlbnQuIElmIHRoZSB2YWx1ZSBpcyBub3Qgd2hpdGVsaXN0ZWQgdGhlbiB0aGUgcmVxdWVzdCB3aWxsIGZhaWwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc3RhdGVdXG4gICAqICAgIFJFQ09NTUVOREVELiBPcGFxdWUgdmFsdWUgdXNlZCB0byBtYWludGFpbiBzdGF0ZSBiZXR3ZWVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgY2FsbGJhY2suIFR5cGljYWxseSwgQ1NSRiwgWFNSRiBtaXRpZ2F0aW9uIGlzIGRvbmUgYnkgY3J5cHRvZ3JhcGhpY2FsbHkgYmluZGluZyB0aGUgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgd2l0aCBhIGJyb3dzZXIgY29va2llLlxuICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIHByZXNlcnZlcyBzb21lIHN0YXRlIG9iamVjdCBzZXQgYnkgdGhlIGNsaWVudCBpbiB0aGUgQXV0aGVudGljYXRpb24gcmVxdWVzdCBhbmQgbWFrZXMgaXQgYXZhaWxhYmxlIHRvIHRoZSBjbGllbnQgaW4gdGhlIHJlc3BvbnNlLlxuICAgKiAgICBJdOKAmXMgdGhhdCB1bmlxdWUgYW5kIG5vbi1ndWVzc2FibGUgdmFsdWUgdGhhdCBhbGxvd3MgeW91IHRvIHByZXZlbnQgdGhlIGF0dGFjayBieSBjb25maXJtaW5nIGlmIHRoZSB2YWx1ZSBjb21pbmcgZnJvbSB0aGUgcmVzcG9uc2UgbWF0Y2hlcyB0aGUgb25lIHlvdSBleHBlY3QgKHRoZSBvbmUgeW91IGdlbmVyYXRlZCB3aGVuIGluaXRpYXRpbmcgdGhlIHJlcXVlc3QpLlxuICAgKiAgICBUaGUgc3RhdGUgcGFyYW1ldGVyIGlzIGEgc3RyaW5nIHNvIHlvdSBjYW4gZW5jb2RlIGFueSBvdGhlciBpbmZvcm1hdGlvbiBpbiBpdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub25jZV1cbiAgICogICAgU3RyaW5nIHZhbHVlIHVzZWQgdG8gYXNzb2NpYXRlIGEgQ2xpZW50IHNlc3Npb24gd2l0aCBhbiBJRCBUb2tlbiwgYW5kIHRvIG1pdGlnYXRlIHJlcGxheSBhdHRhY2tzLlxuICAgKiAgICBUaGUgdmFsdWUgaXMgcGFzc2VkIHRocm91Z2ggdW5tb2RpZmllZCBmcm9tIHRoZSBBdXRoZW50aWNhdGlvbiBSZXF1ZXN0IHRvIHRoZSBJRCBUb2tlbi5cbiAgICogICAgU3VmZmljaWVudCBlbnRyb3B5IE1VU1QgYmUgcHJlc2VudCBpbiB0aGUgbm9uY2UgdmFsdWVzIHVzZWQgdG8gcHJldmVudCBhdHRhY2tlcnMgZnJvbSBndWVzc2luZyB2YWx1ZXMuXG4gICAqIEByZXR1cm5zIE9wZW5JRCdzIEF1dGhlbnRpY2F0aW9uIGVuZHBvaW50IFVSTFxuICAgKiBAdGhyb3dzIEludmFsaWRSZWRpcmVjdFVyaUVycm9yLCBJbnZhbGlkQ2xpZW50RXJyb3IsIFJlc291cmNlTm90Rm91bmRFcnJvclxuICAgKiBAbWVtYmVyb2YgQ3liZXJ1c0tleUFQSVxuICAgKi9cbiAgcHVibGljIGdldEF1dGhlbnRpY2F0aW9uRW5kcG9pbnRVcmwoc2Vzc2lvbjogU2Vzc2lvbiwgc2NvcGU6IE9wZW5JZFNjb3BlUGFyc2VyLCBjbGllbnRJZDogc3RyaW5nLCByZWRpcmVjdFVyaTogc3RyaW5nLCBzdGF0ZT86IHN0cmluZywgbm9uY2U/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgIHNlc3Npb25faWQ6IHNlc3Npb24uc2Vzc2lvbklkLFxuICAgICAgY2xpZW50X2lkOiBjbGllbnRJZCxcbiAgICAgIHNjb3BlOiBzY29wZS5nZXRWYWx1ZSgpLFxuICAgICAgcmVkaXJlY3RfdXJpOiByZWRpcmVjdFVyaSxcbiAgICAgIHJlc3BvbnNlX3R5cGU6ICdjb2RlJ1xuICAgIH07XG5cbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIGRhdGFbJ3N0YXRlJ10gPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGRhdGFbJ25vbmNlJ10gPSBub25jZTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHRoaXMuX2dldFVybCgnYXV0aGVudGljYXRlJykpO1xuXG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgocGFyYW1ldGVyTmFtZSkgPT4ge1xuICAgICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQocGFyYW1ldGVyTmFtZSwgZGF0YVtwYXJhbWV0ZXJOYW1lXSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdXJsLmhyZWY7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgYW4gYXV0aGVudGljYXRpb24gd2l0aCBDeWJlcnVzIEtleS4gXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRJZCBQdWJsaWMgY2xpZW50IElEIGdlbmVyYXRlZCBkdXJpbmcgY3JlYXRpbmcgdGhlIGFjY291bnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWRpcmVjdFVyaSBSZWRpcmVjdCBVUkkgdG8gd2hpY2ggdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudC4gSWYgdGhlIHZhbHVlIGlzIG5vdCB3aGl0ZWxpc3RlZCB0aGVuIHRoZSByZXF1ZXN0IHdpbGwgZmFpbC5cbiAgICogQHBhcmFtIHtPcGVuSWRTY29wZVBhcnNlcn0gc2NvcGUgRWFjaCBzY29wZSByZXR1cm5zIGEgc2V0IG9mIHVzZXIgYXR0cmlidXRlcywgd2hpY2ggYXJlIGNhbGxlZCBjbGFpbXMuXG4gICAqICAgIE9uY2UgdGhlIHVzZXIgYXV0aG9yaXplcyB0aGUgcmVxdWVzdGVkIHNjb3BlcywgdGhlIGNsYWltcyBhcmUgcmV0dXJuZWQgaW4gYW4gSUQgVG9rZW4uXG4gICAqIEBwYXJhbSB7U291bmRFbWl0dGVyfSBzb3VuZEVtaXR0ZXIgSW50ZXJmYWNlIHdoaWNoIGNhbiBwbGF5IGEgc291bmQuXG4gICAqIEBwYXJhbSB7TmF2aWdhdG9yfSBuYXZpZ2F0b3IgQ2xhc3MgZGVzY3JpYmVzIGFuIGFjdGlvbiB0aGF0IHdpbGwgYmUgZG9uZSB0byBBdXRoZW50aWNhdGlvbiBVUkwuIEZvciBicm93c2VycyBpdCB3aWxsIGJlIGEgcGFnZSByZWRpcmVjdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0ZV1cbiAgICogICAgUkVDT01NRU5ERUQuIE9wYXF1ZSB2YWx1ZSB1c2VkIHRvIG1haW50YWluIHN0YXRlIGJldHdlZW4gdGhlIHJlcXVlc3QgYW5kIHRoZSBjYWxsYmFjay4gVHlwaWNhbGx5LCBDU1JGLCBYU1JGIG1pdGlnYXRpb24gaXMgZG9uZSBieSBjcnlwdG9ncmFwaGljYWxseSBiaW5kaW5nIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciB3aXRoIGEgYnJvd3NlciBjb29raWUuXG4gICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgcHJlc2VydmVzIHNvbWUgc3RhdGUgb2JqZWN0IHNldCBieSB0aGUgY2xpZW50IGluIHRoZSBBdXRoZW50aWNhdGlvbiByZXF1ZXN0IGFuZCBtYWtlcyBpdCBhdmFpbGFibGUgdG8gdGhlIGNsaWVudCBpbiB0aGUgcmVzcG9uc2UuXG4gICAqICAgIEl04oCZcyB0aGF0IHVuaXF1ZSBhbmQgbm9uLWd1ZXNzYWJsZSB2YWx1ZSB0aGF0IGFsbG93cyB5b3UgdG8gcHJldmVudCB0aGUgYXR0YWNrIGJ5IGNvbmZpcm1pbmcgaWYgdGhlIHZhbHVlIGNvbWluZyBmcm9tIHRoZSByZXNwb25zZSBtYXRjaGVzIHRoZSBvbmUgeW91IGV4cGVjdCAodGhlIG9uZSB5b3UgZ2VuZXJhdGVkIHdoZW4gaW5pdGlhdGluZyB0aGUgcmVxdWVzdCkuXG4gICAqICAgIFRoZSBzdGF0ZSBwYXJhbWV0ZXIgaXMgYSBzdHJpbmcgc28geW91IGNhbiBlbmNvZGUgYW55IG90aGVyIGluZm9ybWF0aW9uIGluIGl0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vbmNlXVxuICAgKiAgICBTdHJpbmcgdmFsdWUgdXNlZCB0byBhc3NvY2lhdGUgYSBDbGllbnQgc2Vzc2lvbiB3aXRoIGFuIElEIFRva2VuLCBhbmQgdG8gbWl0aWdhdGUgcmVwbGF5IGF0dGFja3MuXG4gICAqICAgIFRoZSB2YWx1ZSBpcyBwYXNzZWQgdGhyb3VnaCB1bm1vZGlmaWVkIGZyb20gdGhlIEF1dGhlbnRpY2F0aW9uIFJlcXVlc3QgdG8gdGhlIElEIFRva2VuLlxuICAgKiAgICBTdWZmaWNpZW50IGVudHJvcHkgTVVTVCBiZSBwcmVzZW50IGluIHRoZSBub25jZSB2YWx1ZXMgdXNlZCB0byBwcmV2ZW50IGF0dGFja2VycyBmcm9tIGd1ZXNzaW5nIHZhbHVlcy5cbiAgICogQG1lbWJlcm9mIEN5YmVydXNLZXlBUElcbiAgICovXG4gIHB1YmxpYyBhc3luYyBhdXRoZW50aWNhdGUoY2xpZW50SWQ6IHN0cmluZywgcmVkaXJlY3RVcmk6IHN0cmluZywgc2NvcGU6IE9wZW5JZFNjb3BlUGFyc2VyLCBzb3VuZEVtaXR0ZXI6IFNvdW5kRW1pdHRlciwgbmF2aWdhdG9yOiBOYXZpZ2F0b3IsIHN0YXRlPzogc3RyaW5nLCBub25jZT86IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCB0aGlzLmNyZWF0ZVNlc3Npb24oY2xpZW50SWQpO1xuICAgIGNvbnN0IHNvdW5kID0gYXdhaXQgdGhpcy5nZXRPVFBTb3VuZChzZXNzaW9uKTtcblxuICAgIGNvbnN0IGF1dGhlbnRpY2F0ZVVybCA9IHRoaXMuZ2V0QXV0aGVudGljYXRpb25FbmRwb2ludFVybChzZXNzaW9uLCBzY29wZSwgY2xpZW50SWQsIHJlZGlyZWN0VXJpLCBzdGF0ZSwgbm9uY2UpO1xuXG4gICAgY29uc29sZS5pbmZvKGBOYXZpZ2F0aW5nIHRvICR7YXV0aGVudGljYXRlVXJsfS5gKTtcblxuICAgIGF3YWl0IG5hdmlnYXRvci5uYXZpZ2F0ZShhdXRoZW50aWNhdGVVcmwpO1xuXG4gICAgYXdhaXQgdGhpcy5fdGltZW91dCgxMDAwKTtcblxuICAgIGNvbnNvbGUuaW5mbyhgU291bmQgZW1pdHRpbmcuYClcblxuICAgIGF3YWl0IHNvdW5kRW1pdHRlci5lbWl0KHNvdW5kKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFVybChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAobmV3IFVSTChwYXRoLCB0aGlzLl9hcGlVcmwpKS5ocmVmO1xuICB9XG5cbiAgcHJpdmF0ZSBfdGltZXN0YW1wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gIH1cblxuICBwcml2YXRlIF9yYWlzZVdoZW5DYWxsZWRUb29NYW55VGltZXMobGFzdFRpbWVzdGFtcDogbnVtYmVyIHwgbnVsbCkge1xuICAgIGlmICghbGFzdFRpbWVzdGFtcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90aW1lc3RhbXAoKSAtIGxhc3RUaW1lc3RhbXAgPCAxMDAwICogMTApIHtcbiAgICAgIHRocm93IG5ldyBUb29NYW55Q2FsbHNFcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldFVybEVuY29kZWRCb2R5KGRhdGE6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLnJlZHVjZTxzdHJpbmdbXT4oKHJlc3VsdDogc3RyaW5nW10sIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBlbmNvZGVkS2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGtleSk7XG4gICAgICBjb25zdCBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcblxuICAgICAgcmVzdWx0LnB1c2goYCR7ZW5jb2RlZEtleX09JHtlbmNvZGVkVmFsdWV9YCk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwgW10pLmpvaW4oXCImXCIpXG4gIH1cblxuICBwcml2YXRlIF90aW1lb3V0KG1zOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFNlc3Npb25SZXNwb25zZSB7XG4gIHNlc3Npb25faWQ6IHN0cmluZztcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xufVxuXG5cbi8qKlxuICogRGF0YSBjbGFzcyByZXByZXNlbnRpbmcgYSBDeWJlcnVzIEtleSBzZXNzaW9uLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBTZXNzaW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uIHtcbiAgLyoqXG4gICAqIFNlc3Npb24ncyB1bmlxdWUgaWRlbnRpZmllci4gSXQncyB2YWxpZCB1cCB0byAyMHMuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBTZXNzaW9uXG4gICAqL1xuICBwdWJsaWMgc2Vzc2lvbklkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgVVRDIGRhdGUgcmVwcmVzZW50aW5nIGEgZGF0ZSAoYW5kIHRpbWUpIHdoZW4gYSBzZXNzaW9uIGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAqXG4gICAqIEB0eXBlIHtEYXRlfVxuICAgKiBAbWVtYmVyb2YgU2Vzc2lvblxuICAgKi9cbiAgcHVibGljIGNyZWF0ZWRBdDogRGF0ZTtcblxuICBjb25zdHJ1Y3Rvcihqc29uOiBTZXNzaW9uUmVzcG9uc2UpIHtcbiAgICB0aGlzLnNlc3Npb25JZCA9IGpzb24uc2Vzc2lvbl9pZDtcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IG5ldyBEYXRlKGpzb24uY3JlYXRlZF9hdCk7XG4gIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL3Nkay9hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvZW1pdHRlci9zb3VuZEVtaXR0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvZW1pdHRlci93ZWJBdWRpb1NvdW5kRW1pdHRlcic7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9lcnJvcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvbmF2aWdhdG9yL25hdmlnYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL3Nkay9uYXZpZ2F0b3IvcmVkaXJlY3ROYXZpZ2F0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvc2NvcGVQYXJzZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zZGsvc2Vzc2lvbic7XG5cbmltcG9ydCB7IEN5YmVydXNLZXlBUEkgfSBmcm9tICcuL3Nkay9hcGknO1xuZXhwb3J0IGRlZmF1bHQgQ3liZXJ1c0tleUFQSTsiLCJpbXBvcnQgeyBTb3VuZEVtaXR0ZXIgfSBmcm9tICcuL3NvdW5kRW1pdHRlcic7XG5cbmV4cG9ydCBjbGFzcyBXZWJBdWRpb1NvdW5kRW1pdHRlciBpbXBsZW1lbnRzIFNvdW5kRW1pdHRlciB7XG4gIGFzeW5jIGVtaXQoc291bmQ6IEFycmF5QnVmZmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IGNvbnRleHQ6IEF1ZGlvQ29udGV4dDtcblxuICAgIHRyeSB7XG4gICAgICBjb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgY29uc29sZS5lcnJvcignQXVkaW9Db250ZXh0IGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICBcbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgY29uc3QgYXVkaW9CdWZmZXIgPSBhd2FpdCBjb250ZXh0LmRlY29kZUF1ZGlvRGF0YShzb3VuZCk7XG4gICAgY29uc3Qgc291cmNlID0gY29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcblxuICAgIHNvdXJjZS5idWZmZXIgPSBhdWRpb0J1ZmZlcjtcblxuICAgIHNvdXJjZS5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgIFxuICAgIGF3YWl0IChuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc291cmNlLm9uZW5kZWQgPSByZXNvbHZlO1xuICAgICAgc291cmNlLnN0YXJ0KDApO1xuICAgIH0pKTtcbiAgfVxufSIsImltcG9ydCB7IE5hdmlnYXRvciB9IGZyb20gJy4vbmF2aWdhdG9yJztcbmltcG9ydCB7IE1pc3NpbmdSZWRpcmVjdFVyaSB9IGZyb20gJy4uL2Vycm9ycydcblxuXG5leHBvcnQgY2xhc3MgUmVkaXJlY3ROYXZpZ2F0b3IgaW1wbGVtZW50cyBOYXZpZ2F0b3Ige1xuICBhc3luYyBuYXZpZ2F0ZSh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdXJsKSB7XG4gICAgICB0aHJvdyBuZXcgTWlzc2luZ1JlZGlyZWN0VXJpKClcbiAgICB9XG5cbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxufSIsImV4cG9ydCBjbGFzcyBPcGVuSWRTY29wZVBhcnNlciB7XG4gIHByaXZhdGUgX3Njb3BlOiBBcnJheTxzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3Njb3BlID0gWydvcGVuaWQnXTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRFbWFpbCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5fc2NvcGUuaW5jbHVkZXMoJ2VtYWlsJykpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX3Njb3BlLnB1c2goJ2VtYWlsJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBhZGRQcm9maWxlKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9zY29wZS5pbmNsdWRlcygncHJvZmlsZScpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9zY29wZS5wdXNoKCdwcm9maWxlJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zY29wZS5qb2luKCcgJyk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9