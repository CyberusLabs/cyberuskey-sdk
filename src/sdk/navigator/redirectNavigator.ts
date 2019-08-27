import { Navigator } from './navigator';
import { MissingRedirectUri } from '../errors'


export class RedirectNavigator implements Navigator {
  async navigate(url: string): Promise<void> {
    if (!url) {
      throw new MissingRedirectUri()
    }

    window.location.href = url;

    return Promise.resolve();
  }
}