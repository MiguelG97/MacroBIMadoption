import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Answer {
  //ID is created automatically by postgresql and there is no need to add it here
  // @Field(() => Int)
  // id: number;

  //nullable so we can use mutation to only do creation tasks and pick this field to return null/nothing
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
