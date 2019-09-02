import { MissingRedirectUri } from '../errors';
import { Navigator } from './navigator';


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
export class RedirectNavigator implements Navigator {
  /**
   * Navigates to the given URL.
   *
   * @param {string} url Authentication Endpoint URL.
   * @throws MissingRedirectUri
   * @returns {Promise<void>}
   * @memberof RedirectNavigator
   */
  async navigate(url: string): Promise<void> {
    if (!url) {
      throw new MissingRedirectUri()
    }

    window.location.href = url;

    return Promise.resolve();
  }
}