import { Suspense } from "react";

import { Router } from "@/services/router";

export function App() {
  return (
    <Suspense fallback={"loading"}>
      <Router />
    </Suspense>
  );
}
