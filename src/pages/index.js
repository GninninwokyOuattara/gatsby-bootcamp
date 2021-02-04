import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <React.Fragment>
      <Head title="Home" />

      <Layout>
        <h1>Hello</h1>
        <h2>I'm Gninninwoky Ouattara, Learning Gatsby JS right now</h2>
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
