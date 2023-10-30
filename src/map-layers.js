const boundaryLayers = [
  {
    id: "county",
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

const fillLayer = {
  id: "submarkets",
  type: "geojson",
  data: "https://arcgis.dvrpc.org/portal/rest/services/Planning/regional_housing_submarkets/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&timeReferenceUnknownClient=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=geojson",
  promoteId: "submarket",
  layer: {
    id: "submarkets",
    type: "fill",
    paint: {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "submarket"],
        1,
        "#7F3F98",
        // 127, 63, 152
        2,
        "#A198D1",
        // 161, 152, 209
        3,
        "#019653",
        // 1, 150, 83
        4,
        "#89C653",
        // 137, 198, 83
        5,
        "#F9A13F",
        // 249, 161, 63
        6,
        "#F9CF45",
        // 249, 207, 69
        7,
        "#0159B8",
        // 1, 89, 184
        8,
        "#F98BC9",
        // 249, 139, 201
        9,
        "#ffffff",
      ],
      "fill-opacity": [
        "case",
        ["boolean", ["feature-state", "hover"], false],
        0.4,
        1,
      ],
    },
  },
};

const highlightLayer = {
  id: "highlight-submarkets",
  type: "line",
  paint: {
    "line-color": [
      "interpolate",
      ["linear"],
      ["get", "submarket"],
      1,
      "#7F3F98",
      // 127, 63, 152
      2,
      "#A198D1",
      // 161, 152, 209
      3,
      "#019653",
      // 1, 150, 83
      4,
      "#89C653",
      // 137, 198, 83
      5,
      "#F9A13F",
      // 249, 161, 63
      6,
      "#F9CF45",
      // 249, 207, 69
      7,
      "#0159B8",
      // 1, 89, 184
      8,
      "#F98BC9",
      // 249, 139, 201
      9,
      "#ffffff",
    ],
    "line-width": [
      "case",
      ["boolean", ["feature-state", "hover"], false],
      3,
      0,
    ],
  },
};

export { boundaryLayers, fillLayer, highlightLayer };
