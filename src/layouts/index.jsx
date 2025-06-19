import Header from "../components/header";
import Footer from "../components/Footer";
import NavBar from "../components/Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div class="container">
      <Header />
      <div className="container-content">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
