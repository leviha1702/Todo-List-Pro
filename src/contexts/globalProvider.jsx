import React from "react";

export const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [state, setState] = React.useState({
    name: "John Doe",
    email: "levietha@gmail.com",
  });
  GlobalContext.displayName = "StudentContext";

  const data = { state, setState };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
