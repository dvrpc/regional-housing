import React from "react";
import { useRef } from "react";
import Header from "../components/Header";
import Map, { Source, Layer } from "react-map-gl";
import { LngLatBounds } from "mapbox-gl";
import { boundaryLayers } from "../map-layers";

const Layout = ({ children }) => {
  const mapRef = useRef();
  const maxExtent = new LngLatBounds([
    [-77.92498363575237, 39.40815950072073],
    [-74.3760451631676, 40.88377285238582],
  ]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <link
        href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
        rel="stylesheet"
      />
      <Header />
      <Map
        style={{ height: "85vh" }}
        cursor="pointer"
        initialViewState={{ bounds: maxExtent }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken="pk.eyJ1IjoibW1vbHRhIiwiYSI6ImNqZDBkMDZhYjJ6YzczNHJ4cno5eTcydnMifQ.RJNJ7s7hBfrJITOBZBdcOA"
        ref={mapRef}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            backgroundColor: "white",
            maxWidth: "30%",
            left: "15%",
            overflow: "auto",
            borderColor: "#f15a21",
            borderWidth: "0 2px 0 2px",
            paddingLeft: "3rem",
            paddingRight: "3rem",
          }}
        >
          {children}
        </div>
        {boundaryLayers.map((source) => {
          const { key, layer, ...props } = source;

          return (
            <Source key={key} {...props}>
              <Layer {...layer} />
            </Source>
          );
        })}
      </Map>
    </div>
  );
};

export default Layout;
