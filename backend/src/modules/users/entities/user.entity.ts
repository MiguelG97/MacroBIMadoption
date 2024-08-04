import { ObjectType, Field, Float } from '@nestjs/graphql';
import { Answer } from 'src/modules/answers/entities/answer.entity';

@ObjectType()
export class User {
  @Field(() => Float)
  userId: number;

  //add validation pipeline here!! it's only applicable for the DTOs!!
  //https://docs.nestjs.com/techniques/validation#validation
  @Field()
  userEmail: string;

  @Field()
  userName: string;

  @Field({ nullable: true })
  userLabels?: string;

  @Field()
  country: string;

  @Field(() => [String], { nullable: true })
  academicProgramme?: string[];

  //relations
  @Field(() => [Answer])
  answers: Answer[];
}
