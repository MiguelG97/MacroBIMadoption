import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateAnswerInput {
  @Field(() => Int)
  id: number;

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
  @Field(() => Int)
  questionId: number;
  @Field(() => Int)
  userId: number;
}

@InputType()
export class CreateManyAnswersInput {
  @Field(() => CreateAnswerInput)
  createAnswersInput: CreateAnswerInput[];
}
