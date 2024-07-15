import { InputType, Int, Field } from '@nestjs/graphql';
import { Chart } from '@prisma/client';

@InputType()
export class CreateQuestionnaryInput {
  @Field(() => Int)
  questionId: number;

  @Field()
  title: string;
  @Field(() => [String]) //we need to explicity indicate what is returned when using arrays!
  choices: string[];

  @Field(() => Chart)
  chartType: Chart;

  @Field({ nullable: true })
  campaign?: string;
  @Field({ nullable: true })
  sectionName?: string;

  //relations, no needed?
}

@InputType()
export class CreateManyQuestionnariesInput {
  @Field(() => [CreateQuestionnaryInput])
  questionnariesInput: CreateQuestionnaryInput[];
}
