import { Link } from "react-router-dom";
import "../styles/page1.css";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <Link to="/ha">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
