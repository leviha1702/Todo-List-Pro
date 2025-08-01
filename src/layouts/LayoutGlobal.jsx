import React from "react";
import { Outlet } from "react-router-dom";
import GlobalProvider from "../contexts/globalProvider";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
import PiNetWorkProvider from "../contexts/piNetWorkProviders";
const LayoutGlobal = () => {
  return (
    <React.Fragment>
      {/* Toast */}
      <ToastContainer />

      {/* Global Provider */}
      <HelmetProvider>
        <GlobalProvider>
          <PiNetWorkProvider>
            <Outlet />
          </PiNetWorkProvider>
        </GlobalProvider>
      </HelmetProvider>
    </React.Fragment>
  );
};

export default LayoutGlobal;
