require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Prometheus' Ignis`,
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
    // Prismic CMS
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: `prometheus`, // (REQUIRED, replace with your own)
        accessToken: process.env.PRISMIC_KEY, // (optional API access token)
        // path: "/preview", // (optional preview path. Default: /preview)
        // previews: true, // (optional, activated Previews. Default: false)
        // pages: [
        //   {
        //     // (optional, builds pages dynamically)
        //     type: "Articles", // TypeName from prismic
        //     match: "/articles/:uid", // Pages will be generated under this pattern
        //     path: "/articles", // Placeholder page for unpublished documents
        //     component: require.resolve("./src/templates/articles.js"),
        //   },
        // ],
      },
    },

    //PWA Functionailty
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Prometheus' Ignis`,
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
