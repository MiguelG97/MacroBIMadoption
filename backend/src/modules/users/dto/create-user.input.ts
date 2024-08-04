import { InputType, Field, Float } from '@nestjs/graphql';
import { IsArray, IsEmail, IsNumber, IsString } from 'class-validator';
/**Validators are only applicable to DTOs!! */
@InputType()
export class CreateUserInput {
  @IsNumber()
  @Field(() => Float)
  userId: number;

  @IsString()
  @Field()
  @IsEmail()
  userEmail: string;
  @IsString()
  @Field()
  userName: string;

  @Field({ nullable: true })
  userLabels?: string;
  @IsString()
  @Field()
  country: string;

  @IsArray()
  // @Field()
  @Field(() => [String], { nullable: true })
  academicProgramme?: string[];

  //relations?? I do not think we need to fill this field
}

@InputType()
export class CreateManyUsersInput {
  @IsArray()
  @Field(() => [CreateUserInput])
  manyUsersInput: CreateUserInput[];
}
