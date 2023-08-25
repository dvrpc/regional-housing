import React, { createContext, useState } from "react";
import { useRef } from "react";

const AppContext = createContext();
export const AppProvider = (props) => {
  const mapRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <AppContext.Provider
      value={{
        mapRef,
        activeFeature,
        setActiveFeature,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
