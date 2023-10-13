import React from "react";
import { Link } from "gatsby";
import DVRPCMini from "../images/dvrpc-mini.svg";
import Logo from "../images/logo.png";
import Search from "./Search";

const Menu = ({ isHome }) => {
  return (
    <div className="flex flex-col-reverse md:flex-col md:w-1/2 right-0 p-4 justify-center md:absolute md:pr-16 self-center">
      <ul className="flex md:divide-x justify-end [&>*]:px-2.5 font-bold py-2 flex-col md:flex-row">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/submarkets">Submarkets</Link>
        </li>
      </ul>
      {!isHome && (
        <div className="flex md:flex-row flex-col px-2.5">
          <span className="font-bold my-auto text-right tracking-[2px] md:mr-2 inline-block w-1/3 whitespace-nowrap laptop:text-sm">
            FIND A COMMUNITY:
          </span>
          <Search />
        </div>
      )}
    </div>
  );
};

const Header = ({ isHome }) => {
  return (
    <>
      <header className="bg-[#f05a22] h-[15vh] relative z-[999] w-full md:flex md:text-white md:px-16">
        <div className="flex items-center w-full">
          <div
            className="hamburger p-4 visible md:hidden"
            id="hamburger-1"
            onClick={(e) => {
              if (!e.target.id) {
                e.target.parentElement.classList.toggle("is-active");
              } else {
                e.target.classList.toggle("is-active");
              }
              document
                .querySelector(".mobile-menu")
                .classList.toggle("mobile-menu-open");
            }}
          >
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
          <a className="" href="https://www.dvrpc.org/">
            <img
              src={DVRPCMini}
              alt="dvrpc logo"
              className="h-12 opacity-50 mt-4"
            />
          </a>
          <Link to="/" className="ml-auto md:ml-0">
            <img
              src={Logo}
              alt="housing submarkets logo"
              className="h-20 md:h-24 p-2 md:mx-24 laptop:mx-11"
            />
          </Link>
        </div>
        <span className="desktop-menu flex">
          <Menu isHome={isHome} />
        </span>
      </header>
      <div className="visible md:hidden mobile-menu rounded-b-lg p-4 pt-0">
        <div className="mobile-menu-wrapper">
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Header;
