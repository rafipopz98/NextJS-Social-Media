'use client'
import React, { createContext, useReducer } from "react";
import { globalReducer } from "../reducers/globalReducer";


const intialState = {
  user: {},
  isAuthenticated: false,
  isOnboarded: false,
  isLoading: true,
  // isUploadPostModalOpen: false,
};

export const GlobalContext = createContext(null);
export const GlobalDispatchContext = createContext(null);


const GlobalContextProvider = ({ childern }) => {
  const [state, dispatch] = useReducer(globalReducer, intialState);
  return (
    <GlobalContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {childern}
      </GlobalDispatchContext.Provider>
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
