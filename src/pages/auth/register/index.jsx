import React, { useState } from "react";
import "../../../styles/auth/register.css"; // Adjust the path as necessary
import { Link, useNavigate } from "react-router-dom";
import {
  showErrorToast,
  showSuccessToast,
} from "../../../utils/toastNotifications.js"; // Ensure you have react-toastify installed
import Loading from "../../../components/loading/loading.jsx";
import { isValidEmail } from "../../../utils/checkInput.js";
import axiosInstance from "../../../libs/axiosInterceptor.jsx";

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!isValidEmail(email)) {
      setLoading(false);
      return showErrorToast("Invalid email!");
    }
    if (password !== confirmPassword) {
      //Check password
      setLoading(false);
      return showErrorToast("Password and confirm password do not match");
    }

    axiosInstance
      .post("/auth/register", {
        email,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          navigate("/auth/login");
          return showSuccessToast("Account created successfully!");
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
        <div className="register-container">
          <div className="register-box">
            <h2>Create an Account</h2>
            <form onSubmit={handleSignUp}>
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
                  name="password"
                  placeholder="Create a password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <div onClick={handleShowConfirmPassword}>
                  {showConfirmPassword ? (
                    <i className="fas fa-unlock icon" />
                  ) : (
                    <i className="fa-solid fa-lock icon"></i>
                  )}
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Confirm your password"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {loading ? (
                <Loading />
              ) : (
                <button type="submit" className="register-btn">
                  Sign Up
                </button>
              )}
            </form>
            <p className="alternate-option">
              Already have an account? <Link to="/auth/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
