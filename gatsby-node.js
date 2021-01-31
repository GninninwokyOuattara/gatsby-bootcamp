const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  //retrieve the createPage action from actions
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js") //Path to our blog template

  //awaiting graphql data response
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    //create a new page for each edge
    createPage({
      component: blogTemplate, // the component is our blogTemplate
      path: `/blog/${edge.node.fields.slug}`, //where should the component be located
      context: {
        //context is an object containing stuff we can pass down to that template
        slug: edge.node.fields.slug,
      },
    })
  })
}
