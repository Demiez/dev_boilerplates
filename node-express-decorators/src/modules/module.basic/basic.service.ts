import { Service } from 'typedi';
import { BaseStatus } from '../../core/enums/base-statuses.enum';
import { StandardResponseViewModel } from '../../core/view-models';

@Service()
export class BasicService {
  public async getBasicResponse(): Promise<StandardResponseViewModel<unknown>> {
    return await Promise.resolve(
      new StandardResponseViewModel({}, 'Basic Response', BaseStatus.OK)
    );
  }
}
