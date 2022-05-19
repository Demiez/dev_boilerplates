import { Logger, Module } from '@nestjs/common';
import { DbProvider } from './modules/db.module/db.provider';
import { RootController } from './root/root.controller';
import { RootService } from './root/root.service';
require('dotenv').config();

@Module({
  imports: [DbProvider._initialize()],
  controllers: [RootController],
  providers: [Logger, RootService],
})
export class AppModule {}
