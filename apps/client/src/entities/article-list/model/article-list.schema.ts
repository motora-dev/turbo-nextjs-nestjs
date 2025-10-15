import { z } from 'zod';

// Client-side schema: dates come as ISO strings and are normalized to Date
export const ArticleSchema = z
  .object({
    id: z.string(),
    title: z.string().min(1),
    excerpt: z.string().default(''),
    publishedAt: z
      .union([z.string(), z.date()])
      .transform((value) => (value instanceof Date ? value : new Date(value))),
    updatedAt: z
      .union([z.string(), z.date()])
      .transform((value) => (value instanceof Date ? value : new Date(value))),
    tags: z.array(z.string()).default([]),
  })
  .strict();

export const ArticleArraySchema = z.array(ArticleSchema);

// Server-side validation schema (optional): expects Date instances prior to JSON serialization
export const ArticleServerSchema = z
  .object({
    id: z.string(),
    title: z.string().min(1),
    excerpt: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date(),
    tags: z.array(z.string()),
  })
  .strict();

export const ArticleServerArraySchema = z.array(ArticleServerSchema);

export type Article = z.infer<typeof ArticleSchema>;


