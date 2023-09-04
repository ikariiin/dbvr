import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAuthStore } from "@/services/store/auth";

export interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    return <Navigate to="/auth" />;
  }

  return children;
}

export const AG = AuthGuard;
