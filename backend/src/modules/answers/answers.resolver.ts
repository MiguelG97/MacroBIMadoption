import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnswersService } from './answers.service';
import { Answer } from './entities/answer.entity';
import {
  CreateAnswerInput,
  CreateManyAnswersInput,
} from './dto/create-answer.input';

@Resolver(() => Answer)
export class AnswersResolver {
  constructor(private readonly answersService: AnswersService) {}

  @Mutation(() => Answer, { nullable: true })
  async createAnswer(
    @Args('createAnswerInput') createAnswerInput: CreateAnswerInput,
  ) {
    const res = await this.answersService.create(createAnswerInput);
    return res;
  }

  @Mutation(() => [Answer])
  async createAnswers(
    @Args('createManyAnswersInput', { type: () => CreateManyAnswersInput })
    createManyAnswersInput: CreateManyAnswersInput,
  ) {
    const res = await this.answersService.createMany(createManyAnswersInput); //it's returning only count!!
    return res;
  }

  //it ask us to at least provide 1 query type, wtf??
  @Query(() => [Answer], { name: 'findAllAnswers' })
  async findAll() {
    return await this.answersService.findAll();
  }

  @Query(() => Answer, { name: 'findOneAnswer' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.answersService.findOne(id);
  }

  @Query(() => [Answer], { name: 'findManyAnswers' })
  async findMany(@Args('ids', { type: () => [Int] }) ids: number[]) {
    return await this.answersService.findMany(ids);
  }

  // @Mutation(() => Answer)
  // updateAnswer(
  //   @Args('updateAnswerInput') updateAnswerInput: UpdateAnswerInput,
  // ) {
  //   return this.answersService.update(updateAnswerInput.id, updateAnswerInput);
  // }

  // @Mutation(() => Answer)
  // removeAnswer(@Args('id', { type: () => Int }) id: number) {
  //   return this.answersService.remove(id);
  // }
}
