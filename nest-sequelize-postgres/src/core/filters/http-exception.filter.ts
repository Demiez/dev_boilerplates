import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { SystemServerError } from '../errors';

@Catch()
export class GenericExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: Logger) {}

  catch(exception: Error | HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const isException = exception instanceof HttpException;

    const status = isException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorMessage = exception.message;

    this.logger.error(errorMessage, exception);

    if (isException) {
      response.status(status).send(exception.getResponse());
    } else {
      response.status(status).send(new SystemServerError(errorMessage));
    }
  }
}
