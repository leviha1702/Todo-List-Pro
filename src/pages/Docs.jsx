import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/header";
import NavBar from "../components/Nav";

const Docs = () => {
  return (
    <div class="container">
      <Header />
      <div className="container-content">
        <NavBar />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default Docs;
