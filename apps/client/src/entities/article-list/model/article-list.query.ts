import { useQuery } from '@tanstack/react-query';

import type { Article } from './article-list.type';
import { ArticleArraySchema } from './article-list.schema';

async function fetchArticleList(): Promise<Article[]> {
  const res = await fetch('/api/article-list', { cache: 'no-store' });
  if (!res.ok) throw new Error('failed to fetch articles');
  const json = await res.json();
  return ArticleArraySchema.parse(json);
}

export function useArticleListQuery() {
  return useQuery<Article[]>({
    queryKey: ['articles'],
    queryFn: fetchArticleList,
  });
}
