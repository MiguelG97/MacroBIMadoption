import { Resolver, Mutation } from '@nestjs/graphql';
import { AnswersService } from '../answers/answers.service';
import { UsersService } from '../users/users.service';
import { QuestionnairesService } from '../questionnaires/questionnaires.service';

@Resolver()
export class AdminResolver {
  constructor(
    private readonly answersService: AnswersService,
    private readonly usersService: UsersService,
    private readonly questionnairesService: QuestionnairesService,
  ) {}

  @Mutation(() => Boolean)
  async clearAllData(): Promise<boolean> {
    await this.answersService.deleteMany();
    await this.usersService.deleteMany();
    await this.questionnairesService.deleteMany();
    return true;
  }
}
