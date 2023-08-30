import React from "react";
import { graphql } from "gatsby";
import MedianViz from "../../components/MedianViz";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function Submarket(props) {
  const {
    markdownRemark: { frontmatter, html },
  } = props.data;

  const res = {
    help: "https://catalog.dvrpc.org/api/3/action/help_show?name=datastore_search_sql",
    success: true,
    result: {
      sql: 'SELECT * from "66807b47-0d95-4671-913b-0bf8e61d878e" WHERE submarket = 1',
      records: [
        {
          _id: 1,
          _full_text: "#full str of json",
          submarket: 1,
          median_sales: 48540,
          price_change: 0.028,
          pct_owner: 0.95,
          pct_subsidized: 0.1,
        },
      ],
      fields: [{ "array of fields from table": "" }],
    },
  };
  const { result } = res;

  return (
    <div className="text-[#5A5A5A]">
      <Breadcrumbs path={props.path} params={props.params} />
      <h3 className="text-2xl my-4 font-bold text-[#015ab8]">
        {frontmatter.title}
      </h3>
      <div className="text-lg">{frontmatter.description}</div>
      <ul className="list-disc ml-8 mt-4">
        {frontmatter.highlights.map((highlight) => (
          <li>{highlight}</li>
        ))}
      </ul>
      <h3 className="text-lg mt-6 font-bold text-[#015ab8]">How it Compares</h3>
      <div className="flex justify-end">
        <div className="flex items-center text-[#015ab8]">
          <div className="p-2 m-2 rounded-full border-2 border-[#015ab8]" />
          {frontmatter.title}
        </div>
        <div className="flex items-center text-gray-500">
          <div className="p-2 m-2 rounded-full border-2 border-gray-500" />
          Regional average
        </div>
      </div>
      <div className="flex flex-col space-y-12 mt-8">
        <div className="grid grid-cols-3">
          <div className="col-span-1 text-gray-500 font-bold">
            MEDIAN SALES PRICE
          </div>
          <MedianViz type="median" value={result.records[0].median_sales} />
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-1 text-gray-500 font-bold">
            CHANGE IN SALES PRICE
          </div>
          <MedianViz type="change" value={result.records[0].price_change} />
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-1 text-gray-500 font-bold">
            PERCENT OWNER-OCCUPIED
          </div>
          <MedianViz type="percent" value={result.records[0].pct_owner} />
        </div>
      </div>
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
      }
    }
  }
`;
