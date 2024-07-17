import { Injectable } from '@nestjs/common';
import { CreateManyUsersInput, CreateUserInput } from './dto/create-user.input';
// import { UpdateUserInput } from './dto/update-user.input';
import { PrismaClientService } from 'src/core/utils/prisma/prisma_client.service';

@Injectable()
export class UsersService {
  constructor(private prismaClient: PrismaClientService) {}

  async create(createUserInput: CreateUserInput) {
    try {
      //the create command it does return the user created as compare to the createMany command
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
      //use the createManyAndReturn since graphql demands for returning sth always!
      const newUsers = await this.prismaClient.users.createManyAndReturn({
        data: createManyUsersInput.manyUsersInput,
      });
      return newUsers;
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  }

  async findAll() {
    const allUsers = await this.prismaClient.users.findMany();
    return allUsers;
  }

  async findOne(userId: number) {
    const userFound = await this.prismaClient.users.findUnique({
      where: {
        userId,
      },
    });
    return userFound;
  }
  async findMany(userIds: number[]) {
    const usersFound = [];
    for (const userId of userIds) {
      const userFound = await this.prismaClient.users.findUnique({
        where: {
          userId,
        },
      });
      usersFound.push(userFound);
    }

    return usersFound;
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
