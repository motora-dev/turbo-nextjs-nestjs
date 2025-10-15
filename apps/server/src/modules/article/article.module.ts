import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ConfigModule } from '@nestjs/config';
import { PrismaAdapterModule, SupabaseAdapterModule } from '@adapters';
import { ArticleController } from './article.controller';
import { GetArticleHandler } from './queries';
import { ArticleService } from './services';
import { ArticleRepository } from './repositories';

const ArticleHandlers = [GetArticleHandler];

@Module({
  imports: [CqrsModule, ConfigModule, PrismaAdapterModule, SupabaseAdapterModule],
  controllers: [ArticleController],
  providers: [ArticleService, ArticleRepository, ...ArticleHandlers],
})
export class ArticleModule {}
