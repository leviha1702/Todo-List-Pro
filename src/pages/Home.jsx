import ContentHome from "../components/ContentHome";
import React from "react";

const Home = () => {
  const [content, setContent] = React.useState("Hello");
  return (
    <React.Fragment>
      <ContentHome ha={content} />
    </React.Fragment>
  );
};

export default Home;
