import { Outlet } from "react-router-dom";
import GlobalProvider from "../contexts/globalProvider";
import React from "react";
import Header from "../components/header/header";

const LayoutPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};

export default LayoutPage;
