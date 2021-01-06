import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>I'm Gninninwoky Ouattara, Learning Gatsby JS right now</h2>
      <p>
        Need a developper ? <a href="/contact">Contact ME!</a>
      </p>
      <p>
        Need a developper ? <Link to="/contact">Contact ME!</Link>
      </p>
    </div>
  )
}

export default IndexPage
