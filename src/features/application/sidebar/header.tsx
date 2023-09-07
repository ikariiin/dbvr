import { useCallback, useState } from "react";

import { Icon } from "@/components/icon";
import { IconButton } from "@/components/icon-button";
import { Menu } from "@/components/menu";
import { MenuItem } from "@/components/menu/item";
import { Typography } from "@/components/typography";
import { useAppStore } from "@/services/store";

export function SidebarHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const fetchConnections = useAppStore((state) => state.fetchConnectins);

  const refresh = useCallback(() => {
    fetchConnections();
    setMenuOpen(false);
  }, [fetchConnections]);

  return (
    <header className="mb-4 flex items-center justify-between">
      <Typography variant="h2">Connections</Typography>
      <div className="flex gap-2">
        <IconButton icon={<Icon name="add" />} viewSize="normal" />
        <Menu
          element={<IconButton icon={<Icon name="more_horiz" />} viewSize="normal" />}
          open={menuOpen}
          setOpen={setMenuOpen}
        >
          <MenuItem icon={<Icon name="refresh" />} onClick={refresh}>
            Refresh
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
}
