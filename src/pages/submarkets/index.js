import React, { useContext, useRef } from "react";
import { Link, graphql } from "gatsby";
import AppContext from "../../utils/AppContext";

export default function Submarkets({ data }) {
  const { mapRef } = useContext(AppContext);
  let {
    allMarkdownRemark: { edges },
  } = data;
  // destructure frontmatter and html from nodes
  edges = useRef(Array.from(edges, ({ node: { frontmatter } }) => frontmatter));

  return (
    <div className="my-4">
      <h3 className="text-2xl font-bold mt-4">Submarkets Overview</h3>
      {edges.current.map((submarket) => (
        <div className="flex py-2 items-start" key={submarket.title}>
          <div
            className="p-2.5 mr-2 mt-1"
            style={{ backgroundColor: submarket.hex }}
          />
          <div>
            <Link
              className="text-xl font-bold"
              to={submarket.slug}
              onMouseOver={() =>
                mapRef.current &&
                mapRef.current.setFeatureState(
                  {
                    source: "submarkets",
                    id: submarket.slug,
                  },
                  { hover: true }
                )
              }
              onMouseLeave={() =>
                mapRef.current &&
                mapRef.current.removeFeatureState(
                  {
                    source: "submarkets",
                    id: submarket.slug,
                  },
                  "hover"
                )
              }
            >
              {submarket.title}
            </Link>
            <div className="text-[#5A5A5A]">{submarket.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { frontmatter: { title: ASC } }) {
      edges {
        node {
          frontmatter {
            description
            title
            highlights
            slug
            hex
          }
        }
      }
    }
  }
`;
