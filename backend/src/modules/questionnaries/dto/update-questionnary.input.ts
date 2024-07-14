import { CreateQuestionnaryInput } from './create-questionnary.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateQuestionnaryInput extends PartialType(CreateQuestionnaryInput) {
  @Field(() => Int)
  id: number;
}
