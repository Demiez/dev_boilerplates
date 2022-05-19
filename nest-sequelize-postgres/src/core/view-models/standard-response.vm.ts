import { BaseStatusesEnum } from '../enums/base-statuses.enum';

export class StandardResponseViewModel<T> {
  public result: T;

  public message: string;

  public status: BaseStatusesEnum | number;

  constructor(
    result?: T,
    message?: string,
    status?: BaseStatusesEnum | number
  ) {
    this.result = result;
    this.message = message;
    this.status = status;
  }
}
