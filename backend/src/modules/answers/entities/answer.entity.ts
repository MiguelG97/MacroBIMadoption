import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Questionnaire } from 'src/modules/questionnaires/entities/questionnaire.entity';
import { User } from 'src/modules/users/entities/user.entity';

/**Step1) Define Graph schema:
 * It contains objectTypes which shapes the data model that client can receive!.
 * Thus, to only pick 1 field, the rest of the fields should be nullable to indicate that we can return that type of shape!
 * It's like a replica of the db table models.
 */
@ObjectType()
export class Answer {
  //ID is created automatically by postgresql and there is no need to add it here, what about when we do not use id in postgresql??
  @Field(() => Int)
  id: number;

  @Field() //type function is only required for ambiguity in numbers and to indicate array types
  questionTitle: string;

  @Field({ nullable: true }) //type function is only required for ambiguity in numbers and to indicate array types
  userAnswer?: string;

  @Field() //type function is only required for ambiguity in numbers and to indicate array types
  userEmail: string;

  @Field(() => String, { nullable: true })
  assigAuditor?: string;

  @Field(() => String, { nullable: true })
  auditorNote?: string;

  @Field({ nullable: true })
  hashtags?: string;

  @Field({ nullable: true })
  stateLabels?: string;
  @Field({ nullable: true })
  verifStatus?: string;

  //relations:
  @Field({ nullable: true })
  questionnaire?: Questionnaire;
  @Field(() => Float)
  questionId: number;

  @Field({ nullable: true })
  user?: User;
  @Field(() => Float)
  userId: number;
}
