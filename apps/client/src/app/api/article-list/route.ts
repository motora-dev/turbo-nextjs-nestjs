import { NextRequest } from 'next/server';
import { ArticleArraySchema } from '@entities/article-list/model/article-list.schema';
import { getArticleList } from '@entities/article-list';
import { ZodError } from 'zod';

export async function GET(_req: NextRequest) {
  try {
    const list = await getArticleList();
    const parsed = ArticleArraySchema.parse(list);
    return Response.json(parsed, { status: 200 });
  } catch (e) {
    if (e instanceof ZodError) {
      return Response.json({ issues: e.issues }, { status: 400 });
    }
    return Response.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}


