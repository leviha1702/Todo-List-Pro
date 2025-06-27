import React from "react";
import { Outlet } from "react-router-dom";
import GlobalProvider from "../contexts/globalProvider";
import { ToastContainer } from "react-toastify";
const LayoutGlobal = () => {
  return (
    <React.Fragment>
      {/* Toast */}
      <ToastContainer />

      {/* Global Provider */}
      <GlobalProvider>
        <Outlet />
      </GlobalProvider>
    </React.Fragment>
  );
};

export default LayoutGlobal;
