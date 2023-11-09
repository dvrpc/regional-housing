import React from "react";
import DVRPC from "../images/dvrpc.svg";
import Hero from "../images/hero.jpg";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import Linkedin from "../images/linkedin.svg";
import Twitter from "../images/twitter.svg";
import Youtube from "../images/youtube.svg";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full">
        <div
          className="p-4 md:px-36 md:py-6 text-center bg-left md:mt-0 bg-cover"
          style={{ backgroundImage: `url(${Hero})` }}
        />
        <div className="p-4 md:py-10 bg-white about-text md:w-1/2 mx-auto">
          <p className="text-xl text-gray-600">
            The market for housing in Greater Philadelphia is complex and
            dynamic. The relative affordability of housing varies significantly
            from one municipality to the next, and sometimes between
            neighborhoods within the same municipality. At the same time, many
            different communities across the region struggle to come up with
            solutions to similar housing problems. DVRPC’s regional housing
            submarket analysis illuminates key aspects of the housing market in
            Greater Philadelphia to foster conversation and collaboration
            between communities experiencing similar challenges.
          </p>
          <div className="text-[#f05a22] text-xl">
            Identifying Housing Submarkets
          </div>
          <p>
            Housing submarkets are a type of economic model that can be used to
            classify neighborhoods based on their housing market conditions.
            Thisanalysis uses a statistical technique known as Latent Profile
            Analysis to sort each census tract in the region into various
            submarkets based on 14 economic and housing stock indicators.
          </p>
          <p>
            After reviewing numerous outputs, a model resulting in eight
            submarkets was selected because it is granular enough to capture key
            distinctions between submarkets, yet general enough to be applied
            across the region. The goal of this analysis was to create a
            resource that could be easily understood by a range of stakeholders,
            including elected officials, government staff, and community
            members. For more information on DVRPC’s methodology, data inputs,
            and data sources, please visit this page.
          </p>
          <p>
            This type of submarket analysis has been conducted by a number of
            regional planning entities around the country and frequently serves
            as a foundation for housing policy conversations and research. As
            part of the preparation for this analysis, the project team spoke
            with staff from MPOs that have pioneered this type of assessment
            about their methods and experiences.
          </p>
          <div className="text-[#f05a22] text-xl">
            Why Take a Regional Approach to Housing Affordability?
          </div>
          <p>
            Conducting this analysis at the regional level is essential because
            the factors and conditions that influence the cost and supply of
            housing do not neatly align with municipal or county boundaries. As
            the results of this analysis show, there is no single market for
            housing in Greater Philadelphia. Instead, DVRPC’s Submarket Analysis
            presents the region as a more complex mosaic of multiple submarkets,
            each with its own dynamics shaping supply and demand. This regional
            perspective is intended to help provide individual municipalities
            with a more comprehensive understanding of the economic and social
            conditions that contribute to their own local housing needs.
          </p>
          <p className="mb-2">
            Furthermore, the region’s housing affordability challenges are
            intertwined with several other other critical cross-jurisdictional
            issues related to transportation, the economy, and the environment.
            As such, achieving better housing outcomes is critical to realizing
            the equity, sustainability, and resiliency goals set in the{" "}
            <a className="underline" href="https://www.dvrpc.org/plan/">
              Long Range Plan
            </a>
            .
          </p>
          <div className="text-[#f05a22] text-xl">Project Background</div>
          <p className="flex md:flex-row flex-col">
            Greater Philadelphia Housing Submarkets was developed as part of
            DVRPC’s Regional Housing Initiative. The Regional Housing Initiative
            is an ongoing research and analysis project designed to identify the
            housing affordability challenges facing our region and evaluate
            potential solutions.
          </p>
          <p>
            More information on this initiative can be found at:{" "}
            <a className="underline" href="">
              www.dvrpc.org/housing/regionalhousinginitiative
            </a>
            .
          </p>
          <p>
            DVRPC is committed to working with all of our planning patterns to
            remove barriers to affordable housing and lower housing costs over
            the long term. Key next steps include working with our partners to
            identify and evaluate strategies that local governments can use to
            increase the supply and variety of housing options based on the
            nature of their housing challenges.
          </p>
          <p>
            For more information about DVRPC’s other housing-related work,
            please visit:
            <br />
            <a className="underline" href="">
              www.dvrpc.org/housing
            </a>
            .
          </p>
        </div>
        <footer>
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

export default AboutPage;
