import { PrismaAdapter } from '@adapters';
import { Injectable } from '@nestjs/common';

import type { Article } from '@prisma/client';

@Injectable()
export class ArticleListRepository {
  constructor(private readonly prisma: PrismaAdapter) {}

  async getArticleList(): Promise<Article[]> {
    return await this.prisma.article.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
