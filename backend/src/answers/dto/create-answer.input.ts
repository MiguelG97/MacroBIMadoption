import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAnswerInput {
  @Field(() => [AnswerInput])
  Answers: AnswerInput[];
}
@InputType()
class AnswerInput {
  @Field()
  Assessment: string;
  @Field()
  Campaign: string;
  @Field()
  Item_ID: string;
  @Field()
  Item_Title: string;
  @Field()
  Item_Type: string;
  @Field()
  Statement_Labels: string;
  @Field()
  User_Email: string;
  @Field()
  User_ID: string;
  @Field()
  User_Name: string;
  @Field()
  Verification_Status: string;
}
