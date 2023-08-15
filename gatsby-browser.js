import "./src/styles/global.css";
import React from "react";
import IndexPage from "./src/pages";

export const wrapPageElement = ({ element, props }) => {
  if (props.path === "/") return <IndexPage />;
  return <>{element}</>;
};
