import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Answer } from 'src/modules/answers/entities/answer.entity';

enum ChartType {
  bar,
  pie,
  table,
  undefined,
}
registerEnumType(ChartType, {
  name: 'ChartType',
  description: 'Type of chart to use in the dashboard',
});

@ObjectType()
export class Questionnary {
  @Field(() => Int)
  questionId: number;

  @Field()
  title: string;

  @Field(() => [String])
  choices: string[];

  @Field(() => ChartType)
  chartType: ChartType;

  @Field()
  campaign: string;

  @Field()
  sectionName: string;

  //relations
  @Field(() => [Answer])
  answers: Answer[];
}
