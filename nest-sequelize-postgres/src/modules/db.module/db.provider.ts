import { DynamicModule, Injectable } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';

@Injectable()
export class DbProvider extends SequelizeModule {
  public static _initialize(): DynamicModule {
    const { DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

    const options: SequelizeModuleOptions = {
      dialect: 'postgres',
      port: +DB_PORT,
      username: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      autoLoadModels: true,
      models: [],
    };

    return SequelizeModule.forRoot(options);
  }
}
