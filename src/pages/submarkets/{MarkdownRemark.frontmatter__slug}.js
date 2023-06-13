import React from "react";
import { graphql } from "gatsby";

export default function Submarket({ data }) {
  const {
    markdownRemark: { frontmatter, html },
  } = data;

  return (
    <div className="max-w-5xl mx-auto">
      <h3 className="text-3xl">{frontmatter.title}</h3>
      <h4 className="text-lg">{frontmatter.description}</h4>
      <div className="flex">
        <div className="w-2/3" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="border border-4 p-4 w-1/3">
          <h4 className="text-lg font-bold">Highlights</h4>
          <ul className="list-disc ml-4">
            {frontmatter.highlights.map((highlight) => (
              <li>{highlight}</li>
            ))}
          </ul>
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
