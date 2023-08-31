import React from "react";
import { Link } from "gatsby";
import DVRPCMini from "../images/dvrpc-mini.svg";
import Logo from "../images/logo.png";
import Search from "./Search";

const Header = () => {
  return (
    <header className="bg-[#f05a22] text-white flex drop-shadow-lg px-16 h-[15vh] z-[999]">
      <div className="flex items-center">
        <img
          src={DVRPCMini}
          alt="dvrpc logo"
          className="md:h-12 desktop:h-14 opacity-50 mt-4"
        />
        <img
          src={Logo}
          alt="housing submarkets logo"
          className="desktop:h-32 laptop:h-24 mx-24"
        />
      </div>
      <div className="right-0 p-4 md:w-2/5 flex flex-col justify-center absolute">
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
        <Search />
      </div>
    </header>
  );
};

export default Header;
