import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetArticleResponse } from '../../dto';
import { ArticleService } from '../../services';
import { GetArticleQuery } from './get-article.query';

@QueryHandler(GetArticleQuery)
export class GetArticleHandler implements IQueryHandler<GetArticleQuery> {
  constructor(private readonly articleService: ArticleService) {}

  async execute(query: GetArticleQuery): Promise<GetArticleResponse> {
    return await this.articleService.getArticle(query.articleId);
  }
}
