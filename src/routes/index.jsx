import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/not-found";
import React from "react";
import LayoutGlobal from "../layouts/LayoutGlobal";
import mainRoutes from "./mainRoutes";
import authRoutes from "./authRoutes";

const routes = [
  {
    path: "/",
    element: <LayoutGlobal />,
    children: [mainRoutes, authRoutes],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

export default router;
