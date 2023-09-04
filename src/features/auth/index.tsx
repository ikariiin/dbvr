import { Outlet } from "react-router-dom";

import KiddoIllust from "@/assets/Kiddo.svg";

export function Auth() {
  return (
    <div className="grid h-screen w-screen grid-cols-auth-layout gap-x-4">
      <aside className="m-4 flex flex-col items-center justify-center">
        <img className="max-h-[90vh] w-full" src={KiddoIllust} />
      </aside>
      <main className="m-8 rounded-3xl bg-white p-4">
        <Outlet />
      </main>
    </div>
  );
}
