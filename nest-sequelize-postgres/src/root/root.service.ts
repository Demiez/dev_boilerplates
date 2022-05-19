import { Injectable } from '@nestjs/common';
import { StandardResponseViewModel } from '../core/view-models/standard-response.vm';

@Injectable()
export class RootService {
  public getRoot(): StandardResponseViewModel<unknown> {
    return new StandardResponseViewModel({}, 'Root endpoint');
  }
}
