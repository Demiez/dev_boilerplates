import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonLogger } from './core/utils';

async function start() {
  const PORT = process.env.PORT || 5000;
  const ENV = process.env.NODE_ENV || 'development';

  const app = await NestFactory.create(AppModule, {
    logger: new WinstonLogger(),
  });

  await app.listen(PORT, () => {
    Logger.log(`Server running in ${ENV} mode on port: ${PORT}`);
  });
}

start();
