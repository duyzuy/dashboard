import CreateLanguage from "./page/CreateLanguage";
import UpdateLanguage from "./page/UpdateLanguage";
import ListLanguage from "./page/ListLanguage";

export const languageRoutes = [
  {
    path: "language",
    element: <ListLanguage />,
  },
  {
    path: "language/create",
    element: <CreateLanguage />,
  },
  {
    path: "language/:langId",
    element: <UpdateLanguage />,
  },
];
