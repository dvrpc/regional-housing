import React, { useContext } from "react";
import { graphql } from "gatsby";
import MedianViz from "../../components/MedianViz";
import Breadcrumbs from "../../components/Breadcrumbs";
import AppContext from "../../utils/AppContext";
import { useEffect } from "react";
import { Tooltip } from "react-tooltip";

export default function Submarket(props) {
  const { setSubmarketFilter } = useContext(AppContext);
  const {
    serverData: { result },
  } = props;
  const {
    markdownRemark: { frontmatter },
  } = props.data;

  useEffect(() => {
    setSubmarketFilter(frontmatter.slug);
  });

  return (
    <div className="text-[#5A5A5A]">
      <Breadcrumbs path={props.path} params={props.params} />
      <h3
        className="text-2xl my-4 font-bold brightness-75"
        style={{ color: frontmatter.hex }}
      >
        {frontmatter.title}
      </h3>
      <div className="text-lg">{frontmatter.description}</div>
      <ul className="list-disc ml-8 mt-4">
        {frontmatter.highlights.map((highlight) => (
          <li>{highlight}</li>
        ))}
      </ul>
      <h3 className="text-lg mt-6 font-bold text-gray-500">How it Compares</h3>
      <div className="flex justify-end">
        <div className="flex items-center" style={{ color: frontmatter.hex }}>
          <div
            className="p-2 m-2 rounded-full border-2"
            style={{ borderColor: frontmatter.hex }}
          />
          {frontmatter.title}
        </div>
        <div className="flex items-center text-gray-500">
          <div className="p-2 m-2 rounded-full border-2 border-gray-500" />
          Regional average
        </div>
      </div>
      {result && (
        <div className="flex flex-col mt-8 text-sm">
          <div
            data-tooltip-id="median-sales-tooltip"
            className="space-y-8 mb-8"
          >
            <div className="text-gray-500 font-bold block">
              SALES PRICE (2021)
            </div>
            <MedianViz property="med21" result={result} hex={frontmatter.hex} />
          </div>
          <Tooltip
            id="median-sales-tooltip"
            place="bottom"
            className="italic z-[1000]"
          >
            Median single-family home sales price
          </Tooltip>
          <div data-tooltip-id="change-sales-tooltip" className="space-y-8">
            <div className=" text-gray-500 font-bold">
              CHANGE IN PRICE (2016-2021)
            </div>
            <MedianViz
              property="pct_diff"
              result={result}
              hex={frontmatter.hex}
            />
          </div>
          <Tooltip
            id="change-sales-tooltip"
            place="bottom"
            className="italic z-[1000]"
          >
            Percentage change in median single-family home sales price between
            2016 and 2021
          </Tooltip>
          <div data-tooltip-id="median-rent-tooltip" className="space-y-8 mt-8">
            <div className="text-gray-500 font-bold">
              MEDIAN RENT (2016-2020)
            </div>
            <MedianViz
              property="rent_med"
              result={result}
              hex={frontmatter.hex}
            />
          </div>
          <Tooltip
            id="median-rent-tooltip"
            place="bottom"
            className="italic z-[1000]"
          >
            Median monthly gross rent
          </Tooltip>
          {/* <div data-tooltip-id="cost-burden-tooltip" className="space-y-8 mt-8">
            <div className="text-gray-500 font-bold">
              COST BURDEN (2016-2020)
            </div>
            <MedianViz
              type="percent"
              value={result.records[0].rent_med}
              hex={frontmatter.hex}
            />
          </div>
          <Tooltip
            id="cost-burden-tooltip"
            place="bottom"
            className="italic z-[1000]"
          >
            Percentage of households that are paying more than 30 percent of
            their income on housing costs.
          </Tooltip> */}
        </div>
      )}
      <p className="text-right py-4">
        <a
          className="underline italic"
          target="_blank"
          rel="noopener"
          href="https://catalog.dvrpc.org/dataset/regional-housing-submarkets/resource/0cc1c4e2-f2c5-46bf-80aa-929ef6a53cda"
        >
          View the data
        </a>
      </p>
    </div>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        highlights
        indicators
        slug
        hex
      }
    }
  }
`;

export async function getServerData(context) {
  const { frontmatter__slug: id } = context.params;

  try {
    const res = await fetch(
      `https://catalog.dvrpc.org/api/3/action/datastore_search_sql?sql=SELECT * from %220cc1c4e2-f2c5-46bf-80aa-929ef6a53cda%22 WHERE submarket = ${id} OR submarket = 9`
    );

    if (!res.ok) {
      throw new Error("Response failed");
    }

    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
