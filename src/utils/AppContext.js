import React, { createContext, useState } from "react";
import { useEffect, useRef } from "react";

const AppContext = createContext();
export const AppProvider = (props) => {
  const mapRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(null);
  const [counties, setCounties] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [submarketFilter, setSubmarketFilter] = useState("");

  useEffect(() => {
    (async () => {
      const countiesRes = await fetch(
        `https://arcgis.dvrpc.org/portal/rest/services/Boundaries/CountyBoundaries/FeatureServer/0/query?where=dvrpc_reg%20%3D%20'Yes'&outFields=state_name,fips,co_name,dvrpc_reg&outSR=4326&f=geojson`
      );
      let counties = await countiesRes.json();
      const countyMap = {};
      counties = counties.features.map((county) => {
        countyMap[county.properties.fips] = county.properties.co_name;
        return {
          ...county,
          properties: {
            geoid: county.properties.fips,
            name: county.properties.co_name,
            ...county.properties,
          },
        };
      });
      const municipalitiesRes = await fetch(
        `https://arcgis.dvrpc.org/portal/rest/services/Demographics/Census_MCDs_PhiPD_2020/FeatureServer/0/query?where=1%3D1&outFields=geoid,namelsad,geocode,aland&outSR=4326&f=geojson`
      );
      let municipalities = await municipalitiesRes.json();
      municipalities = municipalities.features.reduce((arr, feature) => {
        if (feature.properties.geoid) {
          const county = feature.properties.geoid.substring(0, 5);
          arr.push({
            ...feature,
            properties: {
              ...feature.properties,
              name: feature.properties.namelsad,
              cty: countyMap[county],
            },
          });
        }
        return arr;
      }, []);

      setCounties(counties);
      setMunicipalities(municipalities);
    })();
  }, [setCounties, setMunicipalities]);

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
        submarketFilter,
        setSubmarketFilter,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
