import { create } from 'zustand';

type AppError = {
  message: string;
  code?: string;
  at?: string;
};

interface ErrorStore {
  errors: AppError[];
  push: (e: AppError) => void;
  clear: () => void;
}

export const useErrorStore = create<ErrorStore>((set) => ({
  errors: [],
  push: (e) => set((s) => ({ errors: [...s.errors, e] })),
  clear: () => set({ errors: [] }),
}));


