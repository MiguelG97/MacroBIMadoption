import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
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
    @Args('createManyAnswersInput')
    createManyAnswersInput: CreateManyAnswersInput,
  ) {
    const res = await this.answersService.createMany(createManyAnswersInput);
    return res;
  }

  //it ask us to at least provide 1 query type, wtf??
  @Query(() => [Answer])
  async findAll() {
    const answers = await this.answersService.findAll();
    return answers;
  }

  // @Query(() => Answer, { name: 'answer' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.answersService.findOne(id);
  // }

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
