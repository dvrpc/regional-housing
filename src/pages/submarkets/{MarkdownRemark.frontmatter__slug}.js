import React from "react";
import { graphql } from "gatsby";

export default function Submarket({ data }) {
  const {
    markdownRemark: { frontmatter, html },
  } = data;

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
    <div>
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
        <div className="flex items-center">
          <div className="p-2 m-2 rounded-full border-2 border-[#015ab8]" />
          {frontmatter.title}
        </div>
        <div className="flex items-center">
          <div className="p-2 m-2 rounded-full border-2 border-gray-500" />
          Regional average
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
