import React, { useRef } from "react";
import { Link, graphql } from "gatsby";

export default function Submarkets({ data }) {
  let {
    allMarkdownRemark: { edges },
  } = data;
  // destructure frontmatter and html from nodes
  edges = useRef(Array.from(edges, ({ node: { frontmatter } }) => frontmatter));

  return (
    <div className="max-w-5xl mx-auto">
      <div className="w-full flex justify-center text-5xl py-12">
        What is a submarket?
      </div>
      <div>
        <h3 className="text-2xl font-bold">Submarkets</h3>
        {edges.current.map((submarket) => (
          <div className="flex py-12">
            <div className="w-full h-72 bg-gray-300 flex items-center justify-center mr-10">
              map
            </div>
            <div>
              <Link
                className="text-2xl underline font-bold"
                to={submarket.slug}
              >
                {submarket.title}
              </Link>
              <div className="text-xl">{submarket.description}</div>
              <div className="text-xl">
                <h3>Highlights</h3>
                <ul className="list-disc ml-8">
                  {submarket.highlights.map((highlight) => (
                    <li>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
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
          }
        }
      }
    }
  }
`;
