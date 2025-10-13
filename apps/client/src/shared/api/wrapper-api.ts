import type { NextResponseLike } from './next-response';

export function wrapperApi<T>(response: NextResponseLike<T>) {
  if (response.status !== 200) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  return response.json;
}
