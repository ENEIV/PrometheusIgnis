/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Prometheus: Ignis`,
    description: `Equip oneself with the most valuable of all tools, knowledge. Learn from the greatest heros and thinkers throughtout history.`,
    author: `ENEIV.EDS`,
  },
  plugins: [
    // Styles
    `gatsby-plugin-styled-components`,
    // Meta + SEO
    `gatsby-plugin-react-helmet`,
    // FileSystem Sourcing
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // Image + Image Processing
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    //PWA Functionailty
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Prometheus: Ignis`,
        short_name: `Ignis`,
        start_url: `/`,
        display: `minimal-ui`,
        // theme_color: ``,
        // background_color: ``,
        // icon: ``,
      },
    },
  ],
}
