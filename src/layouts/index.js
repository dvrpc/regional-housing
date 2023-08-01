import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div
      className="min-h-screen flex px-36"
      style={{ flexDirection: "column" }}
    >
      <Header />
      {children}
    </div>
  );
};

export default Layout;
