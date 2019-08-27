import { Navigator } from './navigator';
export declare class RedirectNavigator implements Navigator {
    navigate(url: string): Promise<void>;
}
