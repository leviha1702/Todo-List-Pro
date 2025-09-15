import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/auth/forget.css"; // Adjust the path as necessary
import axiosInstance from "../../../libs/axiosInterceptor";
import Loading from "../../../components/loading/loading";
import { isValidEmail } from "../../../utils/checkInput";
import {
  showErrorToast,
  showSuccessToast,
} from "../../../utils/toastNotifications";
import SEO from "../../../components/seo/seo";
import { useDispatch, useSelector } from "react-redux";
import {
  forgetPasswordInitiate,
  resetAuthState,
} from "../../../redux/actions/authAction";
import {
  selectFlag,
  selectIsLoading,
} from "../../../redux/selectors/authSelector";

const ForgetPassword = () => {
  const [email, setEmail] = React.useState("");
  const isLoading = useSelector(selectIsLoading);
  const flag = useSelector(selectFlag);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForgetPass = (e) => {
    e.preventDefault();
    dispatch(forgetPasswordInitiate(email));
  };

  React.useEffect(() => {
    if (flag) {
      navigate("/auth/login");
    }
    return () => dispatch(resetAuthState());
  }, [flag]);

  return (
    <React.Fragment>
      <SEO title="Forget" description="Welcome to page forget of Class 02" />
      <div className="auth">
        <div className="forget-container">
          <div className="forget-box">
            <h2>Forgot Password</h2>
            <p>Enter your email to receive a new password</p>
            <form onSubmit={handleForgetPass}>
              <div className="input-group">
                <div className="input-with-icon">
                  <i className="fas fa-envelope" />
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    required=""
                  />
                </div>
              </div>
              {isLoading ? (
                <Loading />
              ) : (
                <button type="submit" className="forget-btn">
                  <i className="fas fa-paper-plane" /> Send New Password
                </button>
              )}
              <div className="forget-text">
                <p>
                  Back to <Link to="/auth/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForgetPassword;
