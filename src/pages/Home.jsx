import axios from "axios";
import React, { useEffect } from "react";
import "../styles/loginForm.css";

const Home = () => {
  const [content, setContent] = React.useState(null);
  const [identify, setIdentify] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [Loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5001/api/auth/login",
        {
          identify: identify,
          password: password,
        }
      );

      setLoading(false);
      setContent(response.data);
      setMessage(null);

      console.log("Đăng nhập thành công:", response.data);
      navigate("/docs");
    } catch (error) {
      setLoading(false);
      setMessage(error.response.data.message);
    }
  };

  return (
    <React.Fragment>
      <div className="login-container">
        <div className="login-box">
          <h2>Đăng Nhập</h2>
          <form onSubmit={handleLogin}>
            <label>Email:</label>
            <input
              type="email"
              required
              onChange={(e) => setIdentify(e.target.value)}
            />
            <label>Mật khẩu:</label>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.vlaue)}
            />
            {Loading ? (
              <p>Đang xử lí...</p>
            ) : (
              <button type="submit">Đăng Nhập</button>
            )}

            {message ? <p className="message">{message}</p> : null}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
