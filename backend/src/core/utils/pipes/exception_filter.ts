import {
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';

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

    const extensions = {
      code: httpStatus.toString(),
      timestamp: new Date().toISOString(),
      stack: exception instanceof Error ? exception.stack : undefined,
    };

    const message =
      exception instanceof Error ? exception.message : 'Internal server error';
    return new GraphQLError(message, { extensions });
    // return new ApolloError(exception.message, httpStatus.toString(), {
    //   timestamp: new Date().toISOString(),
    //   stack: exception.stack,
    // });
  }
}
