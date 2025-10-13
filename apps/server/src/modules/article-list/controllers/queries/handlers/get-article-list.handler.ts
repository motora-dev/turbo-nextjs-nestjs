import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetArticleListQuery } from '../impl/get-article-list.query';
import { ArticleListService } from '../../../providers/article-list.service';
import { GetArticleListResponse } from '../../dto/article-list.dto';
import { NotFoundException } from '@nestjs/common';

@QueryHandler(GetArticleListQuery)
export class GetArticleListHandler implements IQueryHandler<GetArticleListQuery> {
  constructor(private readonly articleListService: ArticleListService) {}

  async execute(): Promise<GetArticleListResponse> {
    throw new NotFoundException(`{ message: 'Article not found', code: 'ARTICLE_NOT_FOUND' }`);
    return await this.articleListService.getArticleList();
  }
}
