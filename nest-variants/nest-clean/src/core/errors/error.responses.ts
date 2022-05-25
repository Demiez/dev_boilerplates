import { HttpStatus } from '@nestjs/common';
import { BaseErrorResponse } from '../abstract/base-error-response.bm';
import { ErrorDetailsType } from '../types/error-details.type';
import { ErrorCodes } from './error.codes';

export class BadRequestError extends BaseErrorResponse {
  constructor(errorCode: string, errorDetails: ErrorDetailsType) {
    super(
      HttpStatus.BAD_REQUEST,
      errorCode,
      errorDetails,
      BaseErrorResponse.parseErrorMessage(errorCode, errorDetails)
    );
  }
}

export class UnauthorizedError extends BaseErrorResponse {
  constructor(errorCode: string, errorDetails: ErrorDetailsType) {
    super(
      HttpStatus.UNAUTHORIZED,
      errorCode,
      errorDetails,
      BaseErrorResponse.parseErrorMessage(errorCode, errorDetails)
    );
  }
}

export class ForbiddenError extends BaseErrorResponse {
  constructor(errorCode: string, errorDetails: ErrorDetailsType) {
    super(
      HttpStatus.FORBIDDEN,
      errorCode,
      errorDetails,
      BaseErrorResponse.parseErrorMessage(errorCode, errorDetails)
    );
  }
}

export class NotFoundError extends BaseErrorResponse {
  constructor(errorCode: string, errorDetails: ErrorDetailsType) {
    super(
      HttpStatus.NOT_FOUND,
      errorCode,
      errorDetails,
      BaseErrorResponse.parseErrorMessage(errorCode, errorDetails)
    );
  }
}

export class InternalServerError extends BaseErrorResponse {
  constructor(errorCode: string, errorDetails: ErrorDetailsType) {
    super(
      HttpStatus.INTERNAL_SERVER_ERROR,
      errorCode,
      errorDetails,
      BaseErrorResponse.parseErrorMessage(errorCode, errorDetails)
    );
  }
}

export class SystemServerError {
  public statusCode: HttpStatus;
  public errorCode: string;
  public errorDetails: ErrorDetailsType;
  public message: string;

  constructor(errorMessage: string) {
    this.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    this.errorCode = ErrorCodes.INTERNAL_SERVER_ERROR;
    this.errorDetails = [];
    this.message = errorMessage;
  }
}
