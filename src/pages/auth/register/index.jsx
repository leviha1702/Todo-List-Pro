import React, { useState } from "react";
import "../../../styles/auth/register.css"; // Adjust the path as necessary
import { Link } from "react-router-dom";
import {
  showErrorToast,
  showSuccessToast,
} from "../../../utils/toastNotifications.js"; // Ensure you have react-toastify installed
import Loading from "../../../components/loading/loading.jsx";

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setLoading(true);

    //Check password
    if (password !== confirmPassword) {
      setLoading(false);
      return showErrorToast("Password and confirm password do not match");
    }
    setLoading(false);

    return showSuccessToast("Logged in successfully!");
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
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <i className="fas fa-lock icon" onClick={handleShowPassword} />
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
                <i
                  className="fas fa-lock icon"
                  onClick={handleShowConfirmPassword}
                />
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
