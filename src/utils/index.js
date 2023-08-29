export const titleCase = (str) =>
  str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
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
