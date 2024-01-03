import React from "react";
import DVRPC from "../images/dvrpc.svg";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import Linkedin from "../images/linkedin.svg";
import Twitter from "../images/twitter.svg";
import Youtube from "../images/youtube.svg";

const Footer = () => (
  <>
    <div className="text-gray-600 w-full text-center pb-4">
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
          23015
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
          <a className="underline" href="mailto:asvekla@dvrpc.org">
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
    <footer>
      <div className="bg-[#6C9CCD] flex flex-col-reverse md:flex-row p-4 md:px-36 md:py-14 justify-start md:divide-x justify-center w-full items-center md:items-start">
        <span className="w-1/2">
          <a href="https://www.dvrpc.org" target="_blank">
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
          <a href="https://www.dvrpc.org" target="_blank" className="underline">
            www.dvrpc.org
          </a>
          <div className="flex md:flex-row flex-col items-center">
            <span className="font-bold py-1 md:py-0">Connect With Us!</span>
            <span className="flex [&>*]:px-2 divide-x items-center">
              <a
                key="facebook"
                href="https://www.facebook.com/DVRPC"
                label="Facebook"
                target="_blank"
                className="!pl-0 md:!pl-2"
              >
                <img src={Facebook} alt="facebook logo" className="h-4 w-4" />
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
                <img src={Linkedin} alt="linkedin logo" className="h-4 w-4" />
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
  </>
);

export default Footer;
