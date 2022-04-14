import { Request, Response } from 'express';
import { Service } from 'typedi';
import BaseController from '../../core/abstract/base-controller';
import { APP_ROOT } from '../../core/constants';
import { TEN_MINUTES_TIMEOUT } from '../../core/constants';
import { Controller, Get } from '../../core/decorators';
import { StandardResponseViewModel } from '../../core/view-models';
import { BasicService } from './basic.service';

@Controller(`${APP_ROOT}/basic`)
@Service()
export class BasicController extends BaseController {
  constructor(private readonly basicService: BasicService) {
    super();
  }

  @Get('')
  public async getBasicResponse(
    req: Request,
    res: Response
  ): Promise<Response<StandardResponseViewModel<unknown>>> {
    req.setTimeout(TEN_MINUTES_TIMEOUT);

    const result = await this.basicService.getBasicResponse();

    return super.sendSuccessResponse(res, result);
  }
}
