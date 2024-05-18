import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAnswerInput {
  @Field(() => [AnswerInput])
  Answers: AnswerInput[];
}
@InputType()
class AnswerInput {
  @Field({ nullable: true })
  Assessment?: string;
  @Field({ nullable: true })
  Campaign?: string;
  @Field({ nullable: true })
  Item_ID?: string;
  @Field({ nullable: true })
  Item_Title?: string;
  @Field({ nullable: true })
  Item_Type?: string;
  @Field({ nullable: true })
  Statement_Labels?: string;
  @Field({ nullable: true })
  User_Email?: string;
  @Field({ nullable: true })
  User_ID?: string;
  @Field({ nullable: true })
  User_Name?: string;
  @Field({ nullable: true })
  Verification_Status?: string;
}
