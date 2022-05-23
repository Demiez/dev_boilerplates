import { HttpException, HttpStatus } from '@nestjs/common';

// Required for generic handling
/* eslint-disable */
type errorDetailsType = any[] | any;

abstract class BaseErrorResponse extends HttpException {
  constructor(
    status: HttpStatus,
    errorCode: string,
    errorDetails: errorDetailsType = []
  ) {
    super(
      {
        statusCode: status,
        errorCode,
        errorDetails,
      },
      status
    );
  }
}

export class BadRequestError extends BaseErrorResponse {
  constructor(errorCode: string, errorDetails: any[] = []) {
    super(HttpStatus.BAD_REQUEST, errorCode, errorDetails);
  }
}

export class UnauthorizedError extends BaseErrorResponse {
  constructor(errorCode: string, errorDetails: errorDetailsType) {
    super(HttpStatus.UNAUTHORIZED, errorCode, errorDetails);
  }
}

export class ForbiddenError extends BaseErrorResponse {
  constructor(errorCode: string, errorDetails: errorDetailsType) {
    super(HttpStatus.FORBIDDEN, errorCode, errorDetails);
  }
}

export class NotFoundError extends BaseErrorResponse {
  constructor(errorCode: string, errorDetails: errorDetailsType) {
    super(HttpStatus.NOT_FOUND, errorCode, errorDetails);
  }
}

export class InternalServerError extends BaseErrorResponse {
  constructor(errorCode: string, errorDetails: errorDetailsType) {
    super(HttpStatus.INTERNAL_SERVER_ERROR, errorCode, errorDetails);
  }
}
