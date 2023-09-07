export type AsFetchResponse = boolean;
export type ReturnType<T extends AsFetchResponse, S = unknown> = T extends true
  ? Response
  : T extends false
  ? S
  : never;

export interface ApiError {
  status: "error";
  message: string;
}

export const apiConfig = {
  API_BASE: import.meta.env.VITE_API_BASE,
} as const;

export function fetchHelper(method: string, path: string, body?: unknown, authToken?: string) {
  const init: RequestInit = {
    method,
  };
  const headers = {} as Record<string, string>;

  if (body) {
    init.body = JSON.stringify(body);
    headers["Content-Type"] = "application/json";
  }

  if (authToken) {
    headers["Authorization"] = `Bearer ${authToken}`;
  }

  init.headers = headers;

  return fetch(`${apiConfig.API_BASE}${path}`, init);
}

export function responseHelper(response: Response, raw?: boolean) {
  if (raw) return response as never;

  if (response.status !== 200) {
    throw response.json();
  }

  return response.json();
}
