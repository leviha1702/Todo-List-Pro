// import Home from "../pages/home";
import Docs from "../pages/Docs";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts";
import NotFound from "../pages/NotFound";
import React from "react";
import LoadingSpinner from "../components/Loading";

const Home = React.lazy(() => import("../pages/home"));

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <Home />,
          </React.Suspense>
        ),
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
