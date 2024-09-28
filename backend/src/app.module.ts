import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AnswersModule } from './modules/answers/answers.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { QuestionnairesModule } from './modules/questionnaires/questionnaires.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AnswersModule,
    //Step 0) Setting up apollo server!
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [ConfigModule],
      driver: ApolloDriver,
      //Async config
      useFactory: async () => ({
        playground: true,
        //Generate graphql schema using code first approach
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        sortSchema: true,
      }),
      //End of Step0) inject dependencies on the async config! (read env., etc.)
      inject: [ConfigService],
    }),
    QuestionnairesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
