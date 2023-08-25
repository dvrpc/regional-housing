import React from "react";
import { graphql } from "gatsby";
import PercentageViz from "../../../components/PercentageViz";
import { titleCase } from "../../../utils/index";

const MunicipalityPage = (props) => {
  const { county, data, municipality } = props;
  // destructure array of submarkets
  const {
    allMarkdownRemark: { edges },
  } = data;
  // build object of submarket properties using submarket id as key
  const submarkets = Object.assign(
    {},
    ...Object.entries({ ...edges }).map(([, b]) => ({
      [parseInt(b.node.frontmatter.slug)]: { ...b.node.frontmatter },
    }))
  );

  const res = {
    help: "https://catalog.dvrpc.org/api/3/action/help_show?name=datastore_search_sql",
    success: true,
    result: {
      sql: "SELECT * from \"66807b47-0d95-4671-913b-0bf8e61d878e\" WHERE geoid ='3400503370'",
      records: [
        {
          _id: 1,
          _full_text: "#full str of json",
          geoid: "3400503370",
          name: "Bass River Township",
          county: "Burlington",
          one: 0,
          two: 0.12,
          three: 0,
          four: 0.27,
          five: 0,
          six: 0,
          seven: 0.61,
          eight: 0,
        },
      ],
      fields: [{ "array of fields from table": "" }],
    },
  };

  return (
    <div>
      <h3 className="text-xl font-bold">
        {titleCase(municipality.replaceAll("-", " "))}
      </h3>
      <PercentageViz
        res={res.result.records[0]}
        submarkets={submarkets}
        title={titleCase(municipality.replaceAll("-", " "))}
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
