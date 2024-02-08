import React, { useContext, useEffect } from "react";
import DVRPCMap from "../components/DVRPCMap";
import Header from "../components/Header";
import AppContext from "../utils/AppContext";
import { Helmet } from "react-helmet";
import { titleCase } from "../utils";

const Layout = (props) => {
  const { county, municipality } = props;
  const { setSubmarketFilter } = useContext(AppContext);
  const isHome = props.pageContext.layout === "home";
  let title = "";
  if (!municipality && !county) title = null;
  else title = !municipality ? titleCase(county) : titleCase(municipality);

  useEffect(() => {
    if (isHome || props.path === "/submarkets/") setSubmarketFilter("");
  }, [isHome, props.path, setSubmarketFilter]);

  useEffect(() => {
    const sidebar = document.querySelector("#sidebar");
    if (sidebar) sidebar.scrollTop = 0;
  }, [props.path]);

  return (
    <>
      <Helmet>
        <html lang="en"></html>
        <title>
          {!title ? "Regional Housing" : "Regional Housing - " + title}
        </title>
      </Helmet>
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
    </>
  );
};

export default Layout;
