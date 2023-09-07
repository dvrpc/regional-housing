import React from "react";
import { graphql } from "gatsby";
import PercentageViz from "../../../components/PercentageViz";
import { generateSubmarketObj, titleCase } from "../../../utils/index";
import Breadcrumbs from "../../../components/Breadcrumbs";

const MunicipalityPage = (props) => {
  const { data, county, municipality, serverData } = props;
  const { result } = serverData;
  // destructure array of submarkets
  const {
    allMarkdownRemark: { edges },
  } = data;
  const submarkets = generateSubmarketObj(edges);
  console.log(submarkets);

  return (
    <div>
      <Breadcrumbs path={props.path} params={{ county, municipality }} />
      <h3 className="text-xl font-bold my-4">{titleCase(municipality)}</h3>
      <PercentageViz
        res={result.records[0]}
        submarkets={submarkets}
        title={titleCase(municipality)}
      />
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

export default MunicipalityPage;

export async function getServerData(context) {
  const { county, municipality } = context.params;

  try {
    const res = await fetch(
      `https://catalog.dvrpc.org/api/3/action/datastore_search_sql?sql=SELECT * from "f15d2421-0e62-4cfd-ae0f-251a4fe432da" WHERE county ='${titleCase(
        county
      )}' AND name = '${titleCase(municipality)}'`
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
