/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `regional-housing`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `submarkets`,
        path: `${__dirname}/src/submarkets-markdown/`,
      },
    },
    `gatsby-plugin-layout`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify`,
  ],
};
