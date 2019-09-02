/**
 * Class describes how OpenID's Authentication Endpoint will be handled.
 *
 * @export
 * @interface Navigator
 */
export interface Navigator {
  navigate(url: string): Promise<void>;
}