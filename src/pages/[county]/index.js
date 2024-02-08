import React from "react";
import { graphql } from "gatsby";
import PercentageViz from "../../components/PercentageViz";
import { titleCase, generateSubmarketObj } from "../../utils";
import Breadcrumbs from "../../components/Breadcrumbs";

const CountyPage = (props) => {
  const { county, data, serverData } = props;
  const { result } = serverData;
  const {
    allMarkdownRemark: { edges },
  } = data;
  const submarkets = generateSubmarketObj(edges);

  return (
    <div>
      {county && (
        <>
          <Breadcrumbs params={{ county }} />
          <h3 className="text-xl font-bold my-4">{titleCase(county)} County</h3>
          {result && (
            <PercentageViz
              res={result.records[0]}
              submarkets={submarkets}
              title={titleCase(county)}
            />
          )}
        </>
      )}
      <p className="text-right py-4 text-[#5A5A5A]">
        <p className="m-0 italic text-xs">
          Source: The Warren Group, 2021; U.S. Census Bureau, American Community
          Survey 5-Year Estimates, 2016-2020
        </p>
        <a
          className="underline italic"
          target="_blank"
          rel="noopener"
          href="https://catalog.dvrpc.org/dataset/regional-housing-submarkets/resource/f88e8831-7d04-4b41-9c1d-29645cac400c"
        >
          View the data
        </a>
      </p>
    </div>
  );
};

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
            hex
            description
          }
        }
      }
    }
  }
`;

export default CountyPage;

export async function getServerData(context) {
  const { county } = context.params;

  try {
    const res = await fetch(
      `https://catalog.dvrpc.org/api/3/action/datastore_search_sql?sql=SELECT * from "f88e8831-7d04-4b41-9c1d-29645cac400c" WHERE name ='${titleCase(
        county
      )}'`
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
