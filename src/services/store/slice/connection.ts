import { StateCreator } from "zustand";

import { TSlices } from "..";
import { ConnectionDTO, allConnections } from "../../api/pg";

export interface ConnectionSlice {
  connections: ConnectionDTO[];
  connectionLastUpdated: Date | null;
  connectionsLoaded: boolean;
  fetchConnectins: () => Promise<unknown>;
}

export const createConnectionSlice: StateCreator<TSlices, [], [], ConnectionSlice> = (
  set,
  get,
) => ({
  connections: [] as ConnectionDTO[],
  connectionLastUpdated: null,
  connectionsLoaded: false,
  async fetchConnectins() {
    const authToken = get().token;

    if (!authToken) {
      throw new Error("Could not get authorization token to perform an auth-guarded operation");
    }

    const connections = await allConnections(authToken, false);

    set(() => ({ connections, connectionLastUpdated: new Date(), connectionsLoaded: true }));
  },
});
