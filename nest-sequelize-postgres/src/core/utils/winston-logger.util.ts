import { Injectable, LoggerService } from '@nestjs/common';
import * as dateFormat from 'dateformat';
import { createLogger, format, Logger, transports } from 'winston';
import { DEFAULT_DATE_FORMAT, WINSTON_TIMESTAMP_FORMAT } from '../constants';

require('dotenv').config();

@Injectable()
export class WinstonLogger implements LoggerService {
  private readonly date = dateFormat(
    new Date(),
    DEFAULT_DATE_FORMAT.toLowerCase()
  );
  private readonly print = format.printf((info) => {
    const log = `${info.level}: ${[info.timestamp]}: ${info.message}`;

    return info.stack ? `${log}\n${info.stack}` : log;
  });

  private instance: Logger;

  constructor() {
    this.instance = createLogger({
      level: 'debug',
      format: format.combine(
        format.timestamp({ format: WINSTON_TIMESTAMP_FORMAT }),
        format.align(),
        format.errors({ stack: true }),
        this.print
      ),
      transports: [
        new transports.File({ filename: `./logs/${this.date}-log.log` }),
        new transports.Console({
          format: format.combine(
            format.colorize({
              all: true,
            })
          ),
        }),
      ],
    });
  }

  public log(
    infoMessage: string,
    data?: Record<string, unknown> | Record<string, unknown>[]
  ): void {
    data
      ? this.instance.info(infoMessage + ': \n' + JSON.stringify(data, null, 4))
      : this.instance.info(infoMessage);
  }

  public error(
    errorMessage: string,
    data?: Record<string, unknown> | Record<string, unknown>[]
  ): void {
    data
      ? this.instance.error(errorMessage)
      : this.instance.error(
          errorMessage + ': \n' + JSON.stringify(data, null, 4)
        );
  }

  public warn(warningMessage: string): void {
    this.instance.warn(warningMessage);
  }
}
