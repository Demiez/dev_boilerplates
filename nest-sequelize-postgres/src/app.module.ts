import { Logger, Module } from '@nestjs/common';
import { RootController } from './root.controller';
@Module({
  imports: [],
  controllers: [RootController],
  providers: [Logger],
})
export class AppModule {}
