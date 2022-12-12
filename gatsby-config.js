require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `blog`,
    siteUrl: `https://www.aether.red`
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    {
			resolve: "gatsby-transformer-remark",
			options: {
        plugins: [],
			},
		},
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: process.env.INTEGRATION_TOKEN,
        databaseId: process.env.DATABASE_ID,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
          repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
          customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
          linkResolver: require('./src/utils/linkResolver.js').linkResolver
      },
    }
  ]
};