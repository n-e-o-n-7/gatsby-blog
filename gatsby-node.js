const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const notionTemplate = path.resolve("src/templates/notion.js");

  const result = await graphql(`
    {
      notions: allNotion {
        edges {
          node {
            properties {
              slug {
                value
              }
            }
          }
        }
      }
    }
  `);

  const notions = result.data.notions.edges;

  notions.forEach(({ node }) => {
    const slug = node.properties.slug.value
    if(slug.length === 0) return
    createPage({
      path: slug,
      component: notionTemplate,
      context: {
        slug
      },
    });
  });
};