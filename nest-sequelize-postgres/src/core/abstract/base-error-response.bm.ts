import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorDetailsType } from '../types/error-details.type';
import { FieldIsBadModel } from '../view-models/field-is-bad.vm';

export abstract class BaseErrorResponse extends HttpException {
  constructor(
    status: HttpStatus,
    errorCode: string,
    errorDetails: ErrorDetailsType = [],
    message: string
  ) {
    super(
      {
        statusCode: status,
        errorCode,
        errorDetails,
        message,
      },
      status
    );
  }

  public static parseErrorMessage(
    errorCode: string,
    errorDetails: ErrorDetailsType
  ): string {
    let errorMessage: string;

    if (errorDetails.length > 0 && errorDetails[0] instanceof FieldIsBadModel) {
      errorMessage =
        errorCode +
        ': ' +
        errorDetails
          .map((errorDetail: FieldIsBadModel) => errorDetail.message)
          .join(', ');
    } else {
      errorMessage =
        errorDetails && errorDetails.length > 0
          ? errorCode + ': ' + errorDetails[0]
          : '';
    }

    return errorMessage;
  }
}
