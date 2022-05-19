import { Logger, Module } from '@nestjs/common';
import { RootController } from './root/root.controller';
import { RootService } from './root/root.service';
@Module({
  imports: [],
  controllers: [RootController],
  providers: [Logger, RootService],
})
export class AppModule {}
