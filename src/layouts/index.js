import React, { useContext, useEffect, useState } from "react";
import DVRPCMap from "../components/DVRPCMap";
import Header from "../components/Header";
import AppContext from "../utils/AppContext";

const Layout = (props) => {
  const { county, municipality } = props;
  const { setSubmarketFilter } = useContext(AppContext);
  const [overlay, setOverlay] = useState(true);

  useEffect(() => {
    setOverlay(props.path === "/" || props.path === "/about/" ? true : false);
    if (overlay || props.path === "/submarkets/") setSubmarketFilter("");
  }, [props.path, overlay, setOverlay, setSubmarketFilter]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <link
        href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
        rel="stylesheet"
      />
      <Header />
      <div style={{ height: "85vh" }}>
        {overlay ? (
          <div
            style={{
              position: "absolute",
              zIndex: 100,
            }}
          >
            {props.children}
          </div>
        ) : (
          <div style={{ width: "100%" }}>
            <DVRPCMap params={{ county, municipality }}>
              {props.children}
            </DVRPCMap>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
