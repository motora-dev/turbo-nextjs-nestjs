import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { GetArticleListResponse } from './dto';
import { GetArticleListQuery } from './queries';

@Controller('article-list')
export class ArticleListController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  async getArticleList(): Promise<GetArticleListResponse> {
    return await this.queryBus.execute(new GetArticleListQuery());
  }
}
