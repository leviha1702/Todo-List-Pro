import React from "react";
import { Outlet } from "react-router-dom";
import GlobalProvider from "../contexts/globalProvider";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
const LayoutGlobal = () => {
  return (
    <React.Fragment>
      {/* Toast */}
      <ToastContainer />

      {/* Global Provider */}
      <HelmetProvider>
        <GlobalProvider>
          <Outlet />
        </GlobalProvider>
      </HelmetProvider>
    </React.Fragment>
  );
};

export default LayoutGlobal;
