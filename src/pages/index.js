import React from "react";
import Input from "../components/Input";
import DVRPC from "../images/dvrpc.svg";
import Hero from "../images/hero.jpg";
import Search from "../components/Search";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full">
        <div
          className="p-4 md:px-36 md:py-20 text-center bg-left md:mt-0"
          style={{ backgroundImage: `url(${Hero})` }}
        >
          <h1 className="text-[2rem] md:text-5xl font-bold leading-snug text-white">
            A Regional Approach to Housing Affordability
          </h1>
        </div>
        <div className="p-4 md:px-36 md:py-20 text-center border-b-4 border-[#A198D1] bg-white">
          <p className="text-lg md:text-2xl text-[#f05a22] leading-snug md:tracking-wide">
            Municipalities across Greater Philadelphia are confronting a housing
            affordability crisis. DVRPC created the Housing Submarkets tool to
            help local governments better understand the challenges they are
            facing and how we can work together to address them.
          </p>
          <p className="flex flex-col items-center">
            <div className="flex flex-col px-2.5 md:w-2/3">
              <span className="font-bold my-auto w-full text-center tracking-[2px] md:mr-2 inline-block w-1/3 whitespace-nowrap text-[#6C9CCD] text-2xl py-4">
                FIND A COMMUNITY:
              </span>
              <Search />
              <div>
                <span className="font-bold my-auto w-full text-center tracking-[2px] md:mr-2 inline-block w-1/3 whitespace-nowrap text-[#6C9CCD] text-2xl py-4">
                  BROWSE BY COUNTY:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link
                    to="bucks"
                    className="bg-[#f05a22] text-white p-3 rounded-lg font-bold "
                  >
                    Bucks
                  </Link>
                  <Link
                    to="burlington"
                    className="bg-[#f05a22] text-white p-3 rounded-lg font-bold"
                  >
                    Burlington
                  </Link>
                  <Link
                    to="camden"
                    className="bg-[#f05a22] text-white p-3 rounded-lg font-bold"
                  >
                    Camden
                  </Link>
                  <Link
                    to="chester"
                    className="bg-[#f05a22] text-white p-3 rounded-lg font-bold"
                  >
                    Chester
                  </Link>
                  <Link
                    to="delaware"
                    className="bg-[#f05a22] text-white p-3 rounded-lg font-bold"
                  >
                    Delaware
                  </Link>
                  <Link
                    to="gloucester"
                    className="bg-[#f05a22] text-white p-3 rounded-lg font-bold"
                  >
                    Gloucester
                  </Link>
                  <Link
                    to="montgomery"
                    className="bg-[#f05a22] text-white p-3 rounded-lg font-bold"
                  >
                    Montgomery
                  </Link>
                  <Link
                    to="philadelphia"
                    className="bg-[#f05a22] text-white p-3 rounded-lg font-bold"
                  >
                    Philadelphia
                  </Link>
                </div>
              </div>
            </div>
          </p>
        </div>
        <div className="p-4 md:px-36 md:py-20 border-b-4 border-[#A198D1] bg-white">
          <div className="grid md:grid-cols-2 text-[#f05a22] md:space-x-8 space-y-4 md:space-y-0">
            <p>
              <strong className="block text-xl">What is a submarket?</strong>
              DVRPC used a variety of data points and a clustering algorithm to
              sort every census tract in the region into one of eight distinct
              submarkets. Each of these submarkets consists of neighborhoods
              that share similar housing types and market conditions, regardless
              of their location in the region. These characteristics help
              determine who can afford to live in various neighborhoods
              throughout Greater Philadelphia.
            </p>
            <p>
              <strong className="block text-xl">
                How can local governments use this tool?
              </strong>
              This tool is designed to help establish a common understanding of
              complex housing issues and inspire conversations about the ways
              that local governments can improve the variety and affordability
              of housing within their jurisdiction. Municipalities can use this
              targeted information to customize their own housing strategies and
              identify communities around the region with which they share
              similar housing challenges and opportunities.
            </p>
          </div>
        </div>
        <div className="p-4 md:px-36 md:py-20 text-center bg-white">
          <h3 className="font-bold text-lg md:text-2xl text-[#6C9CCD]">
            REACH OUT WITH QUESTIONS, COMMENTS, OR UPDATES
          </h3>
          <form className="flex flex-col md:flex-row my-4">
            <div className="md:w-1/2">
              <span className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </span>
              <Input placeholder="Email" />
            </div>
            <span className="md:w-1/2">
              <textarea
                placeholder="Comments and/or Questions (optional)"
                className="font-normal appearance-none border-2 border-gray-200 rounded-lg w-full h-full py-2 px-4 md:mx-4 focus:outline-none focus:bg-white focus:border-blue-500 my-4 md:my-0"
              />
            </span>
          </form>
        </div>
        <footer className="bg-[#3D78B4] flex flex-col-reverse md:flex-row p-4 md:px-36 md:py-14 justify-start">
          <img
            src={DVRPC}
            alt="dvrpc logo"
            className="h-24 mt-1 object-scale-down"
          />
          <p className="text-white md:ml-24 md:w-1/2 self-start">
            The Delaware Valley Regional Planning Commission is the federally
            designated Metropolitan Planning Organization for the Greater
            Philadelphia region, established by an Interstate Compact between
            the Commonwealth of Pennsylvania and the State of New Jersey.
            Members include Bucks, Chester, Delaware, Montgomery, and
            Philadelphia counties, plus the City of Chester, in Pennsylvania;
            and Burlington, Camden, Gloucester, and Mercer counties, plus the
            cities of Camden and Trenton, in New Jersey.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default IndexPage;
