import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType, Float } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Float)
  userId: number;
}

@InputType()
export class UpdateManyUserInput {
  @Field(() => [UpdateUserInput])
  userInputs: UpdateUserInput[];
}
