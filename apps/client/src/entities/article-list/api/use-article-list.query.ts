'use client';

import { useQuery } from '@tanstack/react-query';

import { wrapperApi } from '@shared/api/wrapper-api';

import { ArticleArraySchema } from '../model/article-list.schema';

import { getArticleList } from './get-article-list.api';

import type { Article } from '../model/article-list.schema';

async function fetchArticleList(): Promise<Article[]> {
  return wrapperApi(await getArticleList(), ArticleArraySchema);
}

export function useArticleListQuery() {
  return useQuery<Article[]>({
    queryKey: ['articles'],
    queryFn: fetchArticleList,
  });
}
