import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersResolver } from './answers.resolver';
import { PrismaClientService } from 'src/core/utils/prisma/prisma_client.service';

@Module({
  providers: [AnswersResolver, AnswersService, PrismaClientService],
})
export class AnswersModule {}
