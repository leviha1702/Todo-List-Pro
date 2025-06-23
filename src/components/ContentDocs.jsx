import { GlobalContext } from "../contexts/globalProvider";
import "../styles/page1.css";
import React from "react";

const ContentDocs = () => {
  const { state } = React.useContext(GlobalContext);

  return (
    <div className="content">
      <h1>Content Docs</h1>
      <h1>{state.name}</h1>
      <h2>{state.email}</h2>
    </div>
  );
};

export default ContentDocs;
