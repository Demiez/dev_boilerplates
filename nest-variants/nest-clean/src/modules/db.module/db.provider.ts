import { DynamicModule, Injectable } from '@nestjs/common';

@Injectable()
export class DbProvider {
  // extend DbProvider from the required connection DB module
  // add _initialize method call to imports in app.module
  public static _initialize(): DynamicModule {
    const { DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

    return {
      DB_PORT,
      DB_USER,
      DB_PASSWORD,
      DB_NAME,
    } as unknown as DynamicModule;
  }
}
