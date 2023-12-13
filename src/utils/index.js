export const titleCase = (str) =>
  str.replace(/-/g, " ").replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
export const kebabCase = (str) => str.toLowerCase().replaceAll(" ", "-");
export function getBoundingBox(feature) {
  var bounds = {};
  var polygon;
  var latitude;
  var longitude;

  for (var i = 0; i < feature.geometry.coordinates.length; i++) {
    if (feature.geometry.coordinates.length === 1) {
      // Polygon coordinates[0][nodes]
      polygon = feature.geometry.coordinates[0];
    } else {
      // Polygon coordinates[poly][0][nodes]
      polygon = feature.geometry.coordinates[i][0];
    }

    for (var j = 0; j < polygon.length; j++) {
      longitude = polygon[j][0];
      latitude = polygon[j][1];

      bounds.xMin = bounds.xMin < longitude ? bounds.xMin : longitude;
      bounds.xMax = bounds.xMax > longitude ? bounds.xMax : longitude;
      bounds.yMin = bounds.yMin < latitude ? bounds.yMin : latitude;
      bounds.yMax = bounds.yMax > latitude ? bounds.yMax : latitude;
    }
  }

  return bounds;
}

export const reducerFunc = (a, c) => {
  const obj = a.find((obj) => obj.id === c.id);
  if (!obj) {
    a.push(c);
  } else {
    if (obj.geometry.type !== "MultiPolygon")
      obj.geometry.type = "MultiPolygon";
    obj.geometry.coordinates.push(c.geometry.coordinates[0]);
  }
  return a;
};

/**
 * build object of submarket properties using submarket id as key
 */
export const generateSubmarketObj = (edges) =>
  Object.assign(
    { 9: { title: "not covered by any submarket", hex: "#cfd2d9" } },
    ...Object.entries({ ...edges }).map(([, b]) => ({
      [parseInt(b.node.frontmatter.slug)]: { ...b.node.frontmatter },
    }))
  );
