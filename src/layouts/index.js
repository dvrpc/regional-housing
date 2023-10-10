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

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) sidebar.scrollTop = 0;
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <link
        href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
        rel="stylesheet"
      />
      <Header bool={overlay} />
      <div style={{ height: "85vh" }}>
        {overlay && (
          <div
            style={{
              position: "absolute",
              zIndex: 100,
            }}
          >
            {props.children}
          </div>
        )}
        <div style={{ width: "100%" }}>
          <DVRPCMap params={{ county, municipality }}>
            {!overlay && (
              <div className="sidebar overflow-y-auto h-[35vh] md:h-[85vh] md:w-[35vw] md:float-left">
                <div className="overflow-y-auto h-full bg-white z-[999] p-4 md:px-16 md:py-8 md:border-r-2 border-[#f05a22] top-0">
                  {props.children}
                </div>
              </div>
            )}
          </DVRPCMap>
        </div>
      </div>
    </div>
  );
};

export default Layout;
