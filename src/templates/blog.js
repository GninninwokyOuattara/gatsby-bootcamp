import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

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
    <React.Fragment>
      <Head title={props.data.contentfulBlogPost.title} />

      <Layout>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>

        {documentToReactComponents(
          JSON.parse(props.data.contentfulBlogPost.body.raw),
          options
        )}
      </Layout>
    </React.Fragment>
  )
}

export default Blog
