import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"
import Head from "../components/head"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <React.Fragment>
      <Head title="Blog" />
      <Layout>
        <Head title="Blog" />
        <h1>Blog</h1>

        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((item, idx) => {
            const { title, slug, publishedDate } = item.node
            return (
              <li key={idx} className={blogStyles.post}>
                <Link to={`./${slug}`}>
                  <h2>{title}</h2>
                  <p>{publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </React.Fragment>
  )
}

export default BlogPage
