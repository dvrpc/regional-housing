import React from "react";
import { graphql } from "gatsby";
import PercentageViz from "../../components/PercentageViz";
import { titleCase, generateSubmarketObj } from "../../utils";

const CountyPage = (props) => {
  const { county, data, serverData } = props;
  const { result } = serverData;
  const {
    allMarkdownRemark: { edges },
  } = data;
  const submarkets = generateSubmarketObj(edges);

  return (
    <div>
      <h3 className="text-xl font-bold my-4">{titleCase(county)}</h3>
      {result && (
        <PercentageViz
          res={result.records[0]}
          submarkets={submarkets}
          title={titleCase(county)}
        />
      )}
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
