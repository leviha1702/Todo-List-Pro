import React from "react";
import "../../styles/components/header.css"; // Adjust the path as necessary
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
  ];
  return (
    <React.Fragment>
      <header className="main-header">
        <nav>
          <ul className="nav-list">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
