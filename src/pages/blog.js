import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "./blog.module.scss"

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
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog</h1>

      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((item, idx) => {
          const { node } = item
          return (
            <li key={idx} className={blogStyles.post}>
              <Link to={`./${node.fields.slug}`}>
                <h2>{node.frontmatter.title}</h2>
                <p>{node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
