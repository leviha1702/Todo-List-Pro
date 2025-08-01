import React from "react";
import { Outlet } from "react-router-dom";
import GlobalProvider from "../contexts/globalProvider";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "../redux/store";
const LayoutGlobal = () => {
  return (
    <React.Fragment>
      {/* Toast */}
      <ToastContainer />

      {/* Global Provider */}
      <HelmetProvider>
        <Provider store={store}>
          <GlobalProvider>
            <Outlet />
          </GlobalProvider>
        </Provider>
      </HelmetProvider>
    </React.Fragment>
  );
};

export default LayoutGlobal;
