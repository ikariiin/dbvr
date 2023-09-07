import { useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { SidebarHeader } from "./header";

import { List } from "@/components/list";
import { ListItem } from "@/components/list/item";
import { useAppStore } from "@/services/store";

export function Sidebar() {
  const {
    connections,
    connectionsLoaded: loaded,
    fetchConnectins: fetch,
  } = useAppStore((state) => state);
  const location = useLocation();

  const load = useCallback(() => {
    if (!loaded) {
      fetch();
    }
  }, [loaded, fetch]);

  useEffect(load, [load]);

  return (
    <aside className="border-r border-gray-400 p-4" style={{ width: 300 }}>
      <SidebarHeader />
      <List>
        {connections.map((connection) => {
          const path = `/app/connection/${connection.ID}`;

          return (
            <Link key={connection.ID} to={path}>
              <ListItem active={location.pathname === path} text={connection.label} />
            </Link>
          );
        })}
      </List>
    </aside>
  );
}
