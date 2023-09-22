import React from "react";
import { Link } from "gatsby";
import DVRPCMini from "../images/dvrpc-mini.svg";
import Logo from "../images/logo.png";
import Search from "./Search";

const Header = () => {
  return (
    <header className="bg-[#f05a22] text-white flex drop-shadow-lg px-16 h-[15vh] z-[999]">
      <div className="flex items-center">
        <a href="https://www.dvrpc.org/">
          <img
            src={DVRPCMini}
            alt="dvrpc logo"
            className="md:h-12 opacity-50 mt-4"
          />
        </a>
        <Link to="/">
          <img
            src={Logo}
            alt="housing submarkets logo"
            className="h-28 p-2 mx-24 laptop:mx-11"
          />
        </Link>
      </div>
      <div className="right-0 p-4 md:w-1/2 flex flex-col justify-center absolute mt-2 pr-16">
        <ul className="flex divide-x justify-end [&>*]:px-2.5 font-bold py-2">
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
        <div className="pr-2.5">
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
