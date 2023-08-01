import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex">{children}</div>
    </>
  );
};

export default Layout;
