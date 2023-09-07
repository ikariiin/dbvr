import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AuthGuard as AG } from "@/components/auth-guard";
import { IndexRouter } from "@/components/index-router";
import { Instructions } from "@/features/app/instructions";
import { Application } from "@/features/application";
import { Auth } from "@/features/auth";
import { Login } from "@/features/auth/login";
import { AuthOptions } from "@/features/auth/options";
import { Signup } from "@/features/auth/signup";
import { Connection } from "@/features/connection";
import { LoginAction } from "@/services/actions/login";

export function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexRouter />,
    },
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          index: true,
          element: <AuthOptions />,
        },
        {
          path: "login",
          element: <Login />,
          action: LoginAction,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
    {
      path: "/app",
      element: (
        <AG>
          <Application />
        </AG>
      ),
      children: [
        {
          index: true,
          element: <Instructions />,
        },
        {
          path: "connection/:id",
          element: <Connection />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
