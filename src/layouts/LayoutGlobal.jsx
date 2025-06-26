import React from "react";
import { Outlet } from "react-router-dom";
import GlobalProvider from "../contexts/globalProvider";

const LayoutGlobal = () => {
  return (
    <React.Fragment>
      <GlobalProvider>
        <Outlet />
      </GlobalProvider>
    </React.Fragment>
  );
};

export default LayoutGlobal;
