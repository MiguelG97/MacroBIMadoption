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

  @Field()
  userLabels: string;

  @Field()
  country: string;

  @Field({ nullable: true })
  bimAcademicProgram?: string;

  //relations
  @Field(() => [Answer])
  answers: Answer[];
}
