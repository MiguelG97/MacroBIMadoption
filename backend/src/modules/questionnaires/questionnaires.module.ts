import { Module } from '@nestjs/common';
import { QuestionnairesService } from './questionnaires.service';
import { QuestionnairesResolver } from './questionnaires.resolver';
import { PrismaClientService } from 'src/core/utils/prisma/prisma_client.service';

@Module({
  providers: [
    QuestionnairesResolver,
    QuestionnairesService,
    PrismaClientService,
  ],
})
export class QuestionnairesModule {}
