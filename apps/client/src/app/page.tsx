'use client';

import { useQuery } from '@tanstack/react-query';

import { ArticleArraySchema } from '@entities/article-list/model/article-list.schema';
import { ArticleCard } from '@features/article-list';

export default function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const res = await fetch('/api/article-list', { cache: 'no-store' });
      if (!res.ok) throw new Error('failed to fetch articles');
      const json = await res.json();
      return ArticleArraySchema.parse(json);
    },
  });

  return (
    <div style={{ minHeight: '100vh' }}>
      <div style={{ marginBottom: '48px' }}>
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '16px',
          }}
        >
          記事一覧
        </h1>
        <p
          style={{
            fontSize: '20px',
            color: '#6B7280',
          }}
        >
          技術記事やチュートリアルを掲載しています
        </p>
      </div>

      {isLoading ? (
        <div
          style={{
            textAlign: 'center',
            padding: '96px 0',
            backgroundColor: '#F9FAFB',
            borderRadius: '8px',
          }}
        >
          <p style={{ fontSize: '18px', color: '#6B7280' }}>読み込み中...</p>
        </div>
      ) : !data || data.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '96px 0',
            backgroundColor: '#F9FAFB',
            borderRadius: '8px',
          }}
        >
          <p style={{ fontSize: '18px', color: '#6B7280' }}>記事がありません</p>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gap: '32px',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          }}
        >
          {data.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
