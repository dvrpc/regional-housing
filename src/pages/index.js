import React from "react";
import Input from "../components/Input";
import DVRPC from "../images/dvrpc.svg";
import Hero from "../images/hero.jpg";
import Search from "../components/Search";
import { Link } from "gatsby";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import Linkedin from "../images/linkedin.svg";
import Twitter from "../images/twitter.svg";
import Youtube from "../images/youtube.svg";

const IndexPage = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full">
        <div
          className="p-4 md:px-36 md:py-6 text-center bg-left md:mt-0"
          style={{ backgroundImage: `url(${Hero})` }}
        />
        <div className="p-4 md:px-36 md:py-12 text-center border-b-4 border-[#A198D1] bg-white">
          <h1 className="text-[2rem] md:text-5xl font-bold leading-snug text-[#6C9CCD]">
            A Regional Approach to Housing Affordability
          </h1>
          <p className="text-lg md:text-xl text-[#f05a22] leading-snug md:tracking-wide py-10 md:w-3/4 mx-auto">
            Municipalities across Greater Philadelphia are confronting a housing
            affordability crisis. DVRPC created the Housing Submarkets tool to
            help local governments better understand the challenges they are
            facing and how we can work together to address them.
          </p>
          <p className="flex flex-col items-center">
            <div className="flex flex-col px-2.5 md:w-full">
              <div className="md:flex md:items-center md:pb-14">
                <span className="font-bold my-auto w-full text-center tracking-[2px] md:mr-2 inline-block w-1/3 whitespace-nowrap text-[#6C9CCD] text-2xl py-4 md:w-1/3 md:text-left">
                  FIND A COMMUNITY:
                </span>
                <Search />
              </div>
              <div className="md:flex md:items-center md:w-full md:pb-4">
                <span className="font-bold my-auto w-full text-center tracking-[2px] md:mr-2 inline-block w-1/3 whitespace-nowrap text-[#6C9CCD] text-2xl py-4 md:w-1/3 md:text-left">
                  BROWSE BY COUNTY:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:w-full">
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
        <footer>
          <div className="bg-[#3D78B4] flex flex-col-reverse md:flex-row p-4 md:px-36 md:py-14 justify-start divide-x space-x-4 justify-center">
            <img
              src={DVRPC}
              alt="dvrpc logo"
              className="h-24 mt-1 object-scale-down"
            />
            <p className="text-white md:ml-24 pl-4">
              190 N Independence Mall West
              <br /> 8th Floor
              <br /> Philadelphia PA 19106-1520
              <br /> 215.592.1800
              <br /> www.dvrpc.org
              <div className="flex">
                <span className="font-bold">Connect With Us!</span>
                <span className="flex [&>*]:px-2 divide-x items-center">
                  <a
                    key="facebook"
                    href="https://www.facebook.com/DVRPC"
                    label="Facebook"
                  >
                    <img
                      src={Facebook}
                      alt="facebook logo"
                      className="h-4 w-4"
                    />
                  </a>
                  <a
                    key="twitter"
                    href="https://www.twitter.com/DVRPC"
                    label="Twitter"
                  >
                    <img src={Twitter} alt="twitter logo" className="h-4 w-4" />
                  </a>
                  <a
                    key="instagram"
                    href="https://www.instagram.com/dvrpc/"
                    label="Instagram"
                  >
                    <img
                      src={Instagram}
                      alt="instagram logo"
                      className="h-4 w-4"
                    />
                  </a>
                  <a
                    key="linkedin"
                    href="http://www.linkedin.com/company/delaware-valley-regional-planning-commission"
                    label="LinkedIn"
                  >
                    <img
                      src={Linkedin}
                      alt="linkedin logo"
                      className="h-4 w-4"
                    />
                  </a>
                  <a
                    key="youtube"
                    href="https://www.youtube.com/channel/UCEU8UI5_iGkVypHP93b5jLA"
                    label="YouTube"
                  >
                    <img src={Youtube} alt="youtube logo" className="h-4 w-4" />
                  </a>
                </span>
              </div>
            </p>
          </div>
          <div className="text-[#f05a22] w-full text-center [&>*]:py-2 p-12">
            <p className="font-bold">
              Learn more about housing initiatives at www.dvrpc.org/housing
            </p>
            <p className="italic divide-y">
              Product Number: TEM458 | DVRPC Policies
            </p>
            <p>
              <span className="font-bold">
                Staff Contact: Andrew Svekla, AICP |
                <span className="italic font-normal">
                  {" "}
                  Manager, Office of Smart Growth
                </span>
              </span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default IndexPage;
