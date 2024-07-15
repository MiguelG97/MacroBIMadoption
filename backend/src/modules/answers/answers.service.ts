import { Injectable } from '@nestjs/common';
import {
  CreateAnswerInput,
  CreateManyAnswersInput,
} from './dto/create-answer.input';
import { PrismaClientService } from 'src/core/utils/prisma/prisma_client.service';

@Injectable()
export class AnswersService {
  /**PrismaClient would serve as our repository!!
   * since it already has the create,createMany, ... commands
   */
  constructor(private prismaClient: PrismaClientService) {}
  async create(createAnswerInput: CreateAnswerInput) {
    try {
      const newAnswer = this.prismaClient.answers.create({
        data: createAnswerInput,
      });
      return newAnswer;
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  }
  async createMany(createManyAnswersInput: CreateManyAnswersInput) {
    try {
      const newAnswers = this.prismaClient.answers.createManyAndReturn({
        data: createManyAnswersInput.createAnswersInput,
      });
      return newAnswers;
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  }

  async findAll() {
    return '';
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} answer`;
  // }

  // update(id: number, updateAnswerInput: UpdateAnswerInput) {
  //   return `This action updates a #${id} answer`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} answer`;
  // }
}
