import { HttpStatus } from '@nestjs/common';

export class StandardResponseViewModel<T> {
  public result: T;

  public message: string;

  public statusCode: HttpStatus | number;

  constructor(result?: T, message?: string, status?: HttpStatus | number) {
    this.result = result;
    this.message = message;
    this.statusCode = status;
  }
}
