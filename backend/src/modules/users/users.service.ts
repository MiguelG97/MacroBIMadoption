import { Injectable } from '@nestjs/common';
import { CreateManyUsersInput, CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaClientService } from 'src/core/utils/prisma/prisma_client.service';

@Injectable()
export class UsersService {
  constructor(private prismaClient: PrismaClientService) {}

  async create(createUserInput: CreateUserInput) {
    try {
      const newUser = await this.prismaClient.users.create({
        data: createUserInput,
      });
      return newUser;
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  }
  async createMany(createManyUsersInput: CreateManyUsersInput) {
    try {
      const newUsers = await this.prismaClient.users.createMany({
        data: createManyUsersInput.manyUsersInput,
      });
      return newUsers;
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
