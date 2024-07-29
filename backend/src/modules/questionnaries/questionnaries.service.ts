import { Injectable } from '@nestjs/common';
import {
  CreateManyQuestionnariesInput,
  CreateQuestionnaryInput,
} from './dto/create-questionnary.input';
// import { UpdateQuestionnaryInput } from './dto/update-questionnary.input';
import { PrismaClientService } from 'src/core/utils/prisma/prisma_client.service';

@Injectable()
export class QuestionnariesService {
  constructor(private prismaClient: PrismaClientService) {}

  async create(createQuestionnaryInput: CreateQuestionnaryInput) {
    try {
      const newQuestionnary = await this.prismaClient.questionnaries.create({
        data: createQuestionnaryInput,
      });
      return newQuestionnary;
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  }
  async createMany(
    createManyQuestionnariesInput: CreateManyQuestionnariesInput,
  ) {
    try {
      const newQuestionnary = await this.prismaClient.questionnaries.createMany(
        {
          data: createManyQuestionnariesInput.questionnariesInput,
        },
      );
      return newQuestionnary;
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  }

  async findAll() {
    return await this.prismaClient.questionnaries.findMany();
  }

  async findOne(questionId: number) {
    const questionFound = await this.prismaClient.questionnaries.findUnique({
      where: {
        questionId: questionId,
      },
    });
    return questionFound;
  }
  async findMany(questionIds: number[]) {
    const questionsFound = [];
    for (const questionId of questionIds) {
      const questionFound = await this.prismaClient.questionnaries.findUnique({
        where: {
          questionId: questionId,
        },
      });
      questionsFound.push(questionFound);
    }
    return questionsFound;
  }

  // update(id: number, updateQuestionnaryInput: UpdateQuestionnaryInput) {
  //   return `This action updates a #${id} questionnary`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} questionnary`;
  // }
}
