import { create } from 'zustand';

import type { Article } from './article-list.type';

// 記事リストストアの型定義
interface ArticleListStore {
  articles: Article[];

  // アクション
  setArticles: (articles: Article[]) => void;
  fetchArticles: (fetcher: () => Promise<Article[]>) => Promise<void>;
}

// Zustandストアの作成
export const useArticleListStore = create<ArticleListStore>((set) => ({
  articles: [],

  setArticles: (articles) => set({ articles }),

  fetchArticles: async (fetcher) => {
    try {
      const articles = await fetcher();
      set({ articles });
    } catch (error) {
      console.error('Failed to fetch articles:', error);
      // エラー時は空配列のまま
    }
  },
}));
