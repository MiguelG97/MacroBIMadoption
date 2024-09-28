import { ObjectType, Field, registerEnumType, Float } from '@nestjs/graphql';
import { Chart } from '@prisma/client';
import { Answer } from 'src/modules/answers/entities/answer.entity';

//We must use the enum from prisma client though!!
// export enum Chart {
//   bar,
//   pie,
//   table,
//   undefined,
// }
registerEnumType(Chart, {
  name: 'Chart',
  description: 'Type of chart to use in the dashboard',
});

@ObjectType()
export class Questionnaire {
  @Field(() => Float)
  questionId: number;

  @Field()
  title: string;

  @Field(() => [String])
  choices: string[];

  @Field(() => Chart)
  chartType: Chart;

  @Field()
  campaign: string;

  @Field()
  sectionName: string;

  //relations
  @Field(() => [Answer])
  answers: Answer[];
}
