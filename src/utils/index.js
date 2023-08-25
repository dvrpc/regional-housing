export const titleCase = (str) =>
  str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
export const kebabCase = (str) => str.toLowerCase().replaceAll(" ", "-");
