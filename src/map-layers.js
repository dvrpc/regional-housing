const boundaryLayers = [
  {
    id: "boundaries",
    type: "vector",
    url: "https://tiles.dvrpc.org/data/dvrpc-municipal.json",
    layer: {
      id: "boundary",
      "source-layer": "county",
      type: "line",
      paint: { "line-width": 3, "line-color": "#606569" },
      filter: ["==", "dvrpc", "Yes"],
    },
  },
  {
    id: "municipalities",
    type: "geojson",
    data: "https://arcgis.dvrpc.org/portal/rest/services/Demographics/Forecast_2015to2050_MCD/FeatureServer/0/query?where=1%3D1&outFields=*&geometryPrecision=6&outSR=4326&f=geojson",
    layer: {
      id: "municipalities",
      type: "fill",
      paint: {
        "fill-color": "transparent",
        "fill-opacity": 1,
        "fill-outline-color": "#777",
      },
    },
  },
];

export { boundaryLayers };
