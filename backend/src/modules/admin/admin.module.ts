import { Module } from '@nestjs/common';
import { AdminResolver } from './admin.resolver';
import { AnswersService } from '../answers/answers.service';
import { UsersService } from '../users/users.service';
import { QuestionnairesService } from '../questionnaires/questionnaires.service';
import { PrismaClientService } from 'src/core/utils/prisma/prisma_client.service';
@Module({
  providers: [
    AdminResolver,
    AnswersService,
    UsersService,
    QuestionnairesService,
    PrismaClientService,
  ],
})
export class AdminModule {}
