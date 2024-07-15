import { Module } from '@nestjs/common';
import { QuestionnariesService } from './questionnaries.service';
import { QuestionnariesResolver } from './questionnaries.resolver';
import { PrismaClientService } from 'src/core/utils/prisma/prisma_client.service';

@Module({
  providers: [
    QuestionnariesResolver,
    QuestionnariesService,
    PrismaClientService,
  ],
})
export class QuestionnariesModule {}
