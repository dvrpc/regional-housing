import React from "react";
import { Link } from "gatsby";
import Input from "./Input";
import DVRPCMini from "../images/dvrpc-mini.svg";

const Header = () => {
  return (
    <header className="bg-[#f15a21] text-white flex drop-shadow-lg px-36">
      <div className="flex items-center">
        <img src={DVRPCMini} alt="dvrpc logo" className="md:h-16 opacity-50" />
      </div>
      <div className="ml-auto p-4 w-1/3">
        <ul className="flex divide-x justify-end [&>*]:px-6 font-bold">
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
        <div className="flex pr-6 space-x-4 my-4 items-center">
          <span className="font-bold whitespace-nowrap">FIND A COMMUNITY:</span>
          <Input placeholder="Search by county or municipality" />
        </div>
      </div>
    </header>
  );
};

export default Header;
