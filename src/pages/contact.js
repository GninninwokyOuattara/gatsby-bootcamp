import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <React.Fragment>
      <Head title="Contact" />

      <Layout>
        <h1>Need to contact me ?</h1>
        <Link to="https://twitter.com/IG_Ouatt">Here you go !</Link>
      </Layout>
    </React.Fragment>
  )
}

export default ContactPage
