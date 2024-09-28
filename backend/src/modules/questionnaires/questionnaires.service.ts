import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  CreateManyQuestionnairesInput,
  CreateQuestionnaireInput,
} from './dto/create-questionnaire.input';
import { PrismaClientService } from 'src/core/utils/prisma/prisma_client.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class QuestionnairesService {
  constructor(private prismaClient: PrismaClientService) {}

  async create(createQuestionnaireInput: CreateQuestionnaireInput) {
    try {
      const newQuestionnary = await this.prismaClient.questionnaires.create({
        data: createQuestionnaireInput,
      });
      return newQuestionnary;
    } catch (error) {
      throw new InternalServerErrorException(error, {
        description: `Creation error for the following id: ${createQuestionnaireInput.questionId}`,
      });
    }
  }
  async createMany(
    createManyQuestionnairesInput: CreateManyQuestionnairesInput,
  ) {
    try {
      const newQuestionnaire =
        await this.prismaClient.questionnaires.createManyAndReturn({
          data: createManyQuestionnairesInput.questionnairesInput,
        });
      return newQuestionnaire;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new InternalServerErrorException(
          {
            message: error.message,
            stack: error.stack,
          },
          { description: 'Error while creating questionnaires' },
        );
      }
      // else if (error instanceof ApolloEr)
      throw new InternalServerErrorException(error, {
        description: 'Error while creating questionnaires',
      });
    }
  }

  async findAll() {
    return await this.prismaClient.questionnaires.findMany();
  }

  async findOne(questionId: number) {
    const questionnaireFound =
      await this.prismaClient.questionnaires.findUnique({
        where: {
          questionId: questionId,
        },
      });
    return questionnaireFound;
  }
  async findMany(questionIds: number[]) {
    const questionnairesFound = [];
    for (const questionId of questionIds) {
      const questionnaireFound =
        await this.prismaClient.questionnaires.findUnique({
          where: {
            questionId: questionId,
          },
        });
      questionnairesFound.push(questionnaireFound);
    }
    return questionnairesFound;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} questionnaire`;
  // }
}
