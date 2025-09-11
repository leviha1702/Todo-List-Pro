import React from "react";
import "../../styles/components/header.css"; // Adjust the path as necessary
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../libs/axiosInterceptor";
import { deleteFromLocalStorage } from "../../utils/localStorage";
import { showErrorToast } from "../../utils/toastNotifications";
import { keyLocalStorage } from "../../constants/keyConstant";
import Logo from "../../assets/logo/logo.png";

const Header = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "Blog", link: "/blog" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Cart", link: "/cart", icon: "far fa-shopping-bag" },
    { name: "Logout", link: "#", isLogout: true },
  ];

  const handleLogout = () => {
    axiosInstance
      .get("/auth/logout")
      .then((response) => {
        if (response.status === 200) {
          deleteFromLocalStorage(keyLocalStorage.accessToken);
          navigate("/auth/login");
        }
      })
      .catch((error) => {
        setLoading(false);
        return showErrorToast(error.response.data.message);
      });
  };
  return (
    <section id="header">
      <Link to="#">
        <img src={Logo} className="logo" alt="Logo" />
      </Link>
      <div>
        <ul id="navbar">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.isLogout ? (
                <button onClick={handleLogout} style={{ color: "red" }}>
                  {item.name}
                </button>
              ) : (
                <Link to={item.link}>
                  {item.icon ? <i className={item.icon} /> : item.name}
                </Link>
              )}
            </li>
          ))}
          <Link to="#" id="close">
            <i className="far fa-times" />
          </Link>
        </ul>
      </div>
      <div id="mobile">
        <Link to="cart.html">
          <i className="far fa-shopping-bag" />
        </Link>
        <i id="bar" className="fas fa-outdent" />
      </div>
    </section>
  );
};

export default Header;
