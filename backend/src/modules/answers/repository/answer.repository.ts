import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClientService } from 'src/core/utils/prisma/prisma_client.service';

@Injectable()
export class AnswerRepository {
  constructor(private prismaClient: PrismaClientService) {}

  async loadOneAnswer(data: Prisma.AnswersCreateInput) {
    //you need to await this!!
    const result = await this.prismaClient.answers.create({ data });
    console.log('the result and data: ', result, data);
  }
  async loadManyAnswer(data: Prisma.AnswersCreateInput[]) {
    //you need to await this!!
    const result = await this.prismaClient.answers.createMany({ data });
    console.log('the result and data: ', result, data);
  }

  async getAllAnswers() {
    const data = await this.prismaClient.answers.findMany();
    return data;
  }
}
