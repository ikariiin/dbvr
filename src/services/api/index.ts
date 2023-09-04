export interface ApiError {
  status: "error";
  message: string;
}

export const apiConfig = {
  API_BASE: import.meta.env.VITE_API_BASE,
} as const;

export function fetchHelper(method: string, uri: string, body?: unknown) {
  const init: RequestInit = {
    method,
  };

  if (body) {
    init.body = JSON.stringify(body);
    init.headers = {
      "Content-Type": "application/json",
    };
  }

  return fetch(uri, init);
}
