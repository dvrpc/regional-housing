import React, { createContext, useState } from "react";
import { useRef } from "react";

const AppContext = createContext();
export const AppProvider = (props) => {
  const mapRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(null);
  const [counties, setCounties] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [phlplanningareas, setPhlplanningareas] = useState([]);
  const [submarketFilter, setSubmarketFilter] = useState("");

  return (
    <AppContext.Provider
      value={{
        mapRef,
        activeFeature,
        setActiveFeature,
        counties,
        setCounties,
        municipalities,
        setMunicipalities,
        phlplanningareas,
        setPhlplanningareas,
        submarketFilter,
        setSubmarketFilter,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
