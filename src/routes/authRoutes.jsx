import WithPublic from "../guards/withPublic";
import LayoutAuth from "../layouts/layoutAuth";
const Login = lazyLoader(() => import("../pages/auth/login"), 0);
const Register = lazyLoader(() => import("../pages/auth/register"), 0);
const ForgetPassword = lazyLoader(() => import("../pages/auth/forget"), 0);
import lazyLoader from "./lazyLoader";

const authRoutes = {
  path: "auth",
  element: (
    <WithPublic>
      <LayoutAuth />
    </WithPublic>
  ),
  children: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "forget",
      element: <ForgetPassword />,
    },
  ],
};

export default authRoutes;
