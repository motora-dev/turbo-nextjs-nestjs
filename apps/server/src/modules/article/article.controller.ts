import { Controller, Get, Param } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetArticleQuery } from './queries';
import { GetArticleResponse } from './dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(':articleId')
  async getArticle(@Param('articleId') articleId: string): Promise<GetArticleResponse> {
    return await this.queryBus.execute(new GetArticleQuery(articleId));
  }
}
