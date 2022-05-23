import { Injectable } from '@nestjs/common';
import { ErrorCodes, NotFoundError } from '../core/errors';
import { StandardResponseViewModel } from '../core/view-models/standard-response.vm';

@Injectable()
export class RootService {
  public getRoot(): StandardResponseViewModel<unknown> {
    throw new NotFoundError(ErrorCodes.INVALID_INPUT_PARAMS, ['bad']);
    return new StandardResponseViewModel({}, 'Root endpoint');
  }
}
