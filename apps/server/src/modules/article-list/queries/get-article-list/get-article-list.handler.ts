import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { GetArticleListQuery } from './get-article-list.query';
import { GetArticleListResponse } from '../../dto';
import { ArticleListService } from '../../services';

@QueryHandler(GetArticleListQuery)
export class GetArticleListHandler implements IQueryHandler<GetArticleListQuery> {
  constructor(private readonly articleListService: ArticleListService) {}

  async execute(): Promise<GetArticleListResponse> {
    return await this.articleListService.getArticleList();
  }
}
