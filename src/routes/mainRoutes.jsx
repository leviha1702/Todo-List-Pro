import lazyLoader from "./lazyLoader";
const LayoutPage = lazyLoader(() => import("../layouts/LayoutPage"), 0);
const Home = lazyLoader(() => import("../pages/home"), 5000);
const About = lazyLoader(() => import("../pages/about"), 0);

const mainRoutes = {
  path: "/",
  element: <LayoutPage />,
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
