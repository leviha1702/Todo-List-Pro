import ErrorPage from "../pages/error-page";
import lazyLoader from "./lazyLoader";
const LayoutPage = lazyLoader(() => import("../layouts/LayoutPage"), 0);
const Home = lazyLoader(() => import("../pages/home"), 0);
const About = lazyLoader(() => import("../pages/about"), 0);

const mainRoutes = {
  path: "/",
  element: <LayoutPage />,
  errorElement: <ErrorPage />, // You can replace this with a custom error component
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
  ],
};

export default mainRoutes;
