import React, { useRef } from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";

export default function SubmarketDropdown() {
  const data = useStaticQuery(graphql`
    query DropdownQuery {
      allMarkdownRemark(sort: { frontmatter: { title: ASC } }) {
        edges {
          node {
            frontmatter {
              title
              slug
              hex
            }
          }
        }
      }
    }
  `);
  let {
    allMarkdownRemark: { edges },
  } = data;
  // destructure frontmatter and html from nodes
  edges = useRef(Array.from(edges, ({ node: { frontmatter } }) => frontmatter));

  return (
    <select
      className="absolute right-0 z-[99] bg-white m-2 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
      onChange={(event) => {
        navigate(`/submarkets/${event.target.value}`);
      }}
    >
      <option selected disabled hidden>
        Select a Submarket
      </option>
      {edges.current.map((submarket) => (
        <option value={submarket.slug}> {submarket.title}</option>
      ))}
    </select>
  );
}
