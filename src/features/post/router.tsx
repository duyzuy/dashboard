import CreatePost from "./page/CreatePost";
import PostList from "./page/PostList";
import UpdatePost from "./page/UpdatePost";

export const postRoutes = [
  {
    path: "post",
    element: <PostList />,
  },
  {
    path: "post/create",
    element: <CreatePost />,
  },
  {
    path: "post/:id",
    element: <UpdatePost />,
  },
];
