import Header from "../components/header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import NavBar from "../components/Nav";

const Home = () => {
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

export default Home;
