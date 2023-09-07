export const titleCase = (str) =>
  str.replace(/-/g, " ").replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
export const kebabCase = (str) => str.toLowerCase().replaceAll(" ", "-");
export function getBoundingBox(feature) {
  let bounds = {};
  //Point
  let coords = feature.geometry.coordinates;
  if (["MultiPoint", "LineString"].includes(feature.geometry.type))
    coords = coords.flat();
  else if (["MultiLineString", "Polygon"].includes(feature.geometry.type))
    coords = coords.flat(2);
  else if ("MultiPolygon" === feature.geometry.type) coords = coords.flat(3);

  const [longitude, latitude] = coords;
  bounds.xMin = bounds.xMin < longitude ? bounds.xMin : longitude;
  bounds.xMax = bounds.xMax > longitude ? bounds.xMax : longitude;
  bounds.yMin = bounds.yMin < latitude ? bounds.yMin : latitude;
  bounds.yMax = bounds.yMax > latitude ? bounds.yMax : latitude;

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
    { 9: { title: "not covered by submarket", hex: "#cfd2d9" } },
    ...Object.entries({ ...edges }).map(([, b]) => ({
      [parseInt(b.node.frontmatter.slug)]: { ...b.node.frontmatter },
    }))
  );
