import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog</h1>
      {/* <p>Posts will show up here later on.</p> */}

      <ol>
        {data.allMarkdownRemark.edges.map((item, idx) => {
          const { node } = item
          return (
            <li key={idx}>
              <h2>{node.frontmatter.title}</h2>
              <p>{node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
