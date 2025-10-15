import type { ApiResponse } from './api-response';
import type { ZodType } from 'zod';

export function wrapperApi<T>(response: ApiResponse<unknown>, schema: ZodType<T>) {
  if (response.status !== 200) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  return schema.parse(response.json);
}
