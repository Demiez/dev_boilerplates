abstract class BaseErrorCodes {
  public static get INTERNAL_SERVER_ERROR(): string {
    return 'INTERNAL_SERVER_ERROR';
  }

  public static get INVALID_INPUT_PARAMS(): string {
    return 'INVALID_INPUT_PARAMS';
  }

  public static get UNAUTHORIZED(): string {
    return 'UNAUTHORIZED';
  }

  public static get RECORD_NOT_FOUND(): string {
    return 'RECORD_NOT_FOUND';
  }

  public static get USER_NOT_FOUND(): string {
    return 'USER_NOT_FOUND';
  }
}

export class ErrorCodes extends BaseErrorCodes {
  public static get INTERNAL_SERVER_ERROR(): string {
    return 'INTERNAL_SERVER_ERROR';
  }

  public static get INVALID_INPUT_PARAMS(): string {
    return 'INVALID_INPUT_PARAMS';
  }

  public static get INVALID_AUTH_PARAMS(): string {
    return 'INVALID_AUTH_PARAMS';
  }

  public static get INVALID_AUTH_PARAMS_PASSWORD_INCORECT(): string {
    return 'INVALID_AUTH_PARAMS_PASSWORD_INCORECT';
  }

  public static get UNAUTHORIZED(): string {
    return 'UNAUTHORIZED';
  }

  public static get RECORD_NOT_FOUND(): string {
    return 'RECORD_NOT_FOUND';
  }

  public static get CACHING_FAILED(): string {
    return 'CACHING_FAILED';
  }

  public static get TRANSACTION_FAILED(): string {
    return 'TRANSACTION_FAILED';
  }

  public static get AXIOS_REQUEST_FAILED(): string {
    return 'AXIOS_REQUEST_FAILED';
  }

  public static get DB_CONNECTION_ERROR(): string {
    return 'DB_CONNECTION_ERROR';
  }
}
