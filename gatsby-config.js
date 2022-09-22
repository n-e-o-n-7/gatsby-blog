require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `blog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
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