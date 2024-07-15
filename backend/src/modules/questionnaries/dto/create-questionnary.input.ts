import { InputType, Int, Field } from '@nestjs/graphql';
import { Chart } from '@prisma/client';

@InputType()
export class CreateQuestionnaryInput {
  @Field(() => Int)
  questionId: number;

  @Field()
  title: string;
  @Field()
  choices: string[];

  @Field(() => Chart)
  chartType: Chart;

  @Field()
  campaign?: string;
  @Field()
  sectionName?: string;

  //relations, no needed?
}

@InputType()
export class CreateManyQuestionnariesInput {
  @Field(() => [CreateQuestionnaryInput])
  questionnariesInput: CreateQuestionnaryInput[];
}
