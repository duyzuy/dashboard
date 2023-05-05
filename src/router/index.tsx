import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../features/auth";
import { NotFound, PrivateRoute } from "../components/common";
import DashboardPage from "../features/dashboard/page/dashboard";
import { AuthRoute } from "../components/common/AuthRoute";
import AdminLayout from "../components/common/AdminLayout";
import { StorageKey } from "../models/common";
import { PostListPage, UpdatePostPage, CreatePostPage } from "../features/post";

const PRIVATE_ROUTES = [];

const ADMIN_ROUTES = [
  {
    path: "dashboard",
    element: <DashboardPage />,
  },
  {
    path: "post",
    element: <PostListPage />,
    children: [
      {
        path: "create",
        element: <CreatePostPage />,
      },
      {
        path: ":id",
        element: <UpdatePostPage />,
      },
    ],
  },
];

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
    children: [...ADMIN_ROUTES],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export const router = createBrowserRouter(routes, {});
