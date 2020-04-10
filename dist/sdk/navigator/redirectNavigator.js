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
const errors_1 = require("../errors");
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
//# sourceMappingURL=redirectNavigator.js.map