import { Injectable } from '@nestjs/common';
import { CreateAnswerInput } from './dto/create-answer.input';
import { UpdateAnswerInput } from './dto/update-answer.input';
import { AnswerRepository } from './repository/answer.repository';

@Injectable()
export class AnswersService {
  constructor(private answerRepository: AnswerRepository) {}
  async createOneAnswer(createAnswerInput: CreateAnswerInput) {
    await this.answerRepository.loadOneAnswer(createAnswerInput.Answers[0]);
    return {
      message: 'Successfully created',
      data: createAnswerInput.Answers[0],
    };
  }
  async createManyAnswers(createAnswerInput: CreateAnswerInput) {
    await this.answerRepository.loadManyAnswer(createAnswerInput.Answers);
    return {
      message: 'Successfully created',
    };
  }

  findAll() {
    return `This action returns all answers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} answer`;
  }

  update(id: number, updateAnswerInput: UpdateAnswerInput) {
    return `This action updates a #${id} answer`;
  }

  remove(id: number) {
    return `This action removes a #${id} answer`;
  }
}
