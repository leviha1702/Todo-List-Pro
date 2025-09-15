import LayoutAuth from "../layouts/LayoutAuth";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import ForgetPassword from "../pages/auth/forget";
import WithAuthGuard from "../guards/withAuthGuard";

const authRoutes = {
  path: "auth",
  element: (
    <LayoutAuth>
      <WithAuthGuard />
    </LayoutAuth>
  ),
  children: [
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
    { path: "forget", element: <ForgetPassword /> },
  ],
};

export default authRoutes;
