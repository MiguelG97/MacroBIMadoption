import { InputType, Field, Float } from '@nestjs/graphql';
import { Chart } from '@prisma/client';
import { IsArray, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateQuestionnaireInput {
  @IsNumber()
  @Field(() => Float)
  questionId: number;

  @IsString()
  @Field()
  title: string;

  @IsArray()
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
export class CreateManyQuestionnairesInput {
  @Field(() => [CreateQuestionnaireInput])
  questionnairesInput: CreateQuestionnaireInput[];
}
