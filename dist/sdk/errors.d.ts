declare enum ErrorCode {
    undefined = 1,
    unknown_error = 2,
    server_error = 3,
    wrong_json = 4,
    openapi_error = 5,
    resource_not_found = 6,
    otp_generation_failure = 7,
    invalid_redirect_uri = 8,
    invalid_client = 9,
    too_many_calls_error = 10
}
declare class CyberusKeyError extends Error {
    private _code;
    constructor(code: keyof typeof ErrorCode, message: string);
}
declare class UnknownError extends CyberusKeyError {
    constructor(code?: keyof typeof ErrorCode, message?: string);
}
declare class TooManyCallsError extends CyberusKeyError {
    constructor(code?: keyof typeof ErrorCode, message?: string);
}
declare class MissingRedirectUri extends CyberusKeyError {
    constructor();
}
declare class WrongJsonError extends CyberusKeyError {
}
declare class OpenApiError extends CyberusKeyError {
}
declare class ResourceNotFoundError extends CyberusKeyError {
}
declare class OTPGenerationError extends CyberusKeyError {
}
declare class InvalidRedirectUriError extends CyberusKeyError {
}
declare class InvalidClientError extends CyberusKeyError {
}
declare function errorFactory(code: keyof typeof ErrorCode, message: string): UnknownError | TooManyCallsError | WrongJsonError | OpenApiError | ResourceNotFoundError | OTPGenerationError | InvalidRedirectUriError | InvalidClientError;
export { errorFactory, ErrorCode, CyberusKeyError, UnknownError, TooManyCallsError, WrongJsonError, OpenApiError, ResourceNotFoundError, OTPGenerationError, MissingRedirectUri };
