import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AnswersService } from './answers.service';
import { Answer } from './entities/answer.entity';
import { CreateAnswerInput } from './dto/create-answer.input';

@Resolver(() => Answer)
export class AnswersResolver {
  constructor(private readonly answersService: AnswersService) {}

  //the mutation and query types are gonna use the same name as the method's name
  //but we can change that by specifying a query/mut name in the decorator props
  @Mutation(() => Answer, { nullable: true })
  async createsSingleAnswer(
    @Args('createAnswerInput') createAnswerInput: CreateAnswerInput,
  ) {
    const res = await this.answersService.createOneAnswer(createAnswerInput);
    console.log(res);
    return res;
  }

  @Mutation(() => Answer)
  async createsManyAnswer(
    @Args('createAnswerInput') createAnswerInput: CreateAnswerInput,
  ) {
    console.log(createAnswerInput.Answers.length);
    const res = await this.answersService.createManyAnswers(createAnswerInput);
    console.log(res);
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
