import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuestionnairesService } from './questionnaires.service';
import { Questionnaire } from './entities/questionnaire.entity';
import {
  CreateManyQuestionnairesInput,
  CreateQuestionnaireInput,
} from './dto/create-questionnaire.input';

@Resolver(() => Questionnaire)
export class QuestionnairesResolver {
  constructor(private readonly questionnairesService: QuestionnairesService) {}

  @Mutation(() => Questionnaire)
  createQuestionnaire(
    @Args('createQuestionnaireInput')
    createQuestionnaireInput: CreateQuestionnaireInput,
  ) {
    return this.questionnairesService.create(createQuestionnaireInput);
  }

  @Mutation(() => [Questionnaire])
  createQuestionnaires(
    @Args('createManyQuestionnairesInput')
    createManyQuestionnairesInput: CreateManyQuestionnairesInput,
  ) {
    return this.questionnairesService.createMany(createManyQuestionnairesInput);
  }

  @Query(() => [Questionnaire], { name: 'findAllQuestionnaires' })
  async findAll() {
    return await this.questionnairesService.findAll();
  }

  @Query(() => Questionnaire, { name: 'findOneQuestionnaire' })
  async findOne(@Args('questionId', { type: () => Int }) questionId: number) {
    return await this.questionnairesService.findOne(questionId);
  }
  @Query(() => [Questionnaire], { name: 'findManyQuestionnaires' })
  async findMany(
    @Args('questionIds', { type: () => [Int] }) questionIds: number[],
  ) {
    return await this.questionnairesService.findMany(questionIds);
  }

  // @Mutation(() => Questionnaire)
  // removeQuestionnary(@Args('id', { type: () => Int }) id: number) {
  //   return this.questionnairesService.remove(id);
  // }
}
