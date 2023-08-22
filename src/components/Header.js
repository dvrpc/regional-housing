import React from "react";
import { Link } from "gatsby";
import Input from "./Input";
import DVRPCMini from "../images/dvrpc-mini.svg";
import Logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="bg-[#f05a22] text-white flex drop-shadow-lg px-36 h-[15vh] z-[999]">
      <div className="flex items-center">
        <img src={DVRPCMini} alt="dvrpc logo" className="md:h-16 opacity-50" />
        <img
          src={Logo}
          alt="housing submarkets logo"
          className="md:h-28 mx-20"
        />
      </div>
      <div className="ml-auto p-4 md:w-2/5 flex flex-col justify-center">
        <ul className="flex divide-x justify-end [&>*]:px-2.5 font-bold">
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
        <div className="flex pr-2 space-x-4 my-4 items-center">
          <span className="font-bold whitespace-nowrap">FIND A COMMUNITY:</span>
          <Input placeholder="Search by county or municipality" />
        </div>
      </div>
    </header>
  );
};

export default Header;
