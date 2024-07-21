import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateAnswerInput {
  //it's automatically created by postgresql
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field()
  questionTitle: string;
  @Field()
  userAnswer: string;
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

  //relations
  @Field(() => Float)
  questionId: number;
  @Field(() => Float)
  userId: number;
}

@InputType()
export class CreateManyAnswersInput {
  @Field(() => [CreateAnswerInput])
  createAnswersInput: CreateAnswerInput[];
}
