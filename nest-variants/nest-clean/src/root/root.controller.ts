import { Controller, Get } from '@nestjs/common';
import { APP_ROOT } from '../core/constants';
import { StandardResponseViewModel } from '../core/view-models/standard-response.vm';
import { RootService } from './root.service';

@Controller(`${APP_ROOT}`)
export class RootController {
  constructor(private readonly rootService: RootService) {}

  @Get('/root')
  getUsers(): StandardResponseViewModel<unknown> {
    return this.rootService.getRoot();
  }
}
