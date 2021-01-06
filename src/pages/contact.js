import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Need to contact me ?</h1>
      <Link to="https://twitter.com/IG_Ouatt">Here you go !</Link>
      <Footer />
    </div>
  )
}

export default ContactPage
