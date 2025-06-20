import Header from "../components/header";
import Footer from "../components/Footer";
import NavBar from "../components/Nav";
import { Outlet } from "react-router-dom";
import GlobalProvider from "../contexts/globalProvider";

const Layout = () => {
  return (
    <GlobalProvider>
      <div class="container">
        <Header />
        <div className="container-content">
          <NavBar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </GlobalProvider>
  );
};

export default Layout;
