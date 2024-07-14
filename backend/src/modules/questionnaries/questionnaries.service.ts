import { Injectable } from '@nestjs/common';
import { CreateQuestionnaryInput } from './dto/create-questionnary.input';
import { UpdateQuestionnaryInput } from './dto/update-questionnary.input';

@Injectable()
export class QuestionnariesService {
  create(createQuestionnaryInput: CreateQuestionnaryInput) {
    return 'This action adds a new questionnary';
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
