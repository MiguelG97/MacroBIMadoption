import { Module } from '@nestjs/common';
import { QuestionnariesService } from './questionnaries.service';
import { QuestionnariesResolver } from './questionnaries.resolver';

@Module({
  providers: [QuestionnariesResolver, QuestionnariesService],
})
export class QuestionnariesModule {}
