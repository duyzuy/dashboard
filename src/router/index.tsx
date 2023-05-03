import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../features/auth";
import { NotFound, PrivateRoute } from "../components/common";
import DashboardPage from "../features/dashboard/page/dashboard";
import { AuthRoute } from "../components/common/AuthRoute";

const PRIVATE_ROUTES = [];
const routes = [
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: (
          <AuthRoute>
            <LoginPage />
          </AuthRoute>
        ),
      },
      {
        path: "register",
        element: (
          <AuthRoute>
            <LoginPage />
          </AuthRoute>
        ),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: (
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export const router = createBrowserRouter(routes, {});
