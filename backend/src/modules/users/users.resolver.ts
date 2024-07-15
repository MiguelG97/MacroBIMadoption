import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateManyUsersInput, CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

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

  //All graphql operation does is ask for specific fields on objects. It is compound by:
  //a) Operation type[query, mutation,subs...]: to indicate if it's a read or write operation.
  @Mutation(() => User) //Type function works as same as in the graphql schema objectType field!
  //b) an Operation Name: we can also supply a variable definition [scalars] (prefixed with $) or input types [objects] to the operations
  //or even fields(how you do this in nestjs?)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.usersService.create(createUserInput);
  }

  @Mutation(() => [User])
  async createUsers(
    @Args('createManyUsersInput') createManyUsersInput: CreateManyUsersInput,
  ) {
    return await this.usersService.createMany(createManyUsersInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
