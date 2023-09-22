import React, { createContext } from "react";
export const GlobalContext=createContext(null)
export const GlobalDispatchContext=createContext(null)

const GlobalContextProvider = ({ childern }) => {
  return (
    <GlobalContext.Provider>
      <GlobalDispatchContext.Provider>{childern}</GlobalDispatchContext.Provider>
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
