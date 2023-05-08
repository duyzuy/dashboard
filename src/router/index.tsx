import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../features/auth";
import { NotFound, PrivateRoute } from "../components/common";
import DashboardPage from "../features/dashboard/page/dashboard";
import { AuthRoute } from "../components/common/AuthRoute";
import AdminLayout from "../components/common/AdminLayout";
import { StorageKey } from "../models/common";
import { postRoutes } from "../features/post";
import { languageRoutes } from "../features/language";
const routes = [
  {
    path: "auth",
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
    path: "admin",
    element: (
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>
    ),
    loader: async () => {
      const authToken = localStorage.getItem(StorageKey.token);
      console.log(authToken);
      return { data: "123" };
    },
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      ...postRoutes,
      ...languageRoutes,
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export const router = createBrowserRouter(routes, {});
