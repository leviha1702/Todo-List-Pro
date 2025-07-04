import React from "react";
import "../../../styles/auth/login.css"; // Assuming you have a CSS file for styling
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../libs/axiosInterceptor";
import {
  showErrorToast,
  showSuccessToast,
} from "../../../utils/toastNotifications";
import { isValidEmail } from "../../../utils/checkInput";
import Loading from "../../../components/loading/loading";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!isValidEmail(email)) {
      setLoading(false);
      return showErrorToast("Invalid email!");
    }

    axiosInstance
      .post("/auth/login", {
        identify: email,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          navigate("/");
          return showSuccessToast("Login created successfully!");
        }
      })
      .catch((error) => {
        setLoading(false);
        return showErrorToast(error.response.data.message);
      });
  };
  return (
    <React.Fragment>
      <div className="auth">
        <div className="login-container">
          <div className="login-box">
            <h2>Welcome Back</h2>
            <p>Login to your account</p>
            <form onSubmit={handleSignIn}>
              <div className="form-group">
                <i className="fas fa-envelope icon" />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
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
                <button className="google-btn">
                  <i className="fab fa-google" /> Google
                </button>
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
