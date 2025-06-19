import Home from "../pages/home";
import Docs from "../pages/Docs";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts";
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/docs",
        element: <Docs />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

export default router;
