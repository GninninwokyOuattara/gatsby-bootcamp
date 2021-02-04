import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <React.Fragment>
      <Head title="404 Not Found" />

      <Layout>
        <h1>Page not found</h1>
        <p>
          <Link to="/">Head home</Link>
        </p>
      </Layout>
    </React.Fragment>
  )
}

export default NotFound
