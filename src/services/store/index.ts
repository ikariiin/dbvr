import { create } from "zustand";
import { persist } from "zustand/middleware";

import { AuthSlice, createAuthSlice } from "./slice/auth";
import { ConnectionSlice, createConnectionSlice } from "./slice/connection";

export type TSlices = ConnectionSlice & AuthSlice;

export const useAppStore = create<TSlices>()(
  persist(
    (...params) => ({
      ...createConnectionSlice(...params),
      ...createAuthSlice(...params),
    }),
    {
      name: "app-store",
    },
  ),
);
