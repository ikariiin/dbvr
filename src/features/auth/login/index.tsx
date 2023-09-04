import { useCallback, useEffect, useState } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { ApiError } from "@/services/api";
import { AuthTokenDTO } from "@/services/api/auth";
import { useAuthStore } from "@/services/store/auth";

export function Login() {
  const [submitted, setSubmitted] = useState(false);

  const response = useActionData() as AuthTokenDTO | ApiError | undefined;
  const setAuthToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();

  const responseHandler = useCallback(() => {
    if (!response) return;

    if ((response as ApiError)?.status === "error") {
      // Handle error
      return;
    }

    setAuthToken((response as AuthTokenDTO).token);
    navigate("/app");
  }, [response, setAuthToken, navigate]);

  useEffect(() => {
    responseHandler();
  }, [responseHandler]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6">
      <h1 className={"mb-2 text-4xl font-extrabold tracking-tight"}>Login</h1>
      <Form className={"flex flex-col gap-3"} method={"POST"} onSubmit={() => setSubmitted(true)}>
        <Input
          disabled={submitted}
          label={"Username"}
          name={"username"}
          placeholder={"Your username"}
        />
        <Input
          disabled={submitted}
          label={"Password"}
          name={"password"}
          placeholder={"Your password"}
          type={"password"}
        />
        <Button disabled={submitted} type={"submit"}>
          {submitted ? "Logging in..." : "Login"}
        </Button>
      </Form>
    </div>
  );
}
