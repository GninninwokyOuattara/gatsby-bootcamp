import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            fixed(width: 750) {
              src
            }
          }
        }
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const imageID = node.data.target.sys.id
        const {
          fixed: { src },
          title,
        } = props.data.contentfulBlogPost.body.references.find(
          ({ contentful_id: id }) => id === imageID
        )
        return <img src={src} alt={title} />
      },
    },
  }

  console.log(options)
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>

      {documentToReactComponents(
        JSON.parse(props.data.contentfulBlogPost.body.raw),
        options
      )}
    </Layout>
  )
}

export default Blog
