import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: Logger) {}

  use(req: Request, res: Response, next: NextFunction): void {
    this.logger.log(
      `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
    );

    next();
  }
}
