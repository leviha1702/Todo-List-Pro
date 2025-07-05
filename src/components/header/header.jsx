import React from "react";
import "../../styles/components/header.css"; // Adjust the path as necessary
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
  ];

  const handleLogout = () => {
    navigate("/auth/login");
  };
  return (
    <header className="main-header">
      <nav className="nav-container">
        <ul className="nav-list">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;
