import "./src/styles/global.css";

import React from "react";
import { AppProvider } from "./src/utils/AppContext";

export const wrapPageElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};
