import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AuthGuard as AG } from "@/components/auth-guard";
import { Auth } from "@/features/auth";
import { Login } from "@/features/auth/login";
import { AuthOptions } from "@/features/auth/options";
import { Signup } from "@/features/auth/signup";
import { LoginAction } from "@/services/actions/login";

export function Router() {
  const router = createBrowserRouter([
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
          <div>app</div>
        </AG>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
