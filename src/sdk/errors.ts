enum ErrorCode {
  undefined = 1,
  unknown_error,
  server_error,
  wrong_json,
  openapi_error,
  resource_not_found,
  otp_generation_failure,
  invalid_redirect_uri,
  invalid_client,
  too_many_calls_error
}

class CyberusKeyError extends Error {
  private _code: ErrorCode;

  constructor(code: keyof typeof ErrorCode, message: string) {
    super(message)
    this._code = ErrorCode[code];
  }

  get code(): string {
    return ErrorCode[this._code];
  }

  get description(): string {
    return this.message;
  }
}

class UnknownError extends CyberusKeyError {
  constructor(code: keyof typeof ErrorCode = 'unknown_error', message: string = 'Unknown error occured.') {
    super(code, message)
  }
}
class TooManyCallsError extends CyberusKeyError {
  constructor(code: keyof typeof ErrorCode = 'too_many_calls_error', message: string = 'You\'ve done too many calls.') {
    super(code, message)
  }
}

class MissingRedirectUri extends CyberusKeyError {
  constructor() {
    super('invalid_redirect_uri', 'Missing redirection URI.');
  }
}

class WrongJsonError extends CyberusKeyError { }
class OpenApiError extends CyberusKeyError { }
class ResourceNotFoundError extends CyberusKeyError { }
class OTPGenerationError extends CyberusKeyError { }
class InvalidRedirectUriError extends CyberusKeyError { }
class InvalidClientError extends CyberusKeyError { }

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
}

function errorFactory(code: keyof typeof ErrorCode, message: string) {
  const enum_type = ErrorCode[code];
  const ErrorConstructor = MAPPING[enum_type];

  return new ErrorConstructor(code, message);
}

export {
  errorFactory,
  ErrorCode,
  CyberusKeyError,
  UnknownError,
  TooManyCallsError,
  WrongJsonError,
  OpenApiError,
  ResourceNotFoundError,
  OTPGenerationError,
  MissingRedirectUri
};

