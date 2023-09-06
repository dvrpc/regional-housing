const boundaryLayers = [
  {
    id: "county",
    type: "vector",
    url: "https://tiles.dvrpc.org/data/dvrpc-municipal.json",
    promoteId: "geoid",
    layer: {
      id: "county",
      "source-layer": "county",
      type: "line",
      paint: { "line-width": 3, "line-color": "#606569" },
      filter: ["==", "dvrpc", "Yes"],
    },
  },
  {
    id: "phlplanningareas",
    type: "vector",
    url: "https://tiles.dvrpc.org/data/dvrpc-municipal.json",
    promoteId: "geoid",
    layer: {
      id: "phlplanningareas",
      "source-layer": "phlplanningareas",
      type: "fill",
      paint: {
        "fill-color": "transparent",
        "fill-opacity": 1,
        "fill-outline-color": "#777",
      },
    },
  },
  {
    id: "municipalities",
    type: "vector",
    url: "https://tiles.dvrpc.org/data/dvrpc-municipal.json",
    promoteId: "geoid",
    layer: {
      id: "municipalities",
      "source-layer": "municipalities",
      type: "fill",
      paint: {
        "fill-color": "transparent",
        "fill-opacity": 1,
        "fill-outline-color": "#777",
      },
      filter: ["!=", "name", "Philadelphia City"],
    },
  },
];

export { boundaryLayers };
