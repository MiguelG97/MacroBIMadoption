import { InputType, Int, Field } from '@nestjs/graphql';
import { IsArray, IsEmail, IsNumber } from 'class-validator';
/**Validators are only applicable to DTOs!! */
@InputType()
export class CreateUserInput {
  @IsNumber()
  @Field(() => Int)
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
