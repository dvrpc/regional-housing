import React from "react";
import Hero from "../images/hero.jpg";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Regional Housing - About</title>
      </Helmet>
      <div className="min-h-screen">
        <div className="w-full">
          <div
            className="p-4 md:px-36 md:py-6 text-center bg-left md:mt-0 bg-cover"
            style={{ backgroundImage: `url(${Hero})` }}
          />
          <div className="bg-white about-text mx-auto md:flex px-16 py-8 pb-4">
            <p className="text-2xl md:w-[30%] text-gray-600">
              The market for housing in Greater Philadelphia is complex and
              dynamic. The relative affordability of housing varies
              significantly from one municipality to the next, and sometimes
              between neighborhoods within the same municipality. At the same
              time, many different communities across the region struggle to
              come up with solutions to similar housing problems. DVRPC’s
              regional housing submarket analysis illuminates key aspects of the
              housing market in Greater Philadelphia to foster conversation and
              collaboration between communities experiencing similar challenges.
            </p>
            <span className="md:w-2/3 ml-12">
              <div className="text-[#f05a22] text-xl">
                Identifying Housing Submarkets
              </div>
              <p className="text-gray-600">
                Housing submarkets are a type of economic model that can be used
                to classify neighborhoods based on their housing market
                conditions. This analysis uses a statistical technique known as
                Latent Profile Analysis to sort each census tract in the region
                into various submarkets based on 14 economic and housing stock
                indicators.
              </p>
              <p className="text-gray-600">
                After reviewing numerous outputs, a model resulting in eight
                submarkets was selected because it is granular enough to capture
                key distinctions between submarkets, yet general enough to be
                applied across the region. The goal of this analysis was to
                create a resource that could be easily understood by a range of
                stakeholders, including elected officials, government staff, and
                community members. For more information on DVRPC’s methodology,
                data inputs, and data sources, please visit{" "}
                <a
                  className="underline"
                  target="_blank"
                  href="https://github.com/dvrpc/housing_initiative_submarkets/blob/main/README.md"
                >
                  the project's Github page.
                </a>{" "}
              </p>
              <p className="text-gray-600">
                This type of submarket analysis has been conducted by a number
                of regional planning entities around the country and frequently
                serves as a foundation for housing policy conversations and
                research. As part of the preparation for this analysis, the
                project team spoke with staff from Metropolitan Planning
                Organizations that have pioneered this type of assessment about
                their methods and experiences.
              </p>
              <div className="text-[#f05a22] text-xl">
                Why Take a Regional Approach to Housing Affordability?
              </div>
              <p className="text-gray-600">
                Conducting this analysis at the regional level is essential
                because the factors and conditions that influence the cost and
                supply of housing do not neatly align with municipal or county
                boundaries. As the results of this analysis show, there is no
                single market for housing in Greater Philadelphia. Instead,
                DVRPC’s submarket analysis presents the region as a more complex
                mosaic of multiple submarkets, each with its own dynamics
                shaping supply and demand. This regional perspective is intended
                to help provide individual municipalities with a more
                comprehensive understanding of the economic and social
                conditions that contribute to their own local housing needs.
              </p>
              <p className="mb-2 text-gray-600">
                Furthermore, the region’s housing affordability challenges are
                intertwined with several other other critical
                cross-jurisdictional issues related to transportation, the
                economy, and the environment. As such, achieving better housing
                outcomes is critical to realizing the equity, sustainability,
                and resiliency goals set in the{" "}
                <a
                  className="underline italic"
                  target="_blank"
                  href="https://www.dvrpc.org/plan/"
                >
                  Connections 2050 Long-Range Plan for Greater Philadelphia
                </a>
                .
              </p>
              <div className="text-[#f05a22] text-xl">Project Background</div>
              <p className="text-gray-600">
                <i>Greater Philadelphia Housing Submarkets</i> was developed as
                part of DVRPC’s Regional Housing Initiative. The Regional
                Housing Initiative is an ongoing research and analysis project
                designed to identify the housing affordability challenges facing
                our region and evaluate potential solutions.
              </p>
              <p className="text-gray-600">
                More information on this initiative can be found at:{" "}
                <a
                  className="underline"
                  href="https://www.dvrpc.org/housing/regionalhousinginitiative"
                  target="_blank"
                >
                  www.dvrpc.org/housing/regionalhousinginitiative
                </a>
                .
              </p>
              <p className="text-gray-600">
                DVRPC is committed to working with all of our planning patterns
                to remove barriers to affordable housing and lower housing costs
                over the long term. Key next steps include working with our
                partners to identify and evaluate strategies that local
                governments can use to increase the supply and variety of
                housing options based on the nature of their housing challenges.
              </p>
              <p className="text-gray-600">
                For more information about DVRPC’s other housing-related work,
                please visit:
                <br />
                <a
                  className="underline"
                  href="https://www.dvrpc.org/housing/"
                  target="_blank"
                >
                  www.dvrpc.org/housing
                </a>
                .
              </p>
            </span>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
