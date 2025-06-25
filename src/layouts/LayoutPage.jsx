import { Outlet } from "react-router-dom";
import GlobalProvider from "../contexts/globalProvider";
import React from "react";

const LayoutPage = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default LayoutPage;
