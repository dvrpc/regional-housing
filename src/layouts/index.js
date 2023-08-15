import React from "react";
import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Map, { Source, Layer, NavigationControl } from "react-map-gl";
import { LngLatBounds } from "mapbox-gl";

const Layout = ({ children }) => {
  const mapRef = useRef();
  const maxExtent = new LngLatBounds([
    [-76.22863800000046, 39.20737082851355],
    [-73.61526500000066, 40.68729040007025],
  ]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.resize();
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <link
        href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
        rel="stylesheet"
      />
      <Header />
      <Map
        style={{ height: "85vh" }}
        ursor="pointer"
        initialViewState={maxExtent}
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
          }}
        >
          {children}
        </div>
      </Map>
    </div>
  );
};

export default Layout;
