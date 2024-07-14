import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Answer } from 'src/modules/answers/entities/answer.entity';

@ObjectType()
export class User {
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
  bimAcademicProgram: string;

  //relations
  @Field(() => [Answer])
  answers: Answer[];
}
