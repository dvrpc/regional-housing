import React, { useContext, useEffect } from "react";
import DVRPCMap from "../components/DVRPCMap";
import Header from "../components/Header";
import AppContext from "../utils/AppContext";

const Layout = (props) => {
  const { county, municipality } = props;
  const { setSubmarketFilter } = useContext(AppContext);
  const isHome = props.pageContext.layout === "home";

  useEffect(() => {
    if (isHome || props.path === "/submarkets/") setSubmarketFilter("");
  }, [isHome, props.path, setSubmarketFilter]);

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
      <Header isHome={isHome} />
      {props.pageContext.layout === "home" ||
      props.pageContext.layout === "about" ? (
        props.children
      ) : (
        <div style={{ height: "85vh" }}>
          <div style={{ width: "100%" }}>
            <DVRPCMap params={{ county, municipality }}>
              {props.children}
            </DVRPCMap>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
