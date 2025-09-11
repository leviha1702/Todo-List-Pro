import WithAuthGuard from "../guards/withAuthGuard";
import LayoutAuth from "../layouts/LayoutAuth";
const Login = lazyLoader(() => import("../pages/auth/login"), 0);
const Register = lazyLoader(() => import("../pages/auth/register"), 0);
const ForgetPassword = lazyLoader(() => import("../pages/auth/forget"), 0);
import lazyLoader from "./lazyLoader";

const authRoutes = {
  path: "auth",
  element: (
    <WithAuthGuard>
      <LayoutAuth />
    </WithAuthGuard>
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
