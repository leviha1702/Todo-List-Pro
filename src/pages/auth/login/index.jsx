import React from "react";
import "../../../styles/auth/login.css"; // Assuming you have a CSS file for styling
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../libs/axiosInterceptor";
import {
  showErrorToast,
  showSuccessToast,
} from "../../../utils/toastNotifications";
import Loading from "../../../components/loading/loading";
import { saveToLocalStorage } from "../../../utils/localStorage";
import { keyLocalStorage } from "../../../constants/keyConstant";
import SEO from "../../../components/seo/seo";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleClientId } from "../../../configs/googleConfig";
import LoginGoogle from "../../../components/auth/loginGoogle";

const Login = () => {
  const [identify, setIdentify] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const focusRef = React.useRef(null);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);

    axiosInstance
      .post("/auth/login", {
        identify,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          saveToLocalStorage(
            keyLocalStorage.accessToken,
            response.data.accessToken
          );
          navigate("/");

          return showSuccessToast("Login successfully!");
        }
      })
      .catch((error) => {
        setLoading(false);
        return showErrorToast(error.response.data.message);
      });
  };

  React.useEffect(() => {
    focusRef.current.focus();
  }, []);
  return (
    <React.Fragment>
      <SEO
        title="Sign Up"
        description="Welcome to page login website of Class 02"
      />
      <div className="auth">
        <div className="login-container">
          <div className="login-box">
            <h2>Welcome Back</h2>
            <p>Login to your account</p>
            <form onSubmit={handleSignIn}>
              <div className="input-group">
                <i className="fa fa-user icon" />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email or username"
                  required
                  onChange={(e) => setIdentify(e.target.value)}
                  ref={focusRef}
                />
              </div>
              <div className="input-group">
                <div onClick={handleShowPassword}>
                  {showPassword ? (
                    <i className="fas fa-unlock icon" />
                  ) : (
                    <i className="fa-solid fa-lock icon"></i>
                  )}
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="options">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <Link to="/auth/forget" className="forgot-password">
                  Forgot Password?
                </Link>
              </div>
              {loading ? (
                <Loading />
              ) : (
                <button type="submit" className="login-btn">
                  Login
                </button>
              )}
            </form>
            <div className="social-login">
              <p>Or login with</p>
              <div className="social-icons">
                <GoogleOAuthProvider clientId={GoogleClientId}>
                  <LoginGoogle />
                </GoogleOAuthProvider>

                <button className="facebook-btn">
                  <i className="fab fa-facebook-f" /> Facebook
                </button>
              </div>
            </div>
            <p className="register-text">
              Don't have an account?
              <Link to="/auth/register">Register now</Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
