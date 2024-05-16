import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/utils/prisma/prisma.service';

@Injectable()
export class AnswerRepository {
  constructor(private prismaRepo: PrismaService) {}

  async loadOneAnswer(data: Prisma.AnswersCreateInput) {
    //you need to await this!!
    const result = await this.prismaRepo.answers.create({ data });
    console.log('the result and data: ', result, data);
  }
  async loadManyAnswer(data: Prisma.AnswersCreateInput[]) {
    //you need to await this!!
    const result = await this.prismaRepo.answers.createMany({ data });
    console.log('the result and data: ', result, data);
  }
}
