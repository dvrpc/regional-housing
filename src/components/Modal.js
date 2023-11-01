import React from "react";
import DVRPC from "../images/dvrpc-blue.svg";

const Modal = ({ isVisible, setIsVisible }) => {
  const display = isVisible ? "visible" : "hidden";

  return (
    <div
      className={`${display} h-full w-full fixed z-[998]`}
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="bg-white rounded fixed md:top-[20%] top-[17%] md:left-[25%] left-[10%] md:w-[50%] w-[80%] h-[75%] overflow-hidden pb-6 md:pb-12">
        <div className="bg-[#0058b9] text-white flex items-center py-4">
          <h2 className="px-4 py-2 text-2xl md:px-12">
            About Housing Submarkets
          </h2>
          <button
            className="ml-auto pr-4 md:pr-12"
            onClick={() => setIsVisible(!isVisible)}
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="overflow-auto h-full p-4 md:p-12 md:pt-4 text-gray-500 about-text">
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
          <div className="text-[#f05a22] text-xl my-2">Project Background</div>
          <p className="flex md:flex-row flex-col pt-4">
            <img
              src={DVRPC}
              alt="dvrpc logo"
              className="h-20 mt-1 object-scale-down pr-10 mb-4 md:mb-0"
            />
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
      </div>
    </div>
  );
};

export default Modal;
