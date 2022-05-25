import { BaseFieldError } from '../abstract/base-field-error.bm';

export class FieldIsBadModel extends BaseFieldError {
  public field: string;
  public errorCode: string;
  public message?: string;

  constructor(field: string, message?: string) {
    super();
    this.field = field;
    this.message = message;
  }
}
