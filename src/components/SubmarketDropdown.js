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
      className="absolute right-0 md:right-16 z-[99] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)] m-[0.55rem] border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
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
