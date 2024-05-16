import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Answer {
  //ID is created automatically by postgresql and there is no need to add it here
  // @Field(() => Int)
  // id: number;

  //nullable so we can use mutation to only do creation tasks and pick this field to return null/nothing
  @Field({ nullable: true })
  Assessment?: string;
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
