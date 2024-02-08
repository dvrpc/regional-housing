/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Regional Housing Application`,
    description:
      "A housing submarket is composed of neighborhoods with similar housing stock and market characteristics. These characteristics play a large role in determining who can move to or remain in suitable housing in that neighborhood. Staff conducted a regional housing submarket analysis that used various data points and a clustering algorithm to identify eight submarkets across Greater Philadelphia. The results of this analysis can be used to identify neighborhoods that share common needs and challenges regardless of geographic location and promote regional dialogue about the policies and strategies that local governments can use to improve the affordability of housing in their communities.",
    author: "Delaware Valley Regional Planning Commission (DVRPC)",
    siteUrl: "https://www.dvrpc.org/housing/submarkets",
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
