import { useContext } from "react";
import AppContext from "./AppContext";
import React from "react";

function CallContext() {
  const context = useContext(AppContext);
  return context;
}

function AppContextProvider({ children }) {
  const value = { appName: "Pawler" };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { CallContext, AppContextProvider };
