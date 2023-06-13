import { Link } from "gatsby";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className="flex">
        <ul className="flex space-x-4" style={{ marginLeft: "auto" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/submarkets">Submarkets</Link>
          </li>
        </ul>
      </header>
      <div className="flex"> {children}</div>
    </>
  );
};

export default Layout;
