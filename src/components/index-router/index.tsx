import { Navigate } from "react-router-dom";

import { useAppStore } from "@/services/store";

export function IndexRouter() {
  const token = useAppStore((state) => state.token);

  if (!token) {
    return <div>landing</div>;
  }

  return <Navigate to="/app" />;
}
