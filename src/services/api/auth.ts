import { AsFetchResponse, ReturnType, fetchHelper, responseHelper } from ".";

export interface LoginDTO {
  username: string;
  password: string;
}
export interface AuthTokenDTO {
  token: string;
}

export async function login<T extends AsFetchResponse>(
  dto: LoginDTO,
  asFetchResponse: T,
): Promise<ReturnType<T, AuthTokenDTO>> {
  const response = await fetchHelper("POST", `/auth/login`, dto);

  return responseHelper(response, asFetchResponse);
}
