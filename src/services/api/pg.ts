import { AsFetchResponse, ReturnType, fetchHelper, responseHelper } from ".";

export interface ConnectionDTO {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  label: string;
  userId: number;
  connectionString: string;
}

export async function allConnections<T extends AsFetchResponse>(
  token: string,
  asFetchResponse: T,
): Promise<ReturnType<T, ConnectionDTO[]>> {
  const response = await fetchHelper("GET", `/pg/connection`, false, token);

  return responseHelper(response, asFetchResponse);
}
