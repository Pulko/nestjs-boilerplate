import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { ViewModule } from './modules/view/view.module'

@Module({
  imports: [
    ViewModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({ driver: ApolloDriver }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
