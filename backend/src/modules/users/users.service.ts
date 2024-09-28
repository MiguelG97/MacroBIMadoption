import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateManyUsersInput, CreateUserInput } from './dto/create-user.input';
// import { UpdateUserInput } from './dto/update-user.input';
import { PrismaClientService } from 'src/core/utils/prisma/prisma_client.service';
import { UpdateManyUserInput, UpdateUserInput } from './dto/update-user.input';
import { Users } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prismaClient: PrismaClientService) {}
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
  async create(createUserInput: CreateUserInput) {
    try {
      //the create command it does return the user created as compare to the createMany command
      const newUser = await this.prismaClient.users.create({
        data: createUserInput,
      });
      return newUser;
    } catch (error) {
      throw new InternalServerErrorException(error);
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
      throw new InternalServerErrorException(error);
    }
  }
  async update(updateUserInput: UpdateUserInput): Promise<Users> {
    const dataToUpdate = {};
    const filteredFields = Object.keys(updateUserInput).filter(
      (x) => updateUserInput[x] !== undefined && x !== 'userId',
    );
    filteredFields.forEach((x) => (dataToUpdate[x] = updateUserInput[x]));

    const result = await this.prismaClient.users.update({
      where: {
        userId: updateUserInput.userId,
      },
      data: dataToUpdate,
    });
    return result;
  }
  async updateMany(updateManyUserInput: UpdateManyUserInput): Promise<Users[]> {
    const results: Users[] = [];
    for (const updateUserInput of updateManyUserInput.userInputs) {
      const result = await this.update(updateUserInput);
      results.push(result);
    }

    return results;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
