import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateAnswerInput {
  //it's automatically created by postgresql
  @Field(() => Int, { nullable: true })
  id?: number;

  @IsString()
  @Field()
  questionTitle: string;
  // @IsString()|do not put the decorator when it can be null|undefined
  @Field({ nullable: true })
  userAnswer?: string;
  @IsString()
  @Field()
  userEmail: string;

  @Field({ nullable: true })
  assigAuditor?: string;
  @Field({ nullable: true })
  auditorNote?: string;
  @Field({ nullable: true })
  hashtags?: string;
  @Field({ nullable: true })
  stateLabels?: string;
  @Field({ nullable: true })
  verifStatus?: string;

  //relations
  @IsNumber()
  @Field(() => Float)
  questionId: number;
  @IsNumber()
  @Field(() => Float)
  userId: number;
}

@InputType()
export class CreateManyAnswersInput {
  @Field(() => [CreateAnswerInput])
  createAnswersInput: CreateAnswerInput[];
}
