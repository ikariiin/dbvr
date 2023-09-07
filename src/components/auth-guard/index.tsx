import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

import { useAppStore } from "@/services/store";

export interface AuthGuardProps {
  children: ReactElement;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const token = useAppStore((state) => state.token);

  if (!token) {
    return <Navigate to="/auth" />;
  }

  return children;
}
