import { Injectable } from '@nestjs/common';
import {
  CreateManyQuestionnariesInput,
  CreateQuestionnaryInput,
} from './dto/create-questionnary.input';
import { UpdateQuestionnaryInput } from './dto/update-questionnary.input';
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
      const newQuestionnary =
        await this.prismaClient.questionnaries.createManyAndReturn({
          data: createManyQuestionnariesInput.questionnariesInput,
        });
      return newQuestionnary;
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  }

  findAll() {
    return `This action returns all questionnaries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} questionnary`;
  }

  update(id: number, updateQuestionnaryInput: UpdateQuestionnaryInput) {
    return `This action updates a #${id} questionnary`;
  }

  remove(id: number) {
    return `This action removes a #${id} questionnary`;
  }
}
