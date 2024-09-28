import { Injectable, InternalServerErrorException } from '@nestjs/common';
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
      const newAnswer = await this.prismaClient.answers.create({
        data: createAnswerInput,
      });
      return newAnswer;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async createMany(createManyAnswersInput: CreateManyAnswersInput) {
    try {
      const newAnswers = await this.prismaClient.answers.createManyAndReturn({
        data: createManyAnswersInput.createAnswersInput,
      });
      return newAnswers;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll() {
    return await this.prismaClient.answers.findMany();
  }

  async findOne(id: number) {
    const answerFound = await this.prismaClient.answers.findUnique({
      where: { id },
    });
    return answerFound;
  }

  async findMany(ids: number[]) {
    const answersFound = [];
    for (const id of ids) {
      const answerFound = await this.prismaClient.answers.findUnique({
        where: { id },
      });
      //if it doesn't found anything, it returns null!
      if (answerFound) answersFound.push(answerFound);
    }
    return answersFound;
  }

  // update(id: number, updateAnswerInput: UpdateAnswerInput) {
  //   return `This action updates a #${id} answer`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} answer`;
  // }
}
