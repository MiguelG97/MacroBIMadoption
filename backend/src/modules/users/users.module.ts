import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaClientService } from 'src/core/utils/prisma/prisma_client.service';

@Module({
  providers: [UsersResolver, UsersService, PrismaClientService],
})
export class UsersModule {}
