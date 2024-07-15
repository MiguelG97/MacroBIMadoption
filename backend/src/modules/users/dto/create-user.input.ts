import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => Int)
  userId: number;

  @Field()
  userEmail: string;
  @Field()
  userName: string;
  @Field()
  userLabels: string;
  @Field()
  country: string;

  @Field()
  bimAcademicProgram?: string;

  //relations?? I do not think we need to fill this field
}

@InputType()
export class CreateManyUsersInput {
  @Field(() => [CreateUserInput])
  manyUsersInput: CreateUserInput[];
}
