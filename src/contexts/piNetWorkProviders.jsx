import React from "react";
import { DigPiReducer } from "../redux/pinetwork";

export const PiNetWorkContext = React.createContext();

const PiNetWorkProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(DigPiReducer, { count: 0 });

  PiNetWorkContext.displayName = "UserReducer +UserContext";

  const data = {
    state,
    dispatch,
  };

  return (
    <PiNetWorkContext.Provider value={data}>
      {children}
    </PiNetWorkContext.Provider>
  );
};

export default PiNetWorkProvider;
