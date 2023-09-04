import { ActionFunction } from "react-router-dom";

import { login } from "@/services/api/auth";

export const LoginAction: ActionFunction = async ({ request }) => {
  const payload = await request.formData();

  try {
    const [username, password] = [payload.get("username"), payload.get("password")] as string[];
    const response = await login({ username, password }, true);

    return response;
  } catch (e) {
    return e;
  }
};
