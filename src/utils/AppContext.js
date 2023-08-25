import React, { createContext, useState } from "react";

const AppContext = createContext();
export const AppProvider = (props) => {
  const [mapRef, setMapRef] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <AppContext.Provider
      value={{
        mapRef,
        setMapRef,
        activeFeature,
        setActiveFeature,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
