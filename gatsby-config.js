/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `regional-housing`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  pathPrefix: `/housing/submarkets`,
  plugins: [
    "gatsby-plugin-react-helmet",
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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "DVRPC Regional Housing Application",
        short_name: "Regional Housing",
        start_url: "/",
        icon: "src/images/bug-highres.png",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-9825778-1",
      },
    },
  ],
};
