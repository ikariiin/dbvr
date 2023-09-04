import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AuthStore {
  token: string | null;
  setToken: (token: string | null) => unknown;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set(() => ({ token })),
    }),
    {
      name: "auth-store",
    },
  ),
);
