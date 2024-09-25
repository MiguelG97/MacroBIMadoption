import {
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { HttpAdapterHost } from '@nestjs/core';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { ApolloError } from 'apollo-server-express';

@Catch()
export class AllGqlExceptionsFilter implements GqlExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    // const { httpAdapter } = this.httpAdapterHost;

    // const gqlHost = GqlArgumentsHost.create(host);
    // const ctx = gqlHost.getContext();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    return new ApolloError(exception.message, httpStatus.toString(), {
      timestamp: new Date().toISOString(),
      stack: exception.stack,
    });
  }
}
