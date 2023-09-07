import { Outlet } from "react-router-dom";

import { Sidebar } from "./sidebar";

export function Application() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <main className="grow">
        <Outlet />
      </main>
    </div>
  );
}
