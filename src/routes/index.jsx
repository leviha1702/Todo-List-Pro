import Home from "../pages/home";
import Docs from "../pages/Docs";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/docs",
    element: <Docs />,
  },
];

const router = createBrowserRouter(routes);

export default router;
