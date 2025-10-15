'use client';

import { useQuery } from '@tanstack/react-query';

import { wrapperApi } from '@shared/api/wrapper-api';

import { ArticleResponseSchema, ArticleSchema, type Article } from '../model/article.schema';

import { getArticle } from './get-article.api';

async function fetchArticle(articleId: string): Promise<Article> {
  const res = wrapperApi(await getArticle(articleId), ArticleResponseSchema);
  const html = await fetch(res.fileSignedUrl).then((r) => r.text());
  return ArticleSchema.parse({ ...res, html });
}

export function useArticleQuery(articleId: string) {
  return useQuery<Article>({
    queryKey: ['article', articleId],
    queryFn: () => fetchArticle(articleId),
  });
}
