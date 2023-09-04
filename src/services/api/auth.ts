import { apiConfig, fetchHelper } from "@/services/api/index";

export interface LoginDTO {
  username: string;
  password: string;
}
export interface AuthTokenDTO {
  token: string;
}

type AsFetchResponse = boolean;
type ReturnType<T extends AsFetchResponse, S = unknown> = T extends true
  ? Response
  : T extends false
  ? S
  : never;

export async function login<T extends AsFetchResponse>(
  dto: LoginDTO,
  asFetchResponse: T,
): Promise<ReturnType<T, AuthTokenDTO>> {
  const response = await fetchHelper("POST", `${apiConfig.API_BASE}/auth/login`, dto);

  if (asFetchResponse) {
    return response as never;
  }

  if (response.status !== 200) {
    throw await response.json();
  }

  return response.json();
}
