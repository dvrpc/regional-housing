import React from "react";
import DVRPCMap from "../components/DVRPCMap";
import Header from "../components/Header";

const Layout = (props) => {
  const overlay = props.path === "/" || props.path === "/about/" ? true : false;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <link
        href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
        rel="stylesheet"
      />
      <Header />
      <div style={{ height: "85vh" }}>
        {(props.path === "/" || props.path === "/about/") && (
          <div
            style={{
              position: "absolute",
              width: "100%",
              zIndex: 100,
            }}
          >
            {props.children}
          </div>
        )}
        <DVRPCMap params={props.params}>{!overlay && props.children}</DVRPCMap>
      </div>
    </div>
  );
};

export default Layout;
