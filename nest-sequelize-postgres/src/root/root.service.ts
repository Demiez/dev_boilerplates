import { Injectable } from '@nestjs/common';
import { ErrorCodes, NotFoundError } from '../core/errors';
import { StandardResponseViewModel } from '../core/view-models/standard-response.vm';

@Injectable()
export class RootService {
  public getRoot(): StandardResponseViewModel<unknown> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const b: any = {};
    console.log(b.a.a);
    throw new NotFoundError(ErrorCodes.INVALID_INPUT_PARAMS, ['bad']);
    return new StandardResponseViewModel({}, 'Root endpoint');
  }
}
