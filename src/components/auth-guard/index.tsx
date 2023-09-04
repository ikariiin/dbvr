import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

import { useAuthStore } from "@/services/store/auth";

export interface AuthGuardProps {
  children: ReactElement;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    return <Navigate to="/auth" />;
  }

  return children;
}
