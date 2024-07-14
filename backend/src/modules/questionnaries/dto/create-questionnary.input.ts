import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateQuestionnaryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
