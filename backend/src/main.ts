import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';
import { ValidationPipe } from '@nestjs/common';
import { AllGqlExceptionsFilter } from './core/utils/pipes/exception_filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  app.useGlobalPipes(new ValidationPipe({ whitelist: false }));

  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllGqlExceptionsFilter(httpAdapter));
  await app.listen(3000);
}
bootstrap();
