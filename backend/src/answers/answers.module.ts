import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersResolver } from './answers.resolver';
import { AnswerRepository } from './repository/answer.repository';
import { PrismaService } from 'src/utils/prisma/prisma.service';

@Module({
  providers: [AnswersResolver, AnswersService, AnswerRepository, PrismaService],
})
export class AnswersModule {}
