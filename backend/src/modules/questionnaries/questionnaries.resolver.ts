import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuestionnariesService } from './questionnaries.service';
import { Questionnary } from './entities/questionnary.entity';
import {
  CreateManyQuestionnariesInput,
  CreateQuestionnaryInput,
} from './dto/create-questionnary.input';
// import { UpdateQuestionnaryInput } from './dto/update-questionnary.input';

@Resolver(() => Questionnary)
export class QuestionnariesResolver {
  constructor(private readonly questionnariesService: QuestionnariesService) {}

  @Mutation(() => Questionnary)
  createQuestionnary(
    @Args('createQuestionnaryInput')
    createQuestionnaryInput: CreateQuestionnaryInput,
  ) {
    return this.questionnariesService.create(createQuestionnaryInput);
  }

  @Mutation(() => [Questionnary])
  createQuestionnaries(
    @Args('createManyQuestionnariesInput')
    createManyQuestionnariesInput: CreateManyQuestionnariesInput,
  ) {
    return this.questionnariesService.createMany(createManyQuestionnariesInput);
  }

  @Query(() => [Questionnary], { name: 'findAllQuestionnaries' })
  async findAll() {
    return await this.questionnariesService.findAll();
  }

  @Query(() => Questionnary, { name: 'findOneQuestionnary' })
  async findOne(@Args('questionId', { type: () => Int }) questionId: number) {
    return await this.questionnariesService.findOne(questionId);
  }
  @Query(() => [Questionnary], { name: 'findManyQuestionnaries' })
  async findMany(
    @Args('questionIds', { type: () => [Int] }) questionIds: number[],
  ) {
    return await this.questionnariesService.findMany(questionIds);
  }

  // @Mutation(() => Questionnary)
  // updateQuestionnary(
  //   @Args('updateQuestionnaryInput')
  //   updateQuestionnaryInput: UpdateQuestionnaryInput,
  // ) {
  //   return this.questionnariesService.update(
  //     updateQuestionnaryInput.id,
  //     updateQuestionnaryInput,
  //   );
  // }

  // @Mutation(() => Questionnary)
  // removeQuestionnary(@Args('id', { type: () => Int }) id: number) {
  //   return this.questionnariesService.remove(id);
  // }
}
