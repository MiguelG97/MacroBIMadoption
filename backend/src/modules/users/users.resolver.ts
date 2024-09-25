import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateManyUsersInput, CreateUserInput } from './dto/create-user.input';
import { UpdateManyUserInput, UpdateUserInput } from './dto/update-user.input';
// import { UpdateUserInput } from './dto/update-user.input';

/**Step2) Resolvers:
 * It's a class with resolver functions as methods that uses
 * Graphql operations to query db data with a specific shape
 * defined in graph schema.
 * */
@Resolver(() => User)
//type function is used to suply a parent object (Graph schema object Type)
// used in the resolver functions/methods
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { name: 'findOneUser' })
  async findOne(@Args('userId', { type: () => Int }) userId: number) {
    return await this.usersService.findOne(userId);
  }
  @Query(() => [User], { name: 'findAllUsers' })
  async findAll() {
    return await this.usersService.findAll();
  }
  @Query(() => [User], { name: 'findManyUsers' })
  async findMany(@Args('userIds', { type: () => [Int] }) userIds: number[]) {
    return await this.usersService.findMany(userIds);
  }

  //All graphql operation does is ask for specific fields on objects. It is compound by:
  //a) Operation type[query, mutation,subs...]: to indicate if it's a read or write operation.
  @Mutation(() => User) //Type function works as same as in the graphql schema objectType field!
  //b) an Operation Name: we can also supply a variable definition [scalars] (prefixed with $) or input types [objects] to the operations
  //or even fields(how you do this in nestjs?)

  //c) resolver are fields inside the query/Mutation + operationName {  ...here}
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.usersService.create(createUserInput);
  }

  @Mutation(() => [User])
  async createUsers(
    @Args('createManyUsersInput') createManyUsersInput: CreateManyUsersInput,
  ) {
    const result = await this.usersService.createMany(createManyUsersInput);
    return result;
  }

  @Mutation(() => User)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return await this.usersService.update(updateUserInput);
  }

  @Mutation(() => [User])
  async updateManyUsers(
    @Args('updateManyUserInput') updateManyUserInput: UpdateManyUserInput,
  ) {
    return await this.usersService.updateMany(updateManyUserInput);
  }

  // @Mutation(() => User)
  // removeUser(@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.remove(id);
  // }
}
