import { Link } from "react-router-dom";

import { Button } from "@/components/button";

export function AuthOptions() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6">
      <div className={"text-center"}>
        <h1 className={"mb-2 text-4xl font-extrabold tracking-tight"}>Welcome to DBVR!</h1>
        <h2 className={"tracking-tighter"}>Authenticate to access your database connections</h2>
      </div>
      <Link to={"login"}>
        <Button className={"w-64"} variant={"outlined"}>
          Login
        </Button>
      </Link>
      <Link to={"signup"}>
        <Button className={"w-64"} variant={"outlined"}>
          Signup
        </Button>
      </Link>
    </div>
  );
}
