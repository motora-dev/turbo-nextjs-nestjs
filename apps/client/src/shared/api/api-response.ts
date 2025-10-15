// NOTE:
// Next.js の Server→Client 間では「プレーンオブジェクト」以外は渡せません。
// クラスインスタンスはシリアライズ不可のため、型＋ファクトリ関数で表現します。

export type ApiResponse<T> = {
  status: number;
  statusText: string;
  json: T;
};

export function createApiResponse<T>(status: number, statusText: string, json: T): ApiResponse<T> {
  return { status, statusText, json };
}
