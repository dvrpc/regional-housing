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
          className="p-4 md:px-36 md:py-6 text-center bg-left md:mt-0 bg-cover"
          style={{ backgroundImage: `url(${Hero})` }}
        />
        <div className="p-4 md:px-36 md:py-10 text-center border-b-[2px] border-gray-300 bg-white">
          <h1 className="text-[2rem] md:text-5xl font-bold leading-snug text-[#0058b9]">
            A Regional Approach to Housing Affordability
          </h1>
          <p className="text-lg md:text-xl text-[#f05a22] leading-snug md:tracking-wide py-4 md:w-3/4 mx-auto text-gray-600">
            Municipalities across Greater Philadelphia are confronting a housing
            affordability crisis. DVRPC created the <i>Housing Submarkets</i>{" "}
            tool to help local governments better understand the challenges they
            are facing and how we can work together to address them.
          </p>
          <p className="flex flex-col items-center">
            <div className="flex flex-col px-2.5 md:w-full">
              <div className="md:items-center">
                <span className="font-bold my-auto w-full text-center tracking-[2px] inline-block w-1/3 whitespace-nowrap text-[#0058b9] text-xl py-4 md:w-1/3 md:pt-0">
                  FIND A COMMUNITY
                </span>
                <Search textAlign={"center"} />
              </div>
              <div className="md:items-center md:w-full">
                <span className="font-bold my-auto w-full text-center tracking-[2px] inline-block w-1/3 whitespace-nowrap text-[#0058b9] text-xl py-4 md:w-1/3">
                  BROWSE BY COUNTY
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:w-full">
                  <Link
                    to="/bucks"
                    className="bg-white text-[#f05a22] border-[1px] border-[#f05a22] p-1.5 rounded-lg font-bold hover:bg-[#f05a22] hover:text-white"
                  >
                    Bucks
                  </Link>
                  <Link
                    to="/burlington"
                    className="bg-white text-[#f05a22] border-[1px] border-[#f05a22] p-1.5 rounded-lg font-bold hover:bg-[#f05a22] hover:text-white"
                  >
                    Burlington
                  </Link>
                  <Link
                    to="/camden"
                    className="bg-white text-[#f05a22] border-[1px] border-[#f05a22] p-1.5 rounded-lg font-bold hover:bg-[#f05a22] hover:text-white"
                  >
                    Camden
                  </Link>
                  <Link
                    to="/chester"
                    className="bg-white text-[#f05a22] border-[1px] border-[#f05a22] p-1.5 rounded-lg font-bold hover:bg-[#f05a22] hover:text-white"
                  >
                    Chester
                  </Link>
                  <Link
                    to="/delaware"
                    className="bg-white text-[#f05a22] border-[1px] border-[#f05a22] p-1.5 rounded-lg font-bold hover:bg-[#f05a22] hover:text-white"
                  >
                    Delaware
                  </Link>
                  <Link
                    to="/gloucester"
                    className="bg-white text-[#f05a22] border-[1px] border-[#f05a22] p-1.5 rounded-lg font-bold hover:bg-[#f05a22] hover:text-white"
                  >
                    Gloucester
                  </Link>
                  <Link
                    to="/mercer"
                    className="bg-white text-[#f05a22] border-[1px] border-[#f05a22] p-1.5 rounded-lg font-bold hover:bg-[#f05a22] hover:text-white"
                  >
                    Mercer
                  </Link>
                  <Link
                    to="/montgomery"
                    className="bg-white text-[#f05a22] border-[1px] border-[#f05a22] p-1.5 rounded-lg font-bold hover:bg-[#f05a22] hover:text-white"
                  >
                    Montgomery
                  </Link>
                  <Link
                    to="/philadelphia"
                    className="bg-white text-[#f05a22] border-[1px] border-[#f05a22] p-1.5 rounded-lg font-bold hover:bg-[#f05a22] hover:text-white"
                  >
                    Philadelphia
                  </Link>
                </div>
              </div>
            </div>
          </p>
        </div>
        <div className="p-4 md:px-36 md:py-10 border-b-[2px] border-gray-300 bg-white">
          <div className="grid md:grid-cols-2 text-[#f05a22] md:space-x-12 space-y-4 md:space-y-0">
            <p className="text-gray-600">
              <strong className="block text-xl text-[#f05a22]">
                What is a submarket?
              </strong>
              The submarkets were developed by using a variety of data points
              and a clustering algorithm to sort census tracts in the region
              into one of eight distinct submarkets. Each submarket consists of
              neighborhoods that share similar housing types and market
              conditions, regardless of their location in the region. These
              characteristics help determine who can afford to live in various
              neighborhoods throughout Greater Philadelphia.
            </p>
            <p className="text-gray-600">
              <strong className="block text-xl text-[#f05a22]">
                How can this tool be used?
              </strong>
              Individuals can learn more about the housing conditions found in
              various parts of the region by searching for specific
              municipalities, counties, or Philadelphia Planning Districts from
              this page. Alternatively, users can explore the distribution of
              individual submarkets across the region by clicking on the{" "}
              <Link to="/submarkets" className="font-bold underline italic">
                Submarkets
              </Link>{" "}
              tab above.
              <br />
              <br />
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
        <div className="p-4 md:px-36 md:pt-10 text-center bg-white">
          <h3 className="font-bold text-lg md:text-2xl text-[#0058b9] pb-4 tracking-[2px]">
            QUESTIONS, COMMENTS, OR UPDATES?
          </h3>
          <form className="flex flex-col md:flex-row">
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
                className="font-normal appearance-none border-[1px] border-[#f05a22] rounded-lg w-full h-full py-2 px-4 md:mx-4 focus:outline-none focus:bg-white focus:border-blue-500 my-4 md:my-0 placeholder:text-gray-500 text-gray-500 text-xl placeholder:italic placeholder:text-center"
              />
            </span>
          </form>
        </div>
        <footer>
          <div className="text-[#f05a22] w-full text-center p-10 md:pt-0 py-4">
            <p className="font-bold">
              Learn more about housing initiatives at{" "}
              <a
                className="underline"
                href="https://www.dvrpc.org/housing"
                target="_blank"
              >
                www.dvrpc.org/housing
              </a>
            </p>
            <p className="italic">
              Product Number:{" "}
              <a href="/" className="underline">
                TEM458
              </a>{" "}
              |{" "}
              <a
                className="underline"
                href="https://www.dvrpc.org/policies"
                target="_blank"
              >
                DVRPC Policies
              </a>
            </p>
            <p>
              <span className="font-bold">
                Staff Contact:{" "}
                <a className="underline italic" href="mailto:asvekla@dvrpc.org">
                  Andrew Svekla
                </a>
                , AICP <span className="font-normal">|</span>
                <span className="italic font-normal">
                  {" "}
                  Manager, Office of Smart Growth
                </span>
              </span>
            </p>
          </div>
          <div className="bg-[#0058b9] flex flex-col-reverse md:flex-row p-4 md:px-36 md:py-14 justify-start md:divide-x justify-center w-full items-center md:items-start">
            <span className="w-1/2">
              <a href="https://www.dvrpc.org">
                <img
                  src={DVRPC}
                  alt="dvrpc logo"
                  className="h-24 mt-1 object-scale-down pr-10"
                  align="right"
                />
              </a>
            </span>
            <p className="text-white md:pl-10 text-center md:text-left w-1/2">
              190 N Independence Mall West
              <br /> 8th Floor
              <br /> Philadelphia PA 19106-1520
              <br /> 215.592.1800
              <br />{" "}
              <a
                href="https://www.dvrpc.org"
                target="_blank"
                className="underline"
              >
                www.dvrpc.org
              </a>
              <div className="flex md:flex-row flex-col items-center md:items-start">
                <span className="font-bold py-1 md:py-0">Connect With Us!</span>
                <span className="flex [&>*]:px-2 divide-x items-center">
                  <a
                    key="facebook"
                    href="https://www.facebook.com/DVRPC"
                    label="Facebook"
                    target="_blank"
                    className="!pl-0 md:!pl-2"
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
                    target="_blank"
                  >
                    <img src={Twitter} alt="twitter logo" className="h-4 w-4" />
                  </a>
                  <a
                    key="instagram"
                    href="https://www.instagram.com/dvrpc/"
                    label="Instagram"
                    target="_blank"
                  >
                    <img
                      src={Instagram}
                      alt="instagram logo"
                      className="h-4 w-4"
                      target="_blank"
                    />
                  </a>
                  <a
                    key="linkedin"
                    href="http://www.linkedin.com/company/delaware-valley-regional-planning-commission"
                    label="LinkedIn"
                    target="_blank"
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
                    target="_blank"
                  >
                    <img src={Youtube} alt="youtube logo" className="h-4 w-4" />
                  </a>
                </span>
              </div>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default IndexPage;
