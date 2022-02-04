import { useContext } from "react";
import AppContext from "./AppContext";
import React from "react";

function CallContext() {
  const context = useContext(AppContext);
  return context;
}

function AppContextProvider({ children }) {
  const value = {
    appName: "Pawler",
    appUrl: "http://localhost:3000",
    appVer: "0.0.1",
    appYear: "2022",
    createdBy: "Dane Dobra",
    createdByEmail: "danehaley22@gmail.com",
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { CallContext, AppContextProvider };
