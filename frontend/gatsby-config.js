/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,


      {
          resolve: 'gatsby-source-graphql',
            options: {
              typeName: 'DJANGO',
              fieldName: 'django',
              url: 'https://django-gatsby-test2.vercel.app/graphql',
          },
      },

      {
          resolve: `gatsby-source-filesystem`,
          options: {
            // The unique name for each instance
            name: `images`,
            // Path to the directory
            path: `${__dirname}/src/assets/images/`,
          },
      },

        {
          resolve: `gatsby-source-filesystem`,
          options: {
            // The unique name for each instance
            name: `media`,
            // Path to the directory
            path: `${__dirname}/../images/`,
          },
        },



  ],
}
