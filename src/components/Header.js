import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <ul className="flex justify-end space-x-6 p-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/submarkets">Submarkets</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
