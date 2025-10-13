'use server';

import { authenticatedFetch, createNextResponse, NextResponseLike } from '@shared/api';

import { Article } from '../model/article-list.schema';

export async function getArticleList(): Promise<NextResponseLike<Article[]>> {
  const res = await authenticatedFetch('/article-list', { cache: 'no-store' });
  return createNextResponse(res.status, res.statusText, await res.json());
}
