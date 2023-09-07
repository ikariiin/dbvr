import { StateCreator } from "zustand";

import { TSlices } from "..";

export interface AuthSlice {
  token: string | null;
  setToken: (token: string | null) => unknown;
}

export const createAuthSlice: StateCreator<TSlices, [], [], AuthSlice> = (set) => ({
  token: null,
  setToken(token) {
    set(() => ({ token }));
  },
});
