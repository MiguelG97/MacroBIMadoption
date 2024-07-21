import { InputType, Field, Float } from '@nestjs/graphql';
import { IsArray, IsEmail } from 'class-validator';
import { IsBigInt } from 'src/core/utils/validators/isbigInt';
/**Validators are only applicable to DTOs!! */
@InputType()
export class CreateUserInput {
  @IsBigInt()
  @Field(() => Float)
  userId: number;

  @Field()
  @IsEmail()
  userEmail: string;
  @Field()
  userName: string;
  @Field()
  userLabels: string;
  @Field()
  country: string;

  @Field({ nullable: true })
  bimAcademicProgram?: string;

  //relations?? I do not think we need to fill this field
}

@InputType()
export class CreateManyUsersInput {
  @IsArray()
  @Field(() => [CreateUserInput])
  manyUsersInput: CreateUserInput[];
}
