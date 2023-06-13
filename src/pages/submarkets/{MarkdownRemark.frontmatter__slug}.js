import React from "react";
import { graphql } from "gatsby";

export default function Submarket({ data }) {
  return (
    <>
      <div>single submarket</div>
    </>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
