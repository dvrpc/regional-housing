import "./src/styles/global.css";
import React from "react";
import IndexPage from "./src/pages";
import AboutPage from "./src/pages/about";

export const wrapPageElement = ({ element, props }) => {
  if (props.path === "/") return <IndexPage />;
  if (props.path === "/about/") return <AboutPage />;
  return <>{element}</>;
};
