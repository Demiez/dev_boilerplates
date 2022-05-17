import { Controller, Get } from '@nestjs/common';
import { APP_ROOT } from './core/constants';

@Controller(`${APP_ROOT}`)
export class RootController {
  @Get('/users')
  getUsers() {
    return [{ id: 1, name: 'UTV' }];
  }
}
